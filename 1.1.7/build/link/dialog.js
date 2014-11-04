define("kg/editor-plugins/1.1.7/link/dialog",["util","editor","../dialog","./utils"],function(t,e,l){function i(t,e){var l=this;l.editor=t,l.config=e||{},a.Utils.lazyRun(l,"_prepareShow","_real")}var r=t("util"),a=t("editor"),n=t("../dialog"),o=t("./utils"),s=o.savedHref,d='<div style="padding:20px 20px 0 20px"><p><label>链接网址： <input  data-verify="^(https?://[^\\s]+)|(#.+)$"  data-warning="请输入合适的网址格式" class="{prefixCls}editor-link-url {prefixCls}editor-input" style="width:390px;" /></label></p><p style="margin: 15px 0 10px 0px;"><label>链接名称： <input class="{prefixCls}editor-link-title {prefixCls}editor-input" style="width:100px;"></label> <label><input class="{prefixCls}editor-link-blank" style="vertical-align: middle; margin-left: 21px;" type="checkbox"/> &nbsp; 在新窗口打开链接</label></p></div>',p='<div style="padding:5px 20px 20px;"><a href="javascript:void(\'确定\')" class="{prefixCls}editor-link-ok {prefixCls}editor-button ks-inline-block" style="margin-left:65px;margin-right:20px;">确定</a> <a href="javascript:void(\'取消\')" class="{prefixCls}editor-link-cancel {prefixCls}editor-button ks-inline-block">取消</a></div>';r.augment(i,{_prepareShow:function(){var t=this,e=t.editor,l=e.get("prefixCls"),i=new n({width:500,headerContent:"链接",bodyContent:r.substitute(d,{prefixCls:l}),footerContent:r.substitute(p,{prefixCls:l}),mask:!0}).render();t.dialog=i;var o=i.get("body"),s=i.get("footer");i.urlEl=o.one("."+l+"editor-link-url"),i.urlTitle=o.one("."+l+"editor-link-title"),i.targetEl=o.one("."+l+"editor-link-blank");var u=s.one("."+l+"editor-link-cancel"),c=s.one("."+l+"editor-link-ok");c.on("click",t._link,t),u.on("click",function(t){t.halt(),i.hide()}),a.Utils.placeholder(i.urlEl,"http://")},_link:function(t){t.halt();var e=this,l=e.dialog,i=l.urlEl.val();if(a.Utils.verifyInputs(l.get("el").all("input"))){l.hide();var n={href:i,target:l.targetEl[0].checked?"_blank":"_self",title:r.trim(l.urlTitle.val())};setTimeout(function(){o.applyLink(e.editor,n,e._selectedEl)},0)}},_real:function(){var t=this,e=t.config,l=t.dialog,i=t._selectedEl;if(i){var r=i.attr(s)||i.attr("href");a.Utils.valInput(l.urlEl,r),l.urlTitle.val(i.attr("title")||""),l.targetEl[0].checked="_blank"===i.attr("target")}else a.Utils.resetInput(l.urlEl),l.urlTitle.val(""),e.target&&(l.targetEl[0].checked=!0);l.show()},show:function(t){var e=this;e._selectedEl=t,e._prepareShow()}}),l.exports=i});