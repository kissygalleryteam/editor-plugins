/*
Copyright 2014, KISSY v5.0.0
MIT Licensed
build time: Jul 18 13:59
*/
/*
combined modules:
editor-plugins/lib/ordered-list/cmd
*/
KISSY.add('editor-plugins/lib/ordered-list/cmd', [
    'editor',
    '../list-utils/cmd'
], function (S, require, exports, module) {
    /**
 * @ignore
 * orderedList command
 * @author yiminghe@gmail.com
 */
    var Editor = require('editor');
    var listCmd = require('../list-utils/cmd');
    var insertOrderedList = 'insertOrderedList', ListCommand = listCmd.ListCommand, queryActive = listCmd.queryActive, olCmd = new ListCommand('ol');
    module.exports = {
        init: function (editor) {
            if (!editor.hasCommand(insertOrderedList)) {
                editor.addCommand(insertOrderedList, {
                    exec: function (editor, listStyleType) {
                        editor.focus();
                        olCmd.exec(editor, listStyleType);
                    }
                });
            }
            var queryOl = Editor.Utils.getQueryCmd(insertOrderedList);
            if (!editor.hasCommand(queryOl)) {
                editor.addCommand(queryOl, {
                    exec: function (editor) {
                        var selection = editor.getSelection();
                        if (selection && !selection.isInvalid) {
                            var startElement = selection.getStartElement();
                            var elementPath = new Editor.ElementPath(startElement);
                            return queryActive('ol', elementPath);
                        }
                    }
                });
            }
        }
    };
});

