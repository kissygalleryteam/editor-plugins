define("kg/editor-plugins/1.1.6/unordered-list",["./list-utils/btn","./unordered-list/cmd"],function(t,e,n){function i(){}var d=t("./list-utils/btn"),r=t("./unordered-list/cmd");i.prototype={pluginRenderUI:function(t){r.init(t),d.init(t,{cmdType:"insertUnorderedList",buttonId:"unorderedList",menu:{width:75,children:[{content:"● 圆点",value:"disc"},{content:"○ 圆圈",value:"circle"},{content:"■ 方块",value:"square"}]},tooltip:"无序列表"})}},n.exports=i});