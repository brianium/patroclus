(ns patroclus.renderer.core
  (:require [reagent.core :as r]
            [herb.core :refer [<class]]
            [clojure.string :as string]
            [electron :refer [ipcRenderer]]
            [patroclus.renderer.address :as addr]
            [clojure.string :as str]))

(def color-primary "#3D5ECC")

(def heading-font "Righteous, cursive")

(def text-font "'Noto Serif SC', serif")

(defn send
  ([event-name value]
   (.send ipcRenderer event-name value))
  ([event-name]
   (.send ipcRenderer event-name)))

(defn button-style []
  ^{:pseudo {:hover {:background-color color-primary
                     :color "#fff"}}}
  {:background "white"
   :border (str "1px solid " color-primary)
   :border-radius "4px"
   :color color-primary
   :cursor "pointer"
   :display "block"
   :font-family text-font
   :font-size "18px"
   :margin-top "25px"
   :padding "5px 26px"
   :text-transform "uppercase"})

(defn button
  [props text]
  [:button (merge props {:class (<class button-style)}) text])

(defn heading-style []
  {:color color-primary
   :font-family heading-font
   :font-weight 100})

(defn heading
  [text]
  [:h1 {:class (<class heading-style)} text])

(defn config-section-style []
  {:font-family text-font})

(defn text-area-style []
  {:font-family text-font})

(defonce *state (r/atom {:domains (str/join "\n" (addr/domains))}))

(defn update-domains
  [domains]
  (swap! *state assoc :domains domains))

(defn on-domains-change
  [evt]
  (-> (.. evt -target -value)
      (update-domains)))

(defn save-domains'
  [domains]
  (doseq [domain domains]
    (send "domain:save" domain)))

(defn save-domains
  [domains]
  (send "domains:clear")
  (->> (string/split domains "\n")
       (save-domains')))

(defn on-config-submit
  [evt]
  (.preventDefault evt)
  (save-domains (:domains @*state)))

(defn config-screen
  []
  (let [state @*state]
    [:section {:class (<class config-section-style)}
     [heading "Domains"]
     [:p "Enter one domain per line"]
     [:form {:on-submit on-config-submit}
      [:textarea
       {:class       (<class text-area-style)
        :rows        10
        :cols        53
        :on-change   on-domains-change
        :value       (:domains state)
        :placeholder "reddit.com\nyoutube.com\nfacebook.com"}]
      [button {:type "submit"} "Save"]]]))

(defn start []
  (r/render [config-screen]
            (js/document.getElementById "app")))

(start)
