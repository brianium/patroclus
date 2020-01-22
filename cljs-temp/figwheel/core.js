// Compiled by ClojureScript 1.10.597 {:target :nodejs}
goog.provide('figwheel.core');
goog.require('cljs.core');
goog.require('figwheel.tools.heads_up');
goog.require('goog.object');
goog.require('goog.string');
goog.require('goog.string.format');
goog.require('goog.log');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('goog.debug.Console');
goog.require('goog.async.Deferred');
goog.require('goog.Promise');
goog.require('goog.events.EventTarget');
goog.require('goog.events.Event');
figwheel.core.distinct_by = (function figwheel$core$distinct_by(f,coll){
var seen = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY);
return cljs.core.filter.call(null,(function (p1__11016_SHARP_){
var k = f.call(null,p1__11016_SHARP_);
var res = cljs.core.not.call(null,cljs.core.deref.call(null,seen).call(null,k));
cljs.core._vreset_BANG_.call(null,seen,cljs.core.conj.call(null,cljs.core._deref.call(null,seen),k));

return res;
}),coll);
});
figwheel.core.map_keys = (function figwheel$core$map_keys(f,coll){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__11017){
var vec__11018 = p__11017;
var k = cljs.core.nth.call(null,vec__11018,(0),null);
var v = cljs.core.nth.call(null,vec__11018,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f.call(null,k),v], null);
})),coll);
});
figwheel.core._STAR_inline_code_message_max_column_STAR_ = (80);
figwheel.core.wrap_line = (function figwheel$core$wrap_line(text,size){
return cljs.core.re_seq.call(null,cljs.core.re_pattern.call(null,[".{1,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(size),"}\\s|.{1,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(size),"}"].join('')),[clojure.string.replace.call(null,text,/\n/," ")," "].join(''));
});
figwheel.core.cross_format = (function figwheel$core$cross_format(var_args){
var args__4795__auto__ = [];
var len__4789__auto___11022 = arguments.length;
var i__4790__auto___11023 = (0);
while(true){
if((i__4790__auto___11023 < len__4789__auto___11022)){
args__4795__auto__.push((arguments[i__4790__auto___11023]));

var G__11024 = (i__4790__auto___11023 + (1));
i__4790__auto___11023 = G__11024;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return figwheel.core.cross_format.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(figwheel.core.cross_format.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,goog.string.format,args);
}));

(figwheel.core.cross_format.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.core.cross_format.cljs$lang$applyTo = (function (seq11021){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11021));
}));

figwheel.core.pointer_message_lines = (function figwheel$core$pointer_message_lines(p__11027){
var map__11028 = p__11027;
var map__11028__$1 = (((((!((map__11028 == null))))?(((((map__11028.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11028.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11028):map__11028);
var message = cljs.core.get.call(null,map__11028__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var column = cljs.core.get.call(null,map__11028__$1,new cljs.core.Keyword(null,"column","column",2078222095));
if(((column + cljs.core.count.call(null,message)) > figwheel.core._STAR_inline_code_message_max_column_STAR_)){
return cljs.core.mapv.call(null,(function (p1__11026_SHARP_){
return cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error-message","error-message",1756021561),null], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11026_SHARP_], null)));
}),cljs.core.cons.call(null,figwheel.core.cross_format.call(null,(function (){var col = (column - (1));
return ["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1((((col === (0)))?null:col)),"s%s"].join('');
})(),"","^---"),cljs.core.map.call(null,(function (p1__11025_SHARP_){
return figwheel.core.cross_format.call(null,["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.core._STAR_inline_code_message_max_column_STAR_),"s"].join(''),p1__11025_SHARP_);
}),figwheel.core.wrap_line.call(null,message,(figwheel.core._STAR_inline_code_message_max_column_STAR_ - (10))))));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error-message","error-message",1756021561),null,figwheel.core.cross_format.call(null,(function (){var col = (column - (1));
return ["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1((((col === (0)))?null:col)),"s%s %s"].join('');
})(),"","^---",message)], null)], null);
}
});
figwheel.core.inline_message_display_data = (function figwheel$core$inline_message_display_data(p__11031){
var map__11032 = p__11031;
var map__11032__$1 = (((((!((map__11032 == null))))?(((((map__11032.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11032.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11032):map__11032);
var message_data = map__11032__$1;
var message = cljs.core.get.call(null,map__11032__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var line = cljs.core.get.call(null,map__11032__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__11032__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var file_excerpt = cljs.core.get.call(null,map__11032__$1,new cljs.core.Keyword(null,"file-excerpt","file-excerpt",-1132330744));
if(cljs.core.truth_(file_excerpt)){
var map__11034 = file_excerpt;
var map__11034__$1 = (((((!((map__11034 == null))))?(((((map__11034.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11034.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11034):map__11034);
var start_line = cljs.core.get.call(null,map__11034__$1,new cljs.core.Keyword(null,"start-line","start-line",-41746654));
var path = cljs.core.get.call(null,map__11034__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var excerpt = cljs.core.get.call(null,map__11034__$1,new cljs.core.Keyword(null,"excerpt","excerpt",219850763));
var lines = cljs.core.map_indexed.call(null,(function (i,l){
var ln = (i + start_line);
return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[((cljs.core._EQ_.call(null,line,ln))?new cljs.core.Keyword(null,"error-in-code","error-in-code",-1661931357):new cljs.core.Keyword(null,"code-line","code-line",-2138627853)),ln,l],null));
}),clojure.string.split_lines.call(null,excerpt));
var vec__11035 = cljs.core.split_with.call(null,(function (p1__11030_SHARP_){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"error-in-code","error-in-code",-1661931357),cljs.core.first.call(null,p1__11030_SHARP_));
}),lines);
var begin = cljs.core.nth.call(null,vec__11035,(0),null);
var end = cljs.core.nth.call(null,vec__11035,(1),null);
return cljs.core.concat.call(null,cljs.core.take_last.call(null,(5),begin),cljs.core.take.call(null,(1),end),figwheel.core.pointer_message_lines.call(null,message_data),cljs.core.take.call(null,(5),cljs.core.rest.call(null,end)));
} else {
return null;
}
});
figwheel.core.file_line_column = (function figwheel$core$file_line_column(p__11039){
var map__11040 = p__11039;
var map__11040__$1 = (((((!((map__11040 == null))))?(((((map__11040.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11040.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11040):map__11040);
var file = cljs.core.get.call(null,map__11040__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__11040__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__11040__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__11042 = "";
var G__11042__$1 = (cljs.core.truth_(file)?[G__11042,"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__11042);
var G__11042__$2 = (cljs.core.truth_(line)?[G__11042__$1," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__11042__$1);
if(cljs.core.truth_((function (){var and__4174__auto__ = line;
if(cljs.core.truth_(and__4174__auto__)){
return column;
} else {
return and__4174__auto__;
}
})())){
return [G__11042__$2,", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__11042__$2;
}
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.core !== 'undefined') && (typeof figwheel.core.logger !== 'undefined')){
} else {
figwheel.core.logger = goog.log.getLogger("Figwheel");
}

figwheel.core.console_logging = (function figwheel$core$console_logging(){
if(cljs.core.truth_(goog.object.get(goog.debug.Console,"instance"))){
} else {
var c_11097 = (new goog.debug.Console());
var G__11049_11098 = c_11097.getFormatter();
goog.object.set(G__11049_11098,"showAbsoluteTime",false);

goog.object.set(G__11049_11098,"showRelativeTime",false);


goog.object.set(goog.debug.Console,"instance",c_11097);

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
goog.exportSymbol('figwheel.core.console_logging', figwheel.core.console_logging);

if((typeof figwheel !== 'undefined') && (typeof figwheel.core !== 'undefined') && (typeof figwheel.core.log_console !== 'undefined')){
} else {
figwheel.core.log_console = figwheel.core.console_logging.call(null);
}

figwheel.core.event_target = (((typeof document !== 'undefined'))?document:(new goog.events.EventTarget()));
goog.exportSymbol('figwheel.core.event_target', figwheel.core.event_target);

if((typeof figwheel !== 'undefined') && (typeof figwheel.core !== 'undefined') && (typeof figwheel.core.listener_key_map !== 'undefined')){
} else {
figwheel.core.listener_key_map = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}

figwheel.core.unlisten = (function figwheel$core$unlisten(ky,event_name){
var temp__5735__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.core.listener_key_map),ky);
if(cljs.core.truth_(temp__5735__auto__)){
var f = temp__5735__auto__;
return figwheel.core.event_target.removeEventListener(cljs.core.name.call(null,event_name),f);
} else {
return null;
}
});

figwheel.core.listen = (function figwheel$core$listen(ky,event_name,f){
figwheel.core.unlisten.call(null,ky,event_name);

figwheel.core.event_target.addEventListener(cljs.core.name.call(null,event_name),f);

return cljs.core.swap_BANG_.call(null,figwheel.core.listener_key_map,cljs.core.assoc,ky,f);
});

figwheel.core.dispatch_event = (function figwheel$core$dispatch_event(event_name,data){
return figwheel.core.event_target.dispatchEvent((function (){var G__11050 = (((figwheel.core.event_target instanceof goog.events.EventTarget))?(new goog.events.Event(cljs.core.name.call(null,event_name),figwheel.core.event_target)):(new Event(cljs.core.name.call(null,event_name),figwheel.core.event_target)));
goog.object.add(G__11050,"data",(function (){var or__4185__auto__ = data;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());

return G__11050;
})());
});

figwheel.core.event_data = (function figwheel$core$event_data(e){
return goog.object.get((function (){var temp__5733__auto__ = e.event_;
if(cljs.core.truth_(temp__5733__auto__)){
var e__$1 = temp__5733__auto__;
return e__$1;
} else {
return e;
}
})(),"data");
});


/** @define {boolean} */
goog.define("figwheel.core.load_warninged_code",false);


/** @define {boolean} */
goog.define("figwheel.core.heads_up_display",true);

if((typeof figwheel !== 'undefined') && (typeof figwheel.core !== 'undefined') && (typeof figwheel.core.state !== 'undefined')){
} else {
figwheel.core.state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),cljs.core.PersistentArrayMap.EMPTY], null));
}

figwheel.core.heads_up_display_QMARK_ = (function figwheel$core$heads_up_display_QMARK_(){
return ((figwheel.core.heads_up_display) && ((!((goog.global.document == null)))));
});

var last_reload_timestamp_11099 = cljs.core.atom.call(null,(0));
var promise_chain_11100 = (new goog.Promise((function (r,_){
return r.call(null,true);
})));
figwheel.core.render_watcher = (function figwheel$core$render_watcher(_,___$1,o,n){
if(figwheel.core.heads_up_display_QMARK_.call(null)){
var temp__5733__auto__ = (function (){var temp__5735__auto__ = cljs.core.get_in.call(null,n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"reload-started","reload-started",-1932451477)], null));
if(cljs.core.truth_(temp__5735__auto__)){
var ts = temp__5735__auto__;
if((cljs.core.deref.call(null,last_reload_timestamp_11099) < ts)){
return ts;
} else {
return false;
}
} else {
return null;
}
})();
if(cljs.core.truth_(temp__5733__auto__)){
var ts = temp__5733__auto__;
var warnings = cljs.core.not_empty.call(null,cljs.core.get_in.call(null,n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"warnings","warnings",-735437651)], null)));
var exception = cljs.core.get_in.call(null,n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"exception","exception",-335277064)], null));
cljs.core.reset_BANG_.call(null,last_reload_timestamp_11099,ts);

if(cljs.core.truth_(warnings)){
return promise_chain_11100.then((function (){
var warn = cljs.core.first.call(null,warnings);
var _STAR_inline_code_message_max_column_STAR__orig_val__11051 = figwheel.core._STAR_inline_code_message_max_column_STAR_;
var _STAR_inline_code_message_max_column_STAR__temp_val__11052 = (132);
(figwheel.core._STAR_inline_code_message_max_column_STAR_ = _STAR_inline_code_message_max_column_STAR__temp_val__11052);

try{return figwheel.tools.heads_up.display_warning.call(null,cljs.core.assoc.call(null,warn,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185),figwheel.core.inline_message_display_data.call(null,warn))).then((function (){
var seq__11053 = cljs.core.seq.call(null,cljs.core.rest.call(null,warnings));
var chunk__11054 = null;
var count__11055 = (0);
var i__11056 = (0);
while(true){
if((i__11056 < count__11055)){
var w = cljs.core._nth.call(null,chunk__11054,i__11056);
figwheel.tools.heads_up.append_warning_message.call(null,w);


var G__11101 = seq__11053;
var G__11102 = chunk__11054;
var G__11103 = count__11055;
var G__11104 = (i__11056 + (1));
seq__11053 = G__11101;
chunk__11054 = G__11102;
count__11055 = G__11103;
i__11056 = G__11104;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__11053);
if(temp__5735__auto__){
var seq__11053__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11053__$1)){
var c__4609__auto__ = cljs.core.chunk_first.call(null,seq__11053__$1);
var G__11105 = cljs.core.chunk_rest.call(null,seq__11053__$1);
var G__11106 = c__4609__auto__;
var G__11107 = cljs.core.count.call(null,c__4609__auto__);
var G__11108 = (0);
seq__11053 = G__11105;
chunk__11054 = G__11106;
count__11055 = G__11107;
i__11056 = G__11108;
continue;
} else {
var w = cljs.core.first.call(null,seq__11053__$1);
figwheel.tools.heads_up.append_warning_message.call(null,w);


var G__11109 = cljs.core.next.call(null,seq__11053__$1);
var G__11110 = null;
var G__11111 = (0);
var G__11112 = (0);
seq__11053 = G__11109;
chunk__11054 = G__11110;
count__11055 = G__11111;
i__11056 = G__11112;
continue;
}
} else {
return null;
}
}
break;
}
}));
}finally {(figwheel.core._STAR_inline_code_message_max_column_STAR_ = _STAR_inline_code_message_max_column_STAR__orig_val__11051);
}}));
} else {
if(cljs.core.truth_(exception)){
return promise_chain_11100.then((function (){
var _STAR_inline_code_message_max_column_STAR__orig_val__11057 = figwheel.core._STAR_inline_code_message_max_column_STAR_;
var _STAR_inline_code_message_max_column_STAR__temp_val__11058 = (132);
(figwheel.core._STAR_inline_code_message_max_column_STAR_ = _STAR_inline_code_message_max_column_STAR__temp_val__11058);

try{return figwheel.tools.heads_up.display_exception.call(null,cljs.core.assoc.call(null,exception,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185),figwheel.core.inline_message_display_data.call(null,exception)));
}finally {(figwheel.core._STAR_inline_code_message_max_column_STAR_ = _STAR_inline_code_message_max_column_STAR__orig_val__11057);
}}));
} else {
return promise_chain_11100.then((function (){
return figwheel.tools.heads_up.flash_loaded.call(null);
}));

}
}
} else {
return null;
}
} else {
return null;
}
});

cljs.core.add_watch.call(null,figwheel.core.state,new cljs.core.Keyword("figwheel.core","render-watcher","figwheel.core/render-watcher",2046135910),figwheel.core.render_watcher);

figwheel.core.immutable_ns_QMARK_ = (function figwheel$core$immutable_ns_QMARK_(ns){
var ns__$1 = cljs.core.name.call(null,ns);
var or__4185__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, ["cljs.nodejs",null,"goog",null,"figwheel.connect",null,"cljs.core",null,"figwheel.preload",null], null), null).call(null,ns__$1);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return ((goog.string.startsWith("clojure.",ns__$1)) || (goog.string.startsWith("goog.",ns__$1)));
}
});

figwheel.core.name__GT_path = (function figwheel$core$name__GT_path(ns){
return goog.object.get(goog.dependencies_.nameToPath,ns);
});

figwheel.core.provided_QMARK_ = (function figwheel$core$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.core.name__GT_path.call(null,cljs.core.name.call(null,ns)));
});

figwheel.core.ns_exists_QMARK_ = (function figwheel$core$ns_exists_QMARK_(ns){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,ns),".")) == null)));
});

figwheel.core.reload_ns_QMARK_ = (function figwheel$core$reload_ns_QMARK_(namespace){
var meta_data = cljs.core.meta.call(null,namespace);
if(cljs.core.not.call(null,figwheel.core.immutable_ns_QMARK_.call(null,namespace))){
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_data))){
var or__4185__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_data);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var or__4185__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data);
if(cljs.core.truth_(or__4185__auto____$1)){
return or__4185__auto____$1;
} else {
var or__4185__auto____$2 = figwheel.core.provided_QMARK_.call(null,namespace);
if(cljs.core.truth_(or__4185__auto____$2)){
return or__4185__auto____$2;
} else {
return figwheel.core.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return false;
}
} else {
return false;
}
});

figwheel.core.call_hooks = (function figwheel$core$call_hooks(var_args){
var args__4795__auto__ = [];
var len__4789__auto___11113 = arguments.length;
var i__4790__auto___11114 = (0);
while(true){
if((i__4790__auto___11114 < len__4789__auto___11113)){
args__4795__auto__.push((arguments[i__4790__auto___11114]));

var G__11115 = (i__4790__auto___11114 + (1));
i__4790__auto___11114 = G__11115;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return figwheel.core.call_hooks.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(figwheel.core.call_hooks.cljs$core$IFn$_invoke$arity$variadic = (function (hook_key,args){
var hooks = cljs.core.keep.call(null,(function (p__11061){
var vec__11062 = p__11061;
var n = cljs.core.nth.call(null,vec__11062,(0),null);
var mdata = cljs.core.nth.call(null,vec__11062,(1),null);
var temp__5735__auto__ = cljs.core.get_in.call(null,mdata,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"figwheel-hooks","figwheel-hooks",720015356),hook_key], null));
if(cljs.core.truth_(temp__5735__auto__)){
var f = temp__5735__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,f], null);
} else {
return null;
}
}),new cljs.core.Keyword("figwheel.core","metadata","figwheel.core/metadata",-720139885).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,figwheel.core.state)));
var seq__11065 = cljs.core.seq.call(null,hooks);
var chunk__11066 = null;
var count__11067 = (0);
var i__11068 = (0);
while(true){
if((i__11068 < count__11067)){
var vec__11075 = cljs.core._nth.call(null,chunk__11066,i__11068);
var n = cljs.core.nth.call(null,vec__11075,(0),null);
var f = cljs.core.nth.call(null,vec__11075,(1),null);
var temp__5733__auto___11116 = cljs.core.reduce.call(null,((function (seq__11065,chunk__11066,count__11067,i__11068,vec__11075,n,f,hooks){
return (function (p1__11043_SHARP_,p2__11044_SHARP_){
if(cljs.core.truth_(p1__11043_SHARP_)){
return goog.object.get(p1__11043_SHARP_,p2__11044_SHARP_);
} else {
return null;
}
});})(seq__11065,chunk__11066,count__11067,i__11068,vec__11075,n,f,hooks))
,goog.global,cljs.core.map.call(null,cljs.core.str,cljs.core.concat.call(null,clojure.string.split.call(null,n,/\./),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [f], null))));
if(cljs.core.truth_(temp__5733__auto___11116)){
var hook_11117 = temp__5733__auto___11116;
goog.log.info(figwheel.core.logger,["Calling ",cljs.core.pr_str.call(null,hook_key)," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));

cljs.core.apply.call(null,hook_11117,args);
} else {
goog.log.warning(figwheel.core.logger,["Unable to find ",cljs.core.pr_str.call(null,hook_key)," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));
}


var G__11118 = seq__11065;
var G__11119 = chunk__11066;
var G__11120 = count__11067;
var G__11121 = (i__11068 + (1));
seq__11065 = G__11118;
chunk__11066 = G__11119;
count__11067 = G__11120;
i__11068 = G__11121;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__11065);
if(temp__5735__auto__){
var seq__11065__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11065__$1)){
var c__4609__auto__ = cljs.core.chunk_first.call(null,seq__11065__$1);
var G__11122 = cljs.core.chunk_rest.call(null,seq__11065__$1);
var G__11123 = c__4609__auto__;
var G__11124 = cljs.core.count.call(null,c__4609__auto__);
var G__11125 = (0);
seq__11065 = G__11122;
chunk__11066 = G__11123;
count__11067 = G__11124;
i__11068 = G__11125;
continue;
} else {
var vec__11078 = cljs.core.first.call(null,seq__11065__$1);
var n = cljs.core.nth.call(null,vec__11078,(0),null);
var f = cljs.core.nth.call(null,vec__11078,(1),null);
var temp__5733__auto___11126 = cljs.core.reduce.call(null,((function (seq__11065,chunk__11066,count__11067,i__11068,vec__11078,n,f,seq__11065__$1,temp__5735__auto__,hooks){
return (function (p1__11043_SHARP_,p2__11044_SHARP_){
if(cljs.core.truth_(p1__11043_SHARP_)){
return goog.object.get(p1__11043_SHARP_,p2__11044_SHARP_);
} else {
return null;
}
});})(seq__11065,chunk__11066,count__11067,i__11068,vec__11078,n,f,seq__11065__$1,temp__5735__auto__,hooks))
,goog.global,cljs.core.map.call(null,cljs.core.str,cljs.core.concat.call(null,clojure.string.split.call(null,n,/\./),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [f], null))));
if(cljs.core.truth_(temp__5733__auto___11126)){
var hook_11127 = temp__5733__auto___11126;
goog.log.info(figwheel.core.logger,["Calling ",cljs.core.pr_str.call(null,hook_key)," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));

cljs.core.apply.call(null,hook_11127,args);
} else {
goog.log.warning(figwheel.core.logger,["Unable to find ",cljs.core.pr_str.call(null,hook_key)," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));
}


var G__11128 = cljs.core.next.call(null,seq__11065__$1);
var G__11129 = null;
var G__11130 = (0);
var G__11131 = (0);
seq__11065 = G__11128;
chunk__11066 = G__11129;
count__11067 = G__11130;
i__11068 = G__11131;
continue;
}
} else {
return null;
}
}
break;
}
}));

(figwheel.core.call_hooks.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(figwheel.core.call_hooks.cljs$lang$applyTo = (function (seq11059){
var G__11060 = cljs.core.first.call(null,seq11059);
var seq11059__$1 = cljs.core.next.call(null,seq11059);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11060,seq11059__$1);
}));


figwheel.core.reload_namespaces = (function figwheel$core$reload_namespaces(namespaces,figwheel_meta){
var figwheel_meta__$1 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__11081){
var vec__11082 = p__11081;
var k = cljs.core.nth.call(null,vec__11082,(0),null);
var v = cljs.core.nth.call(null,vec__11082,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name.call(null,k),v], null);
})),cljs.core.js__GT_clj.call(null,figwheel_meta,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
var namespaces__$1 = cljs.core.map.call(null,(function (p1__11045_SHARP_){
return cljs.core.with_meta.call(null,cljs.core.symbol.call(null,p1__11045_SHARP_),cljs.core.get.call(null,figwheel_meta__$1,p1__11045_SHARP_));
}),namespaces);
cljs.core.swap_BANG_.call(null,figwheel.core.state,(function (p1__11046_SHARP_){
return cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,p1__11046_SHARP_,new cljs.core.Keyword("figwheel.core","metadata","figwheel.core/metadata",-720139885),figwheel_meta__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"reload-started","reload-started",-1932451477)], null),(new Date()).getTime());
}));

var to_reload = (cljs.core.truth_((((!(figwheel.core.load_warninged_code)))?cljs.core.not_empty.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.core.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"warnings","warnings",-735437651)], null))):false))?null:cljs.core.filter.call(null,(function (p1__11047_SHARP_){
return figwheel.core.reload_ns_QMARK_.call(null,p1__11047_SHARP_);
}),namespaces__$1));
if(cljs.core.empty_QMARK_.call(null,to_reload)){
} else {
figwheel.core.call_hooks.call(null,new cljs.core.Keyword(null,"before-load","before-load",-2060117064),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),namespaces__$1], null));

setTimeout((function (){
return figwheel.core.dispatch_event.call(null,new cljs.core.Keyword(null,"figwheel.before-load","figwheel.before-load",58978771),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),namespaces__$1], null));
}),(0));
}

var seq__11085_11132 = cljs.core.seq.call(null,to_reload);
var chunk__11086_11133 = null;
var count__11087_11134 = (0);
var i__11088_11135 = (0);
while(true){
if((i__11088_11135 < count__11087_11134)){
var ns_11136 = cljs.core._nth.call(null,chunk__11086_11133,i__11088_11135);
goog.require(cljs.core.name.call(null,ns_11136),true);


var G__11137 = seq__11085_11132;
var G__11138 = chunk__11086_11133;
var G__11139 = count__11087_11134;
var G__11140 = (i__11088_11135 + (1));
seq__11085_11132 = G__11137;
chunk__11086_11133 = G__11138;
count__11087_11134 = G__11139;
i__11088_11135 = G__11140;
continue;
} else {
var temp__5735__auto___11141 = cljs.core.seq.call(null,seq__11085_11132);
if(temp__5735__auto___11141){
var seq__11085_11142__$1 = temp__5735__auto___11141;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11085_11142__$1)){
var c__4609__auto___11143 = cljs.core.chunk_first.call(null,seq__11085_11142__$1);
var G__11144 = cljs.core.chunk_rest.call(null,seq__11085_11142__$1);
var G__11145 = c__4609__auto___11143;
var G__11146 = cljs.core.count.call(null,c__4609__auto___11143);
var G__11147 = (0);
seq__11085_11132 = G__11144;
chunk__11086_11133 = G__11145;
count__11087_11134 = G__11146;
i__11088_11135 = G__11147;
continue;
} else {
var ns_11148 = cljs.core.first.call(null,seq__11085_11142__$1);
goog.require(cljs.core.name.call(null,ns_11148),true);


var G__11149 = cljs.core.next.call(null,seq__11085_11142__$1);
var G__11150 = null;
var G__11151 = (0);
var G__11152 = (0);
seq__11085_11132 = G__11149;
chunk__11086_11133 = G__11150;
count__11087_11134 = G__11151;
i__11088_11135 = G__11152;
continue;
}
} else {
}
}
break;
}

var after_reload_fn_11153 = (function (){
try{if(cljs.core.truth_(cljs.core.not_empty.call(null,to_reload))){
goog.log.info(figwheel.core.logger,["loaded ",cljs.core.pr_str.call(null,to_reload)].join(''));

figwheel.core.call_hooks.call(null,new cljs.core.Keyword(null,"after-load","after-load",-1278503285),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reloaded-namespaces","reloaded-namespaces",1589557425),to_reload], null));

figwheel.core.dispatch_event.call(null,new cljs.core.Keyword(null,"figwheel.after-load","figwheel.after-load",-1913099389),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reloaded-namespaces","reloaded-namespaces",1589557425),to_reload], null));
} else {
}

var temp__5735__auto__ = cljs.core.not_empty.call(null,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.set.call(null,to_reload)),namespaces__$1));
if(cljs.core.truth_(temp__5735__auto__)){
var not_loaded = temp__5735__auto__;
return goog.log.info(figwheel.core.logger,["did not load ",cljs.core.pr_str.call(null,not_loaded)].join(''));
} else {
return null;
}
}finally {cljs.core.swap_BANG_.call(null,figwheel.core.state,cljs.core.assoc,new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),cljs.core.PersistentArrayMap.EMPTY);
}});
if((((typeof figwheel !== 'undefined') && (typeof figwheel.repl !== 'undefined')) && ((typeof figwheel !== 'undefined') && (typeof figwheel.repl !== 'undefined') && (typeof figwheel.repl.after_reloads !== 'undefined')))){
figwheel.repl.after_reloads(after_reload_fn_11153);
} else {
setTimeout(after_reload_fn_11153,(100));
}

return null;
});
goog.exportSymbol('figwheel.core.reload_namespaces', figwheel.core.reload_namespaces);

figwheel.core.compile_warnings = (function figwheel$core$compile_warnings(warnings){
if(cljs.core.empty_QMARK_.call(null,warnings)){
} else {
setTimeout((function (){
return figwheel.core.dispatch_event.call(null,new cljs.core.Keyword(null,"figwheel.compile-warnings","figwheel.compile-warnings",-2015032448),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"warnings","warnings",-735437651),warnings], null));
}),(0));
}

cljs.core.swap_BANG_.call(null,figwheel.core.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"warnings","warnings",-735437651)], null),cljs.core.concat,warnings);

var seq__11089 = cljs.core.seq.call(null,warnings);
var chunk__11090 = null;
var count__11091 = (0);
var i__11092 = (0);
while(true){
if((i__11092 < count__11091)){
var warning = cljs.core._nth.call(null,chunk__11090,i__11092);
goog.log.warning(figwheel.core.logger,["Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(warning))," in ",figwheel.core.file_line_column.call(null,warning)].join(''));


var G__11154 = seq__11089;
var G__11155 = chunk__11090;
var G__11156 = count__11091;
var G__11157 = (i__11092 + (1));
seq__11089 = G__11154;
chunk__11090 = G__11155;
count__11091 = G__11156;
i__11092 = G__11157;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__11089);
if(temp__5735__auto__){
var seq__11089__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11089__$1)){
var c__4609__auto__ = cljs.core.chunk_first.call(null,seq__11089__$1);
var G__11158 = cljs.core.chunk_rest.call(null,seq__11089__$1);
var G__11159 = c__4609__auto__;
var G__11160 = cljs.core.count.call(null,c__4609__auto__);
var G__11161 = (0);
seq__11089 = G__11158;
chunk__11090 = G__11159;
count__11091 = G__11160;
i__11092 = G__11161;
continue;
} else {
var warning = cljs.core.first.call(null,seq__11089__$1);
goog.log.warning(figwheel.core.logger,["Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(warning))," in ",figwheel.core.file_line_column.call(null,warning)].join(''));


var G__11162 = cljs.core.next.call(null,seq__11089__$1);
var G__11163 = null;
var G__11164 = (0);
var G__11165 = (0);
seq__11089 = G__11162;
chunk__11090 = G__11163;
count__11091 = G__11164;
i__11092 = G__11165;
continue;
}
} else {
return null;
}
}
break;
}
});
goog.exportSymbol('figwheel.core.compile_warnings', figwheel.core.compile_warnings);

figwheel.core.compile_warnings_remote = (function figwheel$core$compile_warnings_remote(warnings_json){
return figwheel.core.compile_warnings.call(null,cljs.core.js__GT_clj.call(null,warnings_json,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
});
goog.exportSymbol('figwheel.core.compile_warnings_remote', figwheel.core.compile_warnings_remote);

figwheel.core.handle_exception = (function figwheel$core$handle_exception(p__11093){
var map__11094 = p__11093;
var map__11094__$1 = (((((!((map__11094 == null))))?(((((map__11094.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11094.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11094):map__11094);
var exception_data = map__11094__$1;
var file = cljs.core.get.call(null,map__11094__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var type = cljs.core.get.call(null,map__11094__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__11094__$1,new cljs.core.Keyword(null,"message","message",-406056002));
try{setTimeout((function (){
return figwheel.core.dispatch_event.call(null,new cljs.core.Keyword(null,"figwheel.compile-exception","figwheel.compile-exception",1092880746),exception_data);
}),(0));

cljs.core.swap_BANG_.call(null,figwheel.core.state,(function (p1__11048_SHARP_){
return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,p1__11048_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"reload-started","reload-started",-1932451477)], null),(new Date()).getTime()),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"exception","exception",-335277064)], null),exception_data);
}));

return goog.log.warning(figwheel.core.logger,(function (){var G__11096 = "Compile Exception - ";
var G__11096__$1 = (cljs.core.truth_((function (){var or__4185__auto__ = type;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return message;
}
})())?[G__11096,clojure.string.join.call(null," : ",cljs.core.filter.call(null,cljs.core.some_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,message], null)))].join(''):G__11096);
if(cljs.core.truth_(file)){
return [G__11096__$1," in ",figwheel.core.file_line_column.call(null,exception_data)].join('');
} else {
return G__11096__$1;
}
})());
}finally {cljs.core.swap_BANG_.call(null,figwheel.core.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715)], null),cljs.core.PersistentArrayMap.EMPTY);
}});
goog.exportSymbol('figwheel.core.handle_exception', figwheel.core.handle_exception);

figwheel.core.handle_exception_remote = (function figwheel$core$handle_exception_remote(exception_data){
return figwheel.core.handle_exception.call(null,cljs.core.js__GT_clj.call(null,exception_data,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
});
goog.exportSymbol('figwheel.core.handle_exception_remote', figwheel.core.handle_exception_remote);

//# sourceMappingURL=core.js.map
