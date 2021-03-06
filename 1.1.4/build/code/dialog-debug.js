define('kg/editor-plugins/1.1.4/code/dialog',["util","editor","menubutton","dom","../dialog","node","ua"],function(require, exports, module) {
/**
 * @ignore
 * insert program code dialog
 * @author yiminghe@gmail.com
 */

var util = require('util');
var Editor = require('editor');
var MenuButton = require('menubutton');
var xhtmlDtd = Editor.XHTML_DTD;
var NodeType = require('dom').NodeType;
var notWhitespaceEval = Editor.Walker.whitespaces(true);
var Dialog4E = require('../dialog');
var $ = require('node');
var UA = require('ua');
var codeTypes = [
        ['ActionScript3', 'as3'],
        ['Bash/Shell', 'bash'],
        ['C/C++', 'cpp'],
        ['Css', 'css'],
        ['CodeFunction', 'cf'],
        ['C#', 'c#'],
        ['Delphi', 'delphi'],
        ['Diff', 'diff'],
        ['Erlang', 'erlang'],
        ['Groovy', 'groovy'],
        ['HTML', 'html'],
        ['Java', 'java'],
        ['JavaFx', 'jfx'],
        ['Javascript', 'js'],
        ['Perl', 'pl'],
        ['Php', 'php'],
        ['Plain Text', 'plain'],
        ['PowerShell', 'ps'],
        ['Python', 'python'],
        ['Ruby', 'ruby'],
        ['Scala', 'scala'],
        ['Sql', 'sql'],
        ['Vb', 'vb'],
        ['Xml', 'xml']
    ],
    bodyTpl = '<div class="{prefixCls}code-wrap">' +
        '<table class="{prefixCls}code-table">' +
        '<tr>' +
        '<td class="{prefixCls}code-label">' +
        '<label for="ks-editor-code-type">' +
        '类型：' +
        '</label>' +
        '</td>' +
        '<td class="{prefixCls}code-content">' +
        '<select ' +
        'id="ks-editor-code-type" ' +
        ' class="{prefixCls}code-type">' +
        util.map(codeTypes, function (codeType) {
            return '<option value="' + codeType[1] + '">' + codeType[0] + '</option>';
        }) +
        '</select>' +
        '</td>' +
        '</tr>' +
        '<tr>' +
        '<td>' +
        '<label for="ks-editor-code-textarea">' +
        '代码：' +
        '</label>' +
        '</td>' +
        '<td>' +
        '<textarea ' +
        'id="ks-editor-code-textarea" ' +
        ' class="{prefixCls}code-textarea {prefixCls}input">' +
        '</textarea>' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '</div>',
    footTpl = '<div class="{prefixCls}code-table-action">' +
        '<a href="javascript:void(\'插入\')"' +
        ' class="{prefixCls}code-insert {prefixCls}button">插入</a>' +
        '<a href="javascript:void(\'取消\')"' +
        ' class="{prefixCls}code-cancel {prefixCls}button">取消</a>' +
        '</td>' +
        '</div>',
    codeTpl = '<pre class="prettyprint ks-editor-code brush:{type};toolbar:false;">' +
        '{code}' +
        '</pre>';

function CodeDialog(editor) {
    this.editor = editor;
}

util.augment(CodeDialog, {
    initDialog: function () {
        var self = this,
            prefixCls = self.editor.get('prefixCls') + 'editor-',
            el,
            d;
        d = self.dialog = new Dialog4E({
            width: 500,
            mask: true,
            headerContent: '插入代码',
            bodyContent: util.substitute(bodyTpl, {
                prefixCls: prefixCls
            }),
            footerContent: util.substitute(footTpl, {
                prefixCls: prefixCls
            })
        }).render();
        el = d.get('el');

        self.insert = el.one('.' + prefixCls + 'code-insert');
        self.cancel = el.one('.' + prefixCls + 'code-cancel');
        self.type = MenuButton.Select.decorate(el.one('.' + prefixCls + 'code-type'),
            {
                prefixCls: prefixCls + 'big-',
                width: 150,
                menuCfg: {
                    prefixCls: prefixCls,
                    height: 320,
                    render: d.get('contentEl')
                }
            });
        self.code = el.one('.' + prefixCls + 'code-textarea');
        self.insert.on('click', self._insert, self);
        self.cancel.on('click', self.hide, self);
    },
    hide: function () {
        this.dialog.hide();
    },
    _insert: function () {
        var self = this,
            val,
            editor = self.editor,
            code = self.code;
        if (!util.trim(val = code.val())) {
            /*global alert*/
            alert('请输入代码!');
            return;
        }
        var codeEl = $(util.substitute(codeTpl, {
            type: self.type.get('value'),
            code: util.escapeHtml(val)
        }), editor.get('document')[0]);
        self.dialog.hide();
        // chrome:
        // insert 完光标定位在了 pre 文字的末尾，不合适
        // <pre>xxx ^$</pre>
        // 应该是
        // <pre>xxxx</pre>
        // <p>^$</p>
        editor.insertElement(codeEl);
        var range = editor.getSelection().getRanges()[0];

        var next = codeEl.next(notWhitespaceEval, 1);
        var nextName = next && next[0].nodeType === NodeType.ELEMENT_NODE && next.nodeName();
        // Check if it's a block element that accepts text.
        if (!(nextName &&
            xhtmlDtd.$block[ nextName ] &&
            xhtmlDtd[ nextName ]['#text'])) {
            next = $('<p></p>', editor.get('document')[0]);
            if (!UA.ie) {
                next._4eAppendBogus();
            }
            codeEl.after(next);
        }
        range.moveToElementEditablePosition(next);
        editor.getSelection().selectRanges([range]);
    },
    show: function () {
        if (!this.dialog) {
            this.initDialog();
        }
        this.dialog.show();
    }
});

module.exports = CodeDialog;
});