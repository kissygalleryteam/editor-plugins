KISSY.add('editor-plugins/lib/color/dialog',["editor","util","../dialog","dom","node"],function(S ,require, exports, module) {function e(e){if(n.isArray(e))return e;var o=RegExp;return/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i.test(e)?l([o.$1,o.$2,o.$3],function(e){return parseInt(e,16)}):/^#([0-9a-f])([0-9a-f])([0-9a-f])$/i.test(e)?l([o.$1,o.$2,o.$3],function(e){return parseInt(e+e,16)}):/^rgb\((.*),(.*),(.*)\)$/i.test(e)?l([o.$1,o.$2,o.$3],function(e){return e.indexOf("%")>0?2.55*parseFloat(e,10):0|e}):void 0}function o(e){e="0"+e;var o=e.length;return e.slice(o-2,o)}function r(r){return r=e(r),"#"+o(r[0].toString(16))+o(r[1].toString(16))+o(r[2].toString(16))}function t(e){this.editor=e,this._init()}var i=require("editor"),n=require("util"),a=require("../dialog"),l=n.map,c=require("dom"),d=require("node"),s=function(){function o(e,o,t){var i=[];e=r(e),o=r(o);for(var n=(o[0]-e[0])/t,a=(o[1]-e[1])/t,c=(o[2]-e[2])/t,d=0,s=e[0],u=e[1],f=e[2];t>d;d++)i[d]=[s,u,f],s+=n,u+=a,f+=c;return i[d]=o,l(i,function(e){return l(e,function(e){return Math.min(Math.max(0,Math.floor(e)),255)})})}function r(o){var r=e(o);if(void 0===r){t||(t=document.createElement("textarea"),t.style.display="none",c.prepend(t,document.body));try{t.style.color=o}catch(i){return[0,0,0]}document.defaultView?r=e(document.defaultView.getComputedStyle(t,null).color):(o=t.createTextRange().queryCommandValue("ForeColor"),r=[255&o,(65280&o)>>>8,(16711680&o)>>>16])}return r}var t;return function(e,r){var t=[],i=e.length;if(void 0===r&&(r=20),1===i)t=o(e[0],e[0],r);else if(i>1)for(var n=0,a=i-1;a>n;n++){var l=r[n]||r,c=o(e[n],e[n+1],l);a-1>n&&c.pop(),t=t.concat(c)}return t}}(),u="<ul>"+l(s(["red","orange","yellow","green","cyan","blue","purple"],5),function(e){return l(s(["white","rgb("+e.join(",")+")","black"],5),function(e){return'<li><a style="background-color:'+r(e)+'" href="#"></a></li>'}).join("")}).join("</ul><ul>")+"</ul>",f='<div class="{prefixCls}editor-color-advanced-picker"><div class="ks-clear"><div class="{prefixCls}editor-color-advanced-picker-left">'+u+'</div><div class="{prefixCls}editor-color-advanced-picker-right"></div></div><div style="padding:10px;"><label>颜色值： <input style="width:100px" class="{prefixCls}editor-color-advanced-value"/></label><span class="{prefixCls}editor-color-advanced-indicator"></span></div></div>',v='<div style="padding:5px 20px 20px;"><a class="{prefixCls}editor-button {prefixCls}editor-color-advanced-ok ks-inline-block">确定</a>&nbsp;&nbsp;&nbsp;<a class="{prefixCls}editor-button  {prefixCls}editor-color-advanced-cancel ks-inline-block">取消</a></div>',p=i.Utils.addRes,g=i.Utils.destroyRes;n.augment(t,{_init:function(){var e=this,o=e.editor,t=o.get("prefixCls");e.dialog=new a({mask:!0,headerContent:"颜色拾取器",bodyContent:n.substitute(f,{prefixCls:t}),footerContent:n.substitute(v,{prefixCls:t}),width:"550px"}).render();var i=e.dialog,l=i.get("body"),c=i.get("footer"),s=l.one("."+t+"editor-color-advanced-indicator"),u=l.one("."+t+"editor-color-advanced-value"),g=l.one("."+t+"editor-color-advanced-picker-left"),h=c.one("."+t+"editor-color-advanced-ok"),b=c.one("."+t+"editor-color-advanced-cancel");h.on("click",function(o){var r=n.trim(u.val()),t=e.colorButtonArrow;return/^#([a-f0-9]{1,2}){3,3}$/i.test(r)?(e.hide(),t.fire("selectColor",{color:u.val()}),void o.halt()):void alert("请输入正确的颜色代码")}),u.on("change",function(){var e=n.trim(u.val());return/^#([a-f0-9]{1,2}){3,3}$/i.test(e)?void s.css("background-color",e):void alert("请输入正确的颜色代码")}),b.on("click",function(o){e.hide(),o.halt()}),l.on("click",function(o){o.halt();var t=d(o.target);if("a"===t.nodeName()){var i=r(t.css("background-color"));g.contains(t)&&e._detailColor(i),u.val(i),s.css("background-color",i)}}),p.call(e,h,u,b,l,e.dialog);var x="#FF9900";e._detailColor(x),u.val(x),s.css("background-color",x)},_detailColor:function(e){var o=this,t=o.dialog,i=t.get("body"),n=o.editor,a=n.get("prefixCls"),c=i.one("."+a+"editor-color-advanced-picker-right");c.html(l(s(["#ffffff",e,"#000000"],40),function(e){return'<a style="background-color:'+r(e)+'"></a>'}).join(""))},show:function(e){this.colorButtonArrow=e,this.dialog.show()},hide:function(){this.dialog.hide()},destroy:function(){g.call(this)}}),module.exports=t;});