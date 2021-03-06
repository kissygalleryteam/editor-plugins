define('kg/editor-plugins/1.1.6/xiami-music',["editor","./flash-common/base-class","./flash-common/utils","./fake-objects","./button","util"],function(require, exports, module) {
/**
 * @ignore
 * xiami-music button
 * @author yiminghe@gmail.com
 */

var Editor = require('editor');
var FlashBaseClass = require('./flash-common/base-class');
var flashUtils = require('./flash-common/utils');
var fakeObjects = require('./fake-objects');
require('./button');
var util = require('util');
var CLS_XIAMI = 'ke_xiami',
    TYPE_XIAMI = 'xiami-music';

function XiamiMusic() {
    XiamiMusic.superclass.constructor.apply(this, arguments);
}

util.extend(XiamiMusic, FlashBaseClass, {
    _updateTip: function (tipUrlEl, selectedFlash) {
        var self = this,
            editor = self.get('editor'),
            r = editor.restoreRealElement(selectedFlash);
        if (r) {
            tipUrlEl.html(selectedFlash.attr('title'));
            tipUrlEl.attr('href', self._getFlashUrl(r));
        }
    }
});

function XiamiMusicPlugin(config) {
    this.config = config || {};
}

XiamiMusicPlugin.prototype = {
    pluginRenderUI: function (editor) {
        fakeObjects.init(editor);

        var dataProcessor = editor.htmlDataProcessor,
            dataFilter = dataProcessor && dataProcessor.dataFilter;

        function checkXiami(url) {
            return (/xiami\.com/i).test(url);
        }

        if (dataFilter) {
            dataFilter.addRules({
                tags: {
                    'object': function (element) {
                        var //增加音乐名字提示
                            title = element.getAttribute('title'),
                            i,
                            c,
                            classId = element.getAttribute('classid');
                        var childNodes = element.childNodes;
                        if (!classId) {
                            // Look for the inner <embed>
                            for (i = 0; i < childNodes.length; i++) {
                                c = childNodes[ i ];
                                if (c.nodeName === 'embed') {
                                    if (!flashUtils.isFlashEmbed(c)) {
                                        return null;
                                    }
                                    if (checkXiami(c.attributes.src)) {
                                        return dataProcessor.createFakeParserElement(element, CLS_XIAMI, TYPE_XIAMI, true, {
                                            title: title
                                        });
                                    }
                                }
                            }
                            return null;
                        }
                        for (i = 0; i < childNodes.length; i++) {
                            c = childNodes[ i ];
                            //innerHTML 会莫名首字母大写，还会加入一些属性
                            //Movie
                            if (c.nodeName === 'param' &&
                                // ie 自动属性名大写
                                c.getAttribute('name').toLowerCase() === 'movie') {

                                if (checkXiami(c.getAttribute('value') ||
                                    c.getAttribute('VALUE'))) {
                                    return dataProcessor.createFakeParserElement(element,
                                        CLS_XIAMI, TYPE_XIAMI, true, {
                                            title: title
                                        });
                                }
                            }
                        }
                    },

                    'embed': function (element) {
                        if (flashUtils.isFlashEmbed(element) &&
                            checkXiami(element.getAttribute('src'))) {
                            return dataProcessor.createFakeParserElement(element,
                                CLS_XIAMI, TYPE_XIAMI, true, {
                                    title: element.getAttribute('title')
                                });
                        }
                    }
                    //4 比 flash 的优先级 5 高！
                }
            }, 4);
        }

        var xiamiMusic = new XiamiMusic({
            editor: editor,
            cls: CLS_XIAMI,
            type: TYPE_XIAMI,
            bubbleId: 'xiami',
            pluginConfig: this.config,
            contextMenuId: 'xiami',
            contextMenuHandlers: {
                '虾米属性': function () {
                    var selectedEl = this.get('editorSelectedEl');
                    if (selectedEl) {
                        xiamiMusic.show(selectedEl);
                    }
                }
            }
        });

        editor.addButton('xiamiMusic', {
            tooltip: '插入虾米音乐',
            listeners: {
                click: function () {
                    xiamiMusic.show();
                }
            },
            mode: Editor.Mode.WYSIWYG_MODE
        });

    }
};

module.exports = XiamiMusicPlugin;
});