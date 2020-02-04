(ns patroclus.main.sniffer-spec
  (:require [cljs.spec.alpha :as s]
            [cljs.core.async.impl.protocols :as proto]
            [cap :refer [Cap]]))

(s/def :options/device string?)

(s/def :options/filter string?)

(s/def :options/match? (s/fspec :args (s/cat :address string?)
                                :ret  boolean?))

(s/def ::options
  (s/keys :req-un [:options/device :options/filter :options/match?]))

(s/def ::channel #(satisfies? proto/ReadPort %))

(s/def ::cap #(instance? Cap %))

(s/def ::component (s/keys :req-un [::channel ::cap]))
