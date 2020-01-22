// Compiled by ClojureScript 1.10.597 {:target :nodejs}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__8646__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__8646 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8647__i = 0, G__8647__a = new Array(arguments.length -  0);
while (G__8647__i < G__8647__a.length) {G__8647__a[G__8647__i] = arguments[G__8647__i + 0]; ++G__8647__i;}
  args = new cljs.core.IndexedSeq(G__8647__a,0,null);
} 
return G__8646__delegate.call(this,args);};
G__8646.cljs$lang$maxFixedArity = 0;
G__8646.cljs$lang$applyTo = (function (arglist__8648){
var args = cljs.core.seq(arglist__8648);
return G__8646__delegate(args);
});
G__8646.cljs$core$IFn$_invoke$arity$variadic = G__8646__delegate;
return G__8646;
})()
);

(o.error = (function() { 
var G__8649__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__8649 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8650__i = 0, G__8650__a = new Array(arguments.length -  0);
while (G__8650__i < G__8650__a.length) {G__8650__a[G__8650__i] = arguments[G__8650__i + 0]; ++G__8650__i;}
  args = new cljs.core.IndexedSeq(G__8650__a,0,null);
} 
return G__8649__delegate.call(this,args);};
G__8649.cljs$lang$maxFixedArity = 0;
G__8649.cljs$lang$applyTo = (function (arglist__8651){
var args = cljs.core.seq(arglist__8651);
return G__8649__delegate(args);
});
G__8649.cljs$core$IFn$_invoke$arity$variadic = G__8649__delegate;
return G__8649;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=debug.js.map
