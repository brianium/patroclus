// Compiled by ClojureScript 1.10.597 {:target :nodejs}
goog.provide('patroclus.main.core');
goog.require('cljs.core');
goog.require('patroclus.config');
patroclus.main.core.Electron = require("electron");
patroclus.main.core.BrowserWindow = patroclus.main.core.Electron.BrowserWindow;
patroclus.main.core.app = patroclus.main.core.Electron.app;
patroclus.main.core.create_window = (function patroclus$main$core$create_window(index){
var win = (new patroclus.main.core.BrowserWindow(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"webPreferences","webPreferences",-1267169265),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nodeIntegration","nodeIntegration",-784873827),true], null),new cljs.core.Keyword(null,"show","show",-576705889),false], null))));
var G__21129 = win;
G__21129.loadFile(index);

G__21129.once("ready-to-show",(function (){
return win.show();
}));

return G__21129;
});
patroclus.main.core.start = (function patroclus$main$core$start(){
patroclus.main.core.create_window.call(null,patroclus.config.index_html);

if(cljs.core.truth_(patroclus.config.test_html)){
return patroclus.main.core.create_window.call(null,patroclus.config.test_html);
} else {
return null;
}
});
patroclus.main.core.app.on("ready",patroclus.main.core.start);

//# sourceMappingURL=core.js.map
