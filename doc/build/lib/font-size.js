KISSY.add('editor-plugins/lib/font-size',["editor","./font/ui","./font-size/cmd","./menubutton","util"],function(S ,require, exports, module) {function e(e){this.config=e||{}}var n=require("editor"),i=require("./font/ui"),t=require("./font-size/cmd");require("./menubutton");var u=require("util");u.augment(e,{pluginRenderUI:function(e){function r(e){var n=[];return u.each(e,function(e){n.push({content:e,value:e})}),n}t.init(e);var o=this.config;o.menu=u.mix({children:r(["8px","10px","12px","14px","18px","24px","36px","48px","60px","72px","84px","96px"])},o.menu),e.addSelect("fontSize",u.mix({cmdType:"fontSize",defaultCaption:"大小",width:"70px",mode:n.Mode.WYSIWYG_MODE},o),i.Select)}}),module.exports=e;});