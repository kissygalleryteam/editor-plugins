define('kg/editor-plugins/1.1.3/fore-color/cmd',["../color/cmd"],function(require, exports, module) {var e=require("../color/cmd"),o={element:"span",styles:{color:"#(color)"},overrides:[{element:"font",attributes:{color:null}}],childRule:function(e){return!("a"===e.nodeName()||e.all("a").length)}};module.exports={init:function(n){n.hasCommand("foreColor")||n.addCommand("foreColor",{exec:function(n,l){n.execCommand("save"),e.applyColor(n,l,o),n.execCommand("save")}})}};});