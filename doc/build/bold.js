define("kg/editor-plugins/1.1.7/bold",["./font/ui","./bold/cmd","node","./button"],function(o,n,t){function e(){}var d=o("./font/ui"),u=o("./bold/cmd"),i=o("node");o("./button"),e.prototype={pluginRenderUI:function(o){u.init(o),o.addButton("bold",{cmdType:"bold",tooltip:"粗体"},d.Button),o.docReady(function(){o.get("document").on("keydown",function(n){n.ctrlKey&&n.keyCode===i.Event.KeyCode.B&&(o.execCommand("bold"),n.preventDefault())})})}},t.exports=e});