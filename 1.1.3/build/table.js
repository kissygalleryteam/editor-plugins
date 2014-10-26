define("kg/editor-plugins/1.1.3/table",["editor","./dialog-loader","./contextmenu","./button","util","ua","dom","node"],function(e,t,n){function o(e){function t(e){a.length>0||e[0].nodeType===C.NodeType.ELEMENT_NODE&&N.test(e.nodeName())&&!e.data("selected_cell")&&(e._4eSetMarker(r,"selected_cell",!0,void 0),a.push(e))}for(var n=e.createBookmarks(),o=e.getRanges(),a=[],r={},l=0;l<o.length;l++){var i=o[l];if(i.collapsed){var d=i.getCommonAncestor(),s=d.closest("td",void 0)||d.closest("th",void 0);s&&a.push(s)}else{var c,v=new g(i);for(v.guard=t;c=v.next();){var u=c.parent();u&&N.test(u.nodeName())&&!u.data("selected_cell")&&(u._4eSetMarker(r,"selected_cell",!0,void 0),a.push(u))}}}return m.Utils.clearAllMarkers(r),e.selectBookmarks(n),a}function a(e){for(var t=e.cells,n=0;n<t.length;n++)t[n].innerHTML="",k||S(t[n])._4eAppendBogus(void 0)}function r(e,t){var n=e.getStartElement().parent("tr");if(n){var o=n.clone(!0);o.insertBefore(n),a(t?o[0]:n[0])}}function l(e){var t;if(e instanceof m.Selection){for(var n,a,r,i,d=o(e),s=d.length,c=[],v=0;s>v;v++){r=d[v].parent();var u=r[0].rowIndex;v||(a=u-1),c[u]=r,v===s-1&&(i=u+1)}t=r.parent("table");var f=t[0].rows,h=f.length;for(n=S(h>i&&t[0].rows[i]||a>0&&t[0].rows[a]||t[0].parentNode),v=c.length;v>=0;v--)c[v]&&l(c[v]);return n}return e instanceof S&&(t=e.parent("table"),1===t[0].rows.length?t.remove():e.remove()),0}function i(e,t){var n=e.getStartElement(),o=n.closest("td",void 0)||n.closest("th",void 0);if(o)for(var a=o.parent("table"),r=o[0].cellIndex,l=0;l<a[0].rows.length;l++){var i=a[0].rows[l];if(!(i.cells.length<r+1)){o=S(i.cells[r].cloneNode(void 0)),k||o._4eAppendBogus(void 0);var d=S(i.cells[r]);t?o.insertBefore(d):o.insertAfter(d)}}}function d(e){var t,n,o,a,r=[],l=e[0]&&e[0].parent("table");for(t=0,n=e.length;n>t;t++)r.push(e[t][0].cellIndex);for(r.sort(),t=1,n=r.length;n>t;t++)if(r[t]-r[t-1]>1){o=r[t-1]+1;break}o||(o=r[0]>0?r[0]-1:r[r.length-1]+1);var i=l[0].rows;for(t=0,n=i.length;n>t&&!(a=i[t].cells[o]);t++);return a?S(a):l.prev()}function s(e){var t;if(e instanceof m.Selection){var n=o(e),a=d(n);for(t=n.length-1;t>=0;t--)n[t]&&s(n[t]);return a}if(e instanceof S){var r=e.parent("table");if(!r)return null;var i=e[0].cellIndex;for(t=r[0].rows.length-1;t>=0;t--){var c=S(r[0].rows[t]);i||1!==c[0].cells.length?c[0].cells[i]&&c[0].removeChild(c[0].cells[i]):l(c)}}return null}function c(e,t){var n=new m.Range(e[0].ownerDocument);n.moveToElementEditablePosition(e,t?!0:void 0)||(n.selectNodeContents(e),n.collapse(t?!1:!0)),n.select(!0)}function v(e){var t=e.getSelection(),n=t&&t.getStartElement(),o=n&&n.closest("table",void 0);if(!o)return void 0;var a=n.closest(function(e){var t=C.nodeName(e);return o.contains(e)&&("td"===t||"th"===t)},void 0),r=n.closest(function(e){var t=C.nodeName(e);return o.contains(e)&&"tr"===t},void 0);return{table:o,td:a,tr:r}}function u(e){var t=v(e);return t&&t.td}function f(e){var t=v(e);return t&&t.tr}function h(e){this.config=e||{}}var m=e("editor"),g=m.Walker,b=e("./dialog-loader");e("./contextmenu"),e("./button");var p=e("util"),x=e("ua"),C=e("dom"),S=e("node"),w=["tr","th","td","tbody","table"],N=/^(?:td|th)$/,k=x.ieMode<11,A={"表格属性":v,"删除表格":u,"删除列":u,"删除行":f,"在上方插入行":f,"在下方插入行":f,"在左侧插入列":u,"在右侧插入列":u},E="ke_show_border",_=(6===x.ie?["table.%2,","table.%2 td, table.%2 th,","{","border : #d3d3d3 1px dotted","}"]:[" table.%2,"," table.%2 > tr > td,  table.%2 > tr > th,"," table.%2 > tbody > tr > td,  table.%2 > tbody > tr > th,"," table.%2 > thead > tr > td,  table.%2 > thead > tr > th,"," table.%2 > tfoot > tr > td,  table.%2 > tfoot > tr > th","{","border : #d3d3d3 1px dotted","}"]).join(""),y=_.replace(/%2/g,E),M={tags:{table:function(e){var t=e.getAttribute("class"),n=parseInt(e.getAttribute("border"),10);(!n||0>=n)&&e.setAttribute("class",p.trim((t||"")+" "+E))}}},T={tags:{table:function(e){var t,n=e.getAttribute("class");n&&(t=p.trim(n.replace(E,"")),t?e.setAttribute("class",t):e.removeAttribute("class"))}}};p.augment(h,{pluginRenderUI:function(e){e.addCustomStyle(y);var t=e.htmlDataProcessor,n=t&&t.dataFilter,o=t&&t.htmlFilter;n.addRules(M),o.addRules(T);var a=this,d={"表格属性":function(){this.hide();var t=v(e);t&&b.useDialog(e,"table",a.config,{selectedTable:t.table,selectedTd:t.td})},"删除表格":function(){this.hide();var t=e.getSelection(),n=t&&t.getStartElement(),o=n&&n.closest("table",void 0);if(o){e.execCommand("save"),t.selectElement(o);var a=t.getRanges()[0];a.collapse(),t.selectRanges([a]);var r=o.parent();1===r[0].childNodes.length&&"body"!==r.nodeName()&&"td"!==r.nodeName()?r.remove():o.remove(),e.execCommand("save")}},"删除行 ":function(){this.hide(),e.execCommand("save");var t=e.getSelection();c(l(t),void 0),e.execCommand("save")},"删除列 ":function(){this.hide(),e.execCommand("save");var t=e.getSelection(),n=s(t);n&&c(n,!0),e.execCommand("save")},"在上方插入行":function(){this.hide(),e.execCommand("save");var t=e.getSelection();r(t,!0),e.execCommand("save")},"在下方插入行":function(){this.hide(),e.execCommand("save");var t=e.getSelection();r(t,void 0),e.execCommand("save")},"在左侧插入列":function(){this.hide(),e.execCommand("save");var t=e.getSelection();i(t,!0),e.execCommand("save")},"在右侧插入列":function(){this.hide(),e.execCommand("save");var t=e.getSelection();i(t,void 0),e.execCommand("save")}},u=[];p.each(d,function(e,t){u.push({content:t})}),e.addContextMenu("table",function(e){return p.inArray(C.nodeName(e),w)?!0:void 0},{width:"120px",children:u,listeners:{click:function(e){var t=e.target.get("content");d[t]&&d[t].apply(this)},beforeVisibleChange:function(e){if(e.newVal){var t=this,n=t.get("children"),o=t.get("editor");p.each(n,function(e){var n=e.get("content");!A[n]||A[n].call(t,o)?e.set("disabled",!1):e.set("disabled",!0)})}}}}),e.addButton("table",{mode:m.Mode.WYSIWYG_MODE,listeners:{click:function(){b.useDialog(e,"table",a.config,{selectedTable:0,selectedTd:0})}},tooltip:"插入表格"})}}),n.exports=h});