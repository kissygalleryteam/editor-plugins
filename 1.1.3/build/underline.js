define("kg/editor-plugins/1.1.3/underline",["./font/ui","./underline/cmd","./button","node"],function(n,e,t){function o(){}var d=n("./font/ui"),u=n("./underline/cmd");n("./button");var i=n("node");o.prototype={pluginRenderUI:function(n){u.init(n),n.addButton("underline",{cmdType:"underline",tooltip:"下划线"},d.Button),n.docReady(function(){n.get("document").on("keydown",function(e){e.ctrlKey&&e.keyCode===i.Event.KeyCode.U&&(n.execCommand("underline"),e.preventDefault())})})}},t.exports=o});