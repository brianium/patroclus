(ns patroclus.main.device
  "Handles finding the users current device on the network as well
  as using the current device to create a pcap filter to target http traffic"
  (:require [cljs.spec.alpha :as s]
            [cap :refer [Cap]]
            [ip :as ip]
            [patroclus.main.device-spec :as device]))

(defn- find-device-name
  [ip]
  (.findDevice Cap ip))

(defn find-device
  "Find information about the current user's device - such as the device name
  and the current IP address"
  []
  (let [ip (ip/address)]
    {:ip ip
     :name (find-device-name ip)}))

(s/fdef find-device
  :ret ::device/device)

(defn make-filter
  "Make a pcap filter string based on the given device. This filter dictates
  what addresses are sent to Patroclus for inspection. Covers destinations on port 80 and 443 - i.e
  most http traffic."
  [{:keys [ip]}]
  (str "tcp and src host " ip " and dst port 80 or dst port 443"))

(s/fdef make-filter
  :args (s/cat :device ::device/device)
  :ret  string?)
