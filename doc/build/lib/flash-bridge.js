KISSY.add('editor-plugins/lib/flash-bridge',["logger-manager","util","editor","swf","event/custom"],function(S ,require, exports, module) {function e(e){this._init(e)}var r=require("logger-manager"),t=r.getLogger("s/editor/flash-bridge"),a=require("util"),i=require("editor"),n=require("swf"),s=require("event/custom"),l={};a.augment(e,s.Target,{_init:function(e){var r=this,t=a.guid("flash-bridge-"),i="KISSY.require('editor').FlashBridge.EventHandler";e.id=t,e.attrs=e.attrs||{},e.params=e.params||{};var s=e.attrs,o=e.params,u=o.flashVars=o.flashVars||{};a.mix(s,{width:1,height:1},!1),a.mix(o,{allowScriptAccess:"always",allowNetworking:"all",scale:"noScale"},!1),a.mix(u,{shareData:!1,useCompression:!1},!1);var d={YUISwfId:t,YUIBridgeCallback:i};e.ajbridge&&(d={swfID:t,jsEntry:i}),a.mix(u,d),l[t]=r,r.id=t,r.swf=new n(e),r._expose(e.methods)},_expose:function(e){for(var r=this,t=0;t<e.length;t++){var i=e[t];!function(e){r[e]=function(){return r._callSWF(e,a.makeArray(arguments))}}(i)}},_callSWF:function(e,r){return this.swf.callSWF(e,r)},_eventHandler:function(e){var r=this,a=e.type;"log"===a?t.debug(e.message):a&&r.fire(a,e)},ready:function(e){var r=this;r._ready?e.call(this):r.on("contentReady",e)},destroy:function(){this.swf.destroy(),delete l[this.id]}}),e.EventHandler=function(e,r){t.debug("fire event: "+r.type);var a=l[e];a&&setTimeout(function(){a._eventHandler.call(a,r)},100)},i.FlashBridge=e,module.exports=e;});