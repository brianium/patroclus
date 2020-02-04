(ns patroclus.main.address
  "Serves the purpose of creating an 'address' component that handles
  persistence of ip addresses to monitor. Resolves domains to addresses before
  saving them in persistent storage. Also supports clearing all data from persistent
  storage"
  (:require [dns :as dns]
            [electron :refer [ipcMain]]
            [electron-store :as Store]
            [cljs.spec.alpha :as s]
            [cljs.core.async :as async :refer [chan put! <! go-loop]]
            [cljs.core.async.impl.protocols :as proto]
            [patroclus.main.address-spec :as addr]))

(def store (Store.))

(defn- set-item
  "Store data in persistent store"
  [k v]
  (.set store k v)
  v)

(defn- get-item
  "Get data from persistent store"
  [k]
  (.get store k))

(defn- update-item
  [k fn-1]
  (set-item k (fn-1 (get-item k))))

(defn- clear-items []
  (.clear store))

(defn- make-ipc-channel
  "Create a channel that receives messages from ipcMain events"
  [event-name message-id]
  (let [ch (chan)]
    (.on ipcMain event-name
      (fn [_ val]
        (put! ch [message-id val])))
    ch))

(defn- save-domain
  "Save a domain in persistent storage. Resolves the domain to a set of ip addresses and
  stores them"
  [domain]
  (dns/resolve domain "A"
    (fn [err records]
      (when-not err
        (doseq [record records]
          (update-item "addresses"
            #(if-not %
              (clj->js [{:ip record :domain domain}])
              (.concat % (clj->js [{:ip record :domain domain}])))))))))

(defn domain-for
  "Return the domain name for an address"
  [address]
  (some->>
    (get-item "addresses")
    (array-seq)
    (filter #(= address (.-ip %)))
    (first)
    (.-domain)))

(s/fdef domain-for
  :args (s/cat :address string?)
  :ret  (s/nilable string?))

(defn monitored?
  [address]
  (->> (or (get-item "addresses") [])
       (array-seq)
       (some #(= address (.-ip %)))))

(s/fdef monitored?
  :args (s/cat :address string?)
  :ret  (s/nilable boolean?))

(defn start!
  "Start listening for domain messages. Handles resolving domain names to addresses and persisting them
  or clearing all persisted domains. Returns a component type consisting of async
  channels"
  []
  (let [input (async/merge
                [(make-ipc-channel "domains:clear" :domains-clear)
                 (make-ipc-channel "domain:save" :domain-save)])]
    {:input input 
     :channel
     (go-loop []
       (let [[message-id value] (<! input)]
         (case message-id
           :domains-clear (clear-items)
           :domain-save  (save-domain value)))
       (recur))}))

(s/fdef start!
  :ret ::addr/component)
