#!/usr/bin/env node
if(typeof Math.imul == "undefined" || (Math.imul(0xffffffff,5) == 0)) {
    Math.imul = function (a, b) {
        var ah  = (a >>> 16) & 0xffff;
        var al = a & 0xffff;
        var bh  = (b >>> 16) & 0xffff;
        var bl = b & 0xffff;
        // the shift by 0 fixes the sign on the high part
        // the final |0 converts the unsigned value into a signed value
        return ((al * bl) + (((ah * bl + al * bh) << 16) >>> 0)|0);
    }
}

var path = require("path");
try {
    require("source-map-support").install();
} catch(err) {
}
require(path.join(path.resolve("."),"cljs-temp","goog","bootstrap","nodejs.js"));
require(path.join(path.resolve("."),"cljs-temp","cljs_deps.js"));
goog.global.CLOSURE_UNCOMPILED_DEFINES = {"figwheel.repl.connect_url":"ws:\/\/localhost:9500\/figwheel-connect?fwprocess=e22f5f&fwbuild=dev","cljs.core._STAR_target_STAR_":"nodejs"};
goog.require("figwheel.core");
goog.require("figwheel.main");
goog.require("figwheel.repl.preload");
goog.require("patroclus.main.core");
goog.require("cljs.nodejscli");
