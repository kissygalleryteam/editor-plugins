KISSY.add('kg/editor-plugins/1.1.2/font/ui',["editor","../button","../menubutton"],function(S ,require, exports, module) {var e=require("editor"),t=require("../button"),n=require("../menubutton"),o=n.Select.extend({initializer:function(){var t=this,n=t.get("editor");t.on("click",function(e){var o=e.target.get("value"),i=t.get("cmdType");n.execCommand(i,o)}),n.on("selectionChange",function(){if(n.get("mode")!==e.Mode.SOURCE_MODE){var o=t.get("cmdType"),i=t.get("menu"),c=i.get&&i.get("children");if(c){var a=n.queryCommandValue(o);if(a!==!1){a=(a+"").toLowerCase();for(var r=0;r<c.length;r++){var u=c[r],d=u.get("value");if(a===d.toLowerCase())return void t.set("value",d)}}t.set("value",null)}}})}}),i=t.extend({initializer:function(){var t=this,n=t.get("editor"),o=t.get("cmdType");t.on("click",function(){var e=t.get("checked");e?(n.execCommand(o),n.focus()):(n.execCommand(o,!1),n.focus())}),n.on("selectionChange",function(){if(n.get("mode")!==e.Mode.SOURCE_MODE){var o=t.get("cmdType");n.queryCommandValue(o)?t.set("checked",!0):t.set("checked",!1)}})}},{ATTRS:{checkable:{value:!0},mode:{value:e.Mode.WYSIWYG_MODE}}});module.exports={Button:i,Select:o};});