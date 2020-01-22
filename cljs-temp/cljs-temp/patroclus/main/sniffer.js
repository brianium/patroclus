// Compiled by ClojureScript 1.10.597 {:target :nodejs}
goog.provide('patroclus.main.sniffer');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.spec.alpha');
patroclus.main.sniffer.ip = require("ip");
patroclus.main.sniffer.cap = require("cap");
patroclus.main.sniffer.Cap = patroclus.main.sniffer.cap.Cap;
patroclus.main.sniffer.decoders = patroclus.main.sniffer.cap.decoders;
patroclus.main.sniffer.PROTOCOL = patroclus.main.sniffer.decoders.PROTOCOL;
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("options","device","options/device",-689962222),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("options","filter","options/filter",1893460500),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("options","match?","options/match?",-237167648),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),cljs.core.fn_QMARK_);
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
var f__22210__auto__ = (function (){var switch__22186__auto__ = (function (state_22817){
var state_val_22818 = (state_22817[(1)]);
if((state_val_22818 === (1))){
var state_22817__$1 = state_22817;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22817__$1,(2),ch,addr);
} else {
if((state_val_22818 === (2))){
var inst_22815 = (state_22817[(2)]);
var state_22817__$1 = state_22817;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22817__$1,inst_22815);
} else {
return null;
}
}
});
return (function() {
var patroclus$main$sniffer$handle_tcp_$_state_machine__22187__auto__ = null;
var patroclus$main$sniffer$handle_tcp_$_state_machine__22187__auto____0 = (function (){
var statearr_22819 = [null,null,null,null,null,null,null];
(statearr_22819[(0)] = patroclus$main$sniffer$handle_tcp_$_state_machine__22187__auto__);

(statearr_22819[(1)] = (1));

return statearr_22819;
});
var patroclus$main$sniffer$handle_tcp_$_state_machine__22187__auto____1 = (function (state_22817){
while(true){
var ret_value__22188__auto__ = (function (){try{while(true){
var result__22189__auto__ = switch__22186__auto__.call(null,state_22817);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22189__auto__;
}
break;
}
}catch (e22820){if((e22820 instanceof Object)){
var ex__22190__auto__ = e22820;
var statearr_22821_22823 = state_22817;
(statearr_22821_22823[(5)] = ex__22190__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22817);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22820;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22824 = state_22817;
state_22817 = G__22824;
continue;
} else {
return ret_value__22188__auto__;
}
break;
}
});
patroclus$main$sniffer$handle_tcp_$_state_machine__22187__auto__ = function(state_22817){
switch(arguments.length){
case 0:
return patroclus$main$sniffer$handle_tcp_$_state_machine__22187__auto____0.call(this);
case 1:
return patroclus$main$sniffer$handle_tcp_$_state_machine__22187__auto____1.call(this,state_22817);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
patroclus$main$sniffer$handle_tcp_$_state_machine__22187__auto__.cljs$core$IFn$_invoke$arity$0 = patroclus$main$sniffer$handle_tcp_$_state_machine__22187__auto____0;
patroclus$main$sniffer$handle_tcp_$_state_machine__22187__auto__.cljs$core$IFn$_invoke$arity$1 = patroclus$main$sniffer$handle_tcp_$_state_machine__22187__auto____1;
return patroclus$main$sniffer$handle_tcp_$_state_machine__22187__auto__;
})()
})();
var state__22211__auto__ = (function (){var statearr_22822 = f__22210__auto__.call(null);
(statearr_22822[(6)] = c__22209__auto__);

return statearr_22822;
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
patroclus.main.sniffer.start_BANG_ = (function patroclus$main$sniffer$start_BANG_(p__22825){
var map__22826 = p__22825;
var map__22826__$1 = (((((!((map__22826 == null))))?(((((map__22826.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22826.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22826):map__22826);
var match_QMARK_ = cljs.core.get.call(null,map__22826__$1,new cljs.core.Keyword(null,"match?","match?",-1487756738));
var filter = cljs.core.get.call(null,map__22826__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));
var device = cljs.core.get.call(null,map__22826__$1,new cljs.core.Keyword(null,"device","device",1817743352));
var c = (new patroclus.main.sniffer.Cap());
var buffer_size = (((10) * (1024)) * (1024));
var buffer = Buffer.alloc((65535));
var ch = cljs.core.async.chan.call(null);
var link_type = c.open(device,filter,buffer_size,buffer);
c.on("packet",patroclus.main.sniffer.packet_handler.call(null,link_type,buffer,ch,match_QMARK_));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"channel","channel",734187692),ch,new cljs.core.Keyword(null,"cap","cap",-817621587),c], null);
});
patroclus.main.sniffer.stop_BANG_ = (function patroclus$main$sniffer$stop_BANG_(p__22828){
var map__22829 = p__22828;
var map__22829__$1 = (((((!((map__22829 == null))))?(((((map__22829.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22829.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22829):map__22829);
var channel = cljs.core.get.call(null,map__22829__$1,new cljs.core.Keyword(null,"channel","channel",734187692));
var cap = cljs.core.get.call(null,map__22829__$1,new cljs.core.Keyword(null,"cap","cap",-817621587));
cap.close();

return cljs.core.async.close_BANG_.call(null,channel);
});
patroclus.main.sniffer.component = patroclus.main.sniffer.start_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"filter","filter",-948537934),["tcp and src host ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(patroclus.main.sniffer.ip.address())," and dst port 80 or dst port 443"].join(''),new cljs.core.Keyword(null,"device","device",1817743352),"en0",new cljs.core.Keyword(null,"match?","match?",-1487756738),(function (addr){
return true;
})], null));
var c__22209__auto___22849 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22210__auto__ = (function (){var switch__22186__auto__ = (function (state_22840){
var state_val_22841 = (state_22840[(1)]);
if((state_val_22841 === (1))){
var state_22840__$1 = state_22840;
var statearr_22842_22850 = state_22840__$1;
(statearr_22842_22850[(2)] = null);

(statearr_22842_22850[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22841 === (2))){
var inst_22832 = new cljs.core.Keyword(null,"channel","channel",734187692).cljs$core$IFn$_invoke$arity$1(patroclus.main.sniffer.component);
var state_22840__$1 = state_22840;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22840__$1,(4),inst_22832);
} else {
if((state_val_22841 === (3))){
var inst_22838 = (state_22840[(2)]);
var state_22840__$1 = state_22840;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22840__$1,inst_22838);
} else {
if((state_val_22841 === (4))){
var inst_22834 = (state_22840[(2)]);
var inst_22835 = cljs.core.println.call(null,inst_22834);
var state_22840__$1 = (function (){var statearr_22843 = state_22840;
(statearr_22843[(7)] = inst_22835);

return statearr_22843;
})();
var statearr_22844_22851 = state_22840__$1;
(statearr_22844_22851[(2)] = null);

(statearr_22844_22851[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});
return (function() {
var patroclus$main$sniffer$state_machine__22187__auto__ = null;
var patroclus$main$sniffer$state_machine__22187__auto____0 = (function (){
var statearr_22845 = [null,null,null,null,null,null,null,null];
(statearr_22845[(0)] = patroclus$main$sniffer$state_machine__22187__auto__);

(statearr_22845[(1)] = (1));

return statearr_22845;
});
var patroclus$main$sniffer$state_machine__22187__auto____1 = (function (state_22840){
while(true){
var ret_value__22188__auto__ = (function (){try{while(true){
var result__22189__auto__ = switch__22186__auto__.call(null,state_22840);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22189__auto__;
}
break;
}
}catch (e22846){if((e22846 instanceof Object)){
var ex__22190__auto__ = e22846;
var statearr_22847_22852 = state_22840;
(statearr_22847_22852[(5)] = ex__22190__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22840);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22846;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22853 = state_22840;
state_22840 = G__22853;
continue;
} else {
return ret_value__22188__auto__;
}
break;
}
});
patroclus$main$sniffer$state_machine__22187__auto__ = function(state_22840){
switch(arguments.length){
case 0:
return patroclus$main$sniffer$state_machine__22187__auto____0.call(this);
case 1:
return patroclus$main$sniffer$state_machine__22187__auto____1.call(this,state_22840);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
patroclus$main$sniffer$state_machine__22187__auto__.cljs$core$IFn$_invoke$arity$0 = patroclus$main$sniffer$state_machine__22187__auto____0;
patroclus$main$sniffer$state_machine__22187__auto__.cljs$core$IFn$_invoke$arity$1 = patroclus$main$sniffer$state_machine__22187__auto____1;
return patroclus$main$sniffer$state_machine__22187__auto__;
})()
})();
var state__22211__auto__ = (function (){var statearr_22848 = f__22210__auto__.call(null);
(statearr_22848[(6)] = c__22209__auto___22849);

return statearr_22848;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22211__auto__);
}));


//# sourceMappingURL=sniffer.js.map
