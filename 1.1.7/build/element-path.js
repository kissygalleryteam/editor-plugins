define("kg/editor-plugins/1.1.7/element-path",["editor","node"],function(e,t,n){function i(e){var t=this;t.cfg=e,t._cache=[],t._init()}function o(){}var r=e("editor"),c=e("node"),s="editor-element-path";i.prototype={_init:function(){var e=this,t=e.cfg,n=t.editor;e.holder=c("<span>"),e.holder.appendTo(n.get("statusBarEl"),void 0),n.on("selectionChange",e._selectionChange,e),r.Utils.sourceDisable(n,e)},disable:function(){this.holder.css("visibility","hidden")},enable:function(){this.holder.css("visibility","")},_selectionChange:function(e){var t,n,i=this,o=i.cfg,r=o.editor,a=r.get("prefixCls"),l=i.holder,h=e.path,d=h.elements,f=i._cache;for(n=0;n<f.length;n++)f[n].remove();for(i._cache=[],n=0;n<d.length;n++){t=d[n];var u=t.attr("_ke_real_element_type")||t.nodeName(),p=c("<a href=\"javascript('"+u+'\')" class="'+a+s+'">'+u+"</a>");i._cache.push(p),function(e){p.on("click",function(t){t.halt(),r.focus(),setTimeout(function(){r.getSelection().selectElement(e)},50)})}(t),l.prepend(p)}},destroy:function(){this.holder.remove()}},o.prototype={pluginRenderUI:function(e){var t=new i({editor:e});e.on("destroy",function(){t.destroy()})}},n.exports=o});