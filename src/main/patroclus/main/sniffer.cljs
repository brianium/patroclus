(ns patroclus.main.sniffer
  "Supports creating a stream of outbound addresses on the connected network
  for a given criteria. This component is the HEART of Patroclus"
  (:require [cljs.core.async :refer [chan put! close!]]
            [cljs.spec.alpha :as s]
            [cljs.core.async.impl.protocols :as proto]
            [cap :refer [Cap decoders PROTOCOL]]
            [patroclus.main.sniffer-spec :as sniffer]))

(def PROTOCOL (.-PROTOCOL decoders))

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
  "Handle TCP packets. When the given match? predicate returns true,
  an :address message will be sent on the given channel"
  [packet ch match?]
  (let [addr (destination packet)]
    (when (match? addr)
      (put! ch [:address-match addr]))))

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

(defn channel
  [component]
  (:channel component))

(s/fdef channel
  :arg (s/cat :component ::component)
  :ret ::sniffer/channel)

(defn start!
  "Start listening for packet events using the given pcap filter, device (such as en0), and
  a match? function to determine what addresses are sent to the channel returned by this function."
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
  :args (s/cat :options ::sniffer/options)
  :ret  ::sniffer/component)

