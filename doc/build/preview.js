define("kg/editor-plugins/1.1.7/preview",["./button","util"],function(t,e,o){function n(){}var i=window;t("./button");t("util");n.prototype={pluginRenderUI:function(t){t.addButton("preview",{tooltip:"预览",listeners:{click:function(){var e,o,n;try{var r=i.screen;o=Math.round(.7*r.height),n=Math.round(.1*r.width),e=Math.round(.8*r.width)}catch(u){e=640,o=420,n=80}var l=t.getDocHtml().replace(/\{title\}/,"预览"),s="",a=i.open(s,"","toolbar=yes,location=no,status=yes,menubar=yes,scrollbars=yes,resizable=yes,width="+e+",height="+o+",left="+n),c=a.document;c.open(),c.write(l),c.close(),a.focus()}}})}},o.exports=n});