// Compiled by ClojureScript 1.10.597 {:target :nodejs}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__24367 = arguments.length;
switch (G__24367) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24368 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24368 = (function (f,blockable,meta24369){
this.f = f;
this.blockable = blockable;
this.meta24369 = meta24369;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async24368.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24370,meta24369__$1){
var self__ = this;
var _24370__$1 = this;
return (new cljs.core.async.t_cljs$core$async24368(self__.f,self__.blockable,meta24369__$1));
}));

(cljs.core.async.t_cljs$core$async24368.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24370){
var self__ = this;
var _24370__$1 = this;
return self__.meta24369;
}));

(cljs.core.async.t_cljs$core$async24368.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24368.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async24368.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async24368.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async24368.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta24369","meta24369",1329771648,null)], null);
}));

(cljs.core.async.t_cljs$core$async24368.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async24368.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24368");

(cljs.core.async.t_cljs$core$async24368.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.core.async/t_cljs$core$async24368");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24368.
 */
cljs.core.async.__GT_t_cljs$core$async24368 = (function cljs$core$async$__GT_t_cljs$core$async24368(f__$1,blockable__$1,meta24369){
return (new cljs.core.async.t_cljs$core$async24368(f__$1,blockable__$1,meta24369));
});

}

return (new cljs.core.async.t_cljs$core$async24368(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__24374 = arguments.length;
switch (G__24374) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__24377 = arguments.length;
switch (G__24377) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__24380 = arguments.length;
switch (G__24380) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_24382 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_24382);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,val_24382);
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__24384 = arguments.length;
switch (G__24384) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,ret);
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4666__auto___24386 = n;
var x_24387 = (0);
while(true){
if((x_24387 < n__4666__auto___24386)){
(a[x_24387] = x_24387);

var G__24388 = (x_24387 + (1));
x_24387 = G__24388;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24389 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24389 = (function (flag,meta24390){
this.flag = flag;
this.meta24390 = meta24390;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async24389.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24391,meta24390__$1){
var self__ = this;
var _24391__$1 = this;
return (new cljs.core.async.t_cljs$core$async24389(self__.flag,meta24390__$1));
}));

(cljs.core.async.t_cljs$core$async24389.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24391){
var self__ = this;
var _24391__$1 = this;
return self__.meta24390;
}));

(cljs.core.async.t_cljs$core$async24389.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24389.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async24389.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async24389.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async24389.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta24390","meta24390",1573897092,null)], null);
}));

(cljs.core.async.t_cljs$core$async24389.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async24389.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24389");

(cljs.core.async.t_cljs$core$async24389.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.core.async/t_cljs$core$async24389");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24389.
 */
cljs.core.async.__GT_t_cljs$core$async24389 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async24389(flag__$1,meta24390){
return (new cljs.core.async.t_cljs$core$async24389(flag__$1,meta24390));
});

}

return (new cljs.core.async.t_cljs$core$async24389(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24392 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24392 = (function (flag,cb,meta24393){
this.flag = flag;
this.cb = cb;
this.meta24393 = meta24393;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async24392.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24394,meta24393__$1){
var self__ = this;
var _24394__$1 = this;
return (new cljs.core.async.t_cljs$core$async24392(self__.flag,self__.cb,meta24393__$1));
}));

(cljs.core.async.t_cljs$core$async24392.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24394){
var self__ = this;
var _24394__$1 = this;
return self__.meta24393;
}));

(cljs.core.async.t_cljs$core$async24392.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24392.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async24392.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async24392.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async24392.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta24393","meta24393",2005012077,null)], null);
}));

(cljs.core.async.t_cljs$core$async24392.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async24392.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24392");

(cljs.core.async.t_cljs$core$async24392.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.core.async/t_cljs$core$async24392");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24392.
 */
cljs.core.async.__GT_t_cljs$core$async24392 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async24392(flag__$1,cb__$1,meta24393){
return (new cljs.core.async.t_cljs$core$async24392(flag__$1,cb__$1,meta24393));
});

}

return (new cljs.core.async.t_cljs$core$async24392(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count.call(null,ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24395_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24395_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24396_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24396_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4185__auto__ = wport;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return port;
}
})()], null));
} else {
var G__24397 = (i + (1));
i = G__24397;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4185__auto__ = ret;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4174__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4174__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___24403 = arguments.length;
var i__4790__auto___24404 = (0);
while(true){
if((i__4790__auto___24404 < len__4789__auto___24403)){
args__4795__auto__.push((arguments[i__4790__auto___24404]));

var G__24405 = (i__4790__auto___24404 + (1));
i__4790__auto___24404 = G__24405;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__24400){
var map__24401 = p__24400;
var map__24401__$1 = (((((!((map__24401 == null))))?(((((map__24401.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24401.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24401):map__24401);
var opts = map__24401__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq24398){
var G__24399 = cljs.core.first.call(null,seq24398);
var seq24398__$1 = cljs.core.next.call(null,seq24398);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24399,seq24398__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__24407 = arguments.length;
switch (G__24407) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__24307__auto___24453 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24308__auto__ = (function (){var switch__24212__auto__ = (function (state_24431){
var state_val_24432 = (state_24431[(1)]);
if((state_val_24432 === (7))){
var inst_24427 = (state_24431[(2)]);
var state_24431__$1 = state_24431;
var statearr_24433_24454 = state_24431__$1;
(statearr_24433_24454[(2)] = inst_24427);

(statearr_24433_24454[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24432 === (1))){
var state_24431__$1 = state_24431;
var statearr_24434_24455 = state_24431__$1;
(statearr_24434_24455[(2)] = null);

(statearr_24434_24455[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24432 === (4))){
var inst_24410 = (state_24431[(7)]);
var inst_24410__$1 = (state_24431[(2)]);
var inst_24411 = (inst_24410__$1 == null);
var state_24431__$1 = (function (){var statearr_24435 = state_24431;
(statearr_24435[(7)] = inst_24410__$1);

return statearr_24435;
})();
if(cljs.core.truth_(inst_24411)){
var statearr_24436_24456 = state_24431__$1;
(statearr_24436_24456[(1)] = (5));

} else {
var statearr_24437_24457 = state_24431__$1;
(statearr_24437_24457[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24432 === (13))){
var state_24431__$1 = state_24431;
var statearr_24438_24458 = state_24431__$1;
(statearr_24438_24458[(2)] = null);

(statearr_24438_24458[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24432 === (6))){
var inst_24410 = (state_24431[(7)]);
var state_24431__$1 = state_24431;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24431__$1,(11),to,inst_24410);
} else {
if((state_val_24432 === (3))){
var inst_24429 = (state_24431[(2)]);
var state_24431__$1 = state_24431;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24431__$1,inst_24429);
} else {
if((state_val_24432 === (12))){
var state_24431__$1 = state_24431;
var statearr_24439_24459 = state_24431__$1;
(statearr_24439_24459[(2)] = null);

(statearr_24439_24459[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24432 === (2))){
var state_24431__$1 = state_24431;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24431__$1,(4),from);
} else {
if((state_val_24432 === (11))){
var inst_24420 = (state_24431[(2)]);
var state_24431__$1 = state_24431;
if(cljs.core.truth_(inst_24420)){
var statearr_24440_24460 = state_24431__$1;
(statearr_24440_24460[(1)] = (12));

} else {
var statearr_24441_24461 = state_24431__$1;
(statearr_24441_24461[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24432 === (9))){
var state_24431__$1 = state_24431;
var statearr_24442_24462 = state_24431__$1;
(statearr_24442_24462[(2)] = null);

(statearr_24442_24462[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24432 === (5))){
var state_24431__$1 = state_24431;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24443_24463 = state_24431__$1;
(statearr_24443_24463[(1)] = (8));

} else {
var statearr_24444_24464 = state_24431__$1;
(statearr_24444_24464[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24432 === (14))){
var inst_24425 = (state_24431[(2)]);
var state_24431__$1 = state_24431;
var statearr_24445_24465 = state_24431__$1;
(statearr_24445_24465[(2)] = inst_24425);

(statearr_24445_24465[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24432 === (10))){
var inst_24417 = (state_24431[(2)]);
var state_24431__$1 = state_24431;
var statearr_24446_24466 = state_24431__$1;
(statearr_24446_24466[(2)] = inst_24417);

(statearr_24446_24466[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24432 === (8))){
var inst_24414 = cljs.core.async.close_BANG_.call(null,to);
var state_24431__$1 = state_24431;
var statearr_24447_24467 = state_24431__$1;
(statearr_24447_24467[(2)] = inst_24414);

(statearr_24447_24467[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__24213__auto__ = null;
var cljs$core$async$state_machine__24213__auto____0 = (function (){
var statearr_24448 = [null,null,null,null,null,null,null,null];
(statearr_24448[(0)] = cljs$core$async$state_machine__24213__auto__);

(statearr_24448[(1)] = (1));

return statearr_24448;
});
var cljs$core$async$state_machine__24213__auto____1 = (function (state_24431){
while(true){
var ret_value__24214__auto__ = (function (){try{while(true){
var result__24215__auto__ = switch__24212__auto__.call(null,state_24431);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24215__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24215__auto__;
}
break;
}
}catch (e24449){if((e24449 instanceof Object)){
var ex__24216__auto__ = e24449;
var statearr_24450_24468 = state_24431;
(statearr_24450_24468[(5)] = ex__24216__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24431);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24449;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24214__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24469 = state_24431;
state_24431 = G__24469;
continue;
} else {
return ret_value__24214__auto__;
}
break;
}
});
cljs$core$async$state_machine__24213__auto__ = function(state_24431){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24213__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24213__auto____1.call(this,state_24431);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24213__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24213__auto____0;
cljs$core$async$state_machine__24213__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24213__auto____1;
return cljs$core$async$state_machine__24213__auto__;
})()
})();
var state__24309__auto__ = (function (){var statearr_24451 = f__24308__auto__.call(null);
(statearr_24451[(6)] = c__24307__auto___24453);

return statearr_24451;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24309__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = (function (p__24470){
var vec__24471 = p__24470;
var v = cljs.core.nth.call(null,vec__24471,(0),null);
var p = cljs.core.nth.call(null,vec__24471,(1),null);
var job = vec__24471;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__24307__auto___24642 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24308__auto__ = (function (){var switch__24212__auto__ = (function (state_24478){
var state_val_24479 = (state_24478[(1)]);
if((state_val_24479 === (1))){
var state_24478__$1 = state_24478;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24478__$1,(2),res,v);
} else {
if((state_val_24479 === (2))){
var inst_24475 = (state_24478[(2)]);
var inst_24476 = cljs.core.async.close_BANG_.call(null,res);
var state_24478__$1 = (function (){var statearr_24480 = state_24478;
(statearr_24480[(7)] = inst_24475);

return statearr_24480;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24478__$1,inst_24476);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24213__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24213__auto____0 = (function (){
var statearr_24481 = [null,null,null,null,null,null,null,null];
(statearr_24481[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24213__auto__);

(statearr_24481[(1)] = (1));

return statearr_24481;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24213__auto____1 = (function (state_24478){
while(true){
var ret_value__24214__auto__ = (function (){try{while(true){
var result__24215__auto__ = switch__24212__auto__.call(null,state_24478);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24215__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24215__auto__;
}
break;
}
}catch (e24482){if((e24482 instanceof Object)){
var ex__24216__auto__ = e24482;
var statearr_24483_24643 = state_24478;
(statearr_24483_24643[(5)] = ex__24216__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24478);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24482;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24214__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24644 = state_24478;
state_24478 = G__24644;
continue;
} else {
return ret_value__24214__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24213__auto__ = function(state_24478){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24213__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24213__auto____1.call(this,state_24478);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24213__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24213__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24213__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24213__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24213__auto__;
})()
})();
var state__24309__auto__ = (function (){var statearr_24484 = f__24308__auto__.call(null);
(statearr_24484[(6)] = c__24307__auto___24642);

return statearr_24484;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24309__auto__);
}));


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var async = (function (p__24485){
var vec__24486 = p__24485;
var v = cljs.core.nth.call(null,vec__24486,(0),null);
var p = cljs.core.nth.call(null,vec__24486,(1),null);
var job = vec__24486;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var n__4666__auto___24645 = n;
var __24646 = (0);
while(true){
if((__24646 < n__4666__auto___24645)){
var G__24489_24647 = type;
var G__24489_24648__$1 = (((G__24489_24647 instanceof cljs.core.Keyword))?G__24489_24647.fqn:null);
switch (G__24489_24648__$1) {
case "compute":
var c__24307__auto___24650 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__24646,c__24307__auto___24650,G__24489_24647,G__24489_24648__$1,n__4666__auto___24645,jobs,results,process,async){
return (function (){
var f__24308__auto__ = (function (){var switch__24212__auto__ = ((function (__24646,c__24307__auto___24650,G__24489_24647,G__24489_24648__$1,n__4666__auto___24645,jobs,results,process,async){
return (function (state_24502){
var state_val_24503 = (state_24502[(1)]);
if((state_val_24503 === (1))){
var state_24502__$1 = state_24502;
var statearr_24504_24651 = state_24502__$1;
(statearr_24504_24651[(2)] = null);

(statearr_24504_24651[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24503 === (2))){
var state_24502__$1 = state_24502;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24502__$1,(4),jobs);
} else {
if((state_val_24503 === (3))){
var inst_24500 = (state_24502[(2)]);
var state_24502__$1 = state_24502;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24502__$1,inst_24500);
} else {
if((state_val_24503 === (4))){
var inst_24492 = (state_24502[(2)]);
var inst_24493 = process.call(null,inst_24492);
var state_24502__$1 = state_24502;
if(cljs.core.truth_(inst_24493)){
var statearr_24505_24652 = state_24502__$1;
(statearr_24505_24652[(1)] = (5));

} else {
var statearr_24506_24653 = state_24502__$1;
(statearr_24506_24653[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24503 === (5))){
var state_24502__$1 = state_24502;
var statearr_24507_24654 = state_24502__$1;
(statearr_24507_24654[(2)] = null);

(statearr_24507_24654[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24503 === (6))){
var state_24502__$1 = state_24502;
var statearr_24508_24655 = state_24502__$1;
(statearr_24508_24655[(2)] = null);

(statearr_24508_24655[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24503 === (7))){
var inst_24498 = (state_24502[(2)]);
var state_24502__$1 = state_24502;
var statearr_24509_24656 = state_24502__$1;
(statearr_24509_24656[(2)] = inst_24498);

(statearr_24509_24656[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__24646,c__24307__auto___24650,G__24489_24647,G__24489_24648__$1,n__4666__auto___24645,jobs,results,process,async))
;
return ((function (__24646,switch__24212__auto__,c__24307__auto___24650,G__24489_24647,G__24489_24648__$1,n__4666__auto___24645,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24213__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24213__auto____0 = (function (){
var statearr_24510 = [null,null,null,null,null,null,null];
(statearr_24510[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24213__auto__);

(statearr_24510[(1)] = (1));

return statearr_24510;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24213__auto____1 = (function (state_24502){
while(true){
var ret_value__24214__auto__ = (function (){try{while(true){
var result__24215__auto__ = switch__24212__auto__.call(null,state_24502);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24215__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24215__auto__;
}
break;
}
}catch (e24511){if((e24511 instanceof Object)){
var ex__24216__auto__ = e24511;
var statearr_24512_24657 = state_24502;
(statearr_24512_24657[(5)] = ex__24216__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24502);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24511;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24214__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24658 = state_24502;
state_24502 = G__24658;
continue;
} else {
return ret_value__24214__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24213__auto__ = function(state_24502){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24213__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24213__auto____1.call(this,state_24502);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24213__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24213__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24213__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24213__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24213__auto__;
})()
;})(__24646,switch__24212__auto__,c__24307__auto___24650,G__24489_24647,G__24489_24648__$1,n__4666__auto___24645,jobs,results,process,async))
})();
var state__24309__auto__ = (function (){var statearr_24513 = f__24308__auto__.call(null);
(statearr_24513[(6)] = c__24307__auto___24650);

return statearr_24513;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24309__auto__);
});})(__24646,c__24307__auto___24650,G__24489_24647,G__24489_24648__$1,n__4666__auto___24645,jobs,results,process,async))
);


break;
case "async":
var c__24307__auto___24659 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__24646,c__24307__auto___24659,G__24489_24647,G__24489_24648__$1,n__4666__auto___24645,jobs,results,process,async){
return (function (){
var f__24308__auto__ = (function (){var switch__24212__auto__ = ((function (__24646,c__24307__auto___24659,G__24489_24647,G__24489_24648__$1,n__4666__auto___24645,jobs,results,process,async){
return (function (state_24526){
var state_val_24527 = (state_24526[(1)]);
if((state_val_24527 === (1))){
var state_24526__$1 = state_24526;
var statearr_24528_24660 = state_24526__$1;
(statearr_24528_24660[(2)] = null);

(statearr_24528_24660[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24527 === (2))){
var state_24526__$1 = state_24526;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24526__$1,(4),jobs);
} else {
if((state_val_24527 === (3))){
var inst_24524 = (state_24526[(2)]);
var state_24526__$1 = state_24526;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24526__$1,inst_24524);
} else {
if((state_val_24527 === (4))){
var inst_24516 = (state_24526[(2)]);
var inst_24517 = async.call(null,inst_24516);
var state_24526__$1 = state_24526;
if(cljs.core.truth_(inst_24517)){
var statearr_24529_24661 = state_24526__$1;
(statearr_24529_24661[(1)] = (5));

} else {
var statearr_24530_24662 = state_24526__$1;
(statearr_24530_24662[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24527 === (5))){
var state_24526__$1 = state_24526;
var statearr_24531_24663 = state_24526__$1;
(statearr_24531_24663[(2)] = null);

(statearr_24531_24663[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24527 === (6))){
var state_24526__$1 = state_24526;
var statearr_24532_24664 = state_24526__$1;
(statearr_24532_24664[(2)] = null);

(statearr_24532_24664[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24527 === (7))){
var inst_24522 = (state_24526[(2)]);
var state_24526__$1 = state_24526;
var statearr_24533_24665 = state_24526__$1;
(statearr_24533_24665[(2)] = inst_24522);

(statearr_24533_24665[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__24646,c__24307__auto___24659,G__24489_24647,G__24489_24648__$1,n__4666__auto___24645,jobs,results,process,async))
;
return ((function (__24646,switch__24212__auto__,c__24307__auto___24659,G__24489_24647,G__24489_24648__$1,n__4666__auto___24645,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24213__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24213__auto____0 = (function (){
var statearr_24534 = [null,null,null,null,null,null,null];
(statearr_24534[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24213__auto__);

(statearr_24534[(1)] = (1));

return statearr_24534;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24213__auto____1 = (function (state_24526){
while(true){
var ret_value__24214__auto__ = (function (){try{while(true){
var result__24215__auto__ = switch__24212__auto__.call(null,state_24526);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24215__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24215__auto__;
}
break;
}
}catch (e24535){if((e24535 instanceof Object)){
var ex__24216__auto__ = e24535;
var statearr_24536_24666 = state_24526;
(statearr_24536_24666[(5)] = ex__24216__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24526);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24535;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24214__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24667 = state_24526;
state_24526 = G__24667;
continue;
} else {
return ret_value__24214__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24213__auto__ = function(state_24526){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24213__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24213__auto____1.call(this,state_24526);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24213__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24213__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24213__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24213__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24213__auto__;
})()
;})(__24646,switch__24212__auto__,c__24307__auto___24659,G__24489_24647,G__24489_24648__$1,n__4666__auto___24645,jobs,results,process,async))
})();
var state__24309__auto__ = (function (){var statearr_24537 = f__24308__auto__.call(null);
(statearr_24537[(6)] = c__24307__auto___24659);

return statearr_24537;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24309__auto__);
});})(__24646,c__24307__auto___24659,G__24489_24647,G__24489_24648__$1,n__4666__auto___24645,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24489_24648__$1)].join('')));

}

var G__24668 = (__24646 + (1));
__24646 = G__24668;
continue;
} else {
}
break;
}

var c__24307__auto___24669 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24308__auto__ = (function (){var switch__24212__auto__ = (function (state_24559){
var state_val_24560 = (state_24559[(1)]);
if((state_val_24560 === (7))){
var inst_24555 = (state_24559[(2)]);
var state_24559__$1 = state_24559;
var statearr_24561_24670 = state_24559__$1;
(statearr_24561_24670[(2)] = inst_24555);

(statearr_24561_24670[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24560 === (1))){
var state_24559__$1 = state_24559;
var statearr_24562_24671 = state_24559__$1;
(statearr_24562_24671[(2)] = null);

(statearr_24562_24671[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24560 === (4))){
var inst_24540 = (state_24559[(7)]);
var inst_24540__$1 = (state_24559[(2)]);
var inst_24541 = (inst_24540__$1 == null);
var state_24559__$1 = (function (){var statearr_24563 = state_24559;
(statearr_24563[(7)] = inst_24540__$1);

return statearr_24563;
})();
if(cljs.core.truth_(inst_24541)){
var statearr_24564_24672 = state_24559__$1;
(statearr_24564_24672[(1)] = (5));

} else {
var statearr_24565_24673 = state_24559__$1;
(statearr_24565_24673[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24560 === (6))){
var inst_24540 = (state_24559[(7)]);
var inst_24545 = (state_24559[(8)]);
var inst_24545__$1 = cljs.core.async.chan.call(null,(1));
var inst_24546 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24547 = [inst_24540,inst_24545__$1];
var inst_24548 = (new cljs.core.PersistentVector(null,2,(5),inst_24546,inst_24547,null));
var state_24559__$1 = (function (){var statearr_24566 = state_24559;
(statearr_24566[(8)] = inst_24545__$1);

return statearr_24566;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24559__$1,(8),jobs,inst_24548);
} else {
if((state_val_24560 === (3))){
var inst_24557 = (state_24559[(2)]);
var state_24559__$1 = state_24559;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24559__$1,inst_24557);
} else {
if((state_val_24560 === (2))){
var state_24559__$1 = state_24559;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24559__$1,(4),from);
} else {
if((state_val_24560 === (9))){
var inst_24552 = (state_24559[(2)]);
var state_24559__$1 = (function (){var statearr_24567 = state_24559;
(statearr_24567[(9)] = inst_24552);

return statearr_24567;
})();
var statearr_24568_24674 = state_24559__$1;
(statearr_24568_24674[(2)] = null);

(statearr_24568_24674[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24560 === (5))){
var inst_24543 = cljs.core.async.close_BANG_.call(null,jobs);
var state_24559__$1 = state_24559;
var statearr_24569_24675 = state_24559__$1;
(statearr_24569_24675[(2)] = inst_24543);

(statearr_24569_24675[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24560 === (8))){
var inst_24545 = (state_24559[(8)]);
var inst_24550 = (state_24559[(2)]);
var state_24559__$1 = (function (){var statearr_24570 = state_24559;
(statearr_24570[(10)] = inst_24550);

return statearr_24570;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24559__$1,(9),results,inst_24545);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24213__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24213__auto____0 = (function (){
var statearr_24571 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24571[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24213__auto__);

(statearr_24571[(1)] = (1));

return statearr_24571;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24213__auto____1 = (function (state_24559){
while(true){
var ret_value__24214__auto__ = (function (){try{while(true){
var result__24215__auto__ = switch__24212__auto__.call(null,state_24559);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24215__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24215__auto__;
}
break;
}
}catch (e24572){if((e24572 instanceof Object)){
var ex__24216__auto__ = e24572;
var statearr_24573_24676 = state_24559;
(statearr_24573_24676[(5)] = ex__24216__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24559);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24572;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24214__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24677 = state_24559;
state_24559 = G__24677;
continue;
} else {
return ret_value__24214__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24213__auto__ = function(state_24559){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24213__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24213__auto____1.call(this,state_24559);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24213__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24213__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24213__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24213__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24213__auto__;
})()
})();
var state__24309__auto__ = (function (){var statearr_24574 = f__24308__auto__.call(null);
(statearr_24574[(6)] = c__24307__auto___24669);

return statearr_24574;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24309__auto__);
}));


var c__24307__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24308__auto__ = (function (){var switch__24212__auto__ = (function (state_24612){
var state_val_24613 = (state_24612[(1)]);
if((state_val_24613 === (7))){
var inst_24608 = (state_24612[(2)]);
var state_24612__$1 = state_24612;
var statearr_24614_24678 = state_24612__$1;
(statearr_24614_24678[(2)] = inst_24608);

(statearr_24614_24678[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24613 === (20))){
var state_24612__$1 = state_24612;
var statearr_24615_24679 = state_24612__$1;
(statearr_24615_24679[(2)] = null);

(statearr_24615_24679[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24613 === (1))){
var state_24612__$1 = state_24612;
var statearr_24616_24680 = state_24612__$1;
(statearr_24616_24680[(2)] = null);

(statearr_24616_24680[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24613 === (4))){
var inst_24577 = (state_24612[(7)]);
var inst_24577__$1 = (state_24612[(2)]);
var inst_24578 = (inst_24577__$1 == null);
var state_24612__$1 = (function (){var statearr_24617 = state_24612;
(statearr_24617[(7)] = inst_24577__$1);

return statearr_24617;
})();
if(cljs.core.truth_(inst_24578)){
var statearr_24618_24681 = state_24612__$1;
(statearr_24618_24681[(1)] = (5));

} else {
var statearr_24619_24682 = state_24612__$1;
(statearr_24619_24682[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24613 === (15))){
var inst_24590 = (state_24612[(8)]);
var state_24612__$1 = state_24612;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24612__$1,(18),to,inst_24590);
} else {
if((state_val_24613 === (21))){
var inst_24603 = (state_24612[(2)]);
var state_24612__$1 = state_24612;
var statearr_24620_24683 = state_24612__$1;
(statearr_24620_24683[(2)] = inst_24603);

(statearr_24620_24683[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24613 === (13))){
var inst_24605 = (state_24612[(2)]);
var state_24612__$1 = (function (){var statearr_24621 = state_24612;
(statearr_24621[(9)] = inst_24605);

return statearr_24621;
})();
var statearr_24622_24684 = state_24612__$1;
(statearr_24622_24684[(2)] = null);

(statearr_24622_24684[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24613 === (6))){
var inst_24577 = (state_24612[(7)]);
var state_24612__$1 = state_24612;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24612__$1,(11),inst_24577);
} else {
if((state_val_24613 === (17))){
var inst_24598 = (state_24612[(2)]);
var state_24612__$1 = state_24612;
if(cljs.core.truth_(inst_24598)){
var statearr_24623_24685 = state_24612__$1;
(statearr_24623_24685[(1)] = (19));

} else {
var statearr_24624_24686 = state_24612__$1;
(statearr_24624_24686[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24613 === (3))){
var inst_24610 = (state_24612[(2)]);
var state_24612__$1 = state_24612;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24612__$1,inst_24610);
} else {
if((state_val_24613 === (12))){
var inst_24587 = (state_24612[(10)]);
var state_24612__$1 = state_24612;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24612__$1,(14),inst_24587);
} else {
if((state_val_24613 === (2))){
var state_24612__$1 = state_24612;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24612__$1,(4),results);
} else {
if((state_val_24613 === (19))){
var state_24612__$1 = state_24612;
var statearr_24625_24687 = state_24612__$1;
(statearr_24625_24687[(2)] = null);

(statearr_24625_24687[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24613 === (11))){
var inst_24587 = (state_24612[(2)]);
var state_24612__$1 = (function (){var statearr_24626 = state_24612;
(statearr_24626[(10)] = inst_24587);

return statearr_24626;
})();
var statearr_24627_24688 = state_24612__$1;
(statearr_24627_24688[(2)] = null);

(statearr_24627_24688[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24613 === (9))){
var state_24612__$1 = state_24612;
var statearr_24628_24689 = state_24612__$1;
(statearr_24628_24689[(2)] = null);

(statearr_24628_24689[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24613 === (5))){
var state_24612__$1 = state_24612;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24629_24690 = state_24612__$1;
(statearr_24629_24690[(1)] = (8));

} else {
var statearr_24630_24691 = state_24612__$1;
(statearr_24630_24691[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24613 === (14))){
var inst_24590 = (state_24612[(8)]);
var inst_24590__$1 = (state_24612[(2)]);
var inst_24591 = (inst_24590__$1 == null);
var inst_24592 = cljs.core.not.call(null,inst_24591);
var state_24612__$1 = (function (){var statearr_24631 = state_24612;
(statearr_24631[(8)] = inst_24590__$1);

return statearr_24631;
})();
if(inst_24592){
var statearr_24632_24692 = state_24612__$1;
(statearr_24632_24692[(1)] = (15));

} else {
var statearr_24633_24693 = state_24612__$1;
(statearr_24633_24693[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24613 === (16))){
var state_24612__$1 = state_24612;
var statearr_24634_24694 = state_24612__$1;
(statearr_24634_24694[(2)] = false);

(statearr_24634_24694[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24613 === (10))){
var inst_24584 = (state_24612[(2)]);
var state_24612__$1 = state_24612;
var statearr_24635_24695 = state_24612__$1;
(statearr_24635_24695[(2)] = inst_24584);

(statearr_24635_24695[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24613 === (18))){
var inst_24595 = (state_24612[(2)]);
var state_24612__$1 = state_24612;
var statearr_24636_24696 = state_24612__$1;
(statearr_24636_24696[(2)] = inst_24595);

(statearr_24636_24696[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24613 === (8))){
var inst_24581 = cljs.core.async.close_BANG_.call(null,to);
var state_24612__$1 = state_24612;
var statearr_24637_24697 = state_24612__$1;
(statearr_24637_24697[(2)] = inst_24581);

(statearr_24637_24697[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24213__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24213__auto____0 = (function (){
var statearr_24638 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24638[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24213__auto__);

(statearr_24638[(1)] = (1));

return statearr_24638;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24213__auto____1 = (function (state_24612){
while(true){
var ret_value__24214__auto__ = (function (){try{while(true){
var result__24215__auto__ = switch__24212__auto__.call(null,state_24612);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24215__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24215__auto__;
}
break;
}
}catch (e24639){if((e24639 instanceof Object)){
var ex__24216__auto__ = e24639;
var statearr_24640_24698 = state_24612;
(statearr_24640_24698[(5)] = ex__24216__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24612);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24639;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24214__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24699 = state_24612;
state_24612 = G__24699;
continue;
} else {
return ret_value__24214__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24213__auto__ = function(state_24612){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24213__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24213__auto____1.call(this,state_24612);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24213__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24213__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24213__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24213__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24213__auto__;
})()
})();
var state__24309__auto__ = (function (){var statearr_24641 = f__24308__auto__.call(null);
(statearr_24641[(6)] = c__24307__auto__);

return statearr_24641;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24309__auto__);
}));

return c__24307__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__24701 = arguments.length;
switch (G__24701) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__24704 = arguments.length;
switch (G__24704) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__24707 = arguments.length;
switch (G__24707) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__24307__auto___24756 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24308__auto__ = (function (){var switch__24212__auto__ = (function (state_24733){
var state_val_24734 = (state_24733[(1)]);
if((state_val_24734 === (7))){
var inst_24729 = (state_24733[(2)]);
var state_24733__$1 = state_24733;
var statearr_24735_24757 = state_24733__$1;
(statearr_24735_24757[(2)] = inst_24729);

(statearr_24735_24757[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24734 === (1))){
var state_24733__$1 = state_24733;
var statearr_24736_24758 = state_24733__$1;
(statearr_24736_24758[(2)] = null);

(statearr_24736_24758[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24734 === (4))){
var inst_24710 = (state_24733[(7)]);
var inst_24710__$1 = (state_24733[(2)]);
var inst_24711 = (inst_24710__$1 == null);
var state_24733__$1 = (function (){var statearr_24737 = state_24733;
(statearr_24737[(7)] = inst_24710__$1);

return statearr_24737;
})();
if(cljs.core.truth_(inst_24711)){
var statearr_24738_24759 = state_24733__$1;
(statearr_24738_24759[(1)] = (5));

} else {
var statearr_24739_24760 = state_24733__$1;
(statearr_24739_24760[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24734 === (13))){
var state_24733__$1 = state_24733;
var statearr_24740_24761 = state_24733__$1;
(statearr_24740_24761[(2)] = null);

(statearr_24740_24761[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24734 === (6))){
var inst_24710 = (state_24733[(7)]);
var inst_24716 = p.call(null,inst_24710);
var state_24733__$1 = state_24733;
if(cljs.core.truth_(inst_24716)){
var statearr_24741_24762 = state_24733__$1;
(statearr_24741_24762[(1)] = (9));

} else {
var statearr_24742_24763 = state_24733__$1;
(statearr_24742_24763[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24734 === (3))){
var inst_24731 = (state_24733[(2)]);
var state_24733__$1 = state_24733;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24733__$1,inst_24731);
} else {
if((state_val_24734 === (12))){
var state_24733__$1 = state_24733;
var statearr_24743_24764 = state_24733__$1;
(statearr_24743_24764[(2)] = null);

(statearr_24743_24764[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24734 === (2))){
var state_24733__$1 = state_24733;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24733__$1,(4),ch);
} else {
if((state_val_24734 === (11))){
var inst_24710 = (state_24733[(7)]);
var inst_24720 = (state_24733[(2)]);
var state_24733__$1 = state_24733;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24733__$1,(8),inst_24720,inst_24710);
} else {
if((state_val_24734 === (9))){
var state_24733__$1 = state_24733;
var statearr_24744_24765 = state_24733__$1;
(statearr_24744_24765[(2)] = tc);

(statearr_24744_24765[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24734 === (5))){
var inst_24713 = cljs.core.async.close_BANG_.call(null,tc);
var inst_24714 = cljs.core.async.close_BANG_.call(null,fc);
var state_24733__$1 = (function (){var statearr_24745 = state_24733;
(statearr_24745[(8)] = inst_24713);

return statearr_24745;
})();
var statearr_24746_24766 = state_24733__$1;
(statearr_24746_24766[(2)] = inst_24714);

(statearr_24746_24766[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24734 === (14))){
var inst_24727 = (state_24733[(2)]);
var state_24733__$1 = state_24733;
var statearr_24747_24767 = state_24733__$1;
(statearr_24747_24767[(2)] = inst_24727);

(statearr_24747_24767[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24734 === (10))){
var state_24733__$1 = state_24733;
var statearr_24748_24768 = state_24733__$1;
(statearr_24748_24768[(2)] = fc);

(statearr_24748_24768[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24734 === (8))){
var inst_24722 = (state_24733[(2)]);
var state_24733__$1 = state_24733;
if(cljs.core.truth_(inst_24722)){
var statearr_24749_24769 = state_24733__$1;
(statearr_24749_24769[(1)] = (12));

} else {
var statearr_24750_24770 = state_24733__$1;
(statearr_24750_24770[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__24213__auto__ = null;
var cljs$core$async$state_machine__24213__auto____0 = (function (){
var statearr_24751 = [null,null,null,null,null,null,null,null,null];
(statearr_24751[(0)] = cljs$core$async$state_machine__24213__auto__);

(statearr_24751[(1)] = (1));

return statearr_24751;
});
var cljs$core$async$state_machine__24213__auto____1 = (function (state_24733){
while(true){
var ret_value__24214__auto__ = (function (){try{while(true){
var result__24215__auto__ = switch__24212__auto__.call(null,state_24733);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24215__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24215__auto__;
}
break;
}
}catch (e24752){if((e24752 instanceof Object)){
var ex__24216__auto__ = e24752;
var statearr_24753_24771 = state_24733;
(statearr_24753_24771[(5)] = ex__24216__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24733);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24752;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24214__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24772 = state_24733;
state_24733 = G__24772;
continue;
} else {
return ret_value__24214__auto__;
}
break;
}
});
cljs$core$async$state_machine__24213__auto__ = function(state_24733){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24213__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24213__auto____1.call(this,state_24733);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24213__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24213__auto____0;
cljs$core$async$state_machine__24213__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24213__auto____1;
return cljs$core$async$state_machine__24213__auto__;
})()
})();
var state__24309__auto__ = (function (){var statearr_24754 = f__24308__auto__.call(null);
(statearr_24754[(6)] = c__24307__auto___24756);

return statearr_24754;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24309__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__24307__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24308__auto__ = (function (){var switch__24212__auto__ = (function (state_24793){
var state_val_24794 = (state_24793[(1)]);
if((state_val_24794 === (7))){
var inst_24789 = (state_24793[(2)]);
var state_24793__$1 = state_24793;
var statearr_24795_24813 = state_24793__$1;
(statearr_24795_24813[(2)] = inst_24789);

(statearr_24795_24813[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24794 === (1))){
var inst_24773 = init;
var state_24793__$1 = (function (){var statearr_24796 = state_24793;
(statearr_24796[(7)] = inst_24773);

return statearr_24796;
})();
var statearr_24797_24814 = state_24793__$1;
(statearr_24797_24814[(2)] = null);

(statearr_24797_24814[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24794 === (4))){
var inst_24776 = (state_24793[(8)]);
var inst_24776__$1 = (state_24793[(2)]);
var inst_24777 = (inst_24776__$1 == null);
var state_24793__$1 = (function (){var statearr_24798 = state_24793;
(statearr_24798[(8)] = inst_24776__$1);

return statearr_24798;
})();
if(cljs.core.truth_(inst_24777)){
var statearr_24799_24815 = state_24793__$1;
(statearr_24799_24815[(1)] = (5));

} else {
var statearr_24800_24816 = state_24793__$1;
(statearr_24800_24816[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24794 === (6))){
var inst_24780 = (state_24793[(9)]);
var inst_24776 = (state_24793[(8)]);
var inst_24773 = (state_24793[(7)]);
var inst_24780__$1 = f.call(null,inst_24773,inst_24776);
var inst_24781 = cljs.core.reduced_QMARK_.call(null,inst_24780__$1);
var state_24793__$1 = (function (){var statearr_24801 = state_24793;
(statearr_24801[(9)] = inst_24780__$1);

return statearr_24801;
})();
if(inst_24781){
var statearr_24802_24817 = state_24793__$1;
(statearr_24802_24817[(1)] = (8));

} else {
var statearr_24803_24818 = state_24793__$1;
(statearr_24803_24818[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24794 === (3))){
var inst_24791 = (state_24793[(2)]);
var state_24793__$1 = state_24793;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24793__$1,inst_24791);
} else {
if((state_val_24794 === (2))){
var state_24793__$1 = state_24793;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24793__$1,(4),ch);
} else {
if((state_val_24794 === (9))){
var inst_24780 = (state_24793[(9)]);
var inst_24773 = inst_24780;
var state_24793__$1 = (function (){var statearr_24804 = state_24793;
(statearr_24804[(7)] = inst_24773);

return statearr_24804;
})();
var statearr_24805_24819 = state_24793__$1;
(statearr_24805_24819[(2)] = null);

(statearr_24805_24819[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24794 === (5))){
var inst_24773 = (state_24793[(7)]);
var state_24793__$1 = state_24793;
var statearr_24806_24820 = state_24793__$1;
(statearr_24806_24820[(2)] = inst_24773);

(statearr_24806_24820[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24794 === (10))){
var inst_24787 = (state_24793[(2)]);
var state_24793__$1 = state_24793;
var statearr_24807_24821 = state_24793__$1;
(statearr_24807_24821[(2)] = inst_24787);

(statearr_24807_24821[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24794 === (8))){
var inst_24780 = (state_24793[(9)]);
var inst_24783 = cljs.core.deref.call(null,inst_24780);
var state_24793__$1 = state_24793;
var statearr_24808_24822 = state_24793__$1;
(statearr_24808_24822[(2)] = inst_24783);

(statearr_24808_24822[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__24213__auto__ = null;
var cljs$core$async$reduce_$_state_machine__24213__auto____0 = (function (){
var statearr_24809 = [null,null,null,null,null,null,null,null,null,null];
(statearr_24809[(0)] = cljs$core$async$reduce_$_state_machine__24213__auto__);

(statearr_24809[(1)] = (1));

return statearr_24809;
});
var cljs$core$async$reduce_$_state_machine__24213__auto____1 = (function (state_24793){
while(true){
var ret_value__24214__auto__ = (function (){try{while(true){
var result__24215__auto__ = switch__24212__auto__.call(null,state_24793);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24215__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24215__auto__;
}
break;
}
}catch (e24810){if((e24810 instanceof Object)){
var ex__24216__auto__ = e24810;
var statearr_24811_24823 = state_24793;
(statearr_24811_24823[(5)] = ex__24216__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24793);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24810;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24214__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24824 = state_24793;
state_24793 = G__24824;
continue;
} else {
return ret_value__24214__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__24213__auto__ = function(state_24793){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__24213__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__24213__auto____1.call(this,state_24793);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__24213__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__24213__auto____0;
cljs$core$async$reduce_$_state_machine__24213__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__24213__auto____1;
return cljs$core$async$reduce_$_state_machine__24213__auto__;
})()
})();
var state__24309__auto__ = (function (){var statearr_24812 = f__24308__auto__.call(null);
(statearr_24812[(6)] = c__24307__auto__);

return statearr_24812;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24309__auto__);
}));

return c__24307__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__24307__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24308__auto__ = (function (){var switch__24212__auto__ = (function (state_24830){
var state_val_24831 = (state_24830[(1)]);
if((state_val_24831 === (1))){
var inst_24825 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_24830__$1 = state_24830;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24830__$1,(2),inst_24825);
} else {
if((state_val_24831 === (2))){
var inst_24827 = (state_24830[(2)]);
var inst_24828 = f__$1.call(null,inst_24827);
var state_24830__$1 = state_24830;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24830__$1,inst_24828);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__24213__auto__ = null;
var cljs$core$async$transduce_$_state_machine__24213__auto____0 = (function (){
var statearr_24832 = [null,null,null,null,null,null,null];
(statearr_24832[(0)] = cljs$core$async$transduce_$_state_machine__24213__auto__);

(statearr_24832[(1)] = (1));

return statearr_24832;
});
var cljs$core$async$transduce_$_state_machine__24213__auto____1 = (function (state_24830){
while(true){
var ret_value__24214__auto__ = (function (){try{while(true){
var result__24215__auto__ = switch__24212__auto__.call(null,state_24830);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24215__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24215__auto__;
}
break;
}
}catch (e24833){if((e24833 instanceof Object)){
var ex__24216__auto__ = e24833;
var statearr_24834_24836 = state_24830;
(statearr_24834_24836[(5)] = ex__24216__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24830);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24833;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24214__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24837 = state_24830;
state_24830 = G__24837;
continue;
} else {
return ret_value__24214__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__24213__auto__ = function(state_24830){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__24213__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__24213__auto____1.call(this,state_24830);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__24213__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__24213__auto____0;
cljs$core$async$transduce_$_state_machine__24213__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__24213__auto____1;
return cljs$core$async$transduce_$_state_machine__24213__auto__;
})()
})();
var state__24309__auto__ = (function (){var statearr_24835 = f__24308__auto__.call(null);
(statearr_24835[(6)] = c__24307__auto__);

return statearr_24835;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24309__auto__);
}));

return c__24307__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__24839 = arguments.length;
switch (G__24839) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__24307__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24308__auto__ = (function (){var switch__24212__auto__ = (function (state_24864){
var state_val_24865 = (state_24864[(1)]);
if((state_val_24865 === (7))){
var inst_24846 = (state_24864[(2)]);
var state_24864__$1 = state_24864;
var statearr_24866_24887 = state_24864__$1;
(statearr_24866_24887[(2)] = inst_24846);

(statearr_24866_24887[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24865 === (1))){
var inst_24840 = cljs.core.seq.call(null,coll);
var inst_24841 = inst_24840;
var state_24864__$1 = (function (){var statearr_24867 = state_24864;
(statearr_24867[(7)] = inst_24841);

return statearr_24867;
})();
var statearr_24868_24888 = state_24864__$1;
(statearr_24868_24888[(2)] = null);

(statearr_24868_24888[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24865 === (4))){
var inst_24841 = (state_24864[(7)]);
var inst_24844 = cljs.core.first.call(null,inst_24841);
var state_24864__$1 = state_24864;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24864__$1,(7),ch,inst_24844);
} else {
if((state_val_24865 === (13))){
var inst_24858 = (state_24864[(2)]);
var state_24864__$1 = state_24864;
var statearr_24869_24889 = state_24864__$1;
(statearr_24869_24889[(2)] = inst_24858);

(statearr_24869_24889[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24865 === (6))){
var inst_24849 = (state_24864[(2)]);
var state_24864__$1 = state_24864;
if(cljs.core.truth_(inst_24849)){
var statearr_24870_24890 = state_24864__$1;
(statearr_24870_24890[(1)] = (8));

} else {
var statearr_24871_24891 = state_24864__$1;
(statearr_24871_24891[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24865 === (3))){
var inst_24862 = (state_24864[(2)]);
var state_24864__$1 = state_24864;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24864__$1,inst_24862);
} else {
if((state_val_24865 === (12))){
var state_24864__$1 = state_24864;
var statearr_24872_24892 = state_24864__$1;
(statearr_24872_24892[(2)] = null);

(statearr_24872_24892[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24865 === (2))){
var inst_24841 = (state_24864[(7)]);
var state_24864__$1 = state_24864;
if(cljs.core.truth_(inst_24841)){
var statearr_24873_24893 = state_24864__$1;
(statearr_24873_24893[(1)] = (4));

} else {
var statearr_24874_24894 = state_24864__$1;
(statearr_24874_24894[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24865 === (11))){
var inst_24855 = cljs.core.async.close_BANG_.call(null,ch);
var state_24864__$1 = state_24864;
var statearr_24875_24895 = state_24864__$1;
(statearr_24875_24895[(2)] = inst_24855);

(statearr_24875_24895[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24865 === (9))){
var state_24864__$1 = state_24864;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24876_24896 = state_24864__$1;
(statearr_24876_24896[(1)] = (11));

} else {
var statearr_24877_24897 = state_24864__$1;
(statearr_24877_24897[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24865 === (5))){
var inst_24841 = (state_24864[(7)]);
var state_24864__$1 = state_24864;
var statearr_24878_24898 = state_24864__$1;
(statearr_24878_24898[(2)] = inst_24841);

(statearr_24878_24898[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24865 === (10))){
var inst_24860 = (state_24864[(2)]);
var state_24864__$1 = state_24864;
var statearr_24879_24899 = state_24864__$1;
(statearr_24879_24899[(2)] = inst_24860);

(statearr_24879_24899[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24865 === (8))){
var inst_24841 = (state_24864[(7)]);
var inst_24851 = cljs.core.next.call(null,inst_24841);
var inst_24841__$1 = inst_24851;
var state_24864__$1 = (function (){var statearr_24880 = state_24864;
(statearr_24880[(7)] = inst_24841__$1);

return statearr_24880;
})();
var statearr_24881_24900 = state_24864__$1;
(statearr_24881_24900[(2)] = null);

(statearr_24881_24900[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__24213__auto__ = null;
var cljs$core$async$state_machine__24213__auto____0 = (function (){
var statearr_24882 = [null,null,null,null,null,null,null,null];
(statearr_24882[(0)] = cljs$core$async$state_machine__24213__auto__);

(statearr_24882[(1)] = (1));

return statearr_24882;
});
var cljs$core$async$state_machine__24213__auto____1 = (function (state_24864){
while(true){
var ret_value__24214__auto__ = (function (){try{while(true){
var result__24215__auto__ = switch__24212__auto__.call(null,state_24864);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24215__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24215__auto__;
}
break;
}
}catch (e24883){if((e24883 instanceof Object)){
var ex__24216__auto__ = e24883;
var statearr_24884_24901 = state_24864;
(statearr_24884_24901[(5)] = ex__24216__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24864);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24883;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24214__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24902 = state_24864;
state_24864 = G__24902;
continue;
} else {
return ret_value__24214__auto__;
}
break;
}
});
cljs$core$async$state_machine__24213__auto__ = function(state_24864){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24213__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24213__auto____1.call(this,state_24864);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24213__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24213__auto____0;
cljs$core$async$state_machine__24213__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24213__auto____1;
return cljs$core$async$state_machine__24213__auto__;
})()
})();
var state__24309__auto__ = (function (){var statearr_24885 = f__24308__auto__.call(null);
(statearr_24885[(6)] = c__24307__auto__);

return statearr_24885;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24309__auto__);
}));

return c__24307__auto__;
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4487__auto__ = (((_ == null))?null:_);
var m__4488__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,_);
} else {
var m__4485__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4485__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,m,ch);
} else {
var m__4485__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,m);
} else {
var m__4485__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24903 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24903 = (function (ch,cs,meta24904){
this.ch = ch;
this.cs = cs;
this.meta24904 = meta24904;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async24903.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24905,meta24904__$1){
var self__ = this;
var _24905__$1 = this;
return (new cljs.core.async.t_cljs$core$async24903(self__.ch,self__.cs,meta24904__$1));
}));

(cljs.core.async.t_cljs$core$async24903.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24905){
var self__ = this;
var _24905__$1 = this;
return self__.meta24904;
}));

(cljs.core.async.t_cljs$core$async24903.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24903.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async24903.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24903.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async24903.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async24903.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async24903.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta24904","meta24904",1327938962,null)], null);
}));

(cljs.core.async.t_cljs$core$async24903.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async24903.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24903");

(cljs.core.async.t_cljs$core$async24903.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.core.async/t_cljs$core$async24903");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24903.
 */
cljs.core.async.__GT_t_cljs$core$async24903 = (function cljs$core$async$mult_$___GT_t_cljs$core$async24903(ch__$1,cs__$1,meta24904){
return (new cljs.core.async.t_cljs$core$async24903(ch__$1,cs__$1,meta24904));
});

}

return (new cljs.core.async.t_cljs$core$async24903(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});
var c__24307__auto___25121 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24308__auto__ = (function (){var switch__24212__auto__ = (function (state_25038){
var state_val_25039 = (state_25038[(1)]);
if((state_val_25039 === (7))){
var inst_25034 = (state_25038[(2)]);
var state_25038__$1 = state_25038;
var statearr_25040_25122 = state_25038__$1;
(statearr_25040_25122[(2)] = inst_25034);

(statearr_25040_25122[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25039 === (20))){
var inst_24939 = (state_25038[(7)]);
var inst_24951 = cljs.core.first.call(null,inst_24939);
var inst_24952 = cljs.core.nth.call(null,inst_24951,(0),null);
var inst_24953 = cljs.core.nth.call(null,inst_24951,(1),null);
var state_25038__$1 = (function (){var statearr_25041 = state_25038;
(statearr_25041[(8)] = inst_24952);

return statearr_25041;
})();
if(cljs.core.truth_(inst_24953)){
var statearr_25042_25123 = state_25038__$1;
(statearr_25042_25123[(1)] = (22));

} else {
var statearr_25043_25124 = state_25038__$1;
(statearr_25043_25124[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25039 === (27))){
var inst_24981 = (state_25038[(9)]);
var inst_24908 = (state_25038[(10)]);
var inst_24988 = (state_25038[(11)]);
var inst_24983 = (state_25038[(12)]);
var inst_24988__$1 = cljs.core._nth.call(null,inst_24981,inst_24983);
var inst_24989 = cljs.core.async.put_BANG_.call(null,inst_24988__$1,inst_24908,done);
var state_25038__$1 = (function (){var statearr_25044 = state_25038;
(statearr_25044[(11)] = inst_24988__$1);

return statearr_25044;
})();
if(cljs.core.truth_(inst_24989)){
var statearr_25045_25125 = state_25038__$1;
(statearr_25045_25125[(1)] = (30));

} else {
var statearr_25046_25126 = state_25038__$1;
(statearr_25046_25126[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25039 === (1))){
var state_25038__$1 = state_25038;
var statearr_25047_25127 = state_25038__$1;
(statearr_25047_25127[(2)] = null);

(statearr_25047_25127[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25039 === (24))){
var inst_24939 = (state_25038[(7)]);
var inst_24958 = (state_25038[(2)]);
var inst_24959 = cljs.core.next.call(null,inst_24939);
var inst_24917 = inst_24959;
var inst_24918 = null;
var inst_24919 = (0);
var inst_24920 = (0);
var state_25038__$1 = (function (){var statearr_25048 = state_25038;
(statearr_25048[(13)] = inst_24918);

(statearr_25048[(14)] = inst_24958);

(statearr_25048[(15)] = inst_24919);

(statearr_25048[(16)] = inst_24917);

(statearr_25048[(17)] = inst_24920);

return statearr_25048;
})();
var statearr_25049_25128 = state_25038__$1;
(statearr_25049_25128[(2)] = null);

(statearr_25049_25128[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25039 === (39))){
var state_25038__$1 = state_25038;
var statearr_25053_25129 = state_25038__$1;
(statearr_25053_25129[(2)] = null);

(statearr_25053_25129[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25039 === (4))){
var inst_24908 = (state_25038[(10)]);
var inst_24908__$1 = (state_25038[(2)]);
var inst_24909 = (inst_24908__$1 == null);
var state_25038__$1 = (function (){var statearr_25054 = state_25038;
(statearr_25054[(10)] = inst_24908__$1);

return statearr_25054;
})();
if(cljs.core.truth_(inst_24909)){
var statearr_25055_25130 = state_25038__$1;
(statearr_25055_25130[(1)] = (5));

} else {
var statearr_25056_25131 = state_25038__$1;
(statearr_25056_25131[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25039 === (15))){
var inst_24918 = (state_25038[(13)]);
var inst_24919 = (state_25038[(15)]);
var inst_24917 = (state_25038[(16)]);
var inst_24920 = (state_25038[(17)]);
var inst_24935 = (state_25038[(2)]);
var inst_24936 = (inst_24920 + (1));
var tmp25050 = inst_24918;
var tmp25051 = inst_24919;
var tmp25052 = inst_24917;
var inst_24917__$1 = tmp25052;
var inst_24918__$1 = tmp25050;
var inst_24919__$1 = tmp25051;
var inst_24920__$1 = inst_24936;
var state_25038__$1 = (function (){var statearr_25057 = state_25038;
(statearr_25057[(13)] = inst_24918__$1);

(statearr_25057[(18)] = inst_24935);

(statearr_25057[(15)] = inst_24919__$1);

(statearr_25057[(16)] = inst_24917__$1);

(statearr_25057[(17)] = inst_24920__$1);

return statearr_25057;
})();
var statearr_25058_25132 = state_25038__$1;
(statearr_25058_25132[(2)] = null);

(statearr_25058_25132[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25039 === (21))){
var inst_24962 = (state_25038[(2)]);
var state_25038__$1 = state_25038;
var statearr_25062_25133 = state_25038__$1;
(statearr_25062_25133[(2)] = inst_24962);

(statearr_25062_25133[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25039 === (31))){
var inst_24988 = (state_25038[(11)]);
var inst_24992 = cljs.core.async.untap_STAR_.call(null,m,inst_24988);
var state_25038__$1 = state_25038;
var statearr_25063_25134 = state_25038__$1;
(statearr_25063_25134[(2)] = inst_24992);

(statearr_25063_25134[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25039 === (32))){
var inst_24981 = (state_25038[(9)]);
var inst_24982 = (state_25038[(19)]);
var inst_24980 = (state_25038[(20)]);
var inst_24983 = (state_25038[(12)]);
var inst_24994 = (state_25038[(2)]);
var inst_24995 = (inst_24983 + (1));
var tmp25059 = inst_24981;
var tmp25060 = inst_24982;
var tmp25061 = inst_24980;
var inst_24980__$1 = tmp25061;
var inst_24981__$1 = tmp25059;
var inst_24982__$1 = tmp25060;
var inst_24983__$1 = inst_24995;
var state_25038__$1 = (function (){var statearr_25064 = state_25038;
(statearr_25064[(9)] = inst_24981__$1);

(statearr_25064[(19)] = inst_24982__$1);

(statearr_25064[(20)] = inst_24980__$1);

(statearr_25064[(21)] = inst_24994);

(statearr_25064[(12)] = inst_24983__$1);

return statearr_25064;
})();
var statearr_25065_25135 = state_25038__$1;
(statearr_25065_25135[(2)] = null);

(statearr_25065_25135[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25039 === (40))){
var inst_25007 = (state_25038[(22)]);
var inst_25011 = cljs.core.async.untap_STAR_.call(null,m,inst_25007);
var state_25038__$1 = state_25038;
var statearr_25066_25136 = state_25038__$1;
(statearr_25066_25136[(2)] = inst_25011);

(statearr_25066_25136[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25039 === (33))){
var inst_24998 = (state_25038[(23)]);
var inst_25000 = cljs.core.chunked_seq_QMARK_.call(null,inst_24998);
var state_25038__$1 = state_25038;
if(inst_25000){
var statearr_25067_25137 = state_25038__$1;
(statearr_25067_25137[(1)] = (36));

} else {
var statearr_25068_25138 = state_25038__$1;
(statearr_25068_25138[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25039 === (13))){
var inst_24929 = (state_25038[(24)]);
var inst_24932 = cljs.core.async.close_BANG_.call(null,inst_24929);
var state_25038__$1 = state_25038;
var statearr_25069_25139 = state_25038__$1;
(statearr_25069_25139[(2)] = inst_24932);

(statearr_25069_25139[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25039 === (22))){
var inst_24952 = (state_25038[(8)]);
var inst_24955 = cljs.core.async.close_BANG_.call(null,inst_24952);
var state_25038__$1 = state_25038;
var statearr_25070_25140 = state_25038__$1;
(statearr_25070_25140[(2)] = inst_24955);

(statearr_25070_25140[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25039 === (36))){
var inst_24998 = (state_25038[(23)]);
var inst_25002 = cljs.core.chunk_first.call(null,inst_24998);
var inst_25003 = cljs.core.chunk_rest.call(null,inst_24998);
var inst_25004 = cljs.core.count.call(null,inst_25002);
var inst_24980 = inst_25003;
var inst_24981 = inst_25002;
var inst_24982 = inst_25004;
var inst_24983 = (0);
var state_25038__$1 = (function (){var statearr_25071 = state_25038;
(statearr_25071[(9)] = inst_24981);

(statearr_25071[(19)] = inst_24982);

(statearr_25071[(20)] = inst_24980);

(statearr_25071[(12)] = inst_24983);

return statearr_25071;
})();
var statearr_25072_25141 = state_25038__$1;
(statearr_25072_25141[(2)] = null);

(statearr_25072_25141[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25039 === (41))){
var inst_24998 = (state_25038[(23)]);
var inst_25013 = (state_25038[(2)]);
var inst_25014 = cljs.core.next.call(null,inst_24998);
var inst_24980 = inst_25014;
var inst_24981 = null;
var inst_24982 = (0);
var inst_24983 = (0);
var state_25038__$1 = (function (){var statearr_25073 = state_25038;
(statearr_25073[(25)] = inst_25013);

(statearr_25073[(9)] = inst_24981);

(statearr_25073[(19)] = inst_24982);

(statearr_25073[(20)] = inst_24980);

(statearr_25073[(12)] = inst_24983);

return statearr_25073;
})();
var statearr_25074_25142 = state_25038__$1;
(statearr_25074_25142[(2)] = null);

(statearr_25074_25142[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25039 === (43))){
var state_25038__$1 = state_25038;
var statearr_25075_25143 = state_25038__$1;
(statearr_25075_25143[(2)] = null);

(statearr_25075_25143[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25039 === (29))){
var inst_25022 = (state_25038[(2)]);
var state_25038__$1 = state_25038;
var statearr_25076_25144 = state_25038__$1;
(statearr_25076_25144[(2)] = inst_25022);

(statearr_25076_25144[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25039 === (44))){
var inst_25031 = (state_25038[(2)]);
var state_25038__$1 = (function (){var statearr_25077 = state_25038;
(statearr_25077[(26)] = inst_25031);

return statearr_25077;
})();
var statearr_25078_25145 = state_25038__$1;
(statearr_25078_25145[(2)] = null);

(statearr_25078_25145[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25039 === (6))){
var inst_24972 = (state_25038[(27)]);
var inst_24971 = cljs.core.deref.call(null,cs);
var inst_24972__$1 = cljs.core.keys.call(null,inst_24971);
var inst_24973 = cljs.core.count.call(null,inst_24972__$1);
var inst_24974 = cljs.core.reset_BANG_.call(null,dctr,inst_24973);
var inst_24979 = cljs.core.seq.call(null,inst_24972__$1);
var inst_24980 = inst_24979;
var inst_24981 = null;
var inst_24982 = (0);
var inst_24983 = (0);
var state_25038__$1 = (function (){var statearr_25079 = state_25038;
(statearr_25079[(9)] = inst_24981);

(statearr_25079[(19)] = inst_24982);

(statearr_25079[(20)] = inst_24980);

(statearr_25079[(27)] = inst_24972__$1);

(statearr_25079[(12)] = inst_24983);

(statearr_25079[(28)] = inst_24974);

return statearr_25079;
})();
var statearr_25080_25146 = state_25038__$1;
(statearr_25080_25146[(2)] = null);

(statearr_25080_25146[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25039 === (28))){
var inst_24980 = (state_25038[(20)]);
var inst_24998 = (state_25038[(23)]);
var inst_24998__$1 = cljs.core.seq.call(null,inst_24980);
var state_25038__$1 = (function (){var statearr_25081 = state_25038;
(statearr_25081[(23)] = inst_24998__$1);

return statearr_25081;
})();
if(inst_24998__$1){
var statearr_25082_25147 = state_25038__$1;
(statearr_25082_25147[(1)] = (33));

} else {
var statearr_25083_25148 = state_25038__$1;
(statearr_25083_25148[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25039 === (25))){
var inst_24982 = (state_25038[(19)]);
var inst_24983 = (state_25038[(12)]);
var inst_24985 = (inst_24983 < inst_24982);
var inst_24986 = inst_24985;
var state_25038__$1 = state_25038;
if(cljs.core.truth_(inst_24986)){
var statearr_25084_25149 = state_25038__$1;
(statearr_25084_25149[(1)] = (27));

} else {
var statearr_25085_25150 = state_25038__$1;
(statearr_25085_25150[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25039 === (34))){
var state_25038__$1 = state_25038;
var statearr_25086_25151 = state_25038__$1;
(statearr_25086_25151[(2)] = null);

(statearr_25086_25151[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25039 === (17))){
var state_25038__$1 = state_25038;
var statearr_25087_25152 = state_25038__$1;
(statearr_25087_25152[(2)] = null);

(statearr_25087_25152[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25039 === (3))){
var inst_25036 = (state_25038[(2)]);
var state_25038__$1 = state_25038;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25038__$1,inst_25036);
} else {
if((state_val_25039 === (12))){
var inst_24967 = (state_25038[(2)]);
var state_25038__$1 = state_25038;
var statearr_25088_25153 = state_25038__$1;
(statearr_25088_25153[(2)] = inst_24967);

(statearr_25088_25153[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25039 === (2))){
var state_25038__$1 = state_25038;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25038__$1,(4),ch);
} else {
if((state_val_25039 === (23))){
var state_25038__$1 = state_25038;
var statearr_25089_25154 = state_25038__$1;
(statearr_25089_25154[(2)] = null);

(statearr_25089_25154[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25039 === (35))){
var inst_25020 = (state_25038[(2)]);
var state_25038__$1 = state_25038;
var statearr_25090_25155 = state_25038__$1;
(statearr_25090_25155[(2)] = inst_25020);

(statearr_25090_25155[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25039 === (19))){
var inst_24939 = (state_25038[(7)]);
var inst_24943 = cljs.core.chunk_first.call(null,inst_24939);
var inst_24944 = cljs.core.chunk_rest.call(null,inst_24939);
var inst_24945 = cljs.core.count.call(null,inst_24943);
var inst_24917 = inst_24944;
var inst_24918 = inst_24943;
var inst_24919 = inst_24945;
var inst_24920 = (0);
var state_25038__$1 = (function (){var statearr_25091 = state_25038;
(statearr_25091[(13)] = inst_24918);

(statearr_25091[(15)] = inst_24919);

(statearr_25091[(16)] = inst_24917);

(statearr_25091[(17)] = inst_24920);

return statearr_25091;
})();
var statearr_25092_25156 = state_25038__$1;
(statearr_25092_25156[(2)] = null);

(statearr_25092_25156[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25039 === (11))){
var inst_24939 = (state_25038[(7)]);
var inst_24917 = (state_25038[(16)]);
var inst_24939__$1 = cljs.core.seq.call(null,inst_24917);
var state_25038__$1 = (function (){var statearr_25093 = state_25038;
(statearr_25093[(7)] = inst_24939__$1);

return statearr_25093;
})();
if(inst_24939__$1){
var statearr_25094_25157 = state_25038__$1;
(statearr_25094_25157[(1)] = (16));

} else {
var statearr_25095_25158 = state_25038__$1;
(statearr_25095_25158[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25039 === (9))){
var inst_24969 = (state_25038[(2)]);
var state_25038__$1 = state_25038;
var statearr_25096_25159 = state_25038__$1;
(statearr_25096_25159[(2)] = inst_24969);

(statearr_25096_25159[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25039 === (5))){
var inst_24915 = cljs.core.deref.call(null,cs);
var inst_24916 = cljs.core.seq.call(null,inst_24915);
var inst_24917 = inst_24916;
var inst_24918 = null;
var inst_24919 = (0);
var inst_24920 = (0);
var state_25038__$1 = (function (){var statearr_25097 = state_25038;
(statearr_25097[(13)] = inst_24918);

(statearr_25097[(15)] = inst_24919);

(statearr_25097[(16)] = inst_24917);

(statearr_25097[(17)] = inst_24920);

return statearr_25097;
})();
var statearr_25098_25160 = state_25038__$1;
(statearr_25098_25160[(2)] = null);

(statearr_25098_25160[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25039 === (14))){
var state_25038__$1 = state_25038;
var statearr_25099_25161 = state_25038__$1;
(statearr_25099_25161[(2)] = null);

(statearr_25099_25161[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25039 === (45))){
var inst_25028 = (state_25038[(2)]);
var state_25038__$1 = state_25038;
var statearr_25100_25162 = state_25038__$1;
(statearr_25100_25162[(2)] = inst_25028);

(statearr_25100_25162[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25039 === (26))){
var inst_24972 = (state_25038[(27)]);
var inst_25024 = (state_25038[(2)]);
var inst_25025 = cljs.core.seq.call(null,inst_24972);
var state_25038__$1 = (function (){var statearr_25101 = state_25038;
(statearr_25101[(29)] = inst_25024);

return statearr_25101;
})();
if(inst_25025){
var statearr_25102_25163 = state_25038__$1;
(statearr_25102_25163[(1)] = (42));

} else {
var statearr_25103_25164 = state_25038__$1;
(statearr_25103_25164[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25039 === (16))){
var inst_24939 = (state_25038[(7)]);
var inst_24941 = cljs.core.chunked_seq_QMARK_.call(null,inst_24939);
var state_25038__$1 = state_25038;
if(inst_24941){
var statearr_25104_25165 = state_25038__$1;
(statearr_25104_25165[(1)] = (19));

} else {
var statearr_25105_25166 = state_25038__$1;
(statearr_25105_25166[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25039 === (38))){
var inst_25017 = (state_25038[(2)]);
var state_25038__$1 = state_25038;
var statearr_25106_25167 = state_25038__$1;
(statearr_25106_25167[(2)] = inst_25017);

(statearr_25106_25167[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25039 === (30))){
var state_25038__$1 = state_25038;
var statearr_25107_25168 = state_25038__$1;
(statearr_25107_25168[(2)] = null);

(statearr_25107_25168[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25039 === (10))){
var inst_24918 = (state_25038[(13)]);
var inst_24920 = (state_25038[(17)]);
var inst_24928 = cljs.core._nth.call(null,inst_24918,inst_24920);
var inst_24929 = cljs.core.nth.call(null,inst_24928,(0),null);
var inst_24930 = cljs.core.nth.call(null,inst_24928,(1),null);
var state_25038__$1 = (function (){var statearr_25108 = state_25038;
(statearr_25108[(24)] = inst_24929);

return statearr_25108;
})();
if(cljs.core.truth_(inst_24930)){
var statearr_25109_25169 = state_25038__$1;
(statearr_25109_25169[(1)] = (13));

} else {
var statearr_25110_25170 = state_25038__$1;
(statearr_25110_25170[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25039 === (18))){
var inst_24965 = (state_25038[(2)]);
var state_25038__$1 = state_25038;
var statearr_25111_25171 = state_25038__$1;
(statearr_25111_25171[(2)] = inst_24965);

(statearr_25111_25171[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25039 === (42))){
var state_25038__$1 = state_25038;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25038__$1,(45),dchan);
} else {
if((state_val_25039 === (37))){
var inst_24908 = (state_25038[(10)]);
var inst_24998 = (state_25038[(23)]);
var inst_25007 = (state_25038[(22)]);
var inst_25007__$1 = cljs.core.first.call(null,inst_24998);
var inst_25008 = cljs.core.async.put_BANG_.call(null,inst_25007__$1,inst_24908,done);
var state_25038__$1 = (function (){var statearr_25112 = state_25038;
(statearr_25112[(22)] = inst_25007__$1);

return statearr_25112;
})();
if(cljs.core.truth_(inst_25008)){
var statearr_25113_25172 = state_25038__$1;
(statearr_25113_25172[(1)] = (39));

} else {
var statearr_25114_25173 = state_25038__$1;
(statearr_25114_25173[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25039 === (8))){
var inst_24919 = (state_25038[(15)]);
var inst_24920 = (state_25038[(17)]);
var inst_24922 = (inst_24920 < inst_24919);
var inst_24923 = inst_24922;
var state_25038__$1 = state_25038;
if(cljs.core.truth_(inst_24923)){
var statearr_25115_25174 = state_25038__$1;
(statearr_25115_25174[(1)] = (10));

} else {
var statearr_25116_25175 = state_25038__$1;
(statearr_25116_25175[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__24213__auto__ = null;
var cljs$core$async$mult_$_state_machine__24213__auto____0 = (function (){
var statearr_25117 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25117[(0)] = cljs$core$async$mult_$_state_machine__24213__auto__);

(statearr_25117[(1)] = (1));

return statearr_25117;
});
var cljs$core$async$mult_$_state_machine__24213__auto____1 = (function (state_25038){
while(true){
var ret_value__24214__auto__ = (function (){try{while(true){
var result__24215__auto__ = switch__24212__auto__.call(null,state_25038);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24215__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24215__auto__;
}
break;
}
}catch (e25118){if((e25118 instanceof Object)){
var ex__24216__auto__ = e25118;
var statearr_25119_25176 = state_25038;
(statearr_25119_25176[(5)] = ex__24216__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25038);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25118;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24214__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25177 = state_25038;
state_25038 = G__25177;
continue;
} else {
return ret_value__24214__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__24213__auto__ = function(state_25038){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__24213__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__24213__auto____1.call(this,state_25038);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__24213__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__24213__auto____0;
cljs$core$async$mult_$_state_machine__24213__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__24213__auto____1;
return cljs$core$async$mult_$_state_machine__24213__auto__;
})()
})();
var state__24309__auto__ = (function (){var statearr_25120 = f__24308__auto__.call(null);
(statearr_25120[(6)] = c__24307__auto___25121);

return statearr_25120;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24309__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__25179 = arguments.length;
switch (G__25179) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,m,ch);
} else {
var m__4485__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,m,ch);
} else {
var m__4485__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,m);
} else {
var m__4485__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,m,state_map);
} else {
var m__4485__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,m,mode);
} else {
var m__4485__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___25191 = arguments.length;
var i__4790__auto___25192 = (0);
while(true){
if((i__4790__auto___25192 < len__4789__auto___25191)){
args__4795__auto__.push((arguments[i__4790__auto___25192]));

var G__25193 = (i__4790__auto___25192 + (1));
i__4790__auto___25192 = G__25193;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__25185){
var map__25186 = p__25185;
var map__25186__$1 = (((((!((map__25186 == null))))?(((((map__25186.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25186.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25186):map__25186);
var opts = map__25186__$1;
var statearr_25188_25194 = state;
(statearr_25188_25194[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts.call(null,(function (val){
var statearr_25189_25195 = state;
(statearr_25189_25195[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_25190_25196 = state;
(statearr_25190_25196[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq25181){
var G__25182 = cljs.core.first.call(null,seq25181);
var seq25181__$1 = cljs.core.next.call(null,seq25181);
var G__25183 = cljs.core.first.call(null,seq25181__$1);
var seq25181__$2 = cljs.core.next.call(null,seq25181__$1);
var G__25184 = cljs.core.first.call(null,seq25181__$2);
var seq25181__$3 = cljs.core.next.call(null,seq25181__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25182,G__25183,G__25184,seq25181__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(1)));
var changed = (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv.call(null,(function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_.call(null,solos))))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25197 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25197 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta25198){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta25198 = meta25198;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async25197.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25199,meta25198__$1){
var self__ = this;
var _25199__$1 = this;
return (new cljs.core.async.t_cljs$core$async25197(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta25198__$1));
}));

(cljs.core.async.t_cljs$core$async25197.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25199){
var self__ = this;
var _25199__$1 = this;
return self__.meta25198;
}));

(cljs.core.async.t_cljs$core$async25197.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25197.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async25197.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25197.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async25197.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async25197.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async25197.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async25197.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async25197.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta25198","meta25198",-265831635,null)], null);
}));

(cljs.core.async.t_cljs$core$async25197.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async25197.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25197");

(cljs.core.async.t_cljs$core$async25197.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.core.async/t_cljs$core$async25197");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25197.
 */
cljs.core.async.__GT_t_cljs$core$async25197 = (function cljs$core$async$mix_$___GT_t_cljs$core$async25197(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25198){
return (new cljs.core.async.t_cljs$core$async25197(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25198));
});

}

return (new cljs.core.async.t_cljs$core$async25197(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__24307__auto___25361 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24308__auto__ = (function (){var switch__24212__auto__ = (function (state_25301){
var state_val_25302 = (state_25301[(1)]);
if((state_val_25302 === (7))){
var inst_25216 = (state_25301[(2)]);
var state_25301__$1 = state_25301;
var statearr_25303_25362 = state_25301__$1;
(statearr_25303_25362[(2)] = inst_25216);

(statearr_25303_25362[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25302 === (20))){
var inst_25228 = (state_25301[(7)]);
var state_25301__$1 = state_25301;
var statearr_25304_25363 = state_25301__$1;
(statearr_25304_25363[(2)] = inst_25228);

(statearr_25304_25363[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25302 === (27))){
var state_25301__$1 = state_25301;
var statearr_25305_25364 = state_25301__$1;
(statearr_25305_25364[(2)] = null);

(statearr_25305_25364[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25302 === (1))){
var inst_25203 = (state_25301[(8)]);
var inst_25203__$1 = calc_state.call(null);
var inst_25205 = (inst_25203__$1 == null);
var inst_25206 = cljs.core.not.call(null,inst_25205);
var state_25301__$1 = (function (){var statearr_25306 = state_25301;
(statearr_25306[(8)] = inst_25203__$1);

return statearr_25306;
})();
if(inst_25206){
var statearr_25307_25365 = state_25301__$1;
(statearr_25307_25365[(1)] = (2));

} else {
var statearr_25308_25366 = state_25301__$1;
(statearr_25308_25366[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25302 === (24))){
var inst_25261 = (state_25301[(9)]);
var inst_25252 = (state_25301[(10)]);
var inst_25275 = (state_25301[(11)]);
var inst_25275__$1 = inst_25252.call(null,inst_25261);
var state_25301__$1 = (function (){var statearr_25309 = state_25301;
(statearr_25309[(11)] = inst_25275__$1);

return statearr_25309;
})();
if(cljs.core.truth_(inst_25275__$1)){
var statearr_25310_25367 = state_25301__$1;
(statearr_25310_25367[(1)] = (29));

} else {
var statearr_25311_25368 = state_25301__$1;
(statearr_25311_25368[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25302 === (4))){
var inst_25219 = (state_25301[(2)]);
var state_25301__$1 = state_25301;
if(cljs.core.truth_(inst_25219)){
var statearr_25312_25369 = state_25301__$1;
(statearr_25312_25369[(1)] = (8));

} else {
var statearr_25313_25370 = state_25301__$1;
(statearr_25313_25370[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25302 === (15))){
var inst_25246 = (state_25301[(2)]);
var state_25301__$1 = state_25301;
if(cljs.core.truth_(inst_25246)){
var statearr_25314_25371 = state_25301__$1;
(statearr_25314_25371[(1)] = (19));

} else {
var statearr_25315_25372 = state_25301__$1;
(statearr_25315_25372[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25302 === (21))){
var inst_25251 = (state_25301[(12)]);
var inst_25251__$1 = (state_25301[(2)]);
var inst_25252 = cljs.core.get.call(null,inst_25251__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_25253 = cljs.core.get.call(null,inst_25251__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_25254 = cljs.core.get.call(null,inst_25251__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_25301__$1 = (function (){var statearr_25316 = state_25301;
(statearr_25316[(10)] = inst_25252);

(statearr_25316[(12)] = inst_25251__$1);

(statearr_25316[(13)] = inst_25253);

return statearr_25316;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_25301__$1,(22),inst_25254);
} else {
if((state_val_25302 === (31))){
var inst_25283 = (state_25301[(2)]);
var state_25301__$1 = state_25301;
if(cljs.core.truth_(inst_25283)){
var statearr_25317_25373 = state_25301__$1;
(statearr_25317_25373[(1)] = (32));

} else {
var statearr_25318_25374 = state_25301__$1;
(statearr_25318_25374[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25302 === (32))){
var inst_25260 = (state_25301[(14)]);
var state_25301__$1 = state_25301;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25301__$1,(35),out,inst_25260);
} else {
if((state_val_25302 === (33))){
var inst_25251 = (state_25301[(12)]);
var inst_25228 = inst_25251;
var state_25301__$1 = (function (){var statearr_25319 = state_25301;
(statearr_25319[(7)] = inst_25228);

return statearr_25319;
})();
var statearr_25320_25375 = state_25301__$1;
(statearr_25320_25375[(2)] = null);

(statearr_25320_25375[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25302 === (13))){
var inst_25228 = (state_25301[(7)]);
var inst_25235 = inst_25228.cljs$lang$protocol_mask$partition0$;
var inst_25236 = (inst_25235 & (64));
var inst_25237 = inst_25228.cljs$core$ISeq$;
var inst_25238 = (cljs.core.PROTOCOL_SENTINEL === inst_25237);
var inst_25239 = ((inst_25236) || (inst_25238));
var state_25301__$1 = state_25301;
if(cljs.core.truth_(inst_25239)){
var statearr_25321_25376 = state_25301__$1;
(statearr_25321_25376[(1)] = (16));

} else {
var statearr_25322_25377 = state_25301__$1;
(statearr_25322_25377[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25302 === (22))){
var inst_25261 = (state_25301[(9)]);
var inst_25260 = (state_25301[(14)]);
var inst_25259 = (state_25301[(2)]);
var inst_25260__$1 = cljs.core.nth.call(null,inst_25259,(0),null);
var inst_25261__$1 = cljs.core.nth.call(null,inst_25259,(1),null);
var inst_25262 = (inst_25260__$1 == null);
var inst_25263 = cljs.core._EQ_.call(null,inst_25261__$1,change);
var inst_25264 = ((inst_25262) || (inst_25263));
var state_25301__$1 = (function (){var statearr_25323 = state_25301;
(statearr_25323[(9)] = inst_25261__$1);

(statearr_25323[(14)] = inst_25260__$1);

return statearr_25323;
})();
if(cljs.core.truth_(inst_25264)){
var statearr_25324_25378 = state_25301__$1;
(statearr_25324_25378[(1)] = (23));

} else {
var statearr_25325_25379 = state_25301__$1;
(statearr_25325_25379[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25302 === (36))){
var inst_25251 = (state_25301[(12)]);
var inst_25228 = inst_25251;
var state_25301__$1 = (function (){var statearr_25326 = state_25301;
(statearr_25326[(7)] = inst_25228);

return statearr_25326;
})();
var statearr_25327_25380 = state_25301__$1;
(statearr_25327_25380[(2)] = null);

(statearr_25327_25380[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25302 === (29))){
var inst_25275 = (state_25301[(11)]);
var state_25301__$1 = state_25301;
var statearr_25328_25381 = state_25301__$1;
(statearr_25328_25381[(2)] = inst_25275);

(statearr_25328_25381[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25302 === (6))){
var state_25301__$1 = state_25301;
var statearr_25329_25382 = state_25301__$1;
(statearr_25329_25382[(2)] = false);

(statearr_25329_25382[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25302 === (28))){
var inst_25271 = (state_25301[(2)]);
var inst_25272 = calc_state.call(null);
var inst_25228 = inst_25272;
var state_25301__$1 = (function (){var statearr_25330 = state_25301;
(statearr_25330[(7)] = inst_25228);

(statearr_25330[(15)] = inst_25271);

return statearr_25330;
})();
var statearr_25331_25383 = state_25301__$1;
(statearr_25331_25383[(2)] = null);

(statearr_25331_25383[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25302 === (25))){
var inst_25297 = (state_25301[(2)]);
var state_25301__$1 = state_25301;
var statearr_25332_25384 = state_25301__$1;
(statearr_25332_25384[(2)] = inst_25297);

(statearr_25332_25384[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25302 === (34))){
var inst_25295 = (state_25301[(2)]);
var state_25301__$1 = state_25301;
var statearr_25333_25385 = state_25301__$1;
(statearr_25333_25385[(2)] = inst_25295);

(statearr_25333_25385[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25302 === (17))){
var state_25301__$1 = state_25301;
var statearr_25334_25386 = state_25301__$1;
(statearr_25334_25386[(2)] = false);

(statearr_25334_25386[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25302 === (3))){
var state_25301__$1 = state_25301;
var statearr_25335_25387 = state_25301__$1;
(statearr_25335_25387[(2)] = false);

(statearr_25335_25387[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25302 === (12))){
var inst_25299 = (state_25301[(2)]);
var state_25301__$1 = state_25301;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25301__$1,inst_25299);
} else {
if((state_val_25302 === (2))){
var inst_25203 = (state_25301[(8)]);
var inst_25208 = inst_25203.cljs$lang$protocol_mask$partition0$;
var inst_25209 = (inst_25208 & (64));
var inst_25210 = inst_25203.cljs$core$ISeq$;
var inst_25211 = (cljs.core.PROTOCOL_SENTINEL === inst_25210);
var inst_25212 = ((inst_25209) || (inst_25211));
var state_25301__$1 = state_25301;
if(cljs.core.truth_(inst_25212)){
var statearr_25336_25388 = state_25301__$1;
(statearr_25336_25388[(1)] = (5));

} else {
var statearr_25337_25389 = state_25301__$1;
(statearr_25337_25389[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25302 === (23))){
var inst_25260 = (state_25301[(14)]);
var inst_25266 = (inst_25260 == null);
var state_25301__$1 = state_25301;
if(cljs.core.truth_(inst_25266)){
var statearr_25338_25390 = state_25301__$1;
(statearr_25338_25390[(1)] = (26));

} else {
var statearr_25339_25391 = state_25301__$1;
(statearr_25339_25391[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25302 === (35))){
var inst_25286 = (state_25301[(2)]);
var state_25301__$1 = state_25301;
if(cljs.core.truth_(inst_25286)){
var statearr_25340_25392 = state_25301__$1;
(statearr_25340_25392[(1)] = (36));

} else {
var statearr_25341_25393 = state_25301__$1;
(statearr_25341_25393[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25302 === (19))){
var inst_25228 = (state_25301[(7)]);
var inst_25248 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25228);
var state_25301__$1 = state_25301;
var statearr_25342_25394 = state_25301__$1;
(statearr_25342_25394[(2)] = inst_25248);

(statearr_25342_25394[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25302 === (11))){
var inst_25228 = (state_25301[(7)]);
var inst_25232 = (inst_25228 == null);
var inst_25233 = cljs.core.not.call(null,inst_25232);
var state_25301__$1 = state_25301;
if(inst_25233){
var statearr_25343_25395 = state_25301__$1;
(statearr_25343_25395[(1)] = (13));

} else {
var statearr_25344_25396 = state_25301__$1;
(statearr_25344_25396[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25302 === (9))){
var inst_25203 = (state_25301[(8)]);
var state_25301__$1 = state_25301;
var statearr_25345_25397 = state_25301__$1;
(statearr_25345_25397[(2)] = inst_25203);

(statearr_25345_25397[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25302 === (5))){
var state_25301__$1 = state_25301;
var statearr_25346_25398 = state_25301__$1;
(statearr_25346_25398[(2)] = true);

(statearr_25346_25398[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25302 === (14))){
var state_25301__$1 = state_25301;
var statearr_25347_25399 = state_25301__$1;
(statearr_25347_25399[(2)] = false);

(statearr_25347_25399[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25302 === (26))){
var inst_25261 = (state_25301[(9)]);
var inst_25268 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_25261);
var state_25301__$1 = state_25301;
var statearr_25348_25400 = state_25301__$1;
(statearr_25348_25400[(2)] = inst_25268);

(statearr_25348_25400[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25302 === (16))){
var state_25301__$1 = state_25301;
var statearr_25349_25401 = state_25301__$1;
(statearr_25349_25401[(2)] = true);

(statearr_25349_25401[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25302 === (38))){
var inst_25291 = (state_25301[(2)]);
var state_25301__$1 = state_25301;
var statearr_25350_25402 = state_25301__$1;
(statearr_25350_25402[(2)] = inst_25291);

(statearr_25350_25402[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25302 === (30))){
var inst_25261 = (state_25301[(9)]);
var inst_25252 = (state_25301[(10)]);
var inst_25253 = (state_25301[(13)]);
var inst_25278 = cljs.core.empty_QMARK_.call(null,inst_25252);
var inst_25279 = inst_25253.call(null,inst_25261);
var inst_25280 = cljs.core.not.call(null,inst_25279);
var inst_25281 = ((inst_25278) && (inst_25280));
var state_25301__$1 = state_25301;
var statearr_25351_25403 = state_25301__$1;
(statearr_25351_25403[(2)] = inst_25281);

(statearr_25351_25403[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25302 === (10))){
var inst_25203 = (state_25301[(8)]);
var inst_25224 = (state_25301[(2)]);
var inst_25225 = cljs.core.get.call(null,inst_25224,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_25226 = cljs.core.get.call(null,inst_25224,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_25227 = cljs.core.get.call(null,inst_25224,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_25228 = inst_25203;
var state_25301__$1 = (function (){var statearr_25352 = state_25301;
(statearr_25352[(16)] = inst_25227);

(statearr_25352[(7)] = inst_25228);

(statearr_25352[(17)] = inst_25225);

(statearr_25352[(18)] = inst_25226);

return statearr_25352;
})();
var statearr_25353_25404 = state_25301__$1;
(statearr_25353_25404[(2)] = null);

(statearr_25353_25404[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25302 === (18))){
var inst_25243 = (state_25301[(2)]);
var state_25301__$1 = state_25301;
var statearr_25354_25405 = state_25301__$1;
(statearr_25354_25405[(2)] = inst_25243);

(statearr_25354_25405[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25302 === (37))){
var state_25301__$1 = state_25301;
var statearr_25355_25406 = state_25301__$1;
(statearr_25355_25406[(2)] = null);

(statearr_25355_25406[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25302 === (8))){
var inst_25203 = (state_25301[(8)]);
var inst_25221 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25203);
var state_25301__$1 = state_25301;
var statearr_25356_25407 = state_25301__$1;
(statearr_25356_25407[(2)] = inst_25221);

(statearr_25356_25407[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__24213__auto__ = null;
var cljs$core$async$mix_$_state_machine__24213__auto____0 = (function (){
var statearr_25357 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25357[(0)] = cljs$core$async$mix_$_state_machine__24213__auto__);

(statearr_25357[(1)] = (1));

return statearr_25357;
});
var cljs$core$async$mix_$_state_machine__24213__auto____1 = (function (state_25301){
while(true){
var ret_value__24214__auto__ = (function (){try{while(true){
var result__24215__auto__ = switch__24212__auto__.call(null,state_25301);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24215__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24215__auto__;
}
break;
}
}catch (e25358){if((e25358 instanceof Object)){
var ex__24216__auto__ = e25358;
var statearr_25359_25408 = state_25301;
(statearr_25359_25408[(5)] = ex__24216__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25301);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25358;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24214__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25409 = state_25301;
state_25301 = G__25409;
continue;
} else {
return ret_value__24214__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__24213__auto__ = function(state_25301){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__24213__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__24213__auto____1.call(this,state_25301);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__24213__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__24213__auto____0;
cljs$core$async$mix_$_state_machine__24213__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__24213__auto____1;
return cljs$core$async$mix_$_state_machine__24213__auto__;
})()
})();
var state__24309__auto__ = (function (){var statearr_25360 = f__24308__auto__.call(null);
(statearr_25360[(6)] = c__24307__auto___25361);

return statearr_25360;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24309__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4485__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,p,v,ch);
} else {
var m__4485__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__25411 = arguments.length;
switch (G__25411) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,p);
} else {
var m__4485__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,p,v);
} else {
var m__4485__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__25415 = arguments.length;
switch (G__25415) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4185__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,(function (p1__25413_SHARP_){
if(cljs.core.truth_(p1__25413_SHARP_.call(null,topic))){
return p1__25413_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__25413_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25416 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25416 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta25417){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta25417 = meta25417;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async25416.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25418,meta25417__$1){
var self__ = this;
var _25418__$1 = this;
return (new cljs.core.async.t_cljs$core$async25416(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta25417__$1));
}));

(cljs.core.async.t_cljs$core$async25416.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25418){
var self__ = this;
var _25418__$1 = this;
return self__.meta25417;
}));

(cljs.core.async.t_cljs$core$async25416.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25416.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async25416.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25416.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async25416.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async25416.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async25416.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async25416.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta25417","meta25417",-236207611,null)], null);
}));

(cljs.core.async.t_cljs$core$async25416.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async25416.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25416");

(cljs.core.async.t_cljs$core$async25416.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.core.async/t_cljs$core$async25416");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25416.
 */
cljs.core.async.__GT_t_cljs$core$async25416 = (function cljs$core$async$__GT_t_cljs$core$async25416(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta25417){
return (new cljs.core.async.t_cljs$core$async25416(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta25417));
});

}

return (new cljs.core.async.t_cljs$core$async25416(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__24307__auto___25536 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24308__auto__ = (function (){var switch__24212__auto__ = (function (state_25490){
var state_val_25491 = (state_25490[(1)]);
if((state_val_25491 === (7))){
var inst_25486 = (state_25490[(2)]);
var state_25490__$1 = state_25490;
var statearr_25492_25537 = state_25490__$1;
(statearr_25492_25537[(2)] = inst_25486);

(statearr_25492_25537[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25491 === (20))){
var state_25490__$1 = state_25490;
var statearr_25493_25538 = state_25490__$1;
(statearr_25493_25538[(2)] = null);

(statearr_25493_25538[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25491 === (1))){
var state_25490__$1 = state_25490;
var statearr_25494_25539 = state_25490__$1;
(statearr_25494_25539[(2)] = null);

(statearr_25494_25539[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25491 === (24))){
var inst_25469 = (state_25490[(7)]);
var inst_25478 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_25469);
var state_25490__$1 = state_25490;
var statearr_25495_25540 = state_25490__$1;
(statearr_25495_25540[(2)] = inst_25478);

(statearr_25495_25540[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25491 === (4))){
var inst_25421 = (state_25490[(8)]);
var inst_25421__$1 = (state_25490[(2)]);
var inst_25422 = (inst_25421__$1 == null);
var state_25490__$1 = (function (){var statearr_25496 = state_25490;
(statearr_25496[(8)] = inst_25421__$1);

return statearr_25496;
})();
if(cljs.core.truth_(inst_25422)){
var statearr_25497_25541 = state_25490__$1;
(statearr_25497_25541[(1)] = (5));

} else {
var statearr_25498_25542 = state_25490__$1;
(statearr_25498_25542[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25491 === (15))){
var inst_25463 = (state_25490[(2)]);
var state_25490__$1 = state_25490;
var statearr_25499_25543 = state_25490__$1;
(statearr_25499_25543[(2)] = inst_25463);

(statearr_25499_25543[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25491 === (21))){
var inst_25483 = (state_25490[(2)]);
var state_25490__$1 = (function (){var statearr_25500 = state_25490;
(statearr_25500[(9)] = inst_25483);

return statearr_25500;
})();
var statearr_25501_25544 = state_25490__$1;
(statearr_25501_25544[(2)] = null);

(statearr_25501_25544[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25491 === (13))){
var inst_25445 = (state_25490[(10)]);
var inst_25447 = cljs.core.chunked_seq_QMARK_.call(null,inst_25445);
var state_25490__$1 = state_25490;
if(inst_25447){
var statearr_25502_25545 = state_25490__$1;
(statearr_25502_25545[(1)] = (16));

} else {
var statearr_25503_25546 = state_25490__$1;
(statearr_25503_25546[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25491 === (22))){
var inst_25475 = (state_25490[(2)]);
var state_25490__$1 = state_25490;
if(cljs.core.truth_(inst_25475)){
var statearr_25504_25547 = state_25490__$1;
(statearr_25504_25547[(1)] = (23));

} else {
var statearr_25505_25548 = state_25490__$1;
(statearr_25505_25548[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25491 === (6))){
var inst_25471 = (state_25490[(11)]);
var inst_25421 = (state_25490[(8)]);
var inst_25469 = (state_25490[(7)]);
var inst_25469__$1 = topic_fn.call(null,inst_25421);
var inst_25470 = cljs.core.deref.call(null,mults);
var inst_25471__$1 = cljs.core.get.call(null,inst_25470,inst_25469__$1);
var state_25490__$1 = (function (){var statearr_25506 = state_25490;
(statearr_25506[(11)] = inst_25471__$1);

(statearr_25506[(7)] = inst_25469__$1);

return statearr_25506;
})();
if(cljs.core.truth_(inst_25471__$1)){
var statearr_25507_25549 = state_25490__$1;
(statearr_25507_25549[(1)] = (19));

} else {
var statearr_25508_25550 = state_25490__$1;
(statearr_25508_25550[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25491 === (25))){
var inst_25480 = (state_25490[(2)]);
var state_25490__$1 = state_25490;
var statearr_25509_25551 = state_25490__$1;
(statearr_25509_25551[(2)] = inst_25480);

(statearr_25509_25551[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25491 === (17))){
var inst_25445 = (state_25490[(10)]);
var inst_25454 = cljs.core.first.call(null,inst_25445);
var inst_25455 = cljs.core.async.muxch_STAR_.call(null,inst_25454);
var inst_25456 = cljs.core.async.close_BANG_.call(null,inst_25455);
var inst_25457 = cljs.core.next.call(null,inst_25445);
var inst_25431 = inst_25457;
var inst_25432 = null;
var inst_25433 = (0);
var inst_25434 = (0);
var state_25490__$1 = (function (){var statearr_25510 = state_25490;
(statearr_25510[(12)] = inst_25433);

(statearr_25510[(13)] = inst_25432);

(statearr_25510[(14)] = inst_25431);

(statearr_25510[(15)] = inst_25456);

(statearr_25510[(16)] = inst_25434);

return statearr_25510;
})();
var statearr_25511_25552 = state_25490__$1;
(statearr_25511_25552[(2)] = null);

(statearr_25511_25552[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25491 === (3))){
var inst_25488 = (state_25490[(2)]);
var state_25490__$1 = state_25490;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25490__$1,inst_25488);
} else {
if((state_val_25491 === (12))){
var inst_25465 = (state_25490[(2)]);
var state_25490__$1 = state_25490;
var statearr_25512_25553 = state_25490__$1;
(statearr_25512_25553[(2)] = inst_25465);

(statearr_25512_25553[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25491 === (2))){
var state_25490__$1 = state_25490;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25490__$1,(4),ch);
} else {
if((state_val_25491 === (23))){
var state_25490__$1 = state_25490;
var statearr_25513_25554 = state_25490__$1;
(statearr_25513_25554[(2)] = null);

(statearr_25513_25554[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25491 === (19))){
var inst_25471 = (state_25490[(11)]);
var inst_25421 = (state_25490[(8)]);
var inst_25473 = cljs.core.async.muxch_STAR_.call(null,inst_25471);
var state_25490__$1 = state_25490;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25490__$1,(22),inst_25473,inst_25421);
} else {
if((state_val_25491 === (11))){
var inst_25431 = (state_25490[(14)]);
var inst_25445 = (state_25490[(10)]);
var inst_25445__$1 = cljs.core.seq.call(null,inst_25431);
var state_25490__$1 = (function (){var statearr_25514 = state_25490;
(statearr_25514[(10)] = inst_25445__$1);

return statearr_25514;
})();
if(inst_25445__$1){
var statearr_25515_25555 = state_25490__$1;
(statearr_25515_25555[(1)] = (13));

} else {
var statearr_25516_25556 = state_25490__$1;
(statearr_25516_25556[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25491 === (9))){
var inst_25467 = (state_25490[(2)]);
var state_25490__$1 = state_25490;
var statearr_25517_25557 = state_25490__$1;
(statearr_25517_25557[(2)] = inst_25467);

(statearr_25517_25557[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25491 === (5))){
var inst_25428 = cljs.core.deref.call(null,mults);
var inst_25429 = cljs.core.vals.call(null,inst_25428);
var inst_25430 = cljs.core.seq.call(null,inst_25429);
var inst_25431 = inst_25430;
var inst_25432 = null;
var inst_25433 = (0);
var inst_25434 = (0);
var state_25490__$1 = (function (){var statearr_25518 = state_25490;
(statearr_25518[(12)] = inst_25433);

(statearr_25518[(13)] = inst_25432);

(statearr_25518[(14)] = inst_25431);

(statearr_25518[(16)] = inst_25434);

return statearr_25518;
})();
var statearr_25519_25558 = state_25490__$1;
(statearr_25519_25558[(2)] = null);

(statearr_25519_25558[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25491 === (14))){
var state_25490__$1 = state_25490;
var statearr_25523_25559 = state_25490__$1;
(statearr_25523_25559[(2)] = null);

(statearr_25523_25559[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25491 === (16))){
var inst_25445 = (state_25490[(10)]);
var inst_25449 = cljs.core.chunk_first.call(null,inst_25445);
var inst_25450 = cljs.core.chunk_rest.call(null,inst_25445);
var inst_25451 = cljs.core.count.call(null,inst_25449);
var inst_25431 = inst_25450;
var inst_25432 = inst_25449;
var inst_25433 = inst_25451;
var inst_25434 = (0);
var state_25490__$1 = (function (){var statearr_25524 = state_25490;
(statearr_25524[(12)] = inst_25433);

(statearr_25524[(13)] = inst_25432);

(statearr_25524[(14)] = inst_25431);

(statearr_25524[(16)] = inst_25434);

return statearr_25524;
})();
var statearr_25525_25560 = state_25490__$1;
(statearr_25525_25560[(2)] = null);

(statearr_25525_25560[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25491 === (10))){
var inst_25433 = (state_25490[(12)]);
var inst_25432 = (state_25490[(13)]);
var inst_25431 = (state_25490[(14)]);
var inst_25434 = (state_25490[(16)]);
var inst_25439 = cljs.core._nth.call(null,inst_25432,inst_25434);
var inst_25440 = cljs.core.async.muxch_STAR_.call(null,inst_25439);
var inst_25441 = cljs.core.async.close_BANG_.call(null,inst_25440);
var inst_25442 = (inst_25434 + (1));
var tmp25520 = inst_25433;
var tmp25521 = inst_25432;
var tmp25522 = inst_25431;
var inst_25431__$1 = tmp25522;
var inst_25432__$1 = tmp25521;
var inst_25433__$1 = tmp25520;
var inst_25434__$1 = inst_25442;
var state_25490__$1 = (function (){var statearr_25526 = state_25490;
(statearr_25526[(17)] = inst_25441);

(statearr_25526[(12)] = inst_25433__$1);

(statearr_25526[(13)] = inst_25432__$1);

(statearr_25526[(14)] = inst_25431__$1);

(statearr_25526[(16)] = inst_25434__$1);

return statearr_25526;
})();
var statearr_25527_25561 = state_25490__$1;
(statearr_25527_25561[(2)] = null);

(statearr_25527_25561[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25491 === (18))){
var inst_25460 = (state_25490[(2)]);
var state_25490__$1 = state_25490;
var statearr_25528_25562 = state_25490__$1;
(statearr_25528_25562[(2)] = inst_25460);

(statearr_25528_25562[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25491 === (8))){
var inst_25433 = (state_25490[(12)]);
var inst_25434 = (state_25490[(16)]);
var inst_25436 = (inst_25434 < inst_25433);
var inst_25437 = inst_25436;
var state_25490__$1 = state_25490;
if(cljs.core.truth_(inst_25437)){
var statearr_25529_25563 = state_25490__$1;
(statearr_25529_25563[(1)] = (10));

} else {
var statearr_25530_25564 = state_25490__$1;
(statearr_25530_25564[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__24213__auto__ = null;
var cljs$core$async$state_machine__24213__auto____0 = (function (){
var statearr_25531 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25531[(0)] = cljs$core$async$state_machine__24213__auto__);

(statearr_25531[(1)] = (1));

return statearr_25531;
});
var cljs$core$async$state_machine__24213__auto____1 = (function (state_25490){
while(true){
var ret_value__24214__auto__ = (function (){try{while(true){
var result__24215__auto__ = switch__24212__auto__.call(null,state_25490);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24215__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24215__auto__;
}
break;
}
}catch (e25532){if((e25532 instanceof Object)){
var ex__24216__auto__ = e25532;
var statearr_25533_25565 = state_25490;
(statearr_25533_25565[(5)] = ex__24216__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25490);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25532;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24214__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25566 = state_25490;
state_25490 = G__25566;
continue;
} else {
return ret_value__24214__auto__;
}
break;
}
});
cljs$core$async$state_machine__24213__auto__ = function(state_25490){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24213__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24213__auto____1.call(this,state_25490);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24213__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24213__auto____0;
cljs$core$async$state_machine__24213__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24213__auto____1;
return cljs$core$async$state_machine__24213__auto__;
})()
})();
var state__24309__auto__ = (function (){var statearr_25534 = f__24308__auto__.call(null);
(statearr_25534[(6)] = c__24307__auto___25536);

return statearr_25534;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24309__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__25568 = arguments.length;
switch (G__25568) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__25571 = arguments.length;
switch (G__25571) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__25574 = arguments.length;
switch (G__25574) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,(function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.call(null,cnt));
var c__24307__auto___25641 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24308__auto__ = (function (){var switch__24212__auto__ = (function (state_25613){
var state_val_25614 = (state_25613[(1)]);
if((state_val_25614 === (7))){
var state_25613__$1 = state_25613;
var statearr_25615_25642 = state_25613__$1;
(statearr_25615_25642[(2)] = null);

(statearr_25615_25642[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25614 === (1))){
var state_25613__$1 = state_25613;
var statearr_25616_25643 = state_25613__$1;
(statearr_25616_25643[(2)] = null);

(statearr_25616_25643[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25614 === (4))){
var inst_25577 = (state_25613[(7)]);
var inst_25579 = (inst_25577 < cnt);
var state_25613__$1 = state_25613;
if(cljs.core.truth_(inst_25579)){
var statearr_25617_25644 = state_25613__$1;
(statearr_25617_25644[(1)] = (6));

} else {
var statearr_25618_25645 = state_25613__$1;
(statearr_25618_25645[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25614 === (15))){
var inst_25609 = (state_25613[(2)]);
var state_25613__$1 = state_25613;
var statearr_25619_25646 = state_25613__$1;
(statearr_25619_25646[(2)] = inst_25609);

(statearr_25619_25646[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25614 === (13))){
var inst_25602 = cljs.core.async.close_BANG_.call(null,out);
var state_25613__$1 = state_25613;
var statearr_25620_25647 = state_25613__$1;
(statearr_25620_25647[(2)] = inst_25602);

(statearr_25620_25647[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25614 === (6))){
var state_25613__$1 = state_25613;
var statearr_25621_25648 = state_25613__$1;
(statearr_25621_25648[(2)] = null);

(statearr_25621_25648[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25614 === (3))){
var inst_25611 = (state_25613[(2)]);
var state_25613__$1 = state_25613;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25613__$1,inst_25611);
} else {
if((state_val_25614 === (12))){
var inst_25599 = (state_25613[(8)]);
var inst_25599__$1 = (state_25613[(2)]);
var inst_25600 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_25599__$1);
var state_25613__$1 = (function (){var statearr_25622 = state_25613;
(statearr_25622[(8)] = inst_25599__$1);

return statearr_25622;
})();
if(cljs.core.truth_(inst_25600)){
var statearr_25623_25649 = state_25613__$1;
(statearr_25623_25649[(1)] = (13));

} else {
var statearr_25624_25650 = state_25613__$1;
(statearr_25624_25650[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25614 === (2))){
var inst_25576 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_25577 = (0);
var state_25613__$1 = (function (){var statearr_25625 = state_25613;
(statearr_25625[(7)] = inst_25577);

(statearr_25625[(9)] = inst_25576);

return statearr_25625;
})();
var statearr_25626_25651 = state_25613__$1;
(statearr_25626_25651[(2)] = null);

(statearr_25626_25651[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25614 === (11))){
var inst_25577 = (state_25613[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_25613,(10),Object,null,(9));
var inst_25586 = chs__$1.call(null,inst_25577);
var inst_25587 = done.call(null,inst_25577);
var inst_25588 = cljs.core.async.take_BANG_.call(null,inst_25586,inst_25587);
var state_25613__$1 = state_25613;
var statearr_25627_25652 = state_25613__$1;
(statearr_25627_25652[(2)] = inst_25588);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25613__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25614 === (9))){
var inst_25577 = (state_25613[(7)]);
var inst_25590 = (state_25613[(2)]);
var inst_25591 = (inst_25577 + (1));
var inst_25577__$1 = inst_25591;
var state_25613__$1 = (function (){var statearr_25628 = state_25613;
(statearr_25628[(7)] = inst_25577__$1);

(statearr_25628[(10)] = inst_25590);

return statearr_25628;
})();
var statearr_25629_25653 = state_25613__$1;
(statearr_25629_25653[(2)] = null);

(statearr_25629_25653[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25614 === (5))){
var inst_25597 = (state_25613[(2)]);
var state_25613__$1 = (function (){var statearr_25630 = state_25613;
(statearr_25630[(11)] = inst_25597);

return statearr_25630;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25613__$1,(12),dchan);
} else {
if((state_val_25614 === (14))){
var inst_25599 = (state_25613[(8)]);
var inst_25604 = cljs.core.apply.call(null,f,inst_25599);
var state_25613__$1 = state_25613;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25613__$1,(16),out,inst_25604);
} else {
if((state_val_25614 === (16))){
var inst_25606 = (state_25613[(2)]);
var state_25613__$1 = (function (){var statearr_25631 = state_25613;
(statearr_25631[(12)] = inst_25606);

return statearr_25631;
})();
var statearr_25632_25654 = state_25613__$1;
(statearr_25632_25654[(2)] = null);

(statearr_25632_25654[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25614 === (10))){
var inst_25581 = (state_25613[(2)]);
var inst_25582 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_25613__$1 = (function (){var statearr_25633 = state_25613;
(statearr_25633[(13)] = inst_25581);

return statearr_25633;
})();
var statearr_25634_25655 = state_25613__$1;
(statearr_25634_25655[(2)] = inst_25582);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25613__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25614 === (8))){
var inst_25595 = (state_25613[(2)]);
var state_25613__$1 = state_25613;
var statearr_25635_25656 = state_25613__$1;
(statearr_25635_25656[(2)] = inst_25595);

(statearr_25635_25656[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__24213__auto__ = null;
var cljs$core$async$state_machine__24213__auto____0 = (function (){
var statearr_25636 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25636[(0)] = cljs$core$async$state_machine__24213__auto__);

(statearr_25636[(1)] = (1));

return statearr_25636;
});
var cljs$core$async$state_machine__24213__auto____1 = (function (state_25613){
while(true){
var ret_value__24214__auto__ = (function (){try{while(true){
var result__24215__auto__ = switch__24212__auto__.call(null,state_25613);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24215__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24215__auto__;
}
break;
}
}catch (e25637){if((e25637 instanceof Object)){
var ex__24216__auto__ = e25637;
var statearr_25638_25657 = state_25613;
(statearr_25638_25657[(5)] = ex__24216__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25613);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25637;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24214__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25658 = state_25613;
state_25613 = G__25658;
continue;
} else {
return ret_value__24214__auto__;
}
break;
}
});
cljs$core$async$state_machine__24213__auto__ = function(state_25613){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24213__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24213__auto____1.call(this,state_25613);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24213__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24213__auto____0;
cljs$core$async$state_machine__24213__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24213__auto____1;
return cljs$core$async$state_machine__24213__auto__;
})()
})();
var state__24309__auto__ = (function (){var statearr_25639 = f__24308__auto__.call(null);
(statearr_25639[(6)] = c__24307__auto___25641);

return statearr_25639;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24309__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__25661 = arguments.length;
switch (G__25661) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24307__auto___25715 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24308__auto__ = (function (){var switch__24212__auto__ = (function (state_25693){
var state_val_25694 = (state_25693[(1)]);
if((state_val_25694 === (7))){
var inst_25673 = (state_25693[(7)]);
var inst_25672 = (state_25693[(8)]);
var inst_25672__$1 = (state_25693[(2)]);
var inst_25673__$1 = cljs.core.nth.call(null,inst_25672__$1,(0),null);
var inst_25674 = cljs.core.nth.call(null,inst_25672__$1,(1),null);
var inst_25675 = (inst_25673__$1 == null);
var state_25693__$1 = (function (){var statearr_25695 = state_25693;
(statearr_25695[(7)] = inst_25673__$1);

(statearr_25695[(9)] = inst_25674);

(statearr_25695[(8)] = inst_25672__$1);

return statearr_25695;
})();
if(cljs.core.truth_(inst_25675)){
var statearr_25696_25716 = state_25693__$1;
(statearr_25696_25716[(1)] = (8));

} else {
var statearr_25697_25717 = state_25693__$1;
(statearr_25697_25717[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25694 === (1))){
var inst_25662 = cljs.core.vec.call(null,chs);
var inst_25663 = inst_25662;
var state_25693__$1 = (function (){var statearr_25698 = state_25693;
(statearr_25698[(10)] = inst_25663);

return statearr_25698;
})();
var statearr_25699_25718 = state_25693__$1;
(statearr_25699_25718[(2)] = null);

(statearr_25699_25718[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25694 === (4))){
var inst_25663 = (state_25693[(10)]);
var state_25693__$1 = state_25693;
return cljs.core.async.ioc_alts_BANG_.call(null,state_25693__$1,(7),inst_25663);
} else {
if((state_val_25694 === (6))){
var inst_25689 = (state_25693[(2)]);
var state_25693__$1 = state_25693;
var statearr_25700_25719 = state_25693__$1;
(statearr_25700_25719[(2)] = inst_25689);

(statearr_25700_25719[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25694 === (3))){
var inst_25691 = (state_25693[(2)]);
var state_25693__$1 = state_25693;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25693__$1,inst_25691);
} else {
if((state_val_25694 === (2))){
var inst_25663 = (state_25693[(10)]);
var inst_25665 = cljs.core.count.call(null,inst_25663);
var inst_25666 = (inst_25665 > (0));
var state_25693__$1 = state_25693;
if(cljs.core.truth_(inst_25666)){
var statearr_25702_25720 = state_25693__$1;
(statearr_25702_25720[(1)] = (4));

} else {
var statearr_25703_25721 = state_25693__$1;
(statearr_25703_25721[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25694 === (11))){
var inst_25663 = (state_25693[(10)]);
var inst_25682 = (state_25693[(2)]);
var tmp25701 = inst_25663;
var inst_25663__$1 = tmp25701;
var state_25693__$1 = (function (){var statearr_25704 = state_25693;
(statearr_25704[(10)] = inst_25663__$1);

(statearr_25704[(11)] = inst_25682);

return statearr_25704;
})();
var statearr_25705_25722 = state_25693__$1;
(statearr_25705_25722[(2)] = null);

(statearr_25705_25722[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25694 === (9))){
var inst_25673 = (state_25693[(7)]);
var state_25693__$1 = state_25693;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25693__$1,(11),out,inst_25673);
} else {
if((state_val_25694 === (5))){
var inst_25687 = cljs.core.async.close_BANG_.call(null,out);
var state_25693__$1 = state_25693;
var statearr_25706_25723 = state_25693__$1;
(statearr_25706_25723[(2)] = inst_25687);

(statearr_25706_25723[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25694 === (10))){
var inst_25685 = (state_25693[(2)]);
var state_25693__$1 = state_25693;
var statearr_25707_25724 = state_25693__$1;
(statearr_25707_25724[(2)] = inst_25685);

(statearr_25707_25724[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25694 === (8))){
var inst_25663 = (state_25693[(10)]);
var inst_25673 = (state_25693[(7)]);
var inst_25674 = (state_25693[(9)]);
var inst_25672 = (state_25693[(8)]);
var inst_25677 = (function (){var cs = inst_25663;
var vec__25668 = inst_25672;
var v = inst_25673;
var c = inst_25674;
return (function (p1__25659_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__25659_SHARP_);
});
})();
var inst_25678 = cljs.core.filterv.call(null,inst_25677,inst_25663);
var inst_25663__$1 = inst_25678;
var state_25693__$1 = (function (){var statearr_25708 = state_25693;
(statearr_25708[(10)] = inst_25663__$1);

return statearr_25708;
})();
var statearr_25709_25725 = state_25693__$1;
(statearr_25709_25725[(2)] = null);

(statearr_25709_25725[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__24213__auto__ = null;
var cljs$core$async$state_machine__24213__auto____0 = (function (){
var statearr_25710 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25710[(0)] = cljs$core$async$state_machine__24213__auto__);

(statearr_25710[(1)] = (1));

return statearr_25710;
});
var cljs$core$async$state_machine__24213__auto____1 = (function (state_25693){
while(true){
var ret_value__24214__auto__ = (function (){try{while(true){
var result__24215__auto__ = switch__24212__auto__.call(null,state_25693);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24215__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24215__auto__;
}
break;
}
}catch (e25711){if((e25711 instanceof Object)){
var ex__24216__auto__ = e25711;
var statearr_25712_25726 = state_25693;
(statearr_25712_25726[(5)] = ex__24216__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25693);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25711;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24214__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25727 = state_25693;
state_25693 = G__25727;
continue;
} else {
return ret_value__24214__auto__;
}
break;
}
});
cljs$core$async$state_machine__24213__auto__ = function(state_25693){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24213__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24213__auto____1.call(this,state_25693);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24213__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24213__auto____0;
cljs$core$async$state_machine__24213__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24213__auto____1;
return cljs$core$async$state_machine__24213__auto__;
})()
})();
var state__24309__auto__ = (function (){var statearr_25713 = f__24308__auto__.call(null);
(statearr_25713[(6)] = c__24307__auto___25715);

return statearr_25713;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24309__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__25729 = arguments.length;
switch (G__25729) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24307__auto___25774 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24308__auto__ = (function (){var switch__24212__auto__ = (function (state_25753){
var state_val_25754 = (state_25753[(1)]);
if((state_val_25754 === (7))){
var inst_25735 = (state_25753[(7)]);
var inst_25735__$1 = (state_25753[(2)]);
var inst_25736 = (inst_25735__$1 == null);
var inst_25737 = cljs.core.not.call(null,inst_25736);
var state_25753__$1 = (function (){var statearr_25755 = state_25753;
(statearr_25755[(7)] = inst_25735__$1);

return statearr_25755;
})();
if(inst_25737){
var statearr_25756_25775 = state_25753__$1;
(statearr_25756_25775[(1)] = (8));

} else {
var statearr_25757_25776 = state_25753__$1;
(statearr_25757_25776[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25754 === (1))){
var inst_25730 = (0);
var state_25753__$1 = (function (){var statearr_25758 = state_25753;
(statearr_25758[(8)] = inst_25730);

return statearr_25758;
})();
var statearr_25759_25777 = state_25753__$1;
(statearr_25759_25777[(2)] = null);

(statearr_25759_25777[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25754 === (4))){
var state_25753__$1 = state_25753;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25753__$1,(7),ch);
} else {
if((state_val_25754 === (6))){
var inst_25748 = (state_25753[(2)]);
var state_25753__$1 = state_25753;
var statearr_25760_25778 = state_25753__$1;
(statearr_25760_25778[(2)] = inst_25748);

(statearr_25760_25778[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25754 === (3))){
var inst_25750 = (state_25753[(2)]);
var inst_25751 = cljs.core.async.close_BANG_.call(null,out);
var state_25753__$1 = (function (){var statearr_25761 = state_25753;
(statearr_25761[(9)] = inst_25750);

return statearr_25761;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25753__$1,inst_25751);
} else {
if((state_val_25754 === (2))){
var inst_25730 = (state_25753[(8)]);
var inst_25732 = (inst_25730 < n);
var state_25753__$1 = state_25753;
if(cljs.core.truth_(inst_25732)){
var statearr_25762_25779 = state_25753__$1;
(statearr_25762_25779[(1)] = (4));

} else {
var statearr_25763_25780 = state_25753__$1;
(statearr_25763_25780[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25754 === (11))){
var inst_25730 = (state_25753[(8)]);
var inst_25740 = (state_25753[(2)]);
var inst_25741 = (inst_25730 + (1));
var inst_25730__$1 = inst_25741;
var state_25753__$1 = (function (){var statearr_25764 = state_25753;
(statearr_25764[(10)] = inst_25740);

(statearr_25764[(8)] = inst_25730__$1);

return statearr_25764;
})();
var statearr_25765_25781 = state_25753__$1;
(statearr_25765_25781[(2)] = null);

(statearr_25765_25781[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25754 === (9))){
var state_25753__$1 = state_25753;
var statearr_25766_25782 = state_25753__$1;
(statearr_25766_25782[(2)] = null);

(statearr_25766_25782[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25754 === (5))){
var state_25753__$1 = state_25753;
var statearr_25767_25783 = state_25753__$1;
(statearr_25767_25783[(2)] = null);

(statearr_25767_25783[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25754 === (10))){
var inst_25745 = (state_25753[(2)]);
var state_25753__$1 = state_25753;
var statearr_25768_25784 = state_25753__$1;
(statearr_25768_25784[(2)] = inst_25745);

(statearr_25768_25784[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25754 === (8))){
var inst_25735 = (state_25753[(7)]);
var state_25753__$1 = state_25753;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25753__$1,(11),out,inst_25735);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__24213__auto__ = null;
var cljs$core$async$state_machine__24213__auto____0 = (function (){
var statearr_25769 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25769[(0)] = cljs$core$async$state_machine__24213__auto__);

(statearr_25769[(1)] = (1));

return statearr_25769;
});
var cljs$core$async$state_machine__24213__auto____1 = (function (state_25753){
while(true){
var ret_value__24214__auto__ = (function (){try{while(true){
var result__24215__auto__ = switch__24212__auto__.call(null,state_25753);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24215__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24215__auto__;
}
break;
}
}catch (e25770){if((e25770 instanceof Object)){
var ex__24216__auto__ = e25770;
var statearr_25771_25785 = state_25753;
(statearr_25771_25785[(5)] = ex__24216__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25753);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25770;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24214__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25786 = state_25753;
state_25753 = G__25786;
continue;
} else {
return ret_value__24214__auto__;
}
break;
}
});
cljs$core$async$state_machine__24213__auto__ = function(state_25753){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24213__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24213__auto____1.call(this,state_25753);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24213__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24213__auto____0;
cljs$core$async$state_machine__24213__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24213__auto____1;
return cljs$core$async$state_machine__24213__auto__;
})()
})();
var state__24309__auto__ = (function (){var statearr_25772 = f__24308__auto__.call(null);
(statearr_25772[(6)] = c__24307__auto___25774);

return statearr_25772;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24309__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25788 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25788 = (function (f,ch,meta25789){
this.f = f;
this.ch = ch;
this.meta25789 = meta25789;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async25788.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25790,meta25789__$1){
var self__ = this;
var _25790__$1 = this;
return (new cljs.core.async.t_cljs$core$async25788(self__.f,self__.ch,meta25789__$1));
}));

(cljs.core.async.t_cljs$core$async25788.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25790){
var self__ = this;
var _25790__$1 = this;
return self__.meta25789;
}));

(cljs.core.async.t_cljs$core$async25788.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25788.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async25788.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async25788.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25788.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25791 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25791 = (function (f,ch,meta25789,_,fn1,meta25792){
this.f = f;
this.ch = ch;
this.meta25789 = meta25789;
this._ = _;
this.fn1 = fn1;
this.meta25792 = meta25792;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async25791.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25793,meta25792__$1){
var self__ = this;
var _25793__$1 = this;
return (new cljs.core.async.t_cljs$core$async25791(self__.f,self__.ch,self__.meta25789,self__._,self__.fn1,meta25792__$1));
}));

(cljs.core.async.t_cljs$core$async25791.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25793){
var self__ = this;
var _25793__$1 = this;
return self__.meta25792;
}));

(cljs.core.async.t_cljs$core$async25791.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25791.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
}));

(cljs.core.async.t_cljs$core$async25791.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async25791.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return (function (p1__25787_SHARP_){
return f1.call(null,(((p1__25787_SHARP_ == null))?null:self__.f.call(null,p1__25787_SHARP_)));
});
}));

(cljs.core.async.t_cljs$core$async25791.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25789","meta25789",-1181021407,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async25788","cljs.core.async/t_cljs$core$async25788",916236433,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta25792","meta25792",-1024831181,null)], null);
}));

(cljs.core.async.t_cljs$core$async25791.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async25791.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25791");

(cljs.core.async.t_cljs$core$async25791.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.core.async/t_cljs$core$async25791");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25791.
 */
cljs.core.async.__GT_t_cljs$core$async25791 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async25791(f__$1,ch__$1,meta25789__$1,___$2,fn1__$1,meta25792){
return (new cljs.core.async.t_cljs$core$async25791(f__$1,ch__$1,meta25789__$1,___$2,fn1__$1,meta25792));
});

}

return (new cljs.core.async.t_cljs$core$async25791(self__.f,self__.ch,self__.meta25789,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4174__auto__ = ret;
if(cljs.core.truth_(and__4174__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__4174__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async25788.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25788.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async25788.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25789","meta25789",-1181021407,null)], null);
}));

(cljs.core.async.t_cljs$core$async25788.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async25788.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25788");

(cljs.core.async.t_cljs$core$async25788.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.core.async/t_cljs$core$async25788");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25788.
 */
cljs.core.async.__GT_t_cljs$core$async25788 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async25788(f__$1,ch__$1,meta25789){
return (new cljs.core.async.t_cljs$core$async25788(f__$1,ch__$1,meta25789));
});

}

return (new cljs.core.async.t_cljs$core$async25788(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25794 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25794 = (function (f,ch,meta25795){
this.f = f;
this.ch = ch;
this.meta25795 = meta25795;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async25794.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25796,meta25795__$1){
var self__ = this;
var _25796__$1 = this;
return (new cljs.core.async.t_cljs$core$async25794(self__.f,self__.ch,meta25795__$1));
}));

(cljs.core.async.t_cljs$core$async25794.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25796){
var self__ = this;
var _25796__$1 = this;
return self__.meta25795;
}));

(cljs.core.async.t_cljs$core$async25794.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25794.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async25794.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25794.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async25794.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25794.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
}));

(cljs.core.async.t_cljs$core$async25794.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25795","meta25795",756336385,null)], null);
}));

(cljs.core.async.t_cljs$core$async25794.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async25794.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25794");

(cljs.core.async.t_cljs$core$async25794.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.core.async/t_cljs$core$async25794");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25794.
 */
cljs.core.async.__GT_t_cljs$core$async25794 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async25794(f__$1,ch__$1,meta25795){
return (new cljs.core.async.t_cljs$core$async25794(f__$1,ch__$1,meta25795));
});

}

return (new cljs.core.async.t_cljs$core$async25794(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25797 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25797 = (function (p,ch,meta25798){
this.p = p;
this.ch = ch;
this.meta25798 = meta25798;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async25797.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25799,meta25798__$1){
var self__ = this;
var _25799__$1 = this;
return (new cljs.core.async.t_cljs$core$async25797(self__.p,self__.ch,meta25798__$1));
}));

(cljs.core.async.t_cljs$core$async25797.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25799){
var self__ = this;
var _25799__$1 = this;
return self__.meta25798;
}));

(cljs.core.async.t_cljs$core$async25797.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25797.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async25797.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async25797.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25797.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async25797.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25797.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async25797.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25798","meta25798",2103953868,null)], null);
}));

(cljs.core.async.t_cljs$core$async25797.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async25797.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25797");

(cljs.core.async.t_cljs$core$async25797.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.core.async/t_cljs$core$async25797");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25797.
 */
cljs.core.async.__GT_t_cljs$core$async25797 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async25797(p__$1,ch__$1,meta25798){
return (new cljs.core.async.t_cljs$core$async25797(p__$1,ch__$1,meta25798));
});

}

return (new cljs.core.async.t_cljs$core$async25797(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__25801 = arguments.length;
switch (G__25801) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24307__auto___25841 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24308__auto__ = (function (){var switch__24212__auto__ = (function (state_25822){
var state_val_25823 = (state_25822[(1)]);
if((state_val_25823 === (7))){
var inst_25818 = (state_25822[(2)]);
var state_25822__$1 = state_25822;
var statearr_25824_25842 = state_25822__$1;
(statearr_25824_25842[(2)] = inst_25818);

(statearr_25824_25842[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25823 === (1))){
var state_25822__$1 = state_25822;
var statearr_25825_25843 = state_25822__$1;
(statearr_25825_25843[(2)] = null);

(statearr_25825_25843[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25823 === (4))){
var inst_25804 = (state_25822[(7)]);
var inst_25804__$1 = (state_25822[(2)]);
var inst_25805 = (inst_25804__$1 == null);
var state_25822__$1 = (function (){var statearr_25826 = state_25822;
(statearr_25826[(7)] = inst_25804__$1);

return statearr_25826;
})();
if(cljs.core.truth_(inst_25805)){
var statearr_25827_25844 = state_25822__$1;
(statearr_25827_25844[(1)] = (5));

} else {
var statearr_25828_25845 = state_25822__$1;
(statearr_25828_25845[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25823 === (6))){
var inst_25804 = (state_25822[(7)]);
var inst_25809 = p.call(null,inst_25804);
var state_25822__$1 = state_25822;
if(cljs.core.truth_(inst_25809)){
var statearr_25829_25846 = state_25822__$1;
(statearr_25829_25846[(1)] = (8));

} else {
var statearr_25830_25847 = state_25822__$1;
(statearr_25830_25847[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25823 === (3))){
var inst_25820 = (state_25822[(2)]);
var state_25822__$1 = state_25822;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25822__$1,inst_25820);
} else {
if((state_val_25823 === (2))){
var state_25822__$1 = state_25822;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25822__$1,(4),ch);
} else {
if((state_val_25823 === (11))){
var inst_25812 = (state_25822[(2)]);
var state_25822__$1 = state_25822;
var statearr_25831_25848 = state_25822__$1;
(statearr_25831_25848[(2)] = inst_25812);

(statearr_25831_25848[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25823 === (9))){
var state_25822__$1 = state_25822;
var statearr_25832_25849 = state_25822__$1;
(statearr_25832_25849[(2)] = null);

(statearr_25832_25849[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25823 === (5))){
var inst_25807 = cljs.core.async.close_BANG_.call(null,out);
var state_25822__$1 = state_25822;
var statearr_25833_25850 = state_25822__$1;
(statearr_25833_25850[(2)] = inst_25807);

(statearr_25833_25850[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25823 === (10))){
var inst_25815 = (state_25822[(2)]);
var state_25822__$1 = (function (){var statearr_25834 = state_25822;
(statearr_25834[(8)] = inst_25815);

return statearr_25834;
})();
var statearr_25835_25851 = state_25822__$1;
(statearr_25835_25851[(2)] = null);

(statearr_25835_25851[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25823 === (8))){
var inst_25804 = (state_25822[(7)]);
var state_25822__$1 = state_25822;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25822__$1,(11),out,inst_25804);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__24213__auto__ = null;
var cljs$core$async$state_machine__24213__auto____0 = (function (){
var statearr_25836 = [null,null,null,null,null,null,null,null,null];
(statearr_25836[(0)] = cljs$core$async$state_machine__24213__auto__);

(statearr_25836[(1)] = (1));

return statearr_25836;
});
var cljs$core$async$state_machine__24213__auto____1 = (function (state_25822){
while(true){
var ret_value__24214__auto__ = (function (){try{while(true){
var result__24215__auto__ = switch__24212__auto__.call(null,state_25822);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24215__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24215__auto__;
}
break;
}
}catch (e25837){if((e25837 instanceof Object)){
var ex__24216__auto__ = e25837;
var statearr_25838_25852 = state_25822;
(statearr_25838_25852[(5)] = ex__24216__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25822);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25837;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24214__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25853 = state_25822;
state_25822 = G__25853;
continue;
} else {
return ret_value__24214__auto__;
}
break;
}
});
cljs$core$async$state_machine__24213__auto__ = function(state_25822){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24213__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24213__auto____1.call(this,state_25822);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24213__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24213__auto____0;
cljs$core$async$state_machine__24213__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24213__auto____1;
return cljs$core$async$state_machine__24213__auto__;
})()
})();
var state__24309__auto__ = (function (){var statearr_25839 = f__24308__auto__.call(null);
(statearr_25839[(6)] = c__24307__auto___25841);

return statearr_25839;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24309__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__25855 = arguments.length;
switch (G__25855) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__24307__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24308__auto__ = (function (){var switch__24212__auto__ = (function (state_25918){
var state_val_25919 = (state_25918[(1)]);
if((state_val_25919 === (7))){
var inst_25914 = (state_25918[(2)]);
var state_25918__$1 = state_25918;
var statearr_25920_25958 = state_25918__$1;
(statearr_25920_25958[(2)] = inst_25914);

(statearr_25920_25958[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25919 === (20))){
var inst_25884 = (state_25918[(7)]);
var inst_25895 = (state_25918[(2)]);
var inst_25896 = cljs.core.next.call(null,inst_25884);
var inst_25870 = inst_25896;
var inst_25871 = null;
var inst_25872 = (0);
var inst_25873 = (0);
var state_25918__$1 = (function (){var statearr_25921 = state_25918;
(statearr_25921[(8)] = inst_25871);

(statearr_25921[(9)] = inst_25872);

(statearr_25921[(10)] = inst_25873);

(statearr_25921[(11)] = inst_25895);

(statearr_25921[(12)] = inst_25870);

return statearr_25921;
})();
var statearr_25922_25959 = state_25918__$1;
(statearr_25922_25959[(2)] = null);

(statearr_25922_25959[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25919 === (1))){
var state_25918__$1 = state_25918;
var statearr_25923_25960 = state_25918__$1;
(statearr_25923_25960[(2)] = null);

(statearr_25923_25960[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25919 === (4))){
var inst_25859 = (state_25918[(13)]);
var inst_25859__$1 = (state_25918[(2)]);
var inst_25860 = (inst_25859__$1 == null);
var state_25918__$1 = (function (){var statearr_25924 = state_25918;
(statearr_25924[(13)] = inst_25859__$1);

return statearr_25924;
})();
if(cljs.core.truth_(inst_25860)){
var statearr_25925_25961 = state_25918__$1;
(statearr_25925_25961[(1)] = (5));

} else {
var statearr_25926_25962 = state_25918__$1;
(statearr_25926_25962[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25919 === (15))){
var state_25918__$1 = state_25918;
var statearr_25930_25963 = state_25918__$1;
(statearr_25930_25963[(2)] = null);

(statearr_25930_25963[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25919 === (21))){
var state_25918__$1 = state_25918;
var statearr_25931_25964 = state_25918__$1;
(statearr_25931_25964[(2)] = null);

(statearr_25931_25964[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25919 === (13))){
var inst_25871 = (state_25918[(8)]);
var inst_25872 = (state_25918[(9)]);
var inst_25873 = (state_25918[(10)]);
var inst_25870 = (state_25918[(12)]);
var inst_25880 = (state_25918[(2)]);
var inst_25881 = (inst_25873 + (1));
var tmp25927 = inst_25871;
var tmp25928 = inst_25872;
var tmp25929 = inst_25870;
var inst_25870__$1 = tmp25929;
var inst_25871__$1 = tmp25927;
var inst_25872__$1 = tmp25928;
var inst_25873__$1 = inst_25881;
var state_25918__$1 = (function (){var statearr_25932 = state_25918;
(statearr_25932[(8)] = inst_25871__$1);

(statearr_25932[(9)] = inst_25872__$1);

(statearr_25932[(14)] = inst_25880);

(statearr_25932[(10)] = inst_25873__$1);

(statearr_25932[(12)] = inst_25870__$1);

return statearr_25932;
})();
var statearr_25933_25965 = state_25918__$1;
(statearr_25933_25965[(2)] = null);

(statearr_25933_25965[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25919 === (22))){
var state_25918__$1 = state_25918;
var statearr_25934_25966 = state_25918__$1;
(statearr_25934_25966[(2)] = null);

(statearr_25934_25966[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25919 === (6))){
var inst_25859 = (state_25918[(13)]);
var inst_25868 = f.call(null,inst_25859);
var inst_25869 = cljs.core.seq.call(null,inst_25868);
var inst_25870 = inst_25869;
var inst_25871 = null;
var inst_25872 = (0);
var inst_25873 = (0);
var state_25918__$1 = (function (){var statearr_25935 = state_25918;
(statearr_25935[(8)] = inst_25871);

(statearr_25935[(9)] = inst_25872);

(statearr_25935[(10)] = inst_25873);

(statearr_25935[(12)] = inst_25870);

return statearr_25935;
})();
var statearr_25936_25967 = state_25918__$1;
(statearr_25936_25967[(2)] = null);

(statearr_25936_25967[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25919 === (17))){
var inst_25884 = (state_25918[(7)]);
var inst_25888 = cljs.core.chunk_first.call(null,inst_25884);
var inst_25889 = cljs.core.chunk_rest.call(null,inst_25884);
var inst_25890 = cljs.core.count.call(null,inst_25888);
var inst_25870 = inst_25889;
var inst_25871 = inst_25888;
var inst_25872 = inst_25890;
var inst_25873 = (0);
var state_25918__$1 = (function (){var statearr_25937 = state_25918;
(statearr_25937[(8)] = inst_25871);

(statearr_25937[(9)] = inst_25872);

(statearr_25937[(10)] = inst_25873);

(statearr_25937[(12)] = inst_25870);

return statearr_25937;
})();
var statearr_25938_25968 = state_25918__$1;
(statearr_25938_25968[(2)] = null);

(statearr_25938_25968[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25919 === (3))){
var inst_25916 = (state_25918[(2)]);
var state_25918__$1 = state_25918;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25918__$1,inst_25916);
} else {
if((state_val_25919 === (12))){
var inst_25904 = (state_25918[(2)]);
var state_25918__$1 = state_25918;
var statearr_25939_25969 = state_25918__$1;
(statearr_25939_25969[(2)] = inst_25904);

(statearr_25939_25969[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25919 === (2))){
var state_25918__$1 = state_25918;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25918__$1,(4),in$);
} else {
if((state_val_25919 === (23))){
var inst_25912 = (state_25918[(2)]);
var state_25918__$1 = state_25918;
var statearr_25940_25970 = state_25918__$1;
(statearr_25940_25970[(2)] = inst_25912);

(statearr_25940_25970[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25919 === (19))){
var inst_25899 = (state_25918[(2)]);
var state_25918__$1 = state_25918;
var statearr_25941_25971 = state_25918__$1;
(statearr_25941_25971[(2)] = inst_25899);

(statearr_25941_25971[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25919 === (11))){
var inst_25884 = (state_25918[(7)]);
var inst_25870 = (state_25918[(12)]);
var inst_25884__$1 = cljs.core.seq.call(null,inst_25870);
var state_25918__$1 = (function (){var statearr_25942 = state_25918;
(statearr_25942[(7)] = inst_25884__$1);

return statearr_25942;
})();
if(inst_25884__$1){
var statearr_25943_25972 = state_25918__$1;
(statearr_25943_25972[(1)] = (14));

} else {
var statearr_25944_25973 = state_25918__$1;
(statearr_25944_25973[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25919 === (9))){
var inst_25906 = (state_25918[(2)]);
var inst_25907 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_25918__$1 = (function (){var statearr_25945 = state_25918;
(statearr_25945[(15)] = inst_25906);

return statearr_25945;
})();
if(cljs.core.truth_(inst_25907)){
var statearr_25946_25974 = state_25918__$1;
(statearr_25946_25974[(1)] = (21));

} else {
var statearr_25947_25975 = state_25918__$1;
(statearr_25947_25975[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25919 === (5))){
var inst_25862 = cljs.core.async.close_BANG_.call(null,out);
var state_25918__$1 = state_25918;
var statearr_25948_25976 = state_25918__$1;
(statearr_25948_25976[(2)] = inst_25862);

(statearr_25948_25976[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25919 === (14))){
var inst_25884 = (state_25918[(7)]);
var inst_25886 = cljs.core.chunked_seq_QMARK_.call(null,inst_25884);
var state_25918__$1 = state_25918;
if(inst_25886){
var statearr_25949_25977 = state_25918__$1;
(statearr_25949_25977[(1)] = (17));

} else {
var statearr_25950_25978 = state_25918__$1;
(statearr_25950_25978[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25919 === (16))){
var inst_25902 = (state_25918[(2)]);
var state_25918__$1 = state_25918;
var statearr_25951_25979 = state_25918__$1;
(statearr_25951_25979[(2)] = inst_25902);

(statearr_25951_25979[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25919 === (10))){
var inst_25871 = (state_25918[(8)]);
var inst_25873 = (state_25918[(10)]);
var inst_25878 = cljs.core._nth.call(null,inst_25871,inst_25873);
var state_25918__$1 = state_25918;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25918__$1,(13),out,inst_25878);
} else {
if((state_val_25919 === (18))){
var inst_25884 = (state_25918[(7)]);
var inst_25893 = cljs.core.first.call(null,inst_25884);
var state_25918__$1 = state_25918;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25918__$1,(20),out,inst_25893);
} else {
if((state_val_25919 === (8))){
var inst_25872 = (state_25918[(9)]);
var inst_25873 = (state_25918[(10)]);
var inst_25875 = (inst_25873 < inst_25872);
var inst_25876 = inst_25875;
var state_25918__$1 = state_25918;
if(cljs.core.truth_(inst_25876)){
var statearr_25952_25980 = state_25918__$1;
(statearr_25952_25980[(1)] = (10));

} else {
var statearr_25953_25981 = state_25918__$1;
(statearr_25953_25981[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__24213__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__24213__auto____0 = (function (){
var statearr_25954 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25954[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__24213__auto__);

(statearr_25954[(1)] = (1));

return statearr_25954;
});
var cljs$core$async$mapcat_STAR__$_state_machine__24213__auto____1 = (function (state_25918){
while(true){
var ret_value__24214__auto__ = (function (){try{while(true){
var result__24215__auto__ = switch__24212__auto__.call(null,state_25918);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24215__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24215__auto__;
}
break;
}
}catch (e25955){if((e25955 instanceof Object)){
var ex__24216__auto__ = e25955;
var statearr_25956_25982 = state_25918;
(statearr_25956_25982[(5)] = ex__24216__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25918);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25955;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24214__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25983 = state_25918;
state_25918 = G__25983;
continue;
} else {
return ret_value__24214__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__24213__auto__ = function(state_25918){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__24213__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__24213__auto____1.call(this,state_25918);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__24213__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__24213__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__24213__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__24213__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__24213__auto__;
})()
})();
var state__24309__auto__ = (function (){var statearr_25957 = f__24308__auto__.call(null);
(statearr_25957[(6)] = c__24307__auto__);

return statearr_25957;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24309__auto__);
}));

return c__24307__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__25985 = arguments.length;
switch (G__25985) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__25988 = arguments.length;
switch (G__25988) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__25991 = arguments.length;
switch (G__25991) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24307__auto___26038 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24308__auto__ = (function (){var switch__24212__auto__ = (function (state_26015){
var state_val_26016 = (state_26015[(1)]);
if((state_val_26016 === (7))){
var inst_26010 = (state_26015[(2)]);
var state_26015__$1 = state_26015;
var statearr_26017_26039 = state_26015__$1;
(statearr_26017_26039[(2)] = inst_26010);

(statearr_26017_26039[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26016 === (1))){
var inst_25992 = null;
var state_26015__$1 = (function (){var statearr_26018 = state_26015;
(statearr_26018[(7)] = inst_25992);

return statearr_26018;
})();
var statearr_26019_26040 = state_26015__$1;
(statearr_26019_26040[(2)] = null);

(statearr_26019_26040[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26016 === (4))){
var inst_25995 = (state_26015[(8)]);
var inst_25995__$1 = (state_26015[(2)]);
var inst_25996 = (inst_25995__$1 == null);
var inst_25997 = cljs.core.not.call(null,inst_25996);
var state_26015__$1 = (function (){var statearr_26020 = state_26015;
(statearr_26020[(8)] = inst_25995__$1);

return statearr_26020;
})();
if(inst_25997){
var statearr_26021_26041 = state_26015__$1;
(statearr_26021_26041[(1)] = (5));

} else {
var statearr_26022_26042 = state_26015__$1;
(statearr_26022_26042[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26016 === (6))){
var state_26015__$1 = state_26015;
var statearr_26023_26043 = state_26015__$1;
(statearr_26023_26043[(2)] = null);

(statearr_26023_26043[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26016 === (3))){
var inst_26012 = (state_26015[(2)]);
var inst_26013 = cljs.core.async.close_BANG_.call(null,out);
var state_26015__$1 = (function (){var statearr_26024 = state_26015;
(statearr_26024[(9)] = inst_26012);

return statearr_26024;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26015__$1,inst_26013);
} else {
if((state_val_26016 === (2))){
var state_26015__$1 = state_26015;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26015__$1,(4),ch);
} else {
if((state_val_26016 === (11))){
var inst_25995 = (state_26015[(8)]);
var inst_26004 = (state_26015[(2)]);
var inst_25992 = inst_25995;
var state_26015__$1 = (function (){var statearr_26025 = state_26015;
(statearr_26025[(7)] = inst_25992);

(statearr_26025[(10)] = inst_26004);

return statearr_26025;
})();
var statearr_26026_26044 = state_26015__$1;
(statearr_26026_26044[(2)] = null);

(statearr_26026_26044[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26016 === (9))){
var inst_25995 = (state_26015[(8)]);
var state_26015__$1 = state_26015;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26015__$1,(11),out,inst_25995);
} else {
if((state_val_26016 === (5))){
var inst_25992 = (state_26015[(7)]);
var inst_25995 = (state_26015[(8)]);
var inst_25999 = cljs.core._EQ_.call(null,inst_25995,inst_25992);
var state_26015__$1 = state_26015;
if(inst_25999){
var statearr_26028_26045 = state_26015__$1;
(statearr_26028_26045[(1)] = (8));

} else {
var statearr_26029_26046 = state_26015__$1;
(statearr_26029_26046[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26016 === (10))){
var inst_26007 = (state_26015[(2)]);
var state_26015__$1 = state_26015;
var statearr_26030_26047 = state_26015__$1;
(statearr_26030_26047[(2)] = inst_26007);

(statearr_26030_26047[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26016 === (8))){
var inst_25992 = (state_26015[(7)]);
var tmp26027 = inst_25992;
var inst_25992__$1 = tmp26027;
var state_26015__$1 = (function (){var statearr_26031 = state_26015;
(statearr_26031[(7)] = inst_25992__$1);

return statearr_26031;
})();
var statearr_26032_26048 = state_26015__$1;
(statearr_26032_26048[(2)] = null);

(statearr_26032_26048[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__24213__auto__ = null;
var cljs$core$async$state_machine__24213__auto____0 = (function (){
var statearr_26033 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26033[(0)] = cljs$core$async$state_machine__24213__auto__);

(statearr_26033[(1)] = (1));

return statearr_26033;
});
var cljs$core$async$state_machine__24213__auto____1 = (function (state_26015){
while(true){
var ret_value__24214__auto__ = (function (){try{while(true){
var result__24215__auto__ = switch__24212__auto__.call(null,state_26015);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24215__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24215__auto__;
}
break;
}
}catch (e26034){if((e26034 instanceof Object)){
var ex__24216__auto__ = e26034;
var statearr_26035_26049 = state_26015;
(statearr_26035_26049[(5)] = ex__24216__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26015);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26034;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24214__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26050 = state_26015;
state_26015 = G__26050;
continue;
} else {
return ret_value__24214__auto__;
}
break;
}
});
cljs$core$async$state_machine__24213__auto__ = function(state_26015){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24213__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24213__auto____1.call(this,state_26015);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24213__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24213__auto____0;
cljs$core$async$state_machine__24213__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24213__auto____1;
return cljs$core$async$state_machine__24213__auto__;
})()
})();
var state__24309__auto__ = (function (){var statearr_26036 = f__24308__auto__.call(null);
(statearr_26036[(6)] = c__24307__auto___26038);

return statearr_26036;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24309__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__26052 = arguments.length;
switch (G__26052) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24307__auto___26118 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24308__auto__ = (function (){var switch__24212__auto__ = (function (state_26090){
var state_val_26091 = (state_26090[(1)]);
if((state_val_26091 === (7))){
var inst_26086 = (state_26090[(2)]);
var state_26090__$1 = state_26090;
var statearr_26092_26119 = state_26090__$1;
(statearr_26092_26119[(2)] = inst_26086);

(statearr_26092_26119[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26091 === (1))){
var inst_26053 = (new Array(n));
var inst_26054 = inst_26053;
var inst_26055 = (0);
var state_26090__$1 = (function (){var statearr_26093 = state_26090;
(statearr_26093[(7)] = inst_26054);

(statearr_26093[(8)] = inst_26055);

return statearr_26093;
})();
var statearr_26094_26120 = state_26090__$1;
(statearr_26094_26120[(2)] = null);

(statearr_26094_26120[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26091 === (4))){
var inst_26058 = (state_26090[(9)]);
var inst_26058__$1 = (state_26090[(2)]);
var inst_26059 = (inst_26058__$1 == null);
var inst_26060 = cljs.core.not.call(null,inst_26059);
var state_26090__$1 = (function (){var statearr_26095 = state_26090;
(statearr_26095[(9)] = inst_26058__$1);

return statearr_26095;
})();
if(inst_26060){
var statearr_26096_26121 = state_26090__$1;
(statearr_26096_26121[(1)] = (5));

} else {
var statearr_26097_26122 = state_26090__$1;
(statearr_26097_26122[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26091 === (15))){
var inst_26080 = (state_26090[(2)]);
var state_26090__$1 = state_26090;
var statearr_26098_26123 = state_26090__$1;
(statearr_26098_26123[(2)] = inst_26080);

(statearr_26098_26123[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26091 === (13))){
var state_26090__$1 = state_26090;
var statearr_26099_26124 = state_26090__$1;
(statearr_26099_26124[(2)] = null);

(statearr_26099_26124[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26091 === (6))){
var inst_26055 = (state_26090[(8)]);
var inst_26076 = (inst_26055 > (0));
var state_26090__$1 = state_26090;
if(cljs.core.truth_(inst_26076)){
var statearr_26100_26125 = state_26090__$1;
(statearr_26100_26125[(1)] = (12));

} else {
var statearr_26101_26126 = state_26090__$1;
(statearr_26101_26126[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26091 === (3))){
var inst_26088 = (state_26090[(2)]);
var state_26090__$1 = state_26090;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26090__$1,inst_26088);
} else {
if((state_val_26091 === (12))){
var inst_26054 = (state_26090[(7)]);
var inst_26078 = cljs.core.vec.call(null,inst_26054);
var state_26090__$1 = state_26090;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26090__$1,(15),out,inst_26078);
} else {
if((state_val_26091 === (2))){
var state_26090__$1 = state_26090;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26090__$1,(4),ch);
} else {
if((state_val_26091 === (11))){
var inst_26070 = (state_26090[(2)]);
var inst_26071 = (new Array(n));
var inst_26054 = inst_26071;
var inst_26055 = (0);
var state_26090__$1 = (function (){var statearr_26102 = state_26090;
(statearr_26102[(7)] = inst_26054);

(statearr_26102[(10)] = inst_26070);

(statearr_26102[(8)] = inst_26055);

return statearr_26102;
})();
var statearr_26103_26127 = state_26090__$1;
(statearr_26103_26127[(2)] = null);

(statearr_26103_26127[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26091 === (9))){
var inst_26054 = (state_26090[(7)]);
var inst_26068 = cljs.core.vec.call(null,inst_26054);
var state_26090__$1 = state_26090;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26090__$1,(11),out,inst_26068);
} else {
if((state_val_26091 === (5))){
var inst_26058 = (state_26090[(9)]);
var inst_26054 = (state_26090[(7)]);
var inst_26055 = (state_26090[(8)]);
var inst_26063 = (state_26090[(11)]);
var inst_26062 = (inst_26054[inst_26055] = inst_26058);
var inst_26063__$1 = (inst_26055 + (1));
var inst_26064 = (inst_26063__$1 < n);
var state_26090__$1 = (function (){var statearr_26104 = state_26090;
(statearr_26104[(12)] = inst_26062);

(statearr_26104[(11)] = inst_26063__$1);

return statearr_26104;
})();
if(cljs.core.truth_(inst_26064)){
var statearr_26105_26128 = state_26090__$1;
(statearr_26105_26128[(1)] = (8));

} else {
var statearr_26106_26129 = state_26090__$1;
(statearr_26106_26129[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26091 === (14))){
var inst_26083 = (state_26090[(2)]);
var inst_26084 = cljs.core.async.close_BANG_.call(null,out);
var state_26090__$1 = (function (){var statearr_26108 = state_26090;
(statearr_26108[(13)] = inst_26083);

return statearr_26108;
})();
var statearr_26109_26130 = state_26090__$1;
(statearr_26109_26130[(2)] = inst_26084);

(statearr_26109_26130[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26091 === (10))){
var inst_26074 = (state_26090[(2)]);
var state_26090__$1 = state_26090;
var statearr_26110_26131 = state_26090__$1;
(statearr_26110_26131[(2)] = inst_26074);

(statearr_26110_26131[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26091 === (8))){
var inst_26054 = (state_26090[(7)]);
var inst_26063 = (state_26090[(11)]);
var tmp26107 = inst_26054;
var inst_26054__$1 = tmp26107;
var inst_26055 = inst_26063;
var state_26090__$1 = (function (){var statearr_26111 = state_26090;
(statearr_26111[(7)] = inst_26054__$1);

(statearr_26111[(8)] = inst_26055);

return statearr_26111;
})();
var statearr_26112_26132 = state_26090__$1;
(statearr_26112_26132[(2)] = null);

(statearr_26112_26132[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__24213__auto__ = null;
var cljs$core$async$state_machine__24213__auto____0 = (function (){
var statearr_26113 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26113[(0)] = cljs$core$async$state_machine__24213__auto__);

(statearr_26113[(1)] = (1));

return statearr_26113;
});
var cljs$core$async$state_machine__24213__auto____1 = (function (state_26090){
while(true){
var ret_value__24214__auto__ = (function (){try{while(true){
var result__24215__auto__ = switch__24212__auto__.call(null,state_26090);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24215__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24215__auto__;
}
break;
}
}catch (e26114){if((e26114 instanceof Object)){
var ex__24216__auto__ = e26114;
var statearr_26115_26133 = state_26090;
(statearr_26115_26133[(5)] = ex__24216__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26090);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26114;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24214__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26134 = state_26090;
state_26090 = G__26134;
continue;
} else {
return ret_value__24214__auto__;
}
break;
}
});
cljs$core$async$state_machine__24213__auto__ = function(state_26090){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24213__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24213__auto____1.call(this,state_26090);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24213__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24213__auto____0;
cljs$core$async$state_machine__24213__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24213__auto____1;
return cljs$core$async$state_machine__24213__auto__;
})()
})();
var state__24309__auto__ = (function (){var statearr_26116 = f__24308__auto__.call(null);
(statearr_26116[(6)] = c__24307__auto___26118);

return statearr_26116;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24309__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__26136 = arguments.length;
switch (G__26136) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24307__auto___26206 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24308__auto__ = (function (){var switch__24212__auto__ = (function (state_26178){
var state_val_26179 = (state_26178[(1)]);
if((state_val_26179 === (7))){
var inst_26174 = (state_26178[(2)]);
var state_26178__$1 = state_26178;
var statearr_26180_26207 = state_26178__$1;
(statearr_26180_26207[(2)] = inst_26174);

(statearr_26180_26207[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26179 === (1))){
var inst_26137 = [];
var inst_26138 = inst_26137;
var inst_26139 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_26178__$1 = (function (){var statearr_26181 = state_26178;
(statearr_26181[(7)] = inst_26138);

(statearr_26181[(8)] = inst_26139);

return statearr_26181;
})();
var statearr_26182_26208 = state_26178__$1;
(statearr_26182_26208[(2)] = null);

(statearr_26182_26208[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26179 === (4))){
var inst_26142 = (state_26178[(9)]);
var inst_26142__$1 = (state_26178[(2)]);
var inst_26143 = (inst_26142__$1 == null);
var inst_26144 = cljs.core.not.call(null,inst_26143);
var state_26178__$1 = (function (){var statearr_26183 = state_26178;
(statearr_26183[(9)] = inst_26142__$1);

return statearr_26183;
})();
if(inst_26144){
var statearr_26184_26209 = state_26178__$1;
(statearr_26184_26209[(1)] = (5));

} else {
var statearr_26185_26210 = state_26178__$1;
(statearr_26185_26210[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26179 === (15))){
var inst_26168 = (state_26178[(2)]);
var state_26178__$1 = state_26178;
var statearr_26186_26211 = state_26178__$1;
(statearr_26186_26211[(2)] = inst_26168);

(statearr_26186_26211[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26179 === (13))){
var state_26178__$1 = state_26178;
var statearr_26187_26212 = state_26178__$1;
(statearr_26187_26212[(2)] = null);

(statearr_26187_26212[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26179 === (6))){
var inst_26138 = (state_26178[(7)]);
var inst_26163 = inst_26138.length;
var inst_26164 = (inst_26163 > (0));
var state_26178__$1 = state_26178;
if(cljs.core.truth_(inst_26164)){
var statearr_26188_26213 = state_26178__$1;
(statearr_26188_26213[(1)] = (12));

} else {
var statearr_26189_26214 = state_26178__$1;
(statearr_26189_26214[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26179 === (3))){
var inst_26176 = (state_26178[(2)]);
var state_26178__$1 = state_26178;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26178__$1,inst_26176);
} else {
if((state_val_26179 === (12))){
var inst_26138 = (state_26178[(7)]);
var inst_26166 = cljs.core.vec.call(null,inst_26138);
var state_26178__$1 = state_26178;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26178__$1,(15),out,inst_26166);
} else {
if((state_val_26179 === (2))){
var state_26178__$1 = state_26178;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26178__$1,(4),ch);
} else {
if((state_val_26179 === (11))){
var inst_26142 = (state_26178[(9)]);
var inst_26146 = (state_26178[(10)]);
var inst_26156 = (state_26178[(2)]);
var inst_26157 = [];
var inst_26158 = inst_26157.push(inst_26142);
var inst_26138 = inst_26157;
var inst_26139 = inst_26146;
var state_26178__$1 = (function (){var statearr_26190 = state_26178;
(statearr_26190[(7)] = inst_26138);

(statearr_26190[(8)] = inst_26139);

(statearr_26190[(11)] = inst_26158);

(statearr_26190[(12)] = inst_26156);

return statearr_26190;
})();
var statearr_26191_26215 = state_26178__$1;
(statearr_26191_26215[(2)] = null);

(statearr_26191_26215[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26179 === (9))){
var inst_26138 = (state_26178[(7)]);
var inst_26154 = cljs.core.vec.call(null,inst_26138);
var state_26178__$1 = state_26178;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26178__$1,(11),out,inst_26154);
} else {
if((state_val_26179 === (5))){
var inst_26142 = (state_26178[(9)]);
var inst_26139 = (state_26178[(8)]);
var inst_26146 = (state_26178[(10)]);
var inst_26146__$1 = f.call(null,inst_26142);
var inst_26147 = cljs.core._EQ_.call(null,inst_26146__$1,inst_26139);
var inst_26148 = cljs.core.keyword_identical_QMARK_.call(null,inst_26139,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_26149 = ((inst_26147) || (inst_26148));
var state_26178__$1 = (function (){var statearr_26192 = state_26178;
(statearr_26192[(10)] = inst_26146__$1);

return statearr_26192;
})();
if(cljs.core.truth_(inst_26149)){
var statearr_26193_26216 = state_26178__$1;
(statearr_26193_26216[(1)] = (8));

} else {
var statearr_26194_26217 = state_26178__$1;
(statearr_26194_26217[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26179 === (14))){
var inst_26171 = (state_26178[(2)]);
var inst_26172 = cljs.core.async.close_BANG_.call(null,out);
var state_26178__$1 = (function (){var statearr_26196 = state_26178;
(statearr_26196[(13)] = inst_26171);

return statearr_26196;
})();
var statearr_26197_26218 = state_26178__$1;
(statearr_26197_26218[(2)] = inst_26172);

(statearr_26197_26218[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26179 === (10))){
var inst_26161 = (state_26178[(2)]);
var state_26178__$1 = state_26178;
var statearr_26198_26219 = state_26178__$1;
(statearr_26198_26219[(2)] = inst_26161);

(statearr_26198_26219[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26179 === (8))){
var inst_26138 = (state_26178[(7)]);
var inst_26142 = (state_26178[(9)]);
var inst_26146 = (state_26178[(10)]);
var inst_26151 = inst_26138.push(inst_26142);
var tmp26195 = inst_26138;
var inst_26138__$1 = tmp26195;
var inst_26139 = inst_26146;
var state_26178__$1 = (function (){var statearr_26199 = state_26178;
(statearr_26199[(7)] = inst_26138__$1);

(statearr_26199[(14)] = inst_26151);

(statearr_26199[(8)] = inst_26139);

return statearr_26199;
})();
var statearr_26200_26220 = state_26178__$1;
(statearr_26200_26220[(2)] = null);

(statearr_26200_26220[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__24213__auto__ = null;
var cljs$core$async$state_machine__24213__auto____0 = (function (){
var statearr_26201 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26201[(0)] = cljs$core$async$state_machine__24213__auto__);

(statearr_26201[(1)] = (1));

return statearr_26201;
});
var cljs$core$async$state_machine__24213__auto____1 = (function (state_26178){
while(true){
var ret_value__24214__auto__ = (function (){try{while(true){
var result__24215__auto__ = switch__24212__auto__.call(null,state_26178);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24215__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24215__auto__;
}
break;
}
}catch (e26202){if((e26202 instanceof Object)){
var ex__24216__auto__ = e26202;
var statearr_26203_26221 = state_26178;
(statearr_26203_26221[(5)] = ex__24216__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26178);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26202;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24214__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26222 = state_26178;
state_26178 = G__26222;
continue;
} else {
return ret_value__24214__auto__;
}
break;
}
});
cljs$core$async$state_machine__24213__auto__ = function(state_26178){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24213__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24213__auto____1.call(this,state_26178);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24213__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24213__auto____0;
cljs$core$async$state_machine__24213__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24213__auto____1;
return cljs$core$async$state_machine__24213__auto__;
})()
})();
var state__24309__auto__ = (function (){var statearr_26204 = f__24308__auto__.call(null);
(statearr_26204[(6)] = c__24307__auto___26206);

return statearr_26204;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24309__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=async.js.map
