KISSY.add('kg/editor-plugins/1.1.2/maximize',["./maximize/cmd","./button"],function(S ,require, exports, module) {function e(){}var t=require("./maximize/cmd");require("./button");var i="maximize",o="restore",n="全屏",c="取消全屏";e.prototype={pluginRenderUI:function(e){t.init(e),e.addButton("maximize",{tooltip:n,listeners:{click:function(){var t=this,r=t.get("checked");r?(e.execCommand("maximizeWindow"),t.set("tooltip",c),t.set("contentCls",o)):(e.execCommand("restoreWindow"),t.set("tooltip",n),t.set("contentCls",i)),e.focus()}},checkable:!0})}},module.exports=e;});