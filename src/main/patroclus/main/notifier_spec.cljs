(ns patroclus.main.notifier-spec
  (:require [cljs.spec.alpha :as s]
            [cljs.core.async.impl.protocols :as proto]))

(s/def ::notifier #(satisfies? proto/ReadPort %))

(s/def ::milliseconds int?)

(s/def :options/interval ::milliseconds)

(s/def ::options (s/keys :req-un [:options/interval]))

