define("kg/editor-plugins/1.1.8/flash-common/utils",["swf","dom","node"],function(e,t,n){var r=e("swf"),o=e("dom"),l=e("node");n.exports={insertFlash:function(e,t,n,r,o){var l=this.createSWF({src:t,attrs:n,document:e.get("document")[0]}),s=l.el,a=e.createFakeElement(s,r||"ke_flash",o||"flash",!0,l.html,n);return e.insertElement(a),a},isFlashEmbed:function(e){return"application/x-shockwave-flash"===o.attr(e,"type")||/\.swf(?:$|\?)/i.test(o.attr(e,"src")||"")},getUrl:function(e){return r.getSrc(e)},createSWF:function(e){var t=o.create('<div style="position:absolute;left:-9999px;top:-9999px;"></div>',void 0,e.document);e.htmlMode="full",o.append(t,e.document.body),e.render=t;var n=new r(e);return o.remove(t),{el:l(n.get("el")),html:n.get("html")}}}});