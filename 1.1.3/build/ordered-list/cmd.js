define("kg/editor-plugins/1.1.3/ordered-list/cmd",["editor","../list-utils/cmd"],function(e,t,i){var n=e("editor"),d=e("../list-utils/cmd"),o="insertOrderedList",r=d.ListCommand,a=d.queryActive,m=new r("ol");i.exports={init:function(e){e.hasCommand(o)||e.addCommand(o,{exec:function(e,t){e.focus(),m.exec(e,t)}});var t=n.Utils.getQueryCmd(o);e.hasCommand(t)||e.addCommand(t,{exec:function(e){var t=e.getSelection();if(t&&!t.isInvalid){var i=t.getStartElement(),d=new n.ElementPath(i);return a("ol",d)}}})}}});