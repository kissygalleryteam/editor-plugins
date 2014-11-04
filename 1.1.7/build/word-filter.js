define("kg/editor-plugins/1.1.7/word-filter",["html-parser","util","node","ua"],function(e,t,i){function r(e){e=e.toUpperCase();for(var t=L.length,i=0,r=0;t>r;++r)for(var n=L[r],l=n[1].length;e.substr(0,l)===n[1];e=e.substr(l))i+=n[0];return i}function n(e){e=e.toUpperCase();for(var t=F.length,i=1,r=1;e.length>0;r*=t)i+=F.indexOf(e.charAt(e.length-1))*r,e=e.substr(0,e.length-1);return i}function l(e,t){t?e.setAttribute("style",t):e.removeAttribute("style")}function a(e){var t=e.childNodes||[],i=t.length,r=1===i&&t[0];return r||null}function s(e,t){for(var i,r=e.childNodes||[],n=[],l=0;l<r.length;l++)i=r[l],i.nodeName&&(i.nodeName===t&&(n.push(i),r.splice(l--,1)),n=n.concat(s(i,t)));return n}function o(e,t){for(var i=e.parentNode;i&&(!i.nodeName||!i.nodeName.match(t));)i=i.parentNode;return i}function u(e,t){var i,r,n=e.childNodes||[];for(r=0;r<n.length;r++){if(i=n[r],t(i))return i;if(i.nodeName&&(i=u(i,t)))return i}return null}function c(e,t,i,r){var n,a,s="";if("string"==typeof i)s+=t+":"+i+";";else{if("object"==typeof t)for(a in t)s+=a+":"+t[a]+";";else s+=t;r=i}n=e.getAttribute("style"),n=(r?[s,n]:[n,s]).join(";"),l(e,n.replace(/^;|;(?=;)/,""))}function f(e){var t,i={};for(t in v)-1===t.indexOf("$")&&v[t][e]&&(i[t]=1);return i}function d(e){var t,i,r,n=e.childNodes||[],a=n.length,s=/list-style-type:(.*?)(?:;|$)/,o=M.stylesFilter;if(!s.exec(e.getAttribute("style"))){for(var u=0;a>u;u++)if(t=n[u],t.getAttribute("value")&&Number(t.getAttribute("value"))===u+1&&t.removeAttribute("value"),i=s.exec(t.getAttribute("style"))){if(i[1]!==r&&r){r=null;break}r=i[1]}if(r){for(u=0;a>u;u++){var f=n[u].getAttribute("style");f&&(f=o([["list-style-type"]])(f),l(n[u],f))}c(e,"list-style-type",r)}}}var m,g=e("html-parser"),p=e("util"),h=e("node"),b=e("ua"),v=g.DTD,y=new g.Filter,A=/^([.\d]*)+(em|ex|px|gd|rem|vw|vh|vm|ch|mm|cm|in|pt|pc|deg|rad|ms|s|hz|khz){1}?/i,N=/^(?:\b0[^\s]*\s*){1,4}$/,k="^m{0,4}(cm|cd|d?c{0,3})(xc|xl|l?x{0,3})(ix|iv|v?i{0,3})$",$=new RegExp(k),C=new RegExp(k.toUpperCase()),w={decimal:/\d+/,"lower-roman":$,"upper-roman":C,"lower-alpha":/^[a-z]+$/,"upper-alpha":/^[A-Z]+$/},x={disc:/[l\u00B7\u2002]/,circle:/[\u006F\u00D8]/,square:/[\u006E\u25C6]/},T={ol:w,ul:x},L=[[1e3,"M"],[900,"CM"],[500,"D"],[400,"CD"],[100,"C"],[90,"XC"],[50,"L"],[40,"XL"],[10,"X"],[9,"IX"],[5,"V"],[4,"IV"],[1,"I"]],F="ABCDEFGHIJKLMNOPQRSTUVWXYZ",S=function(){var e;return function(t){return e||(e=h('<div style="position:absolute;left:-9999px;top:-9999px;margin:0px;padding:0px;border:0px;"></div>').prependTo("body")),/%$/.test(t)?t:(e.css("width",t),e[0].clientWidth)}}(),D=0,I=null,M={flattenList:function(e,t){t="number"==typeof t?t:1;var i;switch(e.getAttribute("type")){case"a":i="lower-alpha";break;case"1":i="decimal"}for(var r,n=e.childNodes||[],l=0;l<n.length;l++)if(r=n[l],r.nodeName in v.$listItem){var a=r.childNodes||[],s=a.length,o=a[s-1];o.nodeName in v.$list&&(e.insertAfter(r),--a.length||e.removeChild(n[l--])),r.setTagName("ke:li"),e.getAttribute("start")&&!l&&e.setAttribute("value",e.getAttribute("start")),M.stylesFilter([["tab-stops",null,function(e){var t=e.split(" ")[1].match(A);t&&(I=S(t[0]))}],1===t?["mso-list",null,function(e){e=e.split(" ");var t=Number(e[0].match(/\d+/));t!==m&&r.setAttribute("ke:reset",1),m=t}]:null])(r.getAttribute("style")),r.setAttribute("ke:indent",t),r.setAttribute("ke:listtype",e.nodeName),r.setAttribute("ke:list-style-type",i)}else if(r.nodeName in v.$list){arguments.callee.apply(this,[r,t+1]),n=n.slice(0,l).concat(r.childNodes).concat(n.slice(l+1)),e.empty();for(var u=0,c=n.length;c>u;u++)e.appendChild(n[u])}e.nodeName=e.tagName=null,e.setAttribute("ke:list",1)},assembleList:function(e){for(var t,i,l,a,s,o,u,f,m,h,b,v,y=e.childNodes||[],A=[],N=0;N<y.length;N++)if(t=y[N],"ke:li"===t.nodeName){if(t.setTagName("li"),i=t,m=i.getAttribute("ke:listsymbol"),m=m&&m.match(/^(?:[(]?)([^\s]+?)([.)]?)$/),h=b=v=null,i.getAttribute("ke:ignored")){y.splice(N--,1);continue}if(i.getAttribute("ke:reset")&&(o=a=s=null),l=Number(i.getAttribute("ke:indent")),l!==a&&(f=u=null),m){if(f&&T[f][u].test(m[1]))h=f,b=u;else for(var k in T)for(var $ in T[k])if(T[k][$].test(m[1])){if("ol"!==k||!/alpha|roman/.test($)){h=k,b=$;break}var C=/roman/.test($)?r(m[1]):n(m[1]);(!v||v>C)&&(v=C,h=k,b=$)}h||(h=m[2]?"ol":"ul")}else h=i.getAttribute("ke:listtype")||"ol",b=i.getAttribute("ke:list-style-type");if(f=h,u=b||("ol"===h?"decimal":"disc"),b&&b!==("ol"===h?"decimal":"disc")&&c(i,"list-style-type",b),"ol"===h&&m){switch(b){case"decimal":v=Number(m[1]);break;case"lower-roman":case"upper-roman":v=r(m[1]);break;case"lower-alpha":case"upper-alpha":v=n(m[1])}i.setAttribute("value",v)}if(o){if(l>a)A.push(o=new g.Tag(h)),o.appendChild(i),s.appendChild(o);else if(a>l){for(var w,x=a-l;x--&&(w=o.parentNode);)o=w.parentNode;o.appendChild(i)}else o.appendChild(i);y.splice(N--,1)}else A.push(o=new g.Tag(h)),o.appendChild(i),e.replaceChild(o,y[N]);s=i,a=l}else o&&(3!==t.nodeType||p.trim(t.nodeValue))&&(o=a=s=null);for(N=0;N<A.length;N++)d(A[N])},falsyFilter:function(){return!1},stylesFilter:function(e,t){return function(i,r){var n=[];(i||"").replace(/&quot;/g,'"').replace(/\s*([^ :;]+)\s*:\s*([^;]+)\s*(?=;|$)/g,function(i,l,a){l=l.toLowerCase(),"font-family"===l&&(a=a.replace(/['']/g,""));for(var s,o,u,c,f=0;f<e.length;f++)if(e[f]&&(s=e[f][0],o=e[f][1],u=e[f][2],c=e[f][3],l.match(s)&&(!o||a.match(o))))return l=c||l,t&&(u=u||a),"function"==typeof u&&(u=u(a,r,l)),u&&u.push&&(l=u[0],u=u[1]),void("string"==typeof u&&n.push([l,u]));t||n.push([l,a])});for(var l=0;l<n.length;l++)n[l]=n[l].join(":");return n.length?n.join(";")+";":!1}},applyStyleFilter:null},V={createListBulletMarker:function(e,t){var i=new g.Tag("ke:listbullet");return i.setAttribute("ke:listsymbol",e[0]),i.appendChild(new g.Text(t)),i},isListBulletIndicator:function(e){var t=e.getAttribute("style");return/mso-list\s*:\s*Ignore/i.test(t)?!0:void 0},isContainingOnlySpaces:function(e){var t;return(t=a(e))&&/^(:?\s|&nbsp;)+$/.test(t.nodeValue)},resolveList:function(e){var t;if((t=s(e,"ke:listbullet"))&&t.length&&(t=t[0])){if(e.setTagName("ke:li"),e.getAttribute("style")){var i=M.stylesFilter([["text-indent"],["line-height"],[/^margin(:?-left)?$/,null,function(t){var i=t.split(" ");t=S(i[3]||i[1]||i[0]),!D&&null!==I&&t>I&&(D=t-I),I=t,D&&e.setAttribute("ke:indent",D&&Math.ceil(t/D)+1||1)}],[/^mso-list$/,null,function(t){t=t.split(" ");var i=Number(t[0].match(/\d+/)),r=Number(t[1].match(/\d+/));1===r&&(i!==m&&e.setAttribute("ke:reset",1),m=i),e.setAttribute("ke:indent",r)}]])(e.getAttribute("style"),e);l(e,i)}return e.getAttribute("ke:indent")||(I=0,e.setAttribute("ke:indent",1)),p.each(t.attributes,function(t){e.setAttribute(t.name,t.value)}),!0}return m=I=D=null,!1},getStyleComponents:function(){var e=h('<div style="position:absolute;left:-9999px;top:-9999px;"></div>').prependTo("body");return function(t,i,r){e.css(t,i);for(var n={},l=r.length,a=0;l>a;a++)n[r[a]]=e.css(r[a]);return n}}(),listDtdParents:f("ol")};!function(){var e=p.merge(v.$block,v.$listItem,v.$tableContent),t=M.falsyFilter,i=M.stylesFilter,r=V.createListBulletMarker,n=M.flattenList,s=M.assembleList,f=V.isListBulletIndicator,d=V.isContainingOnlySpaces,m=V.resolveList,h=function(e){return e=S(e),isNaN(e)?e:e+"px"},A=V.getStyleComponents,k=V.listDtdParents;y.addRules({tagNames:[[/meta|link|script/,""]],root:function(e){e.filterChildren(),s(e)},tags:{"^":function(e){var t;b.gecko&&(t=M.applyStyleFilter)&&t(e)},$:function(t){var r=t.nodeName||"";if(r in e&&t.getAttribute("style")&&l(t,i([[/^(:?width|height)$/,null,h]])(t.getAttribute("style"))),r.match(/h\d/)){if(t.filterChildren(),m(t))return}else if(r in v.$inline)t.filterChildren(),d(t)&&t.setTagName(null);else if(-1!==r.indexOf(":")&&-1===r.indexOf("ke")){if(t.filterChildren(),"v:imagedata"===r){var n=t.getAttribute("o:href");return n&&t.setAttribute("src",n),void t.setTagName("img")}t.setTagName(null)}r in k&&(t.filterChildren(),s(t))},style:function(e){if(b.gecko){var t=a(e).nodeValue.match(/\/\* Style Definitions \*\/([\s\S]*?)\/\*/),i=t&&t[1],r={};i&&(i.replace(/[\n\r]/g,"").replace(/(.+?)\{(.+?)\}/g,function(e,t,i){t=t.split(",");for(var n=t.length,l=0;n>l;l++)p.trim(t[l]).replace(/^(\w+)(\.[\w-]+)?$/g,function(e,t,n){t=t||"*",n=n.substring(1,n.length),n.match(/MsoNormal/)||(r[t]||(r[t]={}),n?r[t][n]=i:r[t]=i)})}),M.applyStyleFilter=function(e){var t,i=r["*"]?"*":e.nodeName,n=e.getAttribute("class");i in r&&(t=r[i],"object"==typeof t&&(t=t[n]),t&&c(e,t,!0))})}return!1},p:function(e){if(/MsoListParagraph/.exec(e.getAttribute("class"))){var t=u(e,function(e){return 3===e.nodeType&&!d(e.parentNode)}),i=t&&t.parentNode;i&&!i.getAttribute("style")&&i.setAttribute("style","mso-list: Ignore;")}e.filterChildren(),m(e)},div:function(e){var t=a(e);if(t&&"table"===t.nodeName){var i=e.attributes;p.each(i,function(e){t.setAttribute(e.name,e.value)}),e.getAttribute("style")&&c(t,e.getAttribute("style"));var r=new g.Tag("div");c(r,"clear","both"),e.appendChild(r),e.setTagName(null)}},td:function(e){o(e,"thead")&&e.setTagName("th")},ol:n,ul:n,dl:n,font:function(e){if(f(e.parentNode))return void e.setTagName(null);e.filterChildren();var t=e.getAttribute("style"),i=e.parentNode;if("font"===i.name)p.each(e.attributes,function(e){i.setAttribute(e.name,e.value)}),t&&c(i,t),e.setTagName(null);else{t=t||"",e.getAttribute("color")&&("#000000"!==e.getAttribute("color")&&(t+="color:"+e.getAttribute("color")+";"),e.removeAttribute("color")),e.getAttribute("face")&&(t+="font-family:"+e.getAttribute("face")+";",e.removeAttribute("face"));var r=e.getAttribute("size");r&&(t+="font-size:"+(r>3?"large":3>r?"small":"medium")+";",e.removeAttribute("size")),e.setTagName("span"),c(e,t)}},span:function(e){if(f(e.parentNode))return!1;if(e.filterChildren(),d(e))return e.setTagName(null),null;if(f(e)){var t=u(e,function(e){return e.nodeValue||"img"===e.nodeName}),n=t&&(t.nodeValue||"l."),a=n&&n.match(/^(?:[(]?)([^\s]+?)([.)]?)$/);if(a){var s=r(a,n),c=o(e,"span");return c&&/ mso-hide:\s*all|display:\s*none /.test(c.getAttribute("style"))&&s.setAttribute("ke:ignored",1),s}}var m=e.getAttribute("style");m&&l(e,i([[/^line-height$/],[/^font-family$/],[/^font-size$/],[/^color$/],[/^background-color$/]])(m,e))},a:function(e){var t;!(t=e.getAttribute("href"))&&e.getAttribute("name")?e.setTagName(null):b.webkit&&t&&t.match(/file:\/\/\/[\S]+#/i)&&e.setAttribute("href",t.replace(/file:\/\/\/[^#]+/i,""))},"ke:listbullet":function(e){o(e,/h\d/)&&e.setTagName(null)}},attributeNames:[[/^onmouse(:?out|over)/,""],[/^onload$/,""],[/(?:v|o):\w+/,""],[/^lang/,""]],attributes:{style:i([[/^list-style-type$/],[/^margin$|^margin-(?!bottom|top)/,null,function(e,t,i){if(t.nodeName in{p:1,div:1}){var r="margin-left";if("margin"===i)e=A(i,e,[r])[r];else if(i!==r)return null;if(e&&!N.test(e))return[r,e]}return null}],[/^clear$/],[/^border.*|margin.*|vertical-align|float$/,null,function(e,t){return"img"===t.nodeName?e:void 0}],[/^width|height$/,null,function(e,t){return t.nodeName in{table:1,td:1,th:1,img:1}?e:void 0}]],1),width:function(e,t){return t.nodeName in v.$tableContent?!1:void 0},border:function(e,t){return t.nodeName in v.$tableContent?!1:void 0},"class":t,bgcolor:t,valign:function(e,t){return c(t,"vertical-align",e),!1}},comment:b.ie?function(e,t){var i=e.match(/<img.*?>/),n=e.match(/^\[if !supportLists\]([\s\S]*?)\[endif\]$/);if(n){var l=n[1]||i&&"l.",a=l&&l.match(/>(?:[(]?)([^\s]+?)([.)]?)</);return r(a,l)}if(b.gecko&&i){var s=new g.Parser(i[0]).parse().childNodes[0],o=t.previousSibling,u=o&&o.toHtml().match(/<v:imagedata[^>]*o:href=[''](.*?)['']/),c=u&&u[1];return c&&s.setAttribute("src",c),s}return!1}:t})}(),i.exports={toDataFormat:function(e,t){return b.gecko&&(e=e.replace(/(<!--\[if[^<]*?\])-->([\S\s]*?)<!--(\[endif\]-->)/gi,"$1$2$3")),e=t.htmlDataProcessor.toDataFormat(e,y)}}});