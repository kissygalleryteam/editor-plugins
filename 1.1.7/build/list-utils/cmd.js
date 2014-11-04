define("kg/editor-plugins/1.1.7/list-utils/cmd",["editor","../list-utils","ua","node","dom"],function(e,t,o){function r(e){this.type=e}function i(e,t){var o,r,i,n=t.blockLimit,s=t.elements;if(!n)return!1;if(s)for(i=0;i<s.length&&(o=s[i])&&o[0]!==n[0];i++)if(l[r=o.nodeName()]&&r===e)return o.css("list-style-type");return!1}var n=e("editor"),s=e("../list-utils"),a="insertUnorderedList",d="insertOrderedList",l={ol:d,ul:a},c=n.RangeType,v=n.ElementPath,p=n.Walker,h=e("ua"),f=e("node"),u=e("dom"),_=/^h[1-6]$/;r.prototype={constructor:r,changeListType:function(e,t,o,r,i){for(var n=s.listToArray(t.root,o,void 0,void 0,void 0),a=[],d=0;d<t.contents.length;d++){var l=t.contents[d];l=l.closest("li",void 0),l&&l[0]&&!l.data("list_item_processed")&&(a.push(l),l._4eSetMarker(o,"list_item_processed",!0,void 0))}var c=f(t.root[0].ownerDocument.createElement(this.type));for(c.css("list-style-type",i),d=0;d<a.length;d++){var v=a[d].data("listarray_index");n[v].parent=c}var p,h=s.arrayToList(n,o,null,"p"),u=h.listNode.childNodes.length;for(d=0;u>d&&(p=f(h.listNode.childNodes[d]));d++)p.nodeName()===this.type&&r.push(p);t.root.before(h.listNode),t.root.remove()},createList:function(e,t,o,r){var i=t.contents,n=t.root[0].ownerDocument,s=[];if(1===i.length&&i[0][0]===t.root[0]){var a=f(n.createElement("div"));i[0][0].nodeType!==u.NodeType.TEXT_NODE&&i[0]._4eMoveChildren(a,void 0,void 0),i[0][0].appendChild(a[0]),i[0]=a}for(var d=t.contents[0].parent(),l=0;l<i.length;l++)d=d._4eCommonAncestor(i[l].parent(),void 0);for(l=0;l<i.length;l++)for(var c,v=i[l];c=v.parent();){if(c[0]===d[0]){s.push(v);break}v=c}if(!(s.length<1)){var p=f(s[s.length-1][0].nextSibling),m=f(n.createElement(this.type));for(m.css("list-style-type",r),o.push(m);s.length;){var y=s.shift(),g=f(n.createElement("li"));_.test(y.nodeName())?g[0].appendChild(y[0]):(y._4eCopyAttributes(g,void 0,void 0),y._4eMoveChildren(g,void 0,void 0),y.remove()),m[0].appendChild(g[0]),h.ie||g._4eAppendBogus(void 0)}p[0]?m.insertBefore(p,void 0):d.append(m)}},removeList:function(e,t,o){function r(o){!(_=f(g[o?"firstChild":"lastChild"]))||_[0].nodeType===u.NodeType.ELEMENT_NODE&&_._4eIsBlockBoundary(void 0,void 0)||!(m=t.root[o?"prev":"next"](p.whitespaces(!0),1))||_[0].nodeType===u.NodeType.ELEMENT_NODE&&m._4eIsBlockBoundary({br:1},void 0)||_[o?"before":"after"](e.get("document")[0].createElement("br"))}for(var i=s.listToArray(t.root,o,void 0,void 0,void 0),n=[],a=0;a<t.contents.length;a++){var d=t.contents[a];d=d.closest("li",void 0),d&&!d.data("list_item_processed")&&(n.push(d),d._4eSetMarker(o,"list_item_processed",!0,void 0))}var l=null;for(a=0;a<n.length;a++){var c=n[a].data("listarray_index");i[c].indent=-1,l=c}for(a=l+1;a<i.length;a++)if(i[a].indent>Math.max(i[a-1].indent,0)){for(var v=i[a-1].indent+1-i[a].indent,h=i[a].indent;i[a]&&i[a].indent>=h;)i[a].indent+=v,a++;a--}var _,m,y=s.arrayToList(i,o,null,"p"),g=y.listNode;r(!0),r(void 0),t.root.before(g),t.root.remove()},exec:function(e,t){var o=e.getSelection(),r=o&&o.getRanges();if(r&&!(r.length<1)){for(var s,a,d=o.getStartElement(),h=new n.ElementPath(d),f=i(this.type,h),_=o.createBookmarks(!0),m=[],y={};r.length>0;){var g=r.shift(),N=g.getBoundaryNodes(),E=N.startNode,T=N.endNode;E[0].nodeType===u.NodeType.ELEMENT_NODE&&"td"===E.nodeName()&&g.setStartAt(N.startNode,c.POSITION_AFTER_START),T[0].nodeType===u.NodeType.ELEMENT_NODE&&"td"===T.nodeName()&&g.setEndAt(N.endNode,c.POSITION_BEFORE_END);var k,b=g.createIterator();for(b.forceBrBreak=!1;k=b.getNextParagraph();)if(!k.data("list_block")){k._4eSetMarker(y,"list_block",1,void 0);var L,M=new v(k),A=M.elements,B=A.length,S=!1,C=M.blockLimit;for(a=B-1;a>=0&&(L=A[a]);a--)if(l[L.nodeName()]&&C.contains(L)){C.removeData("list_group_object"),s=L.data("list_group_object"),s?s.contents.push(k):(s={root:L,contents:[k]},m.push(s),L._4eSetMarker(y,"list_group_object",s,void 0)),S=!0;break}if(!S){var O=C||M.block;O.data("list_group_object")?O.data("list_group_object").contents.push(k):(s={root:O,contents:[k]},O._4eSetMarker(y,"list_group_object",s,void 0),m.push(s))}}}for(var x=[];m.length>0;)s=m.shift(),f?l[s.root.nodeName()]&&(s.root.css("list-style-type")===t?this.removeList(e,s,y):s.root.css("list-style-type",t)):l[s.root.nodeName()]?this.changeListType(e,s,y,x,t):(n.Utils.clearAllMarkers(y),this.createList(e,s,x,t));var D=this;for(a=0;a<x.length;a++){var I=x[a],j=function(e,o){var r=o[e?"prev":"next"](p.whitespaces(!0),1);r&&r[0]&&r.nodeName()===D.type&&r.css("list-style-type")===t&&(r.remove(),r._4eMoveChildren(o,e?!0:!1,void 0))};j(void 0,I),j(!0,I)}n.Utils.clearAllMarkers(y),o.selectBookmarks(_)}}},o.exports={ListCommand:r,queryActive:i}});