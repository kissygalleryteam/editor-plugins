KISSY.add('kg/editor-plugins/1.1.0/italic',["./font/ui","./italic/cmd","./button","node"],function(S ,require, exports, module) {function e(){}var t=require("./font/ui"),n=require("./italic/cmd");require("./button");var o=require("node");e.prototype={pluginRenderUI:function(e){n.init(e),e.addButton("italic",{cmdType:"italic",tooltip:"斜体"},t.Button),e.docReady(function(){e.get("document").on("keydown",function(t){t.ctrlKey&&t.keyCode===o.Event.KeyCode.I&&(e.execCommand("italic"),t.preventDefault())})})}},module.exports=e;});