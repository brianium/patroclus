(ns patroclus.main.notifier
  "Creates a notifier component responsible for sending notifications for
  addresses that match the users configured set of domains."
  (:require [cljs.spec.alpha :as s]
            [clojure.string :as string]
            [cljs.core.async :refer [go-loop <! close!]]
            [cljs.core.async.impl.protocols :as proto]
            [electron :refer [Notification]]
            [patroclus.config :as config]
            [patroclus.main.sniffer-spec :as sniffer]
            [patroclus.main.address :as addr]
            [patroclus.main.notifier-spec :as notifier]))

(def titles
  ["Ho there!"
   "Dear Friend!"
   "Avert your eyes!"
   "You don't need this!"
   "You're too good for this!"])

(defn- title []
  (rand-nth titles))

(def messages
  ["The pleasures of <domain> are fleeting. Seek your glory on the battlefield!"
   "Depart from <domain> dear friend. There is work to be done!"
   "You crave divertisement. I beseech you to earn it!"
   "<domain> shall break upon my spear!"
   "My dearest friend, you will not find what you are looking for at <domain>"])

(defn message
  [domain]
  (-> (rand-nth messages)
      (string/replace #"<domain>" domain)))

(defn notify
  "Send a notification via node-notifier"
  [options]
  (doto (Notification. (clj->js options))
    (.show)))

(defn start!
  "Waits for messages from the given sniffer (indicating a matched domain) and sends
  a notification from Patroclus. "
  [sniffer options]
  (let [*domains (atom #{})]
    (go-loop []
      (let [[message-id address] (<! (:channel sniffer))
            domain               (addr/domain-for address)]
        (when-not (or (nil? message-id) (contains? @*domains domain))
          (swap! *domains conj domain)
          (js/setTimeout #(swap! *domains disj domain) (:interval options))
          (notify {:title (title)
                   :body  (message domain)
                   :sound "Purr"})))
      (recur))))

(s/fdef start!
  :args (s/cat :sniffer ::sniffer/component :options ::options)
  :ret  ::notifier/notifier)
