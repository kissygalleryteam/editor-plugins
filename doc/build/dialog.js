define("kg/editor-plugins/1.1.7/dialog",["editor","overlay","./focus-fix","dd/plugin/constrain","component/plugin/drag","dom"],function(n,i,e){var o=n("editor"),r=n("overlay"),d=n("./focus-fix"),t=n("dd/plugin/constrain"),l=n("component/plugin/drag"),a=n("dom");e.exports=r.Dialog.extend({initializer:function(){this.plug(new l({handlers:[".ks-editor-dialog-header"],plugins:[new t({constrain:window})]}))},bindUI:function(){d.init(this)},show:function(){var n=this;n.center();var i=n.get("y");i-a.scrollTop()>200&&(i=a.scrollTop()+200,n.set("y",i)),n.callSuper()}},{ATTRS:{prefixCls:{value:"ks-editor-"},zIndex:{value:o.baseZIndex(o.ZIndexManager.OVERLAY)}}})});