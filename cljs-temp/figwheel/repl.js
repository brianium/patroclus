// Compiled by ClojureScript 1.10.597 {:target :nodejs}
goog.provide('figwheel.repl');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.object');
goog.require('goog.storage.mechanism.mechanismfactory');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.net.jsloader');
goog.require('goog.net.XhrIo');
goog.require('goog.log');
goog.require('goog.array');
goog.require('goog.json');
goog.require('goog.html.legacyconversions');
goog.require('goog.userAgent.product');
goog.require('goog.net.WebSocket');
goog.require('goog.debug.Console');
goog.require('goog.Uri.QueryData');
goog.require('goog.Promise');
goog.require('goog.storage.mechanism.HTML5SessionStorage');
figwheel.repl.default_port = (9500);
if((typeof figwheel !== 'undefined') && (typeof figwheel.repl !== 'undefined') && (typeof figwheel.repl.logger !== 'undefined')){
} else {
figwheel.repl.logger = goog.log.getLogger("Figwheel REPL");
}

figwheel.repl.console_logging = (function figwheel$repl$console_logging(){
if(cljs.core.truth_(goog.object.get(goog.debug.Console,"instance"))){
} else {
var c_10700 = (new goog.debug.Console());
var G__10612_10701 = c_10700.getFormatter();
goog.object.set(G__10612_10701,"showAbsoluteTime",false);

goog.object.set(G__10612_10701,"showRelativeTime",false);


goog.object.set(goog.debug.Console,"instance",c_10700);

}

var temp__5735__auto__ = goog.object.get(goog.debug.Console,"instance");
if(cljs.core.truth_(temp__5735__auto__)){
var console_instance = temp__5735__auto__;
console_instance.setCapturing(true);

return true;
} else {
return null;
}
});
goog.exportSymbol('figwheel.repl.console_logging', figwheel.repl.console_logging);

if((typeof figwheel !== 'undefined') && (typeof figwheel.repl !== 'undefined') && (typeof figwheel.repl.log_console !== 'undefined')){
} else {
figwheel.repl.log_console = figwheel.repl.console_logging.call(null);
}

figwheel.repl.debug = (function figwheel$repl$debug(msg){
return goog.log.log(figwheel.repl.logger,goog.debug.Logger.Level.FINEST,msg);
});


figwheel.repl.unprovide_BANG_ = (function figwheel$repl$unprovide_BANG_(ns){
var path = goog.object.get(goog.dependencies_.nameToPath,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});

figwheel.repl.figwheel_require = (function figwheel$repl$figwheel_require(src,reload){
(goog.require = figwheel.repl.figwheel_require);

if(cljs.core._EQ_.call(null,reload,"reload-all")){
(goog.cljsReloadAll_ = true);
} else {
}

if(cljs.core.truth_((function (){var or__4185__auto__ = reload;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return goog.cljsReloadAll_;
}
})())){
figwheel.repl.unprovide_BANG_.call(null,src);
} else {
}

var res = goog.require_figwheel_backup_(src);
if(cljs.core._EQ_.call(null,reload,"reload-all")){
(goog.cljsReloadAll_ = false);
} else {
}

return res;
});

/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.repl.bootstrap_goog_base = (function figwheel$repl$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
if(cljs.core.truth_(goog.require_figwheel_backup_)){
} else {
(goog.require_figwheel_backup_ = (function (){var or__4185__auto__ = goog.require__;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return goog.require;
}
})());
}

(goog.isProvided_ = (function (name){
return false;
}));

if((((typeof cljs !== 'undefined')) && ((typeof cljs !== 'undefined') && (typeof cljs.user !== 'undefined')))){
} else {
goog.constructNamespace_("cljs.user");
}

(goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.repl.queued_file_reload);

return (goog.require = figwheel.repl.figwheel_require);
}
});

figwheel.repl.patch_goog_base = (function figwheel$repl$patch_goog_base(){
if((typeof figwheel !== 'undefined') && (typeof figwheel.repl !== 'undefined') && (typeof figwheel.repl.bootstrapped_cljs !== 'undefined')){
return null;
} else {
return (
figwheel.repl.bootstrapped_cljs = (function (){
figwheel.repl.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});

figwheel.repl.add_cache_buster = (function figwheel$repl$add_cache_buster(url){
return goog.Uri.parse(url).makeUnique();
});

figwheel.repl.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__10600_SHARP_,p2__10601_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__10600_SHARP_)),p2__10601_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__10602_SHARP_,p2__10603_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__10602_SHARP_),p2__10603_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));

figwheel.repl.reload_file_in_html_env = (function figwheel$repl$reload_file_in_html_env(request_url,callback){
if(typeof request_url === 'string'){
} else {
throw (new Error("Assert failed: (string? request-url)"));
}

if((!((callback == null)))){
} else {
throw (new Error("Assert failed: (not (nil? callback))"));
}

var G__10613 = figwheel.repl.gloader.call(null,figwheel.repl.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__10613.addCallback((function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
}));

G__10613.addErrback((function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
}));

return G__10613;
});

figwheel.repl.write_script_tag_import = figwheel.repl.reload_file_in_html_env;
goog.exportSymbol('figwheel.repl.write_script_tag_import', figwheel.repl.write_script_tag_import);

figwheel.repl.worker_import_script = (function figwheel$repl$worker_import_script(request_url,callback){
if(typeof request_url === 'string'){
} else {
throw (new Error("Assert failed: (string? request-url)"));
}

if((!((callback == null)))){
} else {
throw (new Error("Assert failed: (not (nil? callback))"));
}

return callback.call(null,(function (){try{self.importScripts(figwheel.repl.add_cache_buster.call(null,request_url));

return true;
}catch (e10614){if((e10614 instanceof Error)){
var e = e10614;
goog.log.error(figwheel.repl.logger,["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

goog.log.error(figwheel.repl.logger,e);

return false;
} else {
throw e10614;

}
}})());
});
goog.exportSymbol('figwheel.repl.worker_import_script', figwheel.repl.worker_import_script);

figwheel.repl.create_node_script_import_fn = (function figwheel$repl$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,(function (v,k,o){
return goog.string.endsWith(k,util_pattern);
}));
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return (function (request_url,callback){
if(typeof request_url === 'string'){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((!((callback == null)))),"\n","(string? request-url)"].join('')));
}

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e10615){if((e10615 instanceof Error)){
var e = e10615;
goog.log.error(figwheel.repl.logger,["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

goog.log.error(figwheel.repl.logger,e);

return false;
} else {
throw e10615;

}
}})());
});
});
goog.exportSymbol('figwheel.repl.create_node_script_import_fn', figwheel.repl.create_node_script_import_fn);

figwheel.repl.host_env = (((!((goog.nodeGlobalRequire == null))))?new cljs.core.Keyword(null,"node","node",581201198):(((!((goog.global.document == null))))?new cljs.core.Keyword(null,"html","html",-998796897):(((((typeof goog !== 'undefined') && (typeof goog.global !== 'undefined') && (typeof goog.global.navigator !== 'undefined')) && (cljs.core._EQ_.call(null,goog.global.navigator.product,"ReactNative"))))?new cljs.core.Keyword(null,"react-native","react-native",-1543085138):(((((goog.global.document == null)) && ((typeof self !== 'undefined')) && ((!((self.importScripts == null))))))?new cljs.core.Keyword(null,"worker","worker",938239996):null))));

figwheel.repl.reload_file_STAR_ = (function (){var pred__10616 = cljs.core._EQ_;
var expr__10617 = figwheel.repl.host_env;
if(cljs.core.truth_(pred__10616.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__10617))){
return figwheel.repl.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__10616.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__10617))){
return figwheel.repl.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__10616.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__10617))){
return figwheel.repl.worker_import_script;
} else {
return (function (a,b){
throw "Reload not defined for this platform";
});
}
}
}
})();

figwheel.repl.reload_file = (function figwheel$repl$reload_file(p__10619,callback){
var map__10620 = p__10619;
var map__10620__$1 = (((((!((map__10620 == null))))?(((((map__10620.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10620.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10620):map__10620);
var file_msg = map__10620__$1;
var request_url = cljs.core.get.call(null,map__10620__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
if(typeof request_url === 'string'){
} else {
throw (new Error("Assert failed: (string? request-url)"));
}

if((!((callback == null)))){
} else {
throw (new Error("Assert failed: (not (nil? callback))"));
}

goog.log.fine(figwheel.repl.logger,["Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__4185__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return figwheel.repl.reload_file_STAR_;
}
})().call(null,request_url,(function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
goog.log.fine(figwheel.repl.logger,["Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
goog.log.error(figwheel.repl.logger,["Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
}));
});

if((typeof figwheel !== 'undefined') && (typeof figwheel.repl !== 'undefined') && (typeof figwheel.repl.reload_promise_chain !== 'undefined')){
} else {
figwheel.repl.reload_promise_chain = cljs.core.atom.call(null,(new goog.Promise((function (p1__10604_SHARP_){
return p1__10604_SHARP_.call(null,true);
}))));
}

figwheel.repl.queued_file_reload = (function figwheel$repl$queued_file_reload(var_args){
var G__10623 = arguments.length;
switch (G__10623) {
case 1:
return figwheel.repl.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.repl.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(figwheel.repl.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.repl.queued_file_reload.call(null,url,null);
}));

(figwheel.repl.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
var temp__5735__auto__ = (cljs.core.truth_(opt_source_text)?(function (p1__10605_SHARP_){
return p1__10605_SHARP_.then((function (_){
return (new goog.Promise((function (r,___$1){
try{eval(opt_source_text);
}catch (e10624){if((e10624 instanceof Error)){
var e_10703 = e10624;
goog.log.error(figwheel.repl.logger,e_10703);
} else {
throw e10624;

}
}
return r.call(null,true);
})));
}));
}):(cljs.core.truth_(url)?(function (p1__10606_SHARP_){
return p1__10606_SHARP_.then((function (_){
return (new goog.Promise((function (r,___$1){
return figwheel.repl.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),(function (file_msg){
return r.call(null,true);
}));
})));
}));
}):null));
if(cljs.core.truth_(temp__5735__auto__)){
var next_promise_fn = temp__5735__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.repl.reload_promise_chain,next_promise_fn);
} else {
return null;
}
}));

(figwheel.repl.queued_file_reload.cljs$lang$maxFixedArity = 2);


figwheel.repl.after_reloads = (function figwheel$repl$after_reloads(f){
return cljs.core.swap_BANG_.call(null,figwheel.repl.reload_promise_chain,(function (p1__10607_SHARP_){
return p1__10607_SHARP_.then(f);
}));
});
goog.exportSymbol('figwheel.repl.after_reloads', figwheel.repl.after_reloads);


/** @define {string} */
goog.define("figwheel.repl.print_output","console,repl");

figwheel.repl.print_receivers = (function figwheel$repl$print_receivers(outputs){
return cljs.core.set.call(null,cljs.core.map.call(null,cljs.core.keyword,cljs.core.filter.call(null,cljs.core.complement.call(null,clojure.string.blank_QMARK_),cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,outputs,/,/)))));
});

if((typeof figwheel !== 'undefined') && (typeof figwheel.repl !== 'undefined') && (typeof figwheel.repl.out_print !== 'undefined')){
} else {
figwheel.repl.out_print = (function (){var method_table__4672__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4673__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4674__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4675__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4676__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.repl","out-print"),(function (k,args){
return k;
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4676__auto__,method_table__4672__auto__,prefer_table__4673__auto__,method_cache__4674__auto__,cached_hierarchy__4675__auto__));
})();
}

cljs.core._add_method.call(null,figwheel.repl.out_print,new cljs.core.Keyword(null,"console","console",1228072057),(function (_,args){
return console.log.apply(console,goog.array.clone(cljs.core.to_array.call(null,args)));
}));

if((typeof figwheel !== 'undefined') && (typeof figwheel.repl !== 'undefined') && (typeof figwheel.repl.err_print !== 'undefined')){
} else {
figwheel.repl.err_print = (function (){var method_table__4672__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4673__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4674__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4675__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4676__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.repl","err-print"),(function (k,args){
return k;
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4676__auto__,method_table__4672__auto__,prefer_table__4673__auto__,method_cache__4674__auto__,cached_hierarchy__4675__auto__));
})();
}

cljs.core._add_method.call(null,figwheel.repl.err_print,new cljs.core.Keyword(null,"console","console",1228072057),(function (_,args){
return console.error.apply(console,goog.array.clone(cljs.core.to_array.call(null,args)));
}));

figwheel.repl.setup_printing_BANG_ = (function figwheel$repl$setup_printing_BANG_(){
var printers = figwheel.repl.print_receivers.call(null,figwheel.repl.print_output);
cljs.core.set_print_fn_BANG_.call(null,(function() { 
var G__10704__delegate = function (args){
var seq__10625 = cljs.core.seq.call(null,printers);
var chunk__10626 = null;
var count__10627 = (0);
var i__10628 = (0);
while(true){
if((i__10628 < count__10627)){
var p = cljs.core._nth.call(null,chunk__10626,i__10628);
figwheel.repl.out_print.call(null,p,args);


var G__10705 = seq__10625;
var G__10706 = chunk__10626;
var G__10707 = count__10627;
var G__10708 = (i__10628 + (1));
seq__10625 = G__10705;
chunk__10626 = G__10706;
count__10627 = G__10707;
i__10628 = G__10708;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__10625);
if(temp__5735__auto__){
var seq__10625__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10625__$1)){
var c__4609__auto__ = cljs.core.chunk_first.call(null,seq__10625__$1);
var G__10709 = cljs.core.chunk_rest.call(null,seq__10625__$1);
var G__10710 = c__4609__auto__;
var G__10711 = cljs.core.count.call(null,c__4609__auto__);
var G__10712 = (0);
seq__10625 = G__10709;
chunk__10626 = G__10710;
count__10627 = G__10711;
i__10628 = G__10712;
continue;
} else {
var p = cljs.core.first.call(null,seq__10625__$1);
figwheel.repl.out_print.call(null,p,args);


var G__10713 = cljs.core.next.call(null,seq__10625__$1);
var G__10714 = null;
var G__10715 = (0);
var G__10716 = (0);
seq__10625 = G__10713;
chunk__10626 = G__10714;
count__10627 = G__10715;
i__10628 = G__10716;
continue;
}
} else {
return null;
}
}
break;
}
};
var G__10704 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10717__i = 0, G__10717__a = new Array(arguments.length -  0);
while (G__10717__i < G__10717__a.length) {G__10717__a[G__10717__i] = arguments[G__10717__i + 0]; ++G__10717__i;}
  args = new cljs.core.IndexedSeq(G__10717__a,0,null);
} 
return G__10704__delegate.call(this,args);};
G__10704.cljs$lang$maxFixedArity = 0;
G__10704.cljs$lang$applyTo = (function (arglist__10718){
var args = cljs.core.seq(arglist__10718);
return G__10704__delegate(args);
});
G__10704.cljs$core$IFn$_invoke$arity$variadic = G__10704__delegate;
return G__10704;
})()
);

return cljs.core.set_print_err_fn_BANG_.call(null,(function() { 
var G__10719__delegate = function (args){
var seq__10629 = cljs.core.seq.call(null,printers);
var chunk__10630 = null;
var count__10631 = (0);
var i__10632 = (0);
while(true){
if((i__10632 < count__10631)){
var p = cljs.core._nth.call(null,chunk__10630,i__10632);
figwheel.repl.err_print.call(null,p,args);


var G__10720 = seq__10629;
var G__10721 = chunk__10630;
var G__10722 = count__10631;
var G__10723 = (i__10632 + (1));
seq__10629 = G__10720;
chunk__10630 = G__10721;
count__10631 = G__10722;
i__10632 = G__10723;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__10629);
if(temp__5735__auto__){
var seq__10629__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10629__$1)){
var c__4609__auto__ = cljs.core.chunk_first.call(null,seq__10629__$1);
var G__10724 = cljs.core.chunk_rest.call(null,seq__10629__$1);
var G__10725 = c__4609__auto__;
var G__10726 = cljs.core.count.call(null,c__4609__auto__);
var G__10727 = (0);
seq__10629 = G__10724;
chunk__10630 = G__10725;
count__10631 = G__10726;
i__10632 = G__10727;
continue;
} else {
var p = cljs.core.first.call(null,seq__10629__$1);
figwheel.repl.err_print.call(null,p,args);


var G__10728 = cljs.core.next.call(null,seq__10629__$1);
var G__10729 = null;
var G__10730 = (0);
var G__10731 = (0);
seq__10629 = G__10728;
chunk__10630 = G__10729;
count__10631 = G__10730;
i__10632 = G__10731;
continue;
}
} else {
return null;
}
}
break;
}
};
var G__10719 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10732__i = 0, G__10732__a = new Array(arguments.length -  0);
while (G__10732__i < G__10732__a.length) {G__10732__a[G__10732__i] = arguments[G__10732__i + 0]; ++G__10732__i;}
  args = new cljs.core.IndexedSeq(G__10732__a,0,null);
} 
return G__10719__delegate.call(this,args);};
G__10719.cljs$lang$maxFixedArity = 0;
G__10719.cljs$lang$applyTo = (function (arglist__10733){
var args = cljs.core.seq(arglist__10733);
return G__10719__delegate(args);
});
G__10719.cljs$core$IFn$_invoke$arity$variadic = G__10719__delegate;
return G__10719;
})()
);
});


/** @define {string} */
goog.define("figwheel.repl.connect_url","ws://[[client-hostname]]:[[client-port]]/figwheel-connect");

figwheel.repl.state = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);

figwheel.repl.storage = goog.storage.mechanism.mechanismfactory.createHTML5SessionStorage("figwheel.repl");

figwheel.repl.set_state = (function figwheel$repl$set_state(k,v){
cljs.core.swap_BANG_.call(null,figwheel.repl.state,cljs.core.assoc,k,v);

if(cljs.core.truth_(figwheel.repl.storage)){
return figwheel.repl.storage.set(cljs.core.str.cljs$core$IFn$_invoke$arity$1(k),v);
} else {
return null;
}
});

figwheel.repl.get_state = (function figwheel$repl$get_state(k){
if(cljs.core.truth_(figwheel.repl.storage)){
return figwheel.repl.storage.get(cljs.core.str.cljs$core$IFn$_invoke$arity$1(k));
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.repl.state),k);
}
});

figwheel.repl.session_name = (function figwheel$repl$session_name(){
return figwheel.repl.get_state.call(null,new cljs.core.Keyword("figwheel.repl","session-name","figwheel.repl/session-name",2102143102));
});
goog.exportSymbol('figwheel.repl.session_name', figwheel.repl.session_name);

figwheel.repl.session_id = (function figwheel$repl$session_id(){
return figwheel.repl.get_state.call(null,new cljs.core.Keyword("figwheel.repl","session-id","figwheel.repl/session-id",594324955));
});
goog.exportSymbol('figwheel.repl.session_id', figwheel.repl.session_id);

figwheel.repl.response_for = (function figwheel$repl$response_for(p__10633,response_body){
var map__10634 = p__10633;
var map__10634__$1 = (((((!((map__10634 == null))))?(((((map__10634.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10634.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10634):map__10634);
var uuid = cljs.core.get.call(null,map__10634__$1,new cljs.core.Keyword(null,"uuid","uuid",-2145095719));
var G__10636 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"session-id","session-id",-1147060351),figwheel.repl.session_id.call(null),new cljs.core.Keyword(null,"session-name","session-name",-167167576),figwheel.repl.session_name.call(null),new cljs.core.Keyword(null,"response","response",-1068424192),response_body], null);
if(cljs.core.truth_(uuid)){
return cljs.core.assoc.call(null,G__10636,new cljs.core.Keyword(null,"uuid","uuid",-2145095719),uuid);
} else {
return G__10636;
}
});

figwheel.repl.http_post = (function (){var pred__10637 = cljs.core._EQ_;
var expr__10638 = figwheel.repl.host_env;
if(cljs.core.truth_(pred__10637.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__10638))){
var http = require("http");
return (function (url,post_data){
var data = cljs.core.volatile_BANG_.call(null,"");
var uri = goog.Uri.parse(cljs.core.str.cljs$core$IFn$_invoke$arity$1(url));
var G__10640 = http.request(({"host": uri.getDomain(), "port": uri.getPort(), "path": [cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri.getPath()),(function (){var temp__5735__auto__ = uri.getQuery();
if(cljs.core.truth_(temp__5735__auto__)){
var q = temp__5735__auto__;
return ["?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(q)].join('');
} else {
return null;
}
})()].join(''), "method": "POST", "headers": ({"Content-Length": Buffer.byteLength(post_data)})}),(function (x){
return null;
})).on("error",(function (p1__10608_SHARP_){
return console.error(p1__10608_SHARP_);
}));
G__10640.write(post_data);

G__10640.end();

return G__10640;
});
} else {
return (function (url,response){
return goog.net.XhrIo.send(url,(function (e){
return figwheel.repl.debug.call(null,"Response Posted");
}),"POST",response);
});
}
})();

figwheel.repl.respond_to = (function figwheel$repl$respond_to(p__10641,response_body){
var map__10642 = p__10641;
var map__10642__$1 = (((((!((map__10642 == null))))?(((((map__10642.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10642.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10642):map__10642);
var old_msg = map__10642__$1;
var websocket = cljs.core.get.call(null,map__10642__$1,new cljs.core.Keyword(null,"websocket","websocket",-1714963101));
var http_url = cljs.core.get.call(null,map__10642__$1,new cljs.core.Keyword(null,"http-url","http-url",-2043776269));
var response = figwheel.repl.response_for.call(null,old_msg,response_body);
if(cljs.core.truth_(websocket)){
return websocket.send(cljs.core.pr_str.call(null,response));
} else {
if(cljs.core.truth_(http_url)){
return figwheel.repl.http_post.call(null,http_url,cljs.core.pr_str.call(null,response));
} else {
return null;
}
}
});

figwheel.repl.respond_to_connection = (function figwheel$repl$respond_to_connection(response_body){
return figwheel.repl.respond_to.call(null,new cljs.core.Keyword(null,"connection","connection",-123599300).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,figwheel.repl.state)),response_body);
});

if((typeof figwheel !== 'undefined') && (typeof figwheel.repl !== 'undefined') && (typeof figwheel.repl.message !== 'undefined')){
} else {
figwheel.repl.message = (function (){var method_table__4672__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4673__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4674__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4675__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4676__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.repl","message"),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4676__auto__,method_table__4672__auto__,prefer_table__4673__auto__,method_cache__4674__auto__,cached_hierarchy__4675__auto__));
})();
}

cljs.core._add_method.call(null,figwheel.repl.message,"naming",(function (msg){
var temp__5735__auto___10734 = new cljs.core.Keyword(null,"session-name","session-name",-167167576).cljs$core$IFn$_invoke$arity$1(msg);
if(cljs.core.truth_(temp__5735__auto___10734)){
var sn_10735 = temp__5735__auto___10734;
figwheel.repl.set_state.call(null,new cljs.core.Keyword("figwheel.repl","session-name","figwheel.repl/session-name",2102143102),sn_10735);
} else {
}

var temp__5735__auto___10736 = new cljs.core.Keyword(null,"session-id","session-id",-1147060351).cljs$core$IFn$_invoke$arity$1(msg);
if(cljs.core.truth_(temp__5735__auto___10736)){
var sid_10737 = temp__5735__auto___10736;
figwheel.repl.set_state.call(null,new cljs.core.Keyword("figwheel.repl","session-id","figwheel.repl/session-id",594324955),sid_10737);
} else {
}

goog.log.info(figwheel.repl.logger,["Session ID: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.repl.session_id.call(null))].join(''));

return goog.log.info(figwheel.repl.logger,["Session Name: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.repl.session_name.call(null))].join(''));
}));

cljs.core._add_method.call(null,figwheel.repl.message,"ping",(function (msg){
return figwheel.repl.respond_to.call(null,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pong","pong",-172484958),true], null));
}));

figwheel.repl.get_ua_product = (function figwheel$repl$get_ua_product(){
if((!((goog.nodeGlobalRequire == null)))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(goog.userAgent.product.SAFARI){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(goog.userAgent.product.CHROME){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(goog.userAgent.product.FIREFOX){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(goog.userAgent.product.IE){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});

var print_to_console_QMARK__10738 = figwheel.repl.print_receivers.call(null,figwheel.repl.print_output).call(null,new cljs.core.Keyword(null,"console","console",1228072057));
figwheel.repl.eval_javascript_STAR__STAR_ = (function figwheel$repl$eval_javascript_STAR__STAR_(code){
var ua_product = figwheel.repl.get_ua_product.call(null);
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__10645 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__10646 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__10647 = true;
var _STAR_print_fn_STAR__temp_val__10648 = (function (x){
return sb.append(x);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__10647);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__10648);

try{var result_value = eval(code);
var result_value__$1 = (((!(typeof result_value === 'string')))?(function (){try{return cljs.core.pr_str.call(null,result_value);
}catch (e10649){if((e10649 instanceof Error)){
var e = e10649;
return null;
} else {
throw e10649;

}
}})():result_value);
var output_str = cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb);
if(cljs.core.truth_((function (){var and__4174__auto__ = print_to_console_QMARK__10738;
if(cljs.core.truth_(and__4174__auto__)){
return (!((sb.getLength() === (0))));
} else {
return and__4174__auto__;
}
})())){
setTimeout((function (){
return figwheel.repl.out_print.call(null,new cljs.core.Keyword(null,"console","console",1228072057),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [output_str], null));
}),(0));
} else {
}

return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),output_str,new cljs.core.Keyword(null,"ua-product","ua-product",938384227),ua_product,new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__10646);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__10645);
}}catch (e10644){if((e10644 instanceof Error)){
var e = e10644;
if((((typeof console !== 'undefined')) && ((typeof console !== 'undefined') && (typeof console.error !== 'undefined')))){
console.error("REPL eval error",e);
} else {
}

return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),ua_product,new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),e.stack], null);
} else {
var e = e10644;
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),ua_product,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null);

}
}});

cljs.core._add_method.call(null,figwheel.repl.message,"eval",(function (p__10650){
var map__10651 = p__10650;
var map__10651__$1 = (((((!((map__10651 == null))))?(((((map__10651.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10651.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10651):map__10651);
var msg = map__10651__$1;
var code = cljs.core.get.call(null,map__10651__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var result = figwheel.repl.eval_javascript_STAR__STAR_.call(null,code);
return figwheel.repl.respond_to.call(null,msg,result);
}));

cljs.core._add_method.call(null,figwheel.repl.message,"messages",(function (p__10653){
var map__10654 = p__10653;
var map__10654__$1 = (((((!((map__10654 == null))))?(((((map__10654.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10654.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10654):map__10654);
var messages = cljs.core.get.call(null,map__10654__$1,new cljs.core.Keyword(null,"messages","messages",345434482));
var http_url = cljs.core.get.call(null,map__10654__$1,new cljs.core.Keyword(null,"http-url","http-url",-2043776269));
var seq__10656 = cljs.core.seq.call(null,messages);
var chunk__10657 = null;
var count__10658 = (0);
var i__10659 = (0);
while(true){
if((i__10659 < count__10658)){
var msg = cljs.core._nth.call(null,chunk__10657,i__10659);
figwheel.repl.message.call(null,(function (){var G__10662 = cljs.core.js__GT_clj.call(null,msg,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
if(cljs.core.truth_(http_url)){
return cljs.core.assoc.call(null,G__10662,new cljs.core.Keyword(null,"http-url","http-url",-2043776269),http_url);
} else {
return G__10662;
}
})());


var G__10739 = seq__10656;
var G__10740 = chunk__10657;
var G__10741 = count__10658;
var G__10742 = (i__10659 + (1));
seq__10656 = G__10739;
chunk__10657 = G__10740;
count__10658 = G__10741;
i__10659 = G__10742;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__10656);
if(temp__5735__auto__){
var seq__10656__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10656__$1)){
var c__4609__auto__ = cljs.core.chunk_first.call(null,seq__10656__$1);
var G__10743 = cljs.core.chunk_rest.call(null,seq__10656__$1);
var G__10744 = c__4609__auto__;
var G__10745 = cljs.core.count.call(null,c__4609__auto__);
var G__10746 = (0);
seq__10656 = G__10743;
chunk__10657 = G__10744;
count__10658 = G__10745;
i__10659 = G__10746;
continue;
} else {
var msg = cljs.core.first.call(null,seq__10656__$1);
figwheel.repl.message.call(null,(function (){var G__10663 = cljs.core.js__GT_clj.call(null,msg,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
if(cljs.core.truth_(http_url)){
return cljs.core.assoc.call(null,G__10663,new cljs.core.Keyword(null,"http-url","http-url",-2043776269),http_url);
} else {
return G__10663;
}
})());


var G__10747 = cljs.core.next.call(null,seq__10656__$1);
var G__10748 = null;
var G__10749 = (0);
var G__10750 = (0);
seq__10656 = G__10747;
chunk__10657 = G__10748;
count__10658 = G__10749;
i__10659 = G__10750;
continue;
}
} else {
return null;
}
}
break;
}
}));

figwheel.repl.fill_url_template = (function figwheel$repl$fill_url_template(connect_url_SINGLEQUOTE_){
if(cljs.core._EQ_.call(null,figwheel.repl.host_env,new cljs.core.Keyword(null,"html","html",-998796897))){
return clojure.string.replace.call(null,clojure.string.replace.call(null,connect_url_SINGLEQUOTE_,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
} else {
return connect_url_SINGLEQUOTE_;
}
});

figwheel.repl.make_url = (function figwheel$repl$make_url(connect_url_SINGLEQUOTE_){
var uri = goog.Uri.parse(figwheel.repl.fill_url_template.call(null,(function (){var or__4185__auto__ = connect_url_SINGLEQUOTE_;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return figwheel.repl.connect_url;
}
})()));
var domain = uri.getDomain();
if(clojure.string.ends_with_QMARK_.call(null,domain,":")){
uri.setDomain(cljs.core.subs.call(null,domain,(0),(cljs.core.count.call(null,domain) - (1))));
} else {
}

var G__10664_10751 = uri.getQueryData().add("fwsid",(function (){var or__4185__auto__ = figwheel.repl.session_id.call(null);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.random_uuid.call(null);
}
})());
if(cljs.core.truth_(figwheel.repl.session_name.call(null))){
G__10664_10751.add("fwsname",figwheel.repl.session_name.call(null));
} else {
}

return uri;
});

figwheel.repl.exponential_backoff = (function figwheel$repl$exponential_backoff(attempt){
return ((1000) * (function (){var x__4276__auto__ = Math.pow((2),attempt);
var y__4277__auto__ = (20);
return ((x__4276__auto__ < y__4277__auto__) ? x__4276__auto__ : y__4277__auto__);
})());
});

figwheel.repl.hook_repl_printing_output_BANG_ = (function figwheel$repl$hook_repl_printing_output_BANG_(respond_msg){
cljs.core._add_method.call(null,figwheel.repl.out_print,new cljs.core.Keyword(null,"repl","repl",-35398667),(function (_,args){
return figwheel.repl.respond_to.call(null,respond_msg,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"output","output",-1105869043),true,new cljs.core.Keyword(null,"stream","stream",1534941648),new cljs.core.Keyword(null,"out","out",-910545517),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__10609_SHARP_){
if(typeof p1__10609_SHARP_ === 'string'){
return p1__10609_SHARP_;
} else {
return goog.json.serialize(p1__10609_SHARP_);
}
}),args)], null));
}));

cljs.core._add_method.call(null,figwheel.repl.err_print,new cljs.core.Keyword(null,"repl","repl",-35398667),(function (_,args){
return figwheel.repl.respond_to.call(null,respond_msg,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"output","output",-1105869043),true,new cljs.core.Keyword(null,"stream","stream",1534941648),new cljs.core.Keyword(null,"err","err",-2089457205),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__10610_SHARP_){
if(typeof p1__10610_SHARP_ === 'string'){
return p1__10610_SHARP_;
} else {
return goog.json.serialize(p1__10610_SHARP_);
}
}),args)], null));
}));

return figwheel.repl.setup_printing_BANG_.call(null);
});

figwheel.repl.connection_established_BANG_ = (function figwheel$repl$connection_established_BANG_(url){
if(cljs.core._EQ_.call(null,figwheel.repl.host_env,new cljs.core.Keyword(null,"html","html",-998796897))){
var target = goog.global.document.body;
return target.dispatchEvent((function (){var G__10665 = (new Event("figwheel.repl.connected",target));
goog.object.add(G__10665,"data",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"url","url",276297046),url], null));

return G__10665;
})());
} else {
return null;
}
});

figwheel.repl.connection_closed_BANG_ = (function figwheel$repl$connection_closed_BANG_(url){
if(cljs.core._EQ_.call(null,figwheel.repl.host_env,new cljs.core.Keyword(null,"html","html",-998796897))){
var target = goog.global.document.body;
return target.dispatchEvent((function (){var G__10666 = (new Event("figwheel.repl.disconnected",target));
goog.object.add(G__10666,"data",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"url","url",276297046),url], null));

return G__10666;
})());
} else {
return null;
}
});

figwheel.repl.get_websocket_class = (function figwheel$repl$get_websocket_class(){
var or__4185__auto__ = goog.object.get(goog.global,"WebSocket");
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var or__4185__auto____$1 = goog.object.get(goog.global,"FIGWHEEL_WEBSOCKET_CLASS");
if(cljs.core.truth_(or__4185__auto____$1)){
return or__4185__auto____$1;
} else {
var or__4185__auto____$2 = ((cljs.core._EQ_.call(null,figwheel.repl.host_env,new cljs.core.Keyword(null,"node","node",581201198)))?(function (){try{return require("ws");
}catch (e10670){if((e10670 instanceof Error)){
var e = e10670;
return null;
} else {
throw e10670;

}
}})():false);
if(cljs.core.truth_(or__4185__auto____$2)){
return or__4185__auto____$2;
} else {
if(cljs.core._EQ_.call(null,figwheel.repl.host_env,new cljs.core.Keyword(null,"worker","worker",938239996))){
return goog.object.get(self,"WebSocket");
} else {
return false;
}
}
}
}
});

figwheel.repl.ensure_websocket = (function figwheel$repl$ensure_websocket(thunk){
if(cljs.core.truth_(goog.object.get(goog.global,"WebSocket"))){
return thunk.call(null);
} else {
var temp__5733__auto__ = figwheel.repl.get_websocket_class.call(null);
if(cljs.core.truth_(temp__5733__auto__)){
var websocket_class = temp__5733__auto__;
goog.object.set(goog.global,"WebSocket",websocket_class);

thunk.call(null);

return goog.object.set(goog.global,"WebSocket",null);
} else {
return goog.log.error(figwheel.repl.logger,((cljs.core._EQ_.call(null,figwheel.repl.host_env,new cljs.core.Keyword(null,"node","node",581201198)))?"Can't connect!! Please make sure ws is installed\n do -> 'npm install ws'":"Can't connect!! This client doesn't support WebSockets"));
}
}
});

figwheel.repl.ws_connect = (function figwheel$repl$ws_connect(var_args){
var args__4795__auto__ = [];
var len__4789__auto___10752 = arguments.length;
var i__4790__auto___10753 = (0);
while(true){
if((i__4790__auto___10753 < len__4789__auto___10752)){
args__4795__auto__.push((arguments[i__4790__auto___10753]));

var G__10754 = (i__4790__auto___10753 + (1));
i__4790__auto___10753 = G__10754;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return figwheel.repl.ws_connect.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(figwheel.repl.ws_connect.cljs$core$IFn$_invoke$arity$variadic = (function (p__10672){
var vec__10673 = p__10672;
var websocket_url_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__10673,(0),null);
return figwheel.repl.ensure_websocket.call(null,(function (){
var websocket = (new goog.net.WebSocket());
var url = cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.repl.make_url.call(null,websocket_url_SINGLEQUOTE_));
var G__10676 = websocket;
G__10676.addEventListener(goog.net.WebSocket.EventType.MESSAGE,(function (e){
var temp__5735__auto__ = goog.object.get(e,"message");
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
try{figwheel.repl.debug.call(null,msg);

return figwheel.repl.message.call(null,cljs.core.assoc.call(null,cljs.core.js__GT_clj.call(null,JSON.parse(msg),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true),new cljs.core.Keyword(null,"websocket","websocket",-1714963101),websocket));
}catch (e10677){if((e10677 instanceof Error)){
var e__$1 = e10677;
return goog.log.error(figwheel.repl.logger,e__$1);
} else {
throw e10677;

}
}} else {
return null;
}
}));

G__10676.addEventListener(goog.net.WebSocket.EventType.OPENED,(function (e){
figwheel.repl.connection_established_BANG_.call(null,url);

cljs.core.swap_BANG_.call(null,figwheel.repl.state,cljs.core.assoc,new cljs.core.Keyword(null,"connection","connection",-123599300),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"websocket","websocket",-1714963101),websocket], null));

return figwheel.repl.hook_repl_printing_output_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"websocket","websocket",-1714963101),websocket], null));
}));

G__10676.addEventListener(goog.net.WebSocket.EventType.CLOSED,(function (e){
return figwheel.repl.connection_closed_BANG_.call(null,url);
}));

G__10676.open(url);

return G__10676;
}));
}));

(figwheel.repl.ws_connect.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.repl.ws_connect.cljs$lang$applyTo = (function (seq10671){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10671));
}));


figwheel.repl.http_get = (function (){var pred__10678 = cljs.core._EQ_;
var expr__10679 = figwheel.repl.host_env;
if(cljs.core.truth_(pred__10678.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__10679))){
var http = require("http");
return (function (url){
return (new goog.Promise((function (succ,err){
var data = cljs.core.volatile_BANG_.call(null,"");
return http.get(cljs.core.str.cljs$core$IFn$_invoke$arity$1(url),(function (response){
response.on("data",(function (chunk){
return cljs.core._vreset_BANG_.call(null,data,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core._deref.call(null,data)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chunk)].join(''));
}));

return response.on("end",(function (){
return succ.call(null,(function (){try{return JSON.parse(cljs.core.deref.call(null,data));
}catch (e10681){if((e10681 instanceof Error)){
var e = e10681;
console.error(e);

return err.call(null,e);
} else {
throw e10681;

}
}})());
}));
})).on("error",err);
})));
});
} else {
return (function (url){
return (new goog.Promise((function (succ,err){
return goog.net.XhrIo.send(url,(function (e){
var xhr = goog.object.get(e,"target");
if(cljs.core.truth_(xhr.isSuccess())){
return succ.call(null,xhr.getResponseJson());
} else {
return err.call(null,xhr);
}
}));
})));
});
}
})();



figwheel.repl.poll = (function figwheel$repl$poll(msg_fn,connect_url_SINGLEQUOTE_){
return figwheel.repl.http_get.call(null,figwheel.repl.make_url.call(null,connect_url_SINGLEQUOTE_)).then((function (msg){
msg_fn.call(null,msg);

return setTimeout((function (){
return figwheel.repl.poll.call(null,msg_fn,connect_url_SINGLEQUOTE_);
}),(500));
}),(function (e){
figwheel.repl.connection_closed_BANG_.call(null,connect_url_SINGLEQUOTE_);

return figwheel.repl.http_connect.call(null,connect_url_SINGLEQUOTE_);
}));
});

figwheel.repl.long_poll = (function figwheel$repl$long_poll(msg_fn,connect_url_SINGLEQUOTE_){
return figwheel.repl.http_get.call(null,figwheel.repl.make_url.call(null,connect_url_SINGLEQUOTE_)).then((function (msg){
msg_fn.call(null,msg);

return figwheel.repl.long_poll.call(null,msg_fn,connect_url_SINGLEQUOTE_);
}),(function (e){
figwheel.repl.connection_closed_BANG_.call(null,connect_url_SINGLEQUOTE_);

return figwheel.repl.http_connect.call(null,connect_url_SINGLEQUOTE_);
}));
});

figwheel.repl.http_connect_STAR_ = (function figwheel$repl$http_connect_STAR_(attempt,connect_url_SINGLEQUOTE_){
var url = figwheel.repl.make_url.call(null,connect_url_SINGLEQUOTE_);
var surl = cljs.core.str.cljs$core$IFn$_invoke$arity$1(url);
var msg_fn = (function (msg){
try{figwheel.repl.debug.call(null,cljs.core.pr_str.call(null,msg));

return figwheel.repl.message.call(null,cljs.core.assoc.call(null,cljs.core.js__GT_clj.call(null,msg,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true),new cljs.core.Keyword(null,"http-url","http-url",-2043776269),surl));
}catch (e10682){if((e10682 instanceof Error)){
var e = e10682;
return goog.log.error(figwheel.repl.logger,e);
} else {
throw e10682;

}
}});
var G__10683_10755 = url.getQueryData();
G__10683_10755.add("fwinit","true");


return figwheel.repl.http_get.call(null,url).then((function (msg){
var typ = goog.object.get(msg,"connection-type");
goog.log.info(figwheel.repl.logger,["Connected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(typ)].join(''));

msg_fn.call(null,msg);

figwheel.repl.connection_established_BANG_.call(null,url);

cljs.core.swap_BANG_.call(null,figwheel.repl.state,cljs.core.assoc,new cljs.core.Keyword(null,"connection","connection",-123599300),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-url","http-url",-2043776269),surl], null));

figwheel.repl.hook_repl_printing_output_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-url","http-url",-2043776269),surl], null));

if(cljs.core._EQ_.call(null,typ,"http-long-polling")){
return figwheel.repl.long_poll.call(null,msg_fn,connect_url_SINGLEQUOTE_);
} else {
return figwheel.repl.poll.call(null,msg_fn,connect_url_SINGLEQUOTE_);
}
}),(function (e){
if((e instanceof Error)){
goog.log.error(figwheel.repl.logger,e);
} else {
}

if(cljs.core.truth_((((e instanceof goog.net.XhrIo))?e.getResponseBody():false))){
figwheel.repl.debug.call(null,e.getResponseBody());
} else {
}

var wait_time = figwheel.repl.exponential_backoff.call(null,attempt);
goog.log.info(figwheel.repl.logger,["HTTP Connection Error: next connection attempt in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((wait_time / (1000)))," seconds"].join(''));

return setTimeout((function (){
return figwheel.repl.http_connect_STAR_.call(null,(attempt + (1)),connect_url_SINGLEQUOTE_);
}),wait_time);
}));
});

figwheel.repl.http_connect = (function figwheel$repl$http_connect(var_args){
var args__4795__auto__ = [];
var len__4789__auto___10756 = arguments.length;
var i__4790__auto___10757 = (0);
while(true){
if((i__4790__auto___10757 < len__4789__auto___10756)){
args__4795__auto__.push((arguments[i__4790__auto___10757]));

var G__10758 = (i__4790__auto___10757 + (1));
i__4790__auto___10757 = G__10758;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return figwheel.repl.http_connect.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(figwheel.repl.http_connect.cljs$core$IFn$_invoke$arity$variadic = (function (p__10685){
var vec__10686 = p__10685;
var connect_url_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__10686,(0),null);
return figwheel.repl.http_connect_STAR_.call(null,(0),connect_url_SINGLEQUOTE_);
}));

(figwheel.repl.http_connect.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.repl.http_connect.cljs$lang$applyTo = (function (seq10684){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10684));
}));


figwheel.repl.switch_to_http_QMARK_ = (function figwheel$repl$switch_to_http_QMARK_(url){
if(cljs.core.truth_((function (){var or__4185__auto__ = goog.string.startsWith(url,"http");
if(or__4185__auto__){
return or__4185__auto__;
} else {
return figwheel.repl.get_websocket_class.call(null);
}
})())){
return url;
} else {
goog.log.warning(figwheel.repl.logger,["No WebSocket implementation found! Falling back to http-long-polling",((cljs.core._EQ_.call(null,figwheel.repl.host_env,new cljs.core.Keyword(null,"node","node",581201198)))?":\n For a more efficient connection ensure that \"ws\" is installed :: do -> 'npm install ws'":null)].join(''));

return cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.Uri.parse(url).setScheme("http"));
}
});


/** @define {string} */
goog.define("figwheel.repl.client_log_level","info");

figwheel.repl.log_levels = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.juxt.call(null,clojure.string.lower_case,(function (p1__10611_SHARP_){
return goog.object.get(goog.debug.Logger.Level,p1__10611_SHARP_);
})),cljs.core.map.call(null,cljs.core.str,cljs.core.list(new cljs.core.Symbol(null,"SEVERE","SEVERE",2038088045,null),new cljs.core.Symbol(null,"WARNING","WARNING",1233939303,null),new cljs.core.Symbol(null,"INFO","INFO",578874437,null),new cljs.core.Symbol(null,"CONFIG","CONFIG",1613043737,null),new cljs.core.Symbol(null,"FINE","FINE",1120074650,null),new cljs.core.Symbol(null,"FINER","FINER",1219697631,null),new cljs.core.Symbol(null,"FINEST","FINEST",-1116440228,null)))));

figwheel.repl.set_log_level = (function figwheel$repl$set_log_level(logger_SINGLEQUOTE_,level){
var temp__5733__auto__ = cljs.core.get.call(null,figwheel.repl.log_levels,level);
if(cljs.core.truth_(temp__5733__auto__)){
var lvl = temp__5733__auto__;
logger_SINGLEQUOTE_.setLevel(lvl);

return figwheel.repl.debug.call(null,["setting log level to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(level)].join(''));
} else {
return goog.log.warn(["Log level ",cljs.core.pr_str.call(null,level)," doesn't exist must be one of ",cljs.core.pr_str.call(null,cljs.core.list("severe","warning","info","config","fine","finer","finest"))].join(''));
}
});

figwheel.repl.init_log_level_BANG_ = (function figwheel$repl$init_log_level_BANG_(){
var seq__10689 = cljs.core.seq.call(null,(function (){var G__10694 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [figwheel.repl.logger], null);
if((typeof figwheel !== 'undefined') && (typeof figwheel.core !== 'undefined')){
return cljs.core.conj.call(null,G__10694,figwheel.core.logger);
} else {
return G__10694;
}
})());
var chunk__10690 = null;
var count__10691 = (0);
var i__10692 = (0);
while(true){
if((i__10692 < count__10691)){
var logger_SINGLEQUOTE_ = cljs.core._nth.call(null,chunk__10690,i__10692);
figwheel.repl.set_log_level.call(null,logger_SINGLEQUOTE_,figwheel.repl.client_log_level);


var G__10759 = seq__10689;
var G__10760 = chunk__10690;
var G__10761 = count__10691;
var G__10762 = (i__10692 + (1));
seq__10689 = G__10759;
chunk__10690 = G__10760;
count__10691 = G__10761;
i__10692 = G__10762;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__10689);
if(temp__5735__auto__){
var seq__10689__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10689__$1)){
var c__4609__auto__ = cljs.core.chunk_first.call(null,seq__10689__$1);
var G__10763 = cljs.core.chunk_rest.call(null,seq__10689__$1);
var G__10764 = c__4609__auto__;
var G__10765 = cljs.core.count.call(null,c__4609__auto__);
var G__10766 = (0);
seq__10689 = G__10763;
chunk__10690 = G__10764;
count__10691 = G__10765;
i__10692 = G__10766;
continue;
} else {
var logger_SINGLEQUOTE_ = cljs.core.first.call(null,seq__10689__$1);
figwheel.repl.set_log_level.call(null,logger_SINGLEQUOTE_,figwheel.repl.client_log_level);


var G__10767 = cljs.core.next.call(null,seq__10689__$1);
var G__10768 = null;
var G__10769 = (0);
var G__10770 = (0);
seq__10689 = G__10767;
chunk__10690 = G__10768;
count__10691 = G__10769;
i__10692 = G__10770;
continue;
}
} else {
return null;
}
}
break;
}
});

figwheel.repl.connect_STAR_ = (function figwheel$repl$connect_STAR_(connect_url_SINGLEQUOTE_){
figwheel.repl.init_log_level_BANG_.call(null);

figwheel.repl.patch_goog_base.call(null);

var url = figwheel.repl.switch_to_http_QMARK_.call(null,clojure.string.trim.call(null,(function (){var or__4185__auto__ = connect_url_SINGLEQUOTE_;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return figwheel.repl.connect_url;
}
})()));
if(goog.string.startsWith(url,"ws")){
return figwheel.repl.ws_connect.call(null,url);
} else {
if(goog.string.startsWith(url,"http")){
return figwheel.repl.http_connect.call(null,url);
} else {
return null;
}
}
});

figwheel.repl.connect = (function figwheel$repl$connect(var_args){
var args__4795__auto__ = [];
var len__4789__auto___10771 = arguments.length;
var i__4790__auto___10772 = (0);
while(true){
if((i__4790__auto___10772 < len__4789__auto___10771)){
args__4795__auto__.push((arguments[i__4790__auto___10772]));

var G__10773 = (i__4790__auto___10772 + (1));
i__4790__auto___10772 = G__10773;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return figwheel.repl.connect.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(figwheel.repl.connect.cljs$core$IFn$_invoke$arity$variadic = (function (p__10696){
var vec__10697 = p__10696;
var connect_url_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__10697,(0),null);
if((typeof figwheel !== 'undefined') && (typeof figwheel.repl !== 'undefined') && (typeof figwheel.repl.connected !== 'undefined')){
return null;
} else {
return (
figwheel.repl.connected = (function (){
figwheel.repl.connect_STAR_.call(null,connect_url_SINGLEQUOTE_);

return true;
})()
)
;
}
}));

(figwheel.repl.connect.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.repl.connect.cljs$lang$applyTo = (function (seq10695){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10695));
}));


//# sourceMappingURL=repl.js.map
