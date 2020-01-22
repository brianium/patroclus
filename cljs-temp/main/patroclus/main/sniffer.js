// Compiled by ClojureScript 1.10.597 {:target :nodejs}
goog.provide('main.patroclus.main.sniffer');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.spec.alpha');
main.patroclus.main.sniffer.ip = require("ip");
main.patroclus.main.sniffer.cap = require("cap");
main.patroclus.main.sniffer.Cap = main.patroclus.main.sniffer.cap.Cap;
main.patroclus.main.sniffer.decoders = main.patroclus.main.sniffer.cap.decoders;
main.patroclus.main.sniffer.PROTOCOL = main.patroclus.main.sniffer.decoders.PROTOCOL;
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("options","device","options/device",-689962222),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("options","filter","options/filter",1893460500),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("options","match?","options/match?",-237167648),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),cljs.core.fn_QMARK_);
/**
 * Return a packet object created by the cap ethernet decoder
 */
main.patroclus.main.sniffer.decode_ethernet = (function main$patroclus$main$sniffer$decode_ethernet(buffer){
return main.patroclus.main.sniffer.decoders.Ethernet(buffer);
});
/**
 * Return a packet object created by the cap ipv4 decoder
 */
main.patroclus.main.sniffer.decode_ipv4 = (function main$patroclus$main$sniffer$decode_ipv4(buffer,offset){
return main.patroclus.main.sniffer.decoders.IPV4(buffer,offset);
});
/**
 * Get the type of the packet as compared to caps PROTOCOL enum
 */
main.patroclus.main.sniffer.packet_type = (function main$patroclus$main$sniffer$packet_type(packet){
return packet.info.type;
});
/**
 * Get the destination of the packet
 */
main.patroclus.main.sniffer.destination = (function main$patroclus$main$sniffer$destination(packet){
return packet.info.dstaddr;
});
/**
 * Check if the packet is an ipv4 packet
 */
main.patroclus.main.sniffer.ipv4_QMARK_ = (function main$patroclus$main$sniffer$ipv4_QMARK_(packet){
return cljs.core._EQ_.call(null,main.patroclus.main.sniffer.packet_type.call(null,packet),main.patroclus.main.sniffer.PROTOCOL.ETHERNET.IPV4);
});
main.patroclus.main.sniffer.tcp_QMARK_ = (function main$patroclus$main$sniffer$tcp_QMARK_(packet){
return cljs.core._EQ_.call(null,packet.info.protocol,main.patroclus.main.sniffer.PROTOCOL.IP.TCP);
});
/**
 * Handle TCP packets
 */
main.patroclus.main.sniffer.handle_tcp = (function main$patroclus$main$sniffer$handle_tcp(packet,ch,match_QMARK_){
var addr = main.patroclus.main.sniffer.destination.call(null,packet);
if(cljs.core.truth_(match_QMARK_.call(null,addr))){
return cljs.core.async._GT__BANG_.call(null,ch,addr);
} else {
return null;
}
});
/**
 * Handle ipv4 packets
 */
main.patroclus.main.sniffer.handle_ipv4 = (function main$patroclus$main$sniffer$handle_ipv4(packet,buffer,ch,match_QMARK_){
if(main.patroclus.main.sniffer.tcp_QMARK_.call(null,packet)){
return main.patroclus.main.sniffer.handle_tcp.call(null,packet,ch,match_QMARK_);
} else {
return null;
}
});
/**
 * Handle ethernet packets
 */
main.patroclus.main.sniffer.handle_ethernet = (function main$patroclus$main$sniffer$handle_ethernet(packet,buffer,ch,match_QMARK_){
if(main.patroclus.main.sniffer.ipv4_QMARK_.call(null,packet)){
return main.patroclus.main.sniffer.handle_ipv4.call(null,main.patroclus.main.sniffer.decode_ipv4.call(null,buffer,packet.offset),buffer,ch,match_QMARK_);
} else {
return null;
}
});
/**
 * Create a handler for packet events
 */
main.patroclus.main.sniffer.packet_handler = (function main$patroclus$main$sniffer$packet_handler(link_type,buffer,ch,match_QMARK_){
return (function (){
if(cljs.core._EQ_.call(null,link_type,"ETHERNET")){
return main.patroclus.main.sniffer.handle_ethernet.call(null,main.patroclus.main.sniffer.decode_ethernet.call(null,buffer),buffer,ch,match_QMARK_);
} else {
return null;
}
});
});
main.patroclus.main.sniffer.start_BANG_ = (function main$patroclus$main$sniffer$start_BANG_(p__24511){
var map__24512 = p__24511;
var map__24512__$1 = (((((!((map__24512 == null))))?(((((map__24512.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24512.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24512):map__24512);
var match_QMARK_ = cljs.core.get.call(null,map__24512__$1,new cljs.core.Keyword(null,"match?","match?",-1487756738));
var filter = cljs.core.get.call(null,map__24512__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));
var device = cljs.core.get.call(null,map__24512__$1,new cljs.core.Keyword(null,"device","device",1817743352));
var c = (new main.patroclus.main.sniffer.Cap());
var buffer_size = (((10) * (1024)) * (1024));
var buffer = Buffer.alloc((65535));
var ch = cljs.core.async.chan.call(null);
var link_type = c.open(device,filter,buffer_size,buffer);
c.on("packet",main.patroclus.main.sniffer.packet_handler.call(null,link_type,buffer,ch,match_QMARK_));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"channel","channel",734187692),ch,new cljs.core.Keyword(null,"cap","cap",-817621587),c], null);
});
main.patroclus.main.sniffer.stop_BANG_ = (function main$patroclus$main$sniffer$stop_BANG_(p__24514){
var map__24515 = p__24514;
var map__24515__$1 = (((((!((map__24515 == null))))?(((((map__24515.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24515.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24515):map__24515);
var channel = cljs.core.get.call(null,map__24515__$1,new cljs.core.Keyword(null,"channel","channel",734187692));
var cap = cljs.core.get.call(null,map__24515__$1,new cljs.core.Keyword(null,"cap","cap",-817621587));
cap.close();

return cljs.core.async.close_BANG_.call(null,channel);
});
main.patroclus.main.sniffer.component = main.patroclus.main.sniffer.start_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"filter","filter",-948537934),["tcp and src host ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(main.patroclus.main.sniffer.ip.address())," and dst port 80 or dst port 443"].join(''),new cljs.core.Keyword(null,"device","device",1817743352),"en0",new cljs.core.Keyword(null,"match?","match?",-1487756738),(function (addr){
return true;
})], null));
var c__22209__auto___24535 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22210__auto__ = (function (){var switch__22186__auto__ = (function (state_24526){
var state_val_24527 = (state_24526[(1)]);
if((state_val_24527 === (1))){
var state_24526__$1 = state_24526;
var statearr_24528_24536 = state_24526__$1;
(statearr_24528_24536[(2)] = null);

(statearr_24528_24536[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24527 === (2))){
var inst_24518 = new cljs.core.Keyword(null,"channel","channel",734187692).cljs$core$IFn$_invoke$arity$1(main.patroclus.main.sniffer.component);
var state_24526__$1 = state_24526;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24526__$1,(4),inst_24518);
} else {
if((state_val_24527 === (3))){
var inst_24524 = (state_24526[(2)]);
var state_24526__$1 = state_24526;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24526__$1,inst_24524);
} else {
if((state_val_24527 === (4))){
var inst_24520 = (state_24526[(2)]);
var inst_24521 = cljs.core.println.call(null,inst_24520);
var state_24526__$1 = (function (){var statearr_24529 = state_24526;
(statearr_24529[(7)] = inst_24521);

return statearr_24529;
})();
var statearr_24530_24537 = state_24526__$1;
(statearr_24530_24537[(2)] = null);

(statearr_24530_24537[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});
return (function() {
var main$patroclus$main$sniffer$state_machine__22187__auto__ = null;
var main$patroclus$main$sniffer$state_machine__22187__auto____0 = (function (){
var statearr_24531 = [null,null,null,null,null,null,null,null];
(statearr_24531[(0)] = main$patroclus$main$sniffer$state_machine__22187__auto__);

(statearr_24531[(1)] = (1));

return statearr_24531;
});
var main$patroclus$main$sniffer$state_machine__22187__auto____1 = (function (state_24526){
while(true){
var ret_value__22188__auto__ = (function (){try{while(true){
var result__22189__auto__ = switch__22186__auto__.call(null,state_24526);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22189__auto__;
}
break;
}
}catch (e24532){if((e24532 instanceof Object)){
var ex__22190__auto__ = e24532;
var statearr_24533_24538 = state_24526;
(statearr_24533_24538[(5)] = ex__22190__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24526);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24532;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24539 = state_24526;
state_24526 = G__24539;
continue;
} else {
return ret_value__22188__auto__;
}
break;
}
});
main$patroclus$main$sniffer$state_machine__22187__auto__ = function(state_24526){
switch(arguments.length){
case 0:
return main$patroclus$main$sniffer$state_machine__22187__auto____0.call(this);
case 1:
return main$patroclus$main$sniffer$state_machine__22187__auto____1.call(this,state_24526);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
main$patroclus$main$sniffer$state_machine__22187__auto__.cljs$core$IFn$_invoke$arity$0 = main$patroclus$main$sniffer$state_machine__22187__auto____0;
main$patroclus$main$sniffer$state_machine__22187__auto__.cljs$core$IFn$_invoke$arity$1 = main$patroclus$main$sniffer$state_machine__22187__auto____1;
return main$patroclus$main$sniffer$state_machine__22187__auto__;
})()
})();
var state__22211__auto__ = (function (){var statearr_24534 = f__22210__auto__.call(null);
(statearr_24534[(6)] = c__22209__auto___24535);

return statearr_24534;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22211__auto__);
}));


//# sourceMappingURL=sniffer.js.map
