define("kg/editor-plugins/1.1.8/outdent/cmd",["editor","../dent-cmd"],function(t,e,n){var d=t("editor"),i=t("../dent-cmd"),o=i.addCommand,a=i.checkOutdentActive;n.exports={init:function(t){o(t,"outdent");var e=d.Utils.getQueryCmd("outdent");t.hasCommand(e)||t.addCommand(e,{exec:function(t){var e=t.getSelection();if(e&&!e.isInvalid){var n=e.getStartElement(),i=new d.ElementPath(n);return a(i)}}})}}});