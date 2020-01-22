(ns patroclus.test.runner-visual
  (:require [cljs-test-display.core]
            [figwheel.main.testing :refer-macros [run-tests]]
            [patroclus.renderer.arithmetic-test]
            [patroclus.main.arithmetic-test]))

(run-tests (cljs-test-display.core/init!))
