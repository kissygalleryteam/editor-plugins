define("kg/editor-plugins/1.1.7/local-storage",["editor","overlay","./flash-bridge","util","ua"],function(e,t,n){var r=e("editor"),s=e("overlay"),o=e("./flash-bridge"),a=e("util"),i=e("ua").ieMode;if((!i||i>8)&&window.localStorage)n.exports=window.localStorage;else{var l=r.Utils.debugUrl("plugin/local-storage/assets/swfstore.swf?refresh="+ +new Date),d={width:215,border:"1px solid red"},c={width:0,border:"none"},g=new s({prefixCls:"ks-editor-",elStyle:{background:"white"},width:"0px",content:'<h1 style="text-align:center;">请点击允许</h1><div class="storage-container"></div>',zIndex:r.baseZIndex(r.ZIndexManager.STORE_FLASH_SHOW)});g.render(),g.show();var u=new o({src:l,render:g.get("contentEl").one(".storage-container"),params:{flashVars:{useCompression:!0}},attrs:{height:138,width:"100%"},methods:["setItem","removeItem","getItem","setMinDiskSpace","getValueOf"]});a.ready(function(){setTimeout(function(){g.center()},0)}),u.on("pending",function(){g.get("el").css(d),g.center(),g.show(),setTimeout(function(){u.retrySave()},1e3)}),u.on("save",function(){g.get("el").css(c)});var f=u.setItem;a.mix(u,{_ke:1,getItem:function(e){return this.getValueOf(e)},retrySave:function(){var e=this;e.setItem(e.lastSave.k,e.lastSave.v)},setItem:function(e,t){var n=this;n.lastSave={k:e,v:t},f.call(n,e,t)}}),u.on("contentReady",function(){u._ready=1}),n.exports=u}});