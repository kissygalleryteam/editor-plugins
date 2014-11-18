define("kg/editor-plugins/1.1.8/drag-upload",["util","editor","event-dom","node","dom"],function(e,n,t){function r(e){this.config=e||{}}var o=e("util"),i=e("editor"),a=e("event-dom"),d=e("node"),s=i.Utils,l=e("dom");o.augment(r,{pluginRenderUI:function(e){function n(e){var n=e.originalEvent,t=n.target;"img"===l.nodeName(t)&&t.src.match(/^file:\/\//)&&(v[t.src]=t)}function t(e,n){var t=new window.FileReader;t.onload=function(r){var a=e.name,d=r.target.result,s="----kissy-editor-yiminghe",l=new XMLHttpRequest;l.open("POST",u,!0),l.onreadystatechange=function(){if(4===l.readyState){if(200===l.status||304===l.status){if(""!==l.responseText){var e=o.parseJson(l.responseText);n[0].src=e.imgUrl}}else window.alert("服务器端出错！"),n.remove();l.onreadystatechange=null}};var m="\r\n--"+s+"\r\n";m+="Content-Disposition: form-data; name='"+f+"'; filename='"+encodeURIComponent(a)+"'\r\n",m+="Content-Type: "+(e.type||"application/octet-stream")+"\r\n\r\n",m+=d+"\r\n",p=i.Utils.normParams(p);for(var g in p)m+="--"+s+"\r\n",m+="Content-Disposition: form-data; name='"+g+"'\r\n\r\n",m+=p[g]+"\r\n";m+="--"+s+"--",l.setRequestHeader("Content-Type","multipart/form-data, boundary="+s),l.sendAsBinary("Content-Type: multipart/form-data; boundary="+s+"\r\nContent-Length: "+m.length+"\r\n"+m+"\r\n"),t.onload=null},t.readAsBinaryString(e)}var r=this.config,f=r.fileInput||"Filedata",m=r.sizeLimit||Number.MAX_VALUE,p=r.serverParams||{},u=r.serverUrl||"",g=r.suffix||"png,jpg,jpeg,gif",c=new RegExp(g.split(/,/).join("|")+"$","i"),v={},y=!1;e.docReady(function(){var r=e.get("document")[0];a.on(r,"dragenter",function(){y||(a.on(r,"DOMNodeInserted",n),y=!0)}),a.on(r,"drop",function(e){a.remove(r,"DOMNodeInserted",n),y=!1,e.halt(),e=e.originalEvent;var i,f;o.isEmptyObject(v)?(f=r.elementFromPoint(e.clientX,e.clientY),i=f.lastChild):(o.each(v,function(e){"img"===l.nodeName(e)&&(i=e.nextSibling,f=e.parentNode,l.remove(e))}),v={});var p=e.dataTransfer;p.dropEffect="copy";var u=p.files;if(u)for(var g=0;g<u.length;g++){var h=u[g],w=h.name,b=h.size;if(w.match(c)&&!(b/1e3>m)){var B=d('<img src="'+s.debugUrl("theme/tao-loading.gif")+'"/>'),C=B[0];f.insertBefore(C,i);var R=C.parentNode,U=l.nodeName(R);("head"===U||"html"===U)&&l.insertBefore(C,r.body.firstChild),t(h,B)}}})}),window.XMLHttpRequest&&!XMLHttpRequest.prototype.sendAsBinary&&(XMLHttpRequest.prototype.sendAsBinary=function(e,n){var t;t=window.BlobBuilder?new window.BlobBuilder:window.WebKitBlobBuilder();for(var r=e.length,o=new window.Uint8Array(r),i=0;r>i;i++)o[i]=e.charCodeAt(i);t.append(o.buffer),this.send(t.getBlob(n))})}}),t.exports=r});