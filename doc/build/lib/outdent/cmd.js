KISSY.add('editor-plugins/lib/outdent/cmd',["editor","../dent-cmd"],function(S ,require, exports, module) {var e=require("editor"),t=require("../dent-cmd"),n=t.addCommand,d=t.checkOutdentActive;module.exports={init:function(t){n(t,"outdent");var i=e.Utils.getQueryCmd("outdent");t.hasCommand(i)||t.addCommand(i,{exec:function(t){var n=t.getSelection();if(n&&!n.isInvalid){var i=n.getStartElement(),r=new e.ElementPath(i);return d(r)}}})}};});