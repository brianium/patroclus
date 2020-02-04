(ns patroclus.main.tray
  "Handles creating Patroclus' tray functionality"
  (:require [patroclus.config :as config]
            [electron :refer [Tray Menu]]))

(defonce *tray (atom nil))

(defn create-menu
  [on-click app]
  (.buildFromTemplate Menu
    (array
      #js {:label "Configure domains"
           :type  "normal"
           :click on-click}
      
      #js {:type "separator"}

      #js {:label "Quit Patroclus"
           :type "normal"
           :click #(.quit app)})))

(defn create-tray!
  "Create the tray object and context menu"
  [on-configure app]
  (when (nil? @*tray)
    (reset! *tray
      (doto (Tray. config/tray-icon)
        (.setContextMenu (create-menu on-configure app))))))

(defn remove-tray! []
  (when @*tray
    (.destroy @*tray)
    (reset! *tray nil)))

(defn start!
  "Start the tray component and listen for relevent events"
  [app ipc-main on-configure]
  (create-tray! on-configure app)
  (.on ipc-main "remove-tray" remove-tray!))

(defn stop!
  "Stop the tray component and listen for relevant events"
  [app ipc-main]
  (.off ipc-main "remove-tray" remove-tray!)
  (remove-tray!))
