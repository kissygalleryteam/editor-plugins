define('kg/editor-plugins/1.1.3/underline',["./font/ui","./underline/cmd","./button","node"],function(require, exports, module) {function e(){}var n=require("./font/ui"),t=require("./underline/cmd");require("./button");var o=require("node");e.prototype={pluginRenderUI:function(e){t.init(e),e.addButton("underline",{cmdType:"underline",tooltip:"下划线"},n.Button),e.docReady(function(){e.get("document").on("keydown",function(n){n.ctrlKey&&n.keyCode===o.Event.KeyCode.U&&(e.execCommand("underline"),n.preventDefault())})})}},module.exports=e;});