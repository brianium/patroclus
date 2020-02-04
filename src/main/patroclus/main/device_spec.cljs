(ns patroclus.main.device-spec
  (:require [cljs.spec.alpha :as s]))

(s/def ::ip string?) ;;; @todo make a proper ip spec

(s/def ::name string?)

(s/def ::device (s/keys :req-un [::ip ::name]))

