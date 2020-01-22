(ns patroclus.main.sniffer
  "Supports creating a stream of outbound addresses on the connected network
  for a given criteria."
  (:require [cljs.core.async :refer [chan >! close! go-loop <! go]]
            [cljs.spec.alpha :as s]
            [cljs.core.async.impl.channels :as impl]))

(def cap (js/require "cap"))
(def Cap (.-Cap cap))
(def decoders (.-decoders cap))
(def PROTOCOL (.-PROTOCOL decoders))

;;; Options for start!

(s/def :options/device string?)
(s/def :options/filter string?)
(s/def :options/match? (s/fspec :args (s/cat :address string?)
                                :ret  boolean?))
(s/def ::options (s/keys :req-un [:options/device :options/filter :options/match?]))

;;; Component type

(s/def :component/channel #(satisfies? impl/ReadPort %))
(s/def :component/cap #(instance? Cap %))
(s/def ::component (s/keys :req-un [:component/channel :component/cap]))

(defn- decode-ethernet
  "Return a packet object created by the cap ethernet decoder"
  [buffer]
  (.Ethernet decoders buffer))

(defn decode-ipv4
  "Return a packet object created by the cap ipv4 decoder"
  [buffer offset]
  (.IPV4 decoders buffer offset))

(defn- packet-type
  "Get the type of the packet as compared to caps PROTOCOL enum"
  [packet]
  (.. packet -info -type))

(defn- destination
  "Get the destination of the packet"
  [packet]
  (.. packet -info -dstaddr))

(defn- ipv4?
  "Check if the packet is an ipv4 packet"
  [packet]
  (= (packet-type packet)  (.. PROTOCOL -ETHERNET -IPV4)))

(defn- tcp?
  "Does the packet represent a TCP packet?"
  [packet]
  (= (.. packet -info -protocol) (.. PROTOCOL -IP -TCP)))

(defn- handle-tcp
  "Handle TCP packets"
  [packet ch match?]
  (let [addr (destination packet)]
    (when (match? addr)
      (go
        (>! ch addr)))))

(defn- handle-ipv4
  "Handle ipv4 packets"
  [packet buffer ch match?]
  (when (tcp? packet)
    (handle-tcp packet ch match?)))

(defn- handle-ethernet
  "Handle ethernet packets"
  [packet buffer ch match?]
  (when (ipv4? packet)
    (-> buffer
        (decode-ipv4 (.-offset packet))
        (handle-ipv4 buffer ch match?))))

(defn- packet-handler
  "Create a handler for packet events"
  [link-type buffer ch match?]
  (fn []
    (when (= link-type "ETHERNET")
      (-> buffer
          decode-ethernet
          (handle-ethernet buffer ch match?)))))

(defn start!
  "Start listening for packet events using the given pcap filter, device (such as en0), and
  a match? function to determine what addresses are sent to the channel returned by thihs function."
  [{:keys [match? filter device]}]
  (let [c           (Cap.)
        buffer-size (* 10 1024 1024)
        buffer      (.alloc js/Buffer 65535)
        ch          (chan)
        link-type   (.open c device filter buffer-size buffer)]
    (.on c "packet" (packet-handler link-type buffer ch match?))
    {:channel ch
     :cap     c}))

(s/fdef start!
  :args (s/cat :options ::options)
  :ret  ::component)

(defn stop!
  "Stop listening for packet events and close the associated channel"
  [{:keys [channel cap]}]
  (.close cap)
  (close! channel))

(s/fdef stop!
  :args (s/cat :component ::component)
  :ret any?)

