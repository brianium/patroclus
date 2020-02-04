(ns patroclus.main.device-test
  (:require [cljs.test :refer-macros [deftest is]]
            [patroclus.main.device :as device]))

(deftest test-find-device
  (let [device (device/find-device)]
    (is (string? (:ip device)))
    (is (string? (:name device)))))
