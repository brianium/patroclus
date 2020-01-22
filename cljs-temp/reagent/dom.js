// Compiled by ClojureScript 1.10.597 {:target :nodejs}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('reagent.impl.util');
goog.require('reagent.impl.template');
goog.require('reagent.impl.batching');
goog.require('reagent.ratom');
goog.require('reagent.debug');
reagent.dom.node$module$react_dom = require('react-dom');
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.imported !== 'undefined')){
} else {
reagent.dom.imported = null;
}
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.dissoc,container);

return reagent.dom.node$module$react_dom.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__8860 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__8861 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__8861);

try{return reagent.dom.node$module$react_dom.render(comp.call(null),container,(function (){
var _STAR_always_update_STAR__orig_val__8862 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__8863 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__8863);

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

reagent.impl.batching.flush_after_render.call(null);

if((!((callback == null)))){
return callback.call(null);
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__8862);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__8860);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp.call(null,comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__8865 = arguments.length;
switch (G__8865) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.call(null,comp,container,null);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
reagent.ratom.flush_BANG_.call(null);

var f = (function (){
return reagent.impl.template.as_element.call(null,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});
return reagent.dom.render_comp.call(null,f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp.call(null,container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return reagent.dom.node$module$react_dom.findDOMNode(this$);
});
(reagent.impl.template.find_dom_node = reagent.dom.dom_node);
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_.call(null);

var seq__8867_8871 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.dom.roots)));
var chunk__8868_8872 = null;
var count__8869_8873 = (0);
var i__8870_8874 = (0);
while(true){
if((i__8870_8874 < count__8869_8873)){
var v_8875 = cljs.core._nth.call(null,chunk__8868_8872,i__8870_8874);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_8875);


var G__8876 = seq__8867_8871;
var G__8877 = chunk__8868_8872;
var G__8878 = count__8869_8873;
var G__8879 = (i__8870_8874 + (1));
seq__8867_8871 = G__8876;
chunk__8868_8872 = G__8877;
count__8869_8873 = G__8878;
i__8870_8874 = G__8879;
continue;
} else {
var temp__5735__auto___8880 = cljs.core.seq.call(null,seq__8867_8871);
if(temp__5735__auto___8880){
var seq__8867_8881__$1 = temp__5735__auto___8880;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8867_8881__$1)){
var c__4609__auto___8882 = cljs.core.chunk_first.call(null,seq__8867_8881__$1);
var G__8883 = cljs.core.chunk_rest.call(null,seq__8867_8881__$1);
var G__8884 = c__4609__auto___8882;
var G__8885 = cljs.core.count.call(null,c__4609__auto___8882);
var G__8886 = (0);
seq__8867_8871 = G__8883;
chunk__8868_8872 = G__8884;
count__8869_8873 = G__8885;
i__8870_8874 = G__8886;
continue;
} else {
var v_8887 = cljs.core.first.call(null,seq__8867_8881__$1);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_8887);


var G__8888 = cljs.core.next.call(null,seq__8867_8881__$1);
var G__8889 = null;
var G__8890 = (0);
var G__8891 = (0);
seq__8867_8871 = G__8888;
chunk__8868_8872 = G__8889;
count__8869_8873 = G__8890;
i__8870_8874 = G__8891;
continue;
}
} else {
}
}
break;
}

return "Updated";
});

//# sourceMappingURL=dom.js.map
