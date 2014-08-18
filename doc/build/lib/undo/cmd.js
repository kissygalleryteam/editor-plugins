KISSY.add('editor-plugins/lib/undo/cmd',["editor","ua","util"],function(S ,require, exports, module) {function e(e){var t,o=e.get("document")[0].body.innerHTML,n=this;o&&(t=e.getSelection()),n.contents=o,n.bookmarks=t&&t.createBookmarks2(!0)}function t(e){var t=this;t.history=[],t.index=-1,t.editor=e,t.bufferRunner=r.buffer(t.save,500,t),t._init()}var o=require("editor"),n=require("ua"),i=30,r=require("util");e.prototype={equals:function(e){var t=this,o=t.contents,n=e.contents;return o===n}};var a={16:1,17:1,18:1},d={37:1,38:1,39:1,40:1,33:1,34:1},s=90,f=89;t.prototype={_keyMonitor:function(){var e=this,t=e.editor;t.docReady(function(){t.get("document").on("keydown",function(o){var n=o.keyCode;if(!(n in d||n in a))return n===s&&(o.ctrlKey||o.metaKey)?(!1!==t.fire("beforeRedo")&&e.restore(-1),void o.halt()):n===f&&(o.ctrlKey||o.metaKey)?(!1!==t.fire("beforeUndo")&&e.restore(1),void o.halt()):void(t.fire("beforeSave",{buffer:1})!==!1&&e.save(1))})})},_init:function(){var e=this,t=e.editor;e._keyMonitor(),setTimeout(function(){t.get("mode")===o.Mode.WYSIWYG_MODE&&(t.isDocReady()?e.save():t.on("docReady",function n(){e.save(),t.detach("docReady",n)}))},0)},save:function(t){var n=this.editor;if(n.get("mode")===o.Mode.WYSIWYG_MODE&&n.get("document")){if(t)return void this.bufferRunner();var r=this,a=r.history,d=a.length,s=r.index;d=Math.min(d,s+1);var f=a[d-1],c=new e(n);f&&f.equals(c)||(a.length=d,d===i&&(a.shift(),d--),a.push(c),r.index=s=d,n.fire("afterSave",{history:a,index:s}))}},restore:function(e){if(this.editor.get("mode")!==o.Mode.WYSIWYG_MODE)return void 0;var t=this,i=t.history,r=t.editor,a=r.get("document")[0].body,d=i[t.index+e];if(d){if(a.innerHTML=d.contents,d.bookmarks)r.getSelection().selectBookmarks(d.bookmarks);else if(n.ie){var s=a.createTextRange();s.collapse(!0),s.select()}var f=r.getSelection();f&&f.scrollIntoView(),t.index+=e,r.fire(0>e?"afterUndo":"afterRedo",{history:i,index:t.index}),r.notifySelectionChange()}return d}},module.exports={init:function(e){if(!e.hasCommand("save")){var o=new t(e);e.addCommand("save",{exec:function(t,n){e.focus(),o.save(n)}}),e.addCommand("undo",{exec:function(){e.focus(),o.restore(-1)}}),e.addCommand("redo",{exec:function(){e.focus(),o.restore(1)}})}}};});