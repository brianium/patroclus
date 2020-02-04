(ns patroclus.test.runner-cmdline
  (:require [figwheel.main.testing :refer-macros [run-tests-async]]
            [patroclus.main.device-test]))

(defn -main [& args]
  (run-tests-async 10000))
