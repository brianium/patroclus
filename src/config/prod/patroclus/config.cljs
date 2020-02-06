(ns patroclus.config)

(def path (js/require "path"))

(def index-html "resources/index.html")

(def test-html false)

(def tray-icon
  (.resolve path (js* "__dirname") "../../app/resources/patroclus-ico.png"))

(def icns
  (.resolve path (js* "__dirname") "../../app/resources/Patroclus.icns"))

(def notification-interval (* 1000 60 10))
