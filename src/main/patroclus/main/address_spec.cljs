(ns patroclus.main.address-spec
  (:require [cljs.spec.alpha :as s]
            [cljs.core.async.impl.protocols :as proto]))

(s/def ::input #(satisfies? proto/ReadPort %))

(s/def ::channel ::input)

(s/def ::component (s/keys :req-un [::input ::channel]))
