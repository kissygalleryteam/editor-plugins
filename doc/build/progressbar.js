define("kg/editor-plugins/1.1.4/progressbar",["base","util","node"],function(e,s,r){var i=e("base"),t=e("util"),n=e("node");r.exports=i.extend({destroy:function(){var e=this;e.detach(),e.el.remove()},initializer:function(){var e=this,s=e.get("height"),r=e.get("prefixCls"),i=n(t.substitute('<div class="{prefixCls}editor-progressbar"  style="width:'+e.get("width")+";height:"+s+';"></div>',{prefixCls:r})),a=e.get("container"),o=n(t.substitute('<div style="overflow:hidden;"><div class="{prefixCls}editor-progressbar-inner" style="height:'+(parseInt(s,10)-4)+'px"><div class="{prefixCls}editor-progressbar-inner-bg"></div></div></div>',{prefixCls:r})).appendTo(i),p=n('<span class="'+r+'editor-progressbar-title"></span>').appendTo(i);a&&i.appendTo(a),e.el=i,e._title=p,e._p=o,e.on("afterProgressChange",e._progressChange,e),e._progressChange({newVal:e.get("progress")})},_progressChange:function(e){var s=this,r=e.newVal;s._p.css("width",r+"%"),s._title.html(r+"%")}},{ATTRS:{container:{},width:{},height:{},progress:{value:0},prefixCls:{value:"ks-"}}})});