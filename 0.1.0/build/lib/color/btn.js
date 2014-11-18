/*
Copyright 2014, KISSY v5.0.0
MIT Licensed
build time: Jul 18 13:56
*/
KISSY.add("editor-plugins/lib/color/btn","editor,../button,../overlay,../dialog-loader,node,util".split(","),function(g,e,t,n){function k(a,b,d){setTimeout(function(){a.execCommand(b,d)},0)}var i=e("editor"),g=e("../button"),o=e("../overlay"),p=e("../dialog-loader"),q=e("node"),l=e("util"),r=[["000","444","666","999","CCC","EEE","F3F3F3","FFF"],["F00","F90","FF0","0F0","0FF","00F","90F","F0F"],["F4CCCC","FCE5CD","FFF2CC","D9EAD3","D0E0E3","CFE2F3","D9D2E9","EAD1DC","EA9999","F9CB9C","FFE599","B6D7A8",
"A2C4C9","9FC5E8","B4A7D6","D5A6BD","E06666","F6B26B","FFD966","93C47D","76A5AF","6FA8DC","8E7CC3","C27BAD","CC0000","E69138","F1C232","6AA84F","45818E","3D85C6","674EA7","A64D79","990000","B45F06","BF9000","38761D","134F5C","0B5394","351C75","741B47","660000","783F04","7F6000","274E13","0C343D","073763","20124D","4C1130"]],b;(function(){b='<div class="{prefixCls}editor-color-panel"><a class="{prefixCls}editor-color-remove" href="javascript:void(\'\u6e05\u9664\');">\u6e05\u9664</a>';for(var a=0;a<3;a++){b=b+'<div class="{prefixCls}editor-color-palette"><table>';
for(var h=r[a],d=h.length/8,c=0;c<d;c++){b=b+"<tr>";for(var f=0;f<8;f++){var s="#"+h[8*c+f];b=b+"<td>";b=b+('<a href="javascript:void(0);" class="{prefixCls}editor-color-a" style="background-color:'+s+'"></a>');b=b+"</td>"}b=b+"</tr>"}b=b+"</table></div>"}b=b+'<div><a class="{prefixCls}editor-button {prefixCls}editor-color-others ks-inline-block">\u5176\u4ed6\u989c\u8272</a></div></div>'})();var j=g.extend({initializer:function(){var a=this;a.on("blur",function(){setTimeout(function(){a.colorWin&&a.colorWin.hide()},
150)});a.on("click",function(){a.get("checked")?a._prepare():a.colorWin&&a.colorWin.hide()})},_prepare:function(){var a=this,h=a.get("editor"),d=h.get("prefixCls"),c;a.colorWin=(new o({elAttrs:{tabindex:0},elCls:d+"editor-popup",content:l.substitute(b,{prefixCls:d}),width:172,zIndex:i.baseZIndex(i.ZIndexManager.POPUP_MENU)})).render();var f=a.colorWin;c=f.get("contentEl");c.on("click",a._selectColor,a);f.on("hide",function(){a.set("checked",false)});c.one("."+d+"editor-color-others").on("click",function(b){b.halt();
f.hide();p.useDialog(h,"color",void 0,a)});a._prepare=a._show;a._show()},_show:function(){var a=this.get("el"),b=this.colorWin;b.set("align",{node:a,points:["bl","tl"],offset:[0,2],overflow:{adjustX:1,adjustY:1}});b.show()},_selectColor:function(a){a.halt();var b=this.get("editor").get("prefixCls"),a=q(a.target);a.hasClass(b+"editor-color-a")?this.fire("selectColor",{color:a.style("background-color")}):a.hasClass(b+"editor-color-remove")&&this.fire("selectColor",{color:null})},destructor:function(){this.colorWin&&
this.colorWin.destroy()}},{ATTRS:{checkable:{value:true},mode:{value:i.Mode.WYSIWYG_MODE}}});j.init=function(a,b){var d=a.get("prefixCls")+"editor-toolbar-",c=b.cmdType,f=b.defaultColor,e=b.tooltip,g=a.addButton(c,{elCls:c+"Btn",content:l.substitute('<div class="{icon}"></div><div style="background-color:{defaultColor}" class="{indicator}"></div>',{defaultColor:f,icon:d+"item "+d+c,indicator:d+"color-indicator"}),mode:i.Mode.WYSIWYG_MODE,tooltip:"\u8bbe\u7f6e"+e}),e=a.addButton(c+"Arrow",{tooltip:"\u9009\u62e9\u5e76\u8bbe\u7f6e"+e,
elCls:c+"ArrowBtn"},j),m=g.get("el").one("."+d+"color-indicator");e.on("selectColor",function(b){m.css("background-color",b.color||f);k(a,c,b.color)});g.on("click",function(){k(a,c,m.style("background-color"))})};n.exports=j});