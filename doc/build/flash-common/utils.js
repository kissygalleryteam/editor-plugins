KISSY.add('kg/editor-plugins/1.1.2/flash-common/utils',["swf","dom","node"],function(S ,require, exports, module) {var e=require("swf"),t=require("dom"),r=require("node");module.exports={insertFlash:function(e,t,r,n,o){var a=this.createSWF({src:t,attrs:r,document:e.get("document")[0]}),l=a.el,i=e.createFakeElement(l,n||"ke_flash",o||"flash",!0,a.html,r);return e.insertElement(i),i},isFlashEmbed:function(e){return"application/x-shockwave-flash"===t.attr(e,"type")||/\.swf(?:$|\?)/i.test(t.attr(e,"src")||"")},getUrl:function(t){return e.getSrc(t)},createSWF:function(n){var o=t.create('<div style="position:absolute;left:-9999px;top:-9999px;"></div>',void 0,n.document);n.htmlMode="full",t.append(o,n.document.body),n.render=o;var a=new e(n);return t.remove(o),{el:r(a.get("el")),html:a.get("html")}}};});