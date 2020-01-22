// Compiled by ClojureScript 1.10.597 {:target :nodejs}
goog.provide('patroclus.renderer.core');
goog.require('cljs.core');
goog.require('reagent.core');
if((typeof patroclus !== 'undefined') && (typeof patroclus.renderer !== 'undefined') && (typeof patroclus.renderer.core !== 'undefined') && (typeof patroclus.renderer.core.timer !== 'undefined')){
} else {
patroclus.renderer.core.timer = reagent.core.atom.call(null,(new Date()));
}
if((typeof patroclus !== 'undefined') && (typeof patroclus.renderer !== 'undefined') && (typeof patroclus.renderer.core !== 'undefined') && (typeof patroclus.renderer.core.time_color !== 'undefined')){
} else {
patroclus.renderer.core.time_color = reagent.core.atom.call(null,"#f34");
}
if((typeof patroclus !== 'undefined') && (typeof patroclus.renderer !== 'undefined') && (typeof patroclus.renderer.core !== 'undefined') && (typeof patroclus.renderer.core.time_updater !== 'undefined')){
} else {
patroclus.renderer.core.time_updater = setInterval((function (){
return cljs.core.reset_BANG_.call(null,patroclus.renderer.core.timer,(new Date()));
}),(1000));
}
patroclus.renderer.core.greeting = (function patroclus$renderer$core$greeting(message){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),message], null);
});
patroclus.renderer.core.clock = (function patroclus$renderer$core$clock(){
var time_str = cljs.core.first.call(null,clojure.string.split.call(null,cljs.core.deref.call(null,patroclus.renderer.core.timer).toTimeString()," "));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.example-clock","div.example-clock",1559289088),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),cljs.core.deref.call(null,patroclus.renderer.core.time_color)], null)], null),time_str], null);
});
patroclus.renderer.core.color_input = (function patroclus$renderer$core$color_input(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.color-input","div.color-input",-879914246),"Time color dude ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,patroclus.renderer.core.time_color),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__16563_SHARP_){
return cljs.core.reset_BANG_.call(null,patroclus.renderer.core.time_color,p1__16563_SHARP_.target.value);
})], null)], null)], null);
});
patroclus.renderer.core.simple_example = (function patroclus$renderer$core$simple_example(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [patroclus.renderer.core.greeting,"Hello world, it is now"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [patroclus.renderer.core.clock], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [patroclus.renderer.core.color_input], null)], null);
});
patroclus.renderer.core.start = (function patroclus$renderer$core$start(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [patroclus.renderer.core.simple_example], null),document.getElementById("app"));
});
patroclus.renderer.core.start.call(null);

//# sourceMappingURL=core.js.map
