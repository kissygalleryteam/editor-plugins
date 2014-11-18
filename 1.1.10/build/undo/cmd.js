define("kg/editor-plugins/1.1.10/undo/cmd",["editor","ua","util"],function(e,t,o){function n(e){var t,o=e.get("document")[0].body.innerHTML,n=this;o&&(t=e.getSelection()),n.contents=o,n.bookmarks=t&&t.createBookmarks2(!0)}function i(e){var t=this;t.history=[],t.index=-1,t.editor=e,t.bufferRunner=s.buffer(t.save,500,t),t._init()}var r=e("editor"),d=e("ua"),a=30,s=e("util");n.prototype={equals:function(e){var t=this,o=t.contents,n=e.contents;return o===n}};var f={16:1,17:1,18:1},c={37:1,38:1,39:1,40:1,33:1,34:1},u=90,v=89;i.prototype={_keyMonitor:function(){var e=this,t=e.editor;t.docReady(function(){t.get("document").on("keydown",function(o){var n=o.keyCode;if(!(n in c||n in f))return n===u&&(o.ctrlKey||o.metaKey)?(!1!==t.fire("beforeRedo")&&e.restore(-1),void o.halt()):n===v&&(o.ctrlKey||o.metaKey)?(!1!==t.fire("beforeUndo")&&e.restore(1),void o.halt()):void(t.fire("beforeSave",{buffer:1})!==!1&&e.save(1))})})},_init:function(){var e=this,t=e.editor;e._keyMonitor(),setTimeout(function(){t.get("mode")===r.Mode.WYSIWYG_MODE&&(t.isDocReady()?e.save():t.on("docReady",function o(){e.save(),t.detach("docReady",o)}))},0)},save:function(e){var t=this.editor;if(t.get("mode")===r.Mode.WYSIWYG_MODE&&t.get("document")){if(e)return void this.bufferRunner();var o=this,i=o.history,d=i.length,s=o.index;d=Math.min(d,s+1);var f=i[d-1],c=new n(t);f&&f.equals(c)||(i.length=d,d===a&&(i.shift(),d--),i.push(c),o.index=s=d,t.fire("afterSave",{history:i,index:s}))}},restore:function(e){if(this.editor.get("mode")!==r.Mode.WYSIWYG_MODE)return void 0;var t=this,o=t.history,n=t.editor,i=n.get("document")[0].body,a=o[t.index+e];if(a){if(i.innerHTML=a.contents,a.bookmarks)n.getSelection().selectBookmarks(a.bookmarks);else if(d.ie){var s=i.createTextRange();s.collapse(!0),s.select()}var f=n.getSelection();f&&f.scrollIntoView(),t.index+=e,n.fire(0>e?"afterUndo":"afterRedo",{history:o,index:t.index}),n.notifySelectionChange()}return a}},o.exports={init:function(e){if(!e.hasCommand("save")){var t=new i(e);e.addCommand("save",{exec:function(o,n){e.focus(),t.save(n)}}),e.addCommand("undo",{exec:function(){e.focus(),t.restore(-1)}}),e.addCommand("redo",{exec:function(){e.focus(),t.restore(1)}})}}}});