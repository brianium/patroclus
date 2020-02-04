(ns patroclus.renderer.address
  (:require [electron-store :as Store]))

(def store (Store.))

(defn domains []
  (let [items (.get store "addresses")]
    (->> (or items [])
         (array-seq)
         (map #(.-domain %))
         (set))))
