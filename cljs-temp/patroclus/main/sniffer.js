// Compiled by ClojureScript 1.10.597 {:target :nodejs}
goog.provide('patroclus.main.sniffer');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.spec.alpha');
goog.require('cljs.core.async.impl.channels');
patroclus.main.sniffer.cap = require("cap");
patroclus.main.sniffer.Cap = patroclus.main.sniffer.cap.Cap;
patroclus.main.sniffer.decoders = patroclus.main.sniffer.cap.decoders;
patroclus.main.sniffer.PROTOCOL = patroclus.main.sniffer.decoders.PROTOCOL;
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("options","device","options/device",-689962222),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("options","filter","options/filter",1893460500),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("options","match?","options/match?",-237167648),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"address","address",559499426),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null)),cljs.spec.alpha.fspec_impl.call(null,cljs.spec.alpha.spec_impl.call(null,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"address","address",559499426),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null)),cljs.spec.alpha.cat_impl.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"address","address",559499426)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.string_QMARK_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"address","address",559499426),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null)),cljs.spec.alpha.spec_impl.call(null,new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),cljs.core.boolean_QMARK_,null,null),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),null,null,null));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("patroclus.main.sniffer","options","patroclus.main.sniffer/options",-201904980),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("options","device","options/device",-689962222),new cljs.core.Keyword("options","filter","options/filter",1893460500),new cljs.core.Keyword("options","match?","options/match?",-237167648)], null)),cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("options","device","options/device",-689962222),new cljs.core.Keyword("options","filter","options/filter",1893460500),new cljs.core.Keyword("options","match?","options/match?",-237167648)], null),null,null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__24481){
return cljs.core.map_QMARK_.call(null,G__24481);
}),(function (G__24481){
return cljs.core.contains_QMARK_.call(null,G__24481,new cljs.core.Keyword(null,"device","device",1817743352));
}),(function (G__24481){
return cljs.core.contains_QMARK_.call(null,G__24481,new cljs.core.Keyword(null,"filter","filter",-948537934));
}),(function (G__24481){
return cljs.core.contains_QMARK_.call(null,G__24481,new cljs.core.Keyword(null,"match?","match?",-1487756738));
})], null),(function (G__24481){
return ((cljs.core.map_QMARK_.call(null,G__24481)) && (cljs.core.contains_QMARK_.call(null,G__24481,new cljs.core.Keyword(null,"device","device",1817743352))) && (cljs.core.contains_QMARK_.call(null,G__24481,new cljs.core.Keyword(null,"filter","filter",-948537934))) && (cljs.core.contains_QMARK_.call(null,G__24481,new cljs.core.Keyword(null,"match?","match?",-1487756738))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("options","device","options/device",-689962222),new cljs.core.Keyword("options","filter","options/filter",1893460500),new cljs.core.Keyword("options","match?","options/match?",-237167648)], null),null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"device","device",1817743352),new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.Keyword(null,"match?","match?",-1487756738)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"device","device",1817743352))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"filter","filter",-948537934))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"match?","match?",-1487756738)))], null),null])));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("component","channel","component/channel",-1068372059),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","satisfies?","cljs.core/satisfies?",-1074798682,null),new cljs.core.Symbol("impl","ReadPort","impl/ReadPort",1319855696,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),(function (p1__24482_SHARP_){
if((!((p1__24482_SHARP_ == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === p1__24482_SHARP_.cljs$core$async$impl$channels$ReadPort$)))){
return true;
} else {
if((!p1__24482_SHARP_.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.channels.ReadPort,p1__24482_SHARP_);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.channels.ReadPort,p1__24482_SHARP_);
}
}));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("component","cap","component/cap",601092786),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","instance?","cljs.core/instance?",2044751870,null),new cljs.core.Symbol("patroclus.main.sniffer","Cap","patroclus.main.sniffer/Cap",1588502415,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),(function (p1__24484_SHARP_){
return (p1__24484_SHARP_ instanceof patroclus.main.sniffer.Cap);
}));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("patroclus.main.sniffer","component","patroclus.main.sniffer/component",-289800895),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("component","channel","component/channel",-1068372059),new cljs.core.Keyword("component","cap","component/cap",601092786)], null)),cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("component","channel","component/channel",-1068372059),new cljs.core.Keyword("component","cap","component/cap",601092786)], null),null,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__24485){
return cljs.core.map_QMARK_.call(null,G__24485);
}),(function (G__24485){
return cljs.core.contains_QMARK_.call(null,G__24485,new cljs.core.Keyword(null,"channel","channel",734187692));
}),(function (G__24485){
return cljs.core.contains_QMARK_.call(null,G__24485,new cljs.core.Keyword(null,"cap","cap",-817621587));
})], null),(function (G__24485){
return ((cljs.core.map_QMARK_.call(null,G__24485)) && (cljs.core.contains_QMARK_.call(null,G__24485,new cljs.core.Keyword(null,"channel","channel",734187692))) && (cljs.core.contains_QMARK_.call(null,G__24485,new cljs.core.Keyword(null,"cap","cap",-817621587))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("component","channel","component/channel",-1068372059),new cljs.core.Keyword("component","cap","component/cap",601092786)], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"channel","channel",734187692),new cljs.core.Keyword(null,"cap","cap",-817621587)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"channel","channel",734187692))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"cap","cap",-817621587)))], null),null])));
/**
 * Return a packet object created by the cap ethernet decoder
 */
patroclus.main.sniffer.decode_ethernet = (function patroclus$main$sniffer$decode_ethernet(buffer){
return patroclus.main.sniffer.decoders.Ethernet(buffer);
});
/**
 * Return a packet object created by the cap ipv4 decoder
 */
patroclus.main.sniffer.decode_ipv4 = (function patroclus$main$sniffer$decode_ipv4(buffer,offset){
return patroclus.main.sniffer.decoders.IPV4(buffer,offset);
});
/**
 * Get the type of the packet as compared to caps PROTOCOL enum
 */
patroclus.main.sniffer.packet_type = (function patroclus$main$sniffer$packet_type(packet){
return packet.info.type;
});
/**
 * Get the destination of the packet
 */
patroclus.main.sniffer.destination = (function patroclus$main$sniffer$destination(packet){
return packet.info.dstaddr;
});
/**
 * Check if the packet is an ipv4 packet
 */
patroclus.main.sniffer.ipv4_QMARK_ = (function patroclus$main$sniffer$ipv4_QMARK_(packet){
return cljs.core._EQ_.call(null,patroclus.main.sniffer.packet_type.call(null,packet),patroclus.main.sniffer.PROTOCOL.ETHERNET.IPV4);
});
/**
 * Does the packet represent a TCP packet?
 */
patroclus.main.sniffer.tcp_QMARK_ = (function patroclus$main$sniffer$tcp_QMARK_(packet){
return cljs.core._EQ_.call(null,packet.info.protocol,patroclus.main.sniffer.PROTOCOL.IP.TCP);
});
/**
 * Handle TCP packets
 */
patroclus.main.sniffer.handle_tcp = (function patroclus$main$sniffer$handle_tcp(packet,ch,match_QMARK_){
var addr = patroclus.main.sniffer.destination.call(null,packet);
if(cljs.core.truth_(match_QMARK_.call(null,addr))){
var c__22209__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22210__auto__ = (function (){var switch__22186__auto__ = (function (state_24489){
var state_val_24490 = (state_24489[(1)]);
if((state_val_24490 === (1))){
var state_24489__$1 = state_24489;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24489__$1,(2),ch,addr);
} else {
if((state_val_24490 === (2))){
var inst_24487 = (state_24489[(2)]);
var state_24489__$1 = state_24489;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24489__$1,inst_24487);
} else {
return null;
}
}
});
return (function() {
var patroclus$main$sniffer$handle_tcp_$_state_machine__22187__auto__ = null;
var patroclus$main$sniffer$handle_tcp_$_state_machine__22187__auto____0 = (function (){
var statearr_24491 = [null,null,null,null,null,null,null];
(statearr_24491[(0)] = patroclus$main$sniffer$handle_tcp_$_state_machine__22187__auto__);

(statearr_24491[(1)] = (1));

return statearr_24491;
});
var patroclus$main$sniffer$handle_tcp_$_state_machine__22187__auto____1 = (function (state_24489){
while(true){
var ret_value__22188__auto__ = (function (){try{while(true){
var result__22189__auto__ = switch__22186__auto__.call(null,state_24489);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22189__auto__;
}
break;
}
}catch (e24492){if((e24492 instanceof Object)){
var ex__22190__auto__ = e24492;
var statearr_24493_24495 = state_24489;
(statearr_24493_24495[(5)] = ex__22190__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24489);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24492;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24496 = state_24489;
state_24489 = G__24496;
continue;
} else {
return ret_value__22188__auto__;
}
break;
}
});
patroclus$main$sniffer$handle_tcp_$_state_machine__22187__auto__ = function(state_24489){
switch(arguments.length){
case 0:
return patroclus$main$sniffer$handle_tcp_$_state_machine__22187__auto____0.call(this);
case 1:
return patroclus$main$sniffer$handle_tcp_$_state_machine__22187__auto____1.call(this,state_24489);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
patroclus$main$sniffer$handle_tcp_$_state_machine__22187__auto__.cljs$core$IFn$_invoke$arity$0 = patroclus$main$sniffer$handle_tcp_$_state_machine__22187__auto____0;
patroclus$main$sniffer$handle_tcp_$_state_machine__22187__auto__.cljs$core$IFn$_invoke$arity$1 = patroclus$main$sniffer$handle_tcp_$_state_machine__22187__auto____1;
return patroclus$main$sniffer$handle_tcp_$_state_machine__22187__auto__;
})()
})();
var state__22211__auto__ = (function (){var statearr_24494 = f__22210__auto__.call(null);
(statearr_24494[(6)] = c__22209__auto__);

return statearr_24494;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22211__auto__);
}));

return c__22209__auto__;
} else {
return null;
}
});
/**
 * Handle ipv4 packets
 */
patroclus.main.sniffer.handle_ipv4 = (function patroclus$main$sniffer$handle_ipv4(packet,buffer,ch,match_QMARK_){
if(patroclus.main.sniffer.tcp_QMARK_.call(null,packet)){
return patroclus.main.sniffer.handle_tcp.call(null,packet,ch,match_QMARK_);
} else {
return null;
}
});
/**
 * Handle ethernet packets
 */
patroclus.main.sniffer.handle_ethernet = (function patroclus$main$sniffer$handle_ethernet(packet,buffer,ch,match_QMARK_){
if(patroclus.main.sniffer.ipv4_QMARK_.call(null,packet)){
return patroclus.main.sniffer.handle_ipv4.call(null,patroclus.main.sniffer.decode_ipv4.call(null,buffer,packet.offset),buffer,ch,match_QMARK_);
} else {
return null;
}
});
/**
 * Create a handler for packet events
 */
patroclus.main.sniffer.packet_handler = (function patroclus$main$sniffer$packet_handler(link_type,buffer,ch,match_QMARK_){
return (function (){
if(cljs.core._EQ_.call(null,link_type,"ETHERNET")){
return patroclus.main.sniffer.handle_ethernet.call(null,patroclus.main.sniffer.decode_ethernet.call(null,buffer),buffer,ch,match_QMARK_);
} else {
return null;
}
});
});
/**
 * Start listening for packet events using the given pcap filter, device (such as en0), and
 *   a match? function to determine what addresses are sent to the channel returned by thihs function.
 */
patroclus.main.sniffer.start_BANG_ = (function patroclus$main$sniffer$start_BANG_(p__24497){
var map__24498 = p__24497;
var map__24498__$1 = (((((!((map__24498 == null))))?(((((map__24498.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24498.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24498):map__24498);
var match_QMARK_ = cljs.core.get.call(null,map__24498__$1,new cljs.core.Keyword(null,"match?","match?",-1487756738));
var filter = cljs.core.get.call(null,map__24498__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));
var device = cljs.core.get.call(null,map__24498__$1,new cljs.core.Keyword(null,"device","device",1817743352));
var c = (new patroclus.main.sniffer.Cap());
var buffer_size = (((10) * (1024)) * (1024));
var buffer = Buffer.alloc((65535));
var ch = cljs.core.async.chan.call(null);
var link_type = c.open(device,filter,buffer_size,buffer);
c.on("packet",patroclus.main.sniffer.packet_handler.call(null,link_type,buffer,ch,match_QMARK_));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"channel","channel",734187692),ch,new cljs.core.Keyword(null,"cap","cap",-817621587),c], null);
});
cljs.spec.alpha.def_impl.call(null,new cljs.core.Symbol("patroclus.main.sniffer","start!","patroclus.main.sniffer/start!",-1346981420,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword("patroclus.main.sniffer","options","patroclus.main.sniffer/options",-201904980)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword("patroclus.main.sniffer","component","patroclus.main.sniffer/component",-289800895)),cljs.spec.alpha.fspec_impl.call(null,cljs.spec.alpha.spec_impl.call(null,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword("patroclus.main.sniffer","options","patroclus.main.sniffer/options",-201904980)),cljs.spec.alpha.cat_impl.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("patroclus.main.sniffer","options","patroclus.main.sniffer/options",-201904980)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("patroclus.main.sniffer","options","patroclus.main.sniffer/options",-201904980)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword("patroclus.main.sniffer","options","patroclus.main.sniffer/options",-201904980)),cljs.spec.alpha.spec_impl.call(null,new cljs.core.Keyword("patroclus.main.sniffer","component","patroclus.main.sniffer/component",-289800895),new cljs.core.Keyword("patroclus.main.sniffer","component","patroclus.main.sniffer/component",-289800895),null,null),new cljs.core.Keyword("patroclus.main.sniffer","component","patroclus.main.sniffer/component",-289800895),null,null,null));
/**
 * Stop listening for packet events and close the associated channel
 */
patroclus.main.sniffer.stop_BANG_ = (function patroclus$main$sniffer$stop_BANG_(p__24500){
var map__24501 = p__24500;
var map__24501__$1 = (((((!((map__24501 == null))))?(((((map__24501.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24501.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24501):map__24501);
var channel = cljs.core.get.call(null,map__24501__$1,new cljs.core.Keyword(null,"channel","channel",734187692));
var cap = cljs.core.get.call(null,map__24501__$1,new cljs.core.Keyword(null,"cap","cap",-817621587));
cap.close();

return cljs.core.async.close_BANG_.call(null,channel);
});
cljs.spec.alpha.def_impl.call(null,new cljs.core.Symbol("patroclus.main.sniffer","stop!","patroclus.main.sniffer/stop!",-1088600505,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword("patroclus.main.sniffer","component","patroclus.main.sniffer/component",-289800895)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)),cljs.spec.alpha.fspec_impl.call(null,cljs.spec.alpha.spec_impl.call(null,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword("patroclus.main.sniffer","component","patroclus.main.sniffer/component",-289800895)),cljs.spec.alpha.cat_impl.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component","component",1555936782)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("patroclus.main.sniffer","component","patroclus.main.sniffer/component",-289800895)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("patroclus.main.sniffer","component","patroclus.main.sniffer/component",-289800895)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword("patroclus.main.sniffer","component","patroclus.main.sniffer/component",-289800895)),cljs.spec.alpha.spec_impl.call(null,new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_,null,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),null,null,null));

//# sourceMappingURL=sniffer.js.map
