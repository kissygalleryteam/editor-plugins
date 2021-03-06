KISSY.add('kg/editor-plugins/1.1.0/checkbox-source-area',["editor","util","node"],function(S ,require, exports, module) {
/**
 * @ignore
 * checkbox source editor for kissy editor
 * @author yiminghe@gmail.com
 */

// 'editor', '../font/cmd'
var Editor = require('editor');
var util = require('util');
var $ = require('node');

var SOURCE_MODE = Editor.Mode.SOURCE_MODE ,
    WYSIWYG_MODE = Editor.Mode.WYSIWYG_MODE;

function CheckboxSourceArea(editor) {
    var self = this;
    self.editor = editor;
    self._init();
}

util.augment(CheckboxSourceArea, {
    _init: function () {
        var self = this,
            editor = self.editor,
            statusBarEl = editor.get('statusBarEl');
        self.holder = $('<span ' +
            'style="zoom:1;display:inline-block;height:22px;line-height:22px;">' +
            '<label style="vertical-align:middle;">' +
            '<input style="margin:0 5px;" type="checkbox" />' +
            '编辑源代码</label>' + '</span>');
        self.holder.appendTo(statusBarEl);
        var el = self.el = self.holder.one('input');
        el.on('click', self._check, self);
        editor.on('wysiwygMode', self._wysiwygmode, self);
        editor.on('sourceMode', self._sourcemode, self);
    },
    _sourcemode: function () {
        this.el.attr('checked', true);
    },
    _wysiwygmode: function () {
        this.el.attr('checked', false);
    },
    _check: function () {
        var self = this,
            editor = self.editor,
            el = self.el;
        if (el.attr('checked')) {
            editor.set('mode', SOURCE_MODE);
        } else {
            editor.set('mode', WYSIWYG_MODE);
        }
    },
    destroy: function () {
        this.holder.remove();
    }
});

function CheckboxSourceAreaPlugin() {

}

util.augment(CheckboxSourceAreaPlugin, {
    pluginRenderUI: function (editor) {
        var c = new CheckboxSourceArea(editor);
        editor.on('destroy', function () {
            c.destroy();
        });
    }
});

module.exports = CheckboxSourceAreaPlugin;

});