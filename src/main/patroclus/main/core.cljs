(ns patroclus.main.core
  (:require [electron :refer [BrowserWindow app ipcMain]]
            [sudo-prompt :as sudo]
            [patroclus.config :as config]
            [patroclus.main.sniffer :as sniffer]
            [patroclus.main.address :as addr]
            [patroclus.main.notifier :as notifier]
            [patroclus.main.device :as device]
            [patroclus.main.tray :as tray]))

(defn create-window
  [index]
  (let [win (BrowserWindow. (clj->js {:webPreferences {:nodeIntegration true}
                                      :show           false
                                      :fullscreenable false
                                      :resizable      false
                                      :width          355}))]
    (doto win
      (.loadFile index)
      (.setMenu nil)
      (.once "ready-to-show" #(.show win)))))

(defn prompt-permissions!
  [ready-fn]
  (.exec sudo "chmod o+r /dev/bpf*" #js {:name "Patroclus" :icns config/icns}
    (fn [err]
      (when err
        (.quit app))
      (ready-fn))))

(defn start []
  (prompt-permissions!
    (fn []
      (let [device   (device/find-device)
            sniffer  (sniffer/start! {:match? addr/monitored?
                                      :filter (device/make-filter device)
                                      :device (:name device)})
            addr     (addr/start!)
            notifier (notifier/start! sniffer {:interval config/notification-interval})]
                           (tray/start!
                             app
                             ipcMain
                             #(create-window config/index-html))
                           (.on app "window-all-closed" #(identity true)) ;; prevent app from quitting on this event
                           (when config/test-html
                             (create-window config/test-html))))))

(.on app "ready" start)
