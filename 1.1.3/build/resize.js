define("kg/editor-plugins/1.1.3/resize",["dd","node","util"],function(e,i,t){function n(e){this.config=e||{}}var r=e("dd"),o=e("node"),s=e("util");n.prototype={pluginRenderUI:function(e){var i=r.Draggable,t=e.get("statusBarEl"),n=this.config,d=n.direction||["x","y"],a="se-resize";1===d.length&&(a="x"===d[0]?"e-resize":"s-resize");var g=o('<div class="'+e.get("prefixCls")+'editor-resizer" style="cursor: '+a+'"></div>').appendTo(t);e.on("maximizeWindow",function(){g.css("display","none")}),e.on("restoreWindow",function(){g.css("display","")});var l=new i({node:g,groups:!1}),c=0,u=0,f=e.get("el"),p=e.get("el");l.on("dragstart",function(){c=f.height(),u=p.width(),e.fire("resizeStart")}),l.on("drag",function(i){s.inArray("y",d)&&e.set("height",c+i.deltaY),s.inArray("x",d)&&e.set("width",u+i.deltaX),e.fire("resize")}),e.on("destroy",function(){l.destroy(),g.remove()})}},t.exports=n});