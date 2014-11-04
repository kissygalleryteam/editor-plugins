define("kg/editor-plugins/1.1.8/contextmenu",["editor","menu","./focus-fix","event-dom","node"],function(e){var n=e("editor"),t=e("menu"),o=e("./focus-fix"),d=e("event-dom"),i=e("node");n.prototype.addContextMenu=function(e,u,c){function f(e){var t=i(e.target),o=e.pageX,d=e.pageY;if(o){var u=n.Utils.getXY({left:o,top:d},r);o=u.left,d=u.top,setTimeout(function(){s.set("editorSelectedEl",t,{silent:1}),s.move(o,d),r.fire("contextmenu",{contextmenu:s}),s.show(),window.focus(),document.body.focus(),s.focus()},30)}}var r=this;c=c||{};var a=c.event;a&&delete c.event,c.prefixCls=r.get("prefixCls")+"editor-",c.editor=r,c.focusable=1,c.zIndex=n.baseZIndex(n.ZIndexManager.POPUP_MENU);var s=new t.PopupMenu(c);return o.init(s),s.on("afterRenderUI",function(){s.get("el").on("keydown",function(e){e.keyCode===d.KeyCode.ESC&&s.hide()})}),r.docReady(function(){var e=r.get("document");e.on("mousedown",function(e){1===e.which&&s.hide()}),e.delegate("contextmenu",u,function(e){e.halt(),f(e)})}),a&&f(a),r.addControl(e+"/contextmenu",s),s}});