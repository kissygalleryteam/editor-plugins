KISSY.add('kg/editor-plugins/1.1.0/outdent',["editor","./button","./outdent/cmd"],function(S ,require, exports, module) {function e(){}var t=require("editor");require("./button");var n=require("./outdent/cmd");e.prototype={pluginRenderUI:function(e){n.init(e),e.addButton("outdent",{tooltip:"减少缩进量",listeners:{click:function(){e.execCommand("outdent"),e.focus()},afterSyncUI:function(){var n=this;e.on("selectionChange",function(){e.get("mode")!==t.Mode.SOURCE_MODE&&(e.queryCommandValue("outdent")?n.set("disabled",!1):n.set("disabled",!0))})}},mode:t.Mode.WYSIWYG_MODE})}},module.exports=e;});