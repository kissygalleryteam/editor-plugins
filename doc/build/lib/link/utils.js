KISSY.add('editor-plugins/lib/link/utils',["editor","node"],function(S ,require, exports, module) {function e(e){for(var t=e.attributes,a={},n=0;n<t.length;n++){var r=t[n];r.specified&&(a[r.name]=r.value)}return e.style.cssText&&(a.style=e.style.cssText),a}function t(t,a){t.execCommand("save");var n=t.getSelection(),r=n.getRanges()[0];if(r&&r.collapsed){var s=n.createBookmarks();a._4eRemove(!0),n.selectBookmarks(s)}else if(r){var l=e(a[0]);new o(i,l).remove(t.get("document")[0])}t.execCommand("save"),t.notifySelectionChange()}function a(e,t,a){if(t[s]=t.href,a)e.execCommand("save"),a.attr(t);else{var n=e.getSelection(),l=n&&n.getRanges()[0];if(!l||l.collapsed){var c=new r("<a>"+t.href+"</a>",t,e.get("document")[0]);e.insertElement(c)}else{e.execCommand("save");var m=new o(i,t);m.apply(e.get("document")[0])}}e.execCommand("save"),e.notifySelectionChange()}var n=require("editor"),r=require("node"),o=n.Style,s="_ke_saved_href",i={element:"a",attributes:{href:"#(href)",title:"#(title)",_ke_saved_href:"#(_ke_saved_href)",target:"#(target)"}};module.exports={removeLink:t,applyLink:a,savedHref:s};});