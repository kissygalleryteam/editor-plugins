define("kg/editor-plugins/1.1.10/flash-bridge",["logger-manager","util","editor","swf","event-custom"],function(e,t,a){function r(e){this._init(e)}var i=e("logger-manager"),n=i.getLogger("editor/flash-bridge"),s=e("util"),l=e("editor"),o=e("swf"),d=e("event-custom"),g={};s.augment(r,d.Target,{_init:function(e){var t=this,a=s.guid("flash-bridge-"),r="KISSY.require('editor').FlashBridge.EventHandler";e.id=a,e.attrs=e.attrs||{},e.params=e.params||{};var i=e.attrs,n=e.params,l=n.flashVars=n.flashVars||{};s.mix(i,{width:1,height:1},!1),s.mix(n,{allowScriptAccess:"always",allowNetworking:"all",scale:"noScale"},!1),s.mix(l,{shareData:!1,useCompression:!1},!1);var d={YUISwfId:a,YUIBridgeCallback:r};e.ajbridge&&(d={swfID:a,jsEntry:r}),s.mix(l,d),g[a]=t,t.id=a,t.swf=new o(e),t._expose(e.methods)},_expose:function(e){for(var t=this,a=0;a<e.length;a++){var r=e[a];!function(e){t[e]=function(){return t._callSWF(e,s.makeArray(arguments))}}(r)}},_callSWF:function(e,t){return this.swf.callSWF(e,t)},_eventHandler:function(e){var t=this,a=e.type;"log"===a?n.debug(e.message):a&&t.fire(a,e)},ready:function(e){var t=this;t._ready?e.call(this):t.on("contentReady",e)},destroy:function(){this.swf.destroy(),delete g[this.id]}}),r.EventHandler=function(e,t){n.debug("fire event: "+t.type);var a=g[e];a&&setTimeout(function(){a._eventHandler.call(a,t)},100)},l.FlashBridge=r,a.exports=r});