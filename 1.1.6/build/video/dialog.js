define("kg/editor-plugins/1.1.6/video/dialog",["util","editor","io","../flash/dialog","../menubutton"],function(e,i,t){function l(){l.superclass.constructor.apply(this,arguments)}var r=e("util"),d=e("editor"),a=e("io"),n=e("../flash/dialog"),o=e("../menubutton"),s="ke_video",p="video",u="自动",g=0,v='<div style="padding:20px 20px 0 20px"><p><label>链接： <input class="{prefixCls}editor-video-url {prefixCls}editor-input" style="width:410px;"/></label></p><table style="margin:10px 0 5px  40px;width:400px;"><tr><td><label>宽度：  <input  data-verify="^('+u+'|((?!0$)\\d+))?$"  data-warning="宽度请输入正整数" class="{prefixCls}editor-video-width {prefixCls}editor-input" style="width:60px;" /> 像素</label></td><td><label> 高度：  <input  data-verify="^('+u+'|((?!0$)\\d+))?$"  data-warning="高度请输入正整数" class="{prefixCls}editor-video-height {prefixCls}editor-input" style="width:60px;"/> 像素</label></td></tr><tr><td><label>对齐： <select class="{prefixCls}editor-video-align" title="对齐"><option value="none">无</option><option value="left">左对齐</option><option value="right">右对齐</option></select></td><td><label>间距： <input  data-verify="^\\d+$"  data-warning="间距请输入非负整数" class="{prefixCls}editor-video-margin {prefixCls}editor-input" style="width:60px;" value="'+g+'"/> 像素</label></td></tr></table></div>',c='<div style="padding:10px 0 35px 20px;"><a class="{prefixCls}editor-video-ok {prefixCls}editor-button ks-inline-block" style="margin-left:40px;margin-right:20px;">确定</button> <a class="{prefixCls}editor-video-cancel {prefixCls}editor-button ks-inline-block">取消</a></div>';r.extend(l,n,{_config:function(){var e=this,i=e.editor,t=i.get("prefixCls"),l=e.config;e._cls=s,e._type=p,e._title="视频",e._bodyHTML=r.substitute(v,{prefixCls:t}),e._footHTML=r.substitute(c,{prefixCls:t}),e.urlCfg=l.urlCfg,e._urlTip=l.urlTip||"请输入视频播放链接..."},_initD:function(){var e=this,i=e.dialog,t=e.editor,l=t.get("prefixCls"),r=i.get("el");e.dUrl=r.one("."+l+"editor-video-url"),e.dAlign=o.Select.decorate(r.one("."+l+"editor-video-align"),{prefixCls:l+"editor-big-",width:80,menuCfg:{prefixCls:l+"editor-",render:r}}),e.dMargin=r.one("."+l+"editor-video-margin"),e.dWidth=r.one("."+l+"editor-video-width"),e.dHeight=r.one("."+l+"editor-video-height");var a=r.one("."+l+"editor-video-ok"),n=r.one("."+l+"editor-video-cancel");a.on("click",e._gen,e),n.on("click",function(e){i.hide(),e.halt()}),d.Utils.placeholder(e.dUrl,e._urlTip),d.Utils.placeholder(e.dWidth,u),d.Utils.placeholder(e.dHeight,u),e.addRes(e.dAlign)},_getDInfo:function(){var e=this,i=e.dUrl.val(),t=e.config,l=t.getProvider(i);if(l){var r=l.detect(i);return r?{url:r,attrs:{height:parseInt(e.dHeight.val(),10)||l.height,width:parseInt(e.dWidth.val(),10)||l.width,style:"margin:"+(parseInt(e.dMargin.val(),10)||0)+"px;float:"+e.dAlign.get("value")+";"}}:void window.alert("不支持该链接，请直接输入该视频提供的分享链接")}return void window.alert("不支持该链接来源!")},_gen:function(e){var i=this,t=i.dUrl.val(),r=i.urlCfg;if(r)for(var d=0;d<r.length;d++){var n=r[d];if(n.reg.test(t)){i.dialog.loading();var o={};return o[n.paramName||"url"]=t,void a({url:n.url,data:o,dataType:"jsonp",success:function(e){i._dynamicUrlPrepare(e[1])}})}}l.superclass._gen.call(i,e),e&&e.halt()},_dynamicUrlPrepare:function(e){var i=this;i.dUrl.val(e),i.dialog.unloading(),l.superclass._gen.call(i)},_updateD:function(){var e=this,i=e.editor,t=e.selectedFlash;if(t){var l=i.restoreRealElement(t);d.Utils.valInput(e.dUrl,e._getFlashUrl(l)),e.dAlign.set("value",t.css("float")),e.dMargin.val(parseInt(l.style("margin"),10)||0),d.Utils.valInput(e.dWidth,parseInt(t.css("width"),10)),d.Utils.valInput(e.dHeight,parseInt(t.css("height"),10))}else d.Utils.resetInput(e.dUrl),e.dAlign.set("value","none"),e.dMargin.val(g),d.Utils.resetInput(e.dWidth),d.Utils.resetInput(e.dHeight)}}),t.exports=l});