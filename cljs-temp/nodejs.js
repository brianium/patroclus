// Compiled by ClojureScript 1.10.597 {:target :nodejs}
goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
(cljs.core._STAR_print_newline_STAR_ = false);

cljs.core.set_print_fn_BANG_.call(null,(function() { 
var G__10882__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__10882 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10883__i = 0, G__10883__a = new Array(arguments.length -  0);
while (G__10883__i < G__10883__a.length) {G__10883__a[G__10883__i] = arguments[G__10883__i + 0]; ++G__10883__i;}
  args = new cljs.core.IndexedSeq(G__10883__a,0,null);
} 
return G__10882__delegate.call(this,args);};
G__10882.cljs$lang$maxFixedArity = 0;
G__10882.cljs$lang$applyTo = (function (arglist__10884){
var args = cljs.core.seq(arglist__10884);
return G__10882__delegate(args);
});
G__10882.cljs$core$IFn$_invoke$arity$variadic = G__10882__delegate;
return G__10882;
})()
);

cljs.core.set_print_err_fn_BANG_.call(null,(function() { 
var G__10885__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__10885 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10886__i = 0, G__10886__a = new Array(arguments.length -  0);
while (G__10886__i < G__10886__a.length) {G__10886__a[G__10886__i] = arguments[G__10886__i + 0]; ++G__10886__i;}
  args = new cljs.core.IndexedSeq(G__10886__a,0,null);
} 
return G__10885__delegate.call(this,args);};
G__10885.cljs$lang$maxFixedArity = 0;
G__10885.cljs$lang$applyTo = (function (arglist__10887){
var args = cljs.core.seq(arglist__10887);
return G__10885__delegate(args);
});
G__10885.cljs$core$IFn$_invoke$arity$variadic = G__10885__delegate;
return G__10885;
})()
);

return null;
});

//# sourceMappingURL=nodejs.js.map
