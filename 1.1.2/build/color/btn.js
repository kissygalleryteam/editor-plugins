KISSY.add('kg/editor-plugins/1.1.2/color/btn',["editor","../button","../overlay","../dialog-loader","node","util"],function(S ,require, exports, module) {function o(){r='<div class="{prefixCls}editor-color-panel"><a class="{prefixCls}editor-color-remove" href="javascript:void(\'清除\');">清除</a>';for(var o=0;3>o;o++){r+='<div class="{prefixCls}editor-color-palette"><table>';for(var e=s[o],t=e.length/8,i=0;t>i;i++){r+="<tr>";for(var l=0;8>l;l++){var n="#"+e[8*i+l];r+="<td>",r+='<a href="javascript:void(0);" class="{prefixCls}editor-color-a" style="background-color:'+n+'"></a>',r+="</td>"}r+="</tr>"}r+="</table></div>"}r+='<div><a class="{prefixCls}editor-button {prefixCls}editor-color-others ks-inline-block">其他颜色</a></div></div>'}function e(o,e,r){setTimeout(function(){o.execCommand(e,r)},0)}var r,t=require("editor"),i=require("../button"),l=require("../overlay"),n=require("../dialog-loader"),c=require("node"),a=require("util"),s=[["000","444","666","999","CCC","EEE","F3F3F3","FFF"],["F00","F90","FF0","0F0","0FF","00F","90F","F0F"],["F4CCCC","FCE5CD","FFF2CC","D9EAD3","D0E0E3","CFE2F3","D9D2E9","EAD1DC","EA9999","F9CB9C","FFE599","B6D7A8","A2C4C9","9FC5E8","B4A7D6","D5A6BD","E06666","F6B26B","FFD966","93C47D","76A5AF","6FA8DC","8E7CC3","C27BAD","CC0000","E69138","F1C232","6AA84F","45818E","3D85C6","674EA7","A64D79","990000","B45F06","BF9000","38761D","134F5C","0B5394","351C75","741B47","660000","783F04","7F6000","274E13","0C343D","073763","20124D","4C1130"]];o();var d=i.extend({initializer:function(){var o=this;o.on("blur",function(){setTimeout(function(){o.colorWin&&o.colorWin.hide()},150)}),o.on("click",function(){var e=o.get("checked");e?o._prepare():o.colorWin&&o.colorWin.hide()})},_prepare:function(){var o,e=this,i=e.get("editor"),c=i.get("prefixCls");e.colorWin=new l({elAttrs:{tabindex:0},elCls:c+"editor-popup",content:a.substitute(r,{prefixCls:c}),width:172,zIndex:t.baseZIndex(t.ZIndexManager.POPUP_MENU)}).render();var s=e.colorWin;o=s.get("contentEl"),o.on("click",e._selectColor,e),s.on("hide",function(){e.set("checked",!1)});var d=o.one("."+c+"editor-color-others");d.on("click",function(o){o.halt(),s.hide(),n.useDialog(i,"color",void 0,e)}),e._prepare=e._show,e._show()},_show:function(){var o=this,e=o.get("el"),r=o.colorWin;r.set("align",{node:e,points:["bl","tl"],offset:[0,2],overflow:{adjustX:1,adjustY:1}}),r.show()},_selectColor:function(o){o.halt();var e=this,r=e.get("editor"),t=r.get("prefixCls"),i=c(o.target);i.hasClass(t+"editor-color-a")?e.fire("selectColor",{color:i.style("background-color")}):i.hasClass(t+"editor-color-remove")&&e.fire("selectColor",{color:null})},destructor:function(){var o=this;o.colorWin&&o.colorWin.destroy()}},{ATTRS:{checkable:{value:!0},mode:{value:t.Mode.WYSIWYG_MODE}}}),C='<div class="{icon}"></div><div style="background-color:{defaultColor}" class="{indicator}"></div>';d.init=function(o,r){var i=o.get("prefixCls")+"editor-toolbar-",l=r.cmdType,n=r.defaultColor,c=r.tooltip,s=o.addButton(l,{elCls:l+"Btn",content:a.substitute(C,{defaultColor:n,icon:i+"item "+i+l,indicator:i+"color-indicator"}),mode:t.Mode.WYSIWYG_MODE,tooltip:"设置"+c}),u=o.addButton(l+"Arrow",{tooltip:"选择并设置"+c,elCls:l+"ArrowBtn"},d),f=s.get("el").one("."+i+"color-indicator");u.on("selectColor",function(r){f.css("background-color",r.color||n),e(o,l,r.color)}),s.on("click",function(){e(o,l,f.style("background-color"))})},module.exports=d;});