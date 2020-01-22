(ns main.patroclus.main.sniffer
  (:require [cljs.core.async :refer [chan >! close! go-loop <!]]
            [cljs.spec.alpha :as s]))

(def ip (js/require "ip"))
(def cap (js/require "cap"))
(def Cap (.-Cap cap))
(def decoders (.-decoders cap))
(def PROTOCOL (.-PROTOCOL decoders))

(s/def :options/device string?)
(s/def :options/filter string?)
(s/def :options/match? fn?)

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
  [packet]
  (= (.. packet -info -protocol) (.. PROTOCOL -IP -TCP)))

(defn- handle-tcp
  "Handle TCP packets"
  [packet ch match?]
  (let [addr (destination packet)]
    (when (match? addr)
      (>! ch addr))))

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
  [{:keys [match? filter device]}]
  (let [c           (Cap.)
        buffer-size (* 10 1024 1024)
        buffer      (.alloc js/Buffer 65535)
        ch          (chan)
        link-type   (.open c device filter buffer-size buffer)]
    (.on c "packet" (packet-handler link-type buffer ch match?))
    {:channel ch
     :cap     c}))

(defn stop!
  [{:keys [channel cap]}]
  (.close cap)
  (close! channel))

(def component
  (start!
    {:filter (str "tcp and src host " (.address ip) " and dst port 80 or dst port 443")
     :device "en0"
     :match? (fn [addr] true)}))

(go-loop []
  (let [v (<! (:channel component))]
    (println v)
    (recur)))
