// Compiled by ClojureScript 1.10.597 {:target :nodejs}
goog.provide('patroclus.test.runner_visual');
goog.require('cljs.core');
goog.require('cljs_test_display.core');
goog.require('figwheel.main.testing');
goog.require('patroclus.renderer.arithmetic_test');
goog.require('patroclus.main.arithmetic_test');
cljs.test.run_block.call(null,(function (){var env10869 = cljs_test_display.core.init_BANG_.call(null);
var summary10870 = cljs.core.volatile_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"summary","summary",380847952),new cljs.core.Keyword(null,"fail","fail",1706214930),(0),new cljs.core.Keyword(null,"error","error",-978969032),(0),new cljs.core.Keyword(null,"pass","pass",1574159993),(0),new cljs.core.Keyword(null,"test","test",577538877),(0)], null));
return cljs.core.concat.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
cljs.test.set_env_BANG_.call(null,env10869);

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"patroclus.renderer.arithmetic-test","patroclus.renderer.arithmetic-test",953309323,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033)], null));

return cljs.test.block.call(null,(function (){var env__10462__auto__ = cljs.test.get_current_env.call(null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
if((env__10462__auto__ == null)){
cljs.test.set_env_BANG_.call(null,cljs.test.empty_env.call(null));
} else {
}


return null;
})], null),cljs.test.test_vars_block.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Var(function(){return patroclus.renderer.arithmetic_test.multiply_test;},new cljs.core.Symbol("patroclus.renderer.arithmetic-test","multiply-test","patroclus.renderer.arithmetic-test/multiply-test",1338412605,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"patroclus.renderer.arithmetic-test","patroclus.renderer.arithmetic-test",953309323,null),new cljs.core.Symbol(null,"multiply-test","multiply-test",373518316,null),"src/test/patroclus/renderer/arithmetic_test.cljs",23,1,5,5,cljs.core.List.EMPTY,null,(cljs.core.truth_(patroclus.renderer.arithmetic_test.multiply_test)?patroclus.renderer.arithmetic_test.multiply_test.cljs$lang$test:null)])),new cljs.core.Var(function(){return patroclus.renderer.arithmetic_test.multiply_test_2;},new cljs.core.Symbol("patroclus.renderer.arithmetic-test","multiply-test-2","patroclus.renderer.arithmetic-test/multiply-test-2",-966267701,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"patroclus.renderer.arithmetic-test","patroclus.renderer.arithmetic-test",953309323,null),new cljs.core.Symbol(null,"multiply-test-2","multiply-test-2",2128120474,null),"src/test/patroclus/renderer/arithmetic_test.cljs",25,1,8,8,cljs.core.List.EMPTY,null,(cljs.core.truth_(patroclus.renderer.arithmetic_test.multiply_test_2)?patroclus.renderer.arithmetic_test.multiply_test_2.cljs$lang$test:null)]))], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
if((env__10462__auto__ == null)){
return cljs.test.clear_env_BANG_.call(null);
} else {
return null;
}
})], null));
})());
}),(function (){
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"patroclus.renderer.arithmetic-test","patroclus.renderer.arithmetic-test",953309323,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645)], null));
})], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return cljs.core._vreset_BANG_.call(null,summary10870,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core._PLUS_).call(null,cljs.core._deref.call(null,summary10870),new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_.call(null))));
})], null)),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
cljs.test.set_env_BANG_.call(null,env10869);

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"patroclus.main.arithmetic-test","patroclus.main.arithmetic-test",-980507693,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033)], null));

return cljs.test.block.call(null,(function (){var env__10462__auto__ = cljs.test.get_current_env.call(null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
if((env__10462__auto__ == null)){
cljs.test.set_env_BANG_.call(null,cljs.test.empty_env.call(null));
} else {
}


return null;
})], null),cljs.test.test_vars_block.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Var(function(){return patroclus.main.arithmetic_test.add_test;},new cljs.core.Symbol("patroclus.main.arithmetic-test","add-test","patroclus.main.arithmetic-test/add-test",250650466,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"patroclus.main.arithmetic-test","patroclus.main.arithmetic-test",-980507693,null),new cljs.core.Symbol(null,"add-test","add-test",1369291035,null),"/Users/brian/patroclus/src/test/patroclus/main/arithmetic_test.cljs",18,1,5,5,cljs.core.List.EMPTY,null,(cljs.core.truth_(patroclus.main.arithmetic_test.add_test)?patroclus.main.arithmetic_test.add_test.cljs$lang$test:null)])),new cljs.core.Var(function(){return patroclus.main.arithmetic_test.add_test_2;},new cljs.core.Symbol("patroclus.main.arithmetic-test","add-test-2","patroclus.main.arithmetic-test/add-test-2",614868863,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"patroclus.main.arithmetic-test","patroclus.main.arithmetic-test",-980507693,null),new cljs.core.Symbol(null,"add-test-2","add-test-2",377162932,null),"/Users/brian/patroclus/src/test/patroclus/main/arithmetic_test.cljs",20,1,8,8,cljs.core.List.EMPTY,null,(cljs.core.truth_(patroclus.main.arithmetic_test.add_test_2)?patroclus.main.arithmetic_test.add_test_2.cljs$lang$test:null)]))], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
if((env__10462__auto__ == null)){
return cljs.test.clear_env_BANG_.call(null);
} else {
return null;
}
})], null));
})());
}),(function (){
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"patroclus.main.arithmetic-test","patroclus.main.arithmetic-test",-980507693,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645)], null));
})], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return cljs.core._vreset_BANG_.call(null,summary10870,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core._PLUS_).call(null,cljs.core._deref.call(null,summary10870),new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_.call(null))));
})], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
cljs.test.set_env_BANG_.call(null,env10869);

cljs.test.do_report.call(null,cljs.core.deref.call(null,summary10870));

cljs.test.report.call(null,cljs.core.assoc.call(null,cljs.core.deref.call(null,summary10870),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-run-tests","end-run-tests",267300563)));

return cljs.test.clear_env_BANG_.call(null);
})], null));
})());

if(cljs.test.successful_QMARK_.call(null,cljs.core.deref.call(null,figwheel.main.testing.test_result_data))){
} else {
throw cljs.core.ex_info.call(null,"ClojureScript test run failed",cljs.core.deref.call(null,figwheel.main.testing.test_result_data));
}

//# sourceMappingURL=runner_visual.js.map
