(ns patroclus.config)

(def path (js/require "path"))

(def index-html "resources/index-dev.html")

(def test-html "resources/test.html")

(def tray-icon
  (.resolve path (js* "__dirname") "../../resources/patroclus-ico.png"))

(def notification-interval (* 1000 30))
