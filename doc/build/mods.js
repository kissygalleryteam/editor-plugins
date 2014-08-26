KISSY.config("modules",{"editor-plugins/lib/back-color":{requires:["./color/btn","./back-color/cmd"]},"editor-plugins/lib/bold":{requires:["./font/ui","./bold/cmd","node","./button"]},"editor-plugins/lib/bubble":{requires:["util","ua","overlay","editor"]},"editor-plugins/lib/button":{requires:["util","editor","button"]},"editor-plugins/lib/checkbox-source-area":{requires:["editor","util","node"]},"editor-plugins/lib/code":{requires:["editor","./button","./dialog-loader"]},"editor-plugins/lib/contextmenu":{requires:["editor","menu","./focus-fix","event/dom","node"]},"editor-plugins/lib/dent-cmd":{requires:["editor","./list-utils","dom","node","ua"]},"editor-plugins/lib/dialog-loader":{requires:["editor","overlay","dom","ua"]},"editor-plugins/lib/dialog":{requires:["editor","overlay","./focus-fix","dd/plugin/constrain","component/plugin/drag","dom"]},"editor-plugins/lib/draft":{requires:["editor","json","event/dom","./local-storage","overlay","./menubutton","util","node"]},"editor-plugins/lib/drag-upload":{requires:["util","editor","event/dom","node","dom"]},"editor-plugins/lib/element-path":{requires:["editor","node"]},"editor-plugins/lib/fake-objects":{requires:["editor","html-parser","util","node","dom"]},"editor-plugins/lib/flash-bridge":{requires:["logger-manager","util","editor","swf","event/custom"]},"editor-plugins/lib/flash":{requires:["editor","./flash-common/base-class","./flash-common/utils","./fake-objects","./button"]},"editor-plugins/lib/focus-fix":{requires:["editor","ua"]},"editor-plugins/lib/font-family":{requires:["util","editor","./font/ui","./font-family/cmd","./menubutton"]},"editor-plugins/lib/font-size":{requires:["editor","./font/ui","./font-size/cmd","./menubutton","util"]},"editor-plugins/lib/fore-color":{requires:["./color/btn","./fore-color/cmd"]},"editor-plugins/lib/heading":{requires:["./menubutton","editor","./heading/cmd"]},"editor-plugins/lib/image":{requires:["./button","editor","./bubble","./contextmenu","./dialog-loader","util","ua","node"]},"editor-plugins/lib/indent":{requires:["editor","./indent/cmd","./button"]},"editor-plugins/lib/italic":{requires:["./font/ui","./italic/cmd","./button","node"]},"editor-plugins/lib/justify-center":{requires:["editor","./justify-center/cmd","./button","node"]},"editor-plugins/lib/justify-cmd":{requires:["editor"]},"editor-plugins/lib/justify-left":{requires:["editor","./justify-left/cmd","./button","node"]},"editor-plugins/lib/justify-right":{requires:["editor","./justify-right/cmd","./button","node"]},"editor-plugins/lib/link":{requires:["./button","./bubble","util","editor","./link/utils","./dialog-loader","node"]},"editor-plugins/lib/list-utils":{requires:["node","dom","ua"]},"editor-plugins/lib/local-storage":{requires:["editor","overlay","./flash-bridge","util","ua"]},"editor-plugins/lib/maximize":{requires:["./maximize/cmd","./button"]},"editor-plugins/lib/menubutton":{requires:["editor","util","menubutton"]},"editor-plugins/lib/ordered-list":{requires:["./list-utils/btn","./ordered-list/cmd"]},"editor-plugins/lib/outdent":{requires:["editor","./button","./outdent/cmd"]},"editor-plugins/lib/overlay":{requires:["editor","overlay","./focus-fix"]},"editor-plugins/lib/page-break":{requires:["editor","./fake-objects","./button","node"]},"editor-plugins/lib/preview":{requires:["./button","util"]},"editor-plugins/lib/progressbar":{requires:["base","util","node"]},"editor-plugins/lib/remove-format":{requires:["editor","./button","./remove-format/cmd"]},"editor-plugins/lib/resize":{requires:["dd","node","util"]},"editor-plugins/lib/separator":{requires:["node"]},"editor-plugins/lib/smiley":{requires:["editor","./overlay","./button","node","util"]},"editor-plugins/lib/source-area":{requires:["editor","./button"]},"editor-plugins/lib/strike-through":{requires:["./font/ui","./strike-through/cmd","./button"]},"editor-plugins/lib/table":{requires:["editor","./dialog-loader","./contextmenu","./button","util","ua","dom","node"]},"editor-plugins/lib/underline":{requires:["./font/ui","./underline/cmd","./button","node"]},"editor-plugins/lib/undo":{requires:["editor","./undo/btn","./undo/cmd","./button"]},"editor-plugins/lib/unordered-list":{requires:["./list-utils/btn","./unordered-list/cmd"]},"editor-plugins/lib/video":{requires:["editor","./flash-common/utils","./flash-common/base-class","./fake-objects","./button"]},"editor-plugins/lib/word-filter":{requires:["html-parser","util","node","ua"]},"editor-plugins/lib/xiami-music":{requires:["editor","./flash-common/base-class","./flash-common/utils","./fake-objects","./button","util"]},"editor-plugins/lib/back-color/cmd":{requires:["../color/cmd"]},"editor-plugins/lib/bold/cmd":{requires:["editor","../font/cmd"]},"editor-plugins/lib/code/dialog":{requires:["util","editor","menubutton","dom","../dialog","node","ua"]},"editor-plugins/lib/color/btn":{requires:["editor","../button","../overlay","../dialog-loader","node","util"]},"editor-plugins/lib/color/cmd":{requires:["editor"]},"editor-plugins/lib/color/dialog":{requires:["editor","util","../dialog","dom","node"]},"editor-plugins/lib/flash/dialog":{requires:["util","editor","../flash-common/utils","../dialog","../menubutton"]},"editor-plugins/lib/flash-common/base-class":{requires:["./utils","base","editor","node","ua","util","../dialog-loader","../bubble","../contextmenu"]},"editor-plugins/lib/flash-common/utils":{requires:["swf","dom","node"]},"editor-plugins/lib/font/cmd":{requires:["editor"]},"editor-plugins/lib/font/ui":{requires:["editor","../button","../menubutton"]},"editor-plugins/lib/font-family/cmd":{requires:["../font/cmd"]},"editor-plugins/lib/font-size/cmd":{requires:["../font/cmd"]},"editor-plugins/lib/fore-color/cmd":{requires:["../color/cmd"]},"editor-plugins/lib/heading/cmd":{requires:["editor"]},"editor-plugins/lib/image/dialog":{requires:["util","editor","io","../dialog","tabs","../menubutton","./dialog-tpl","ua","node"]},"editor-plugins/lib/indent/cmd":{requires:["../dent-cmd"]},"editor-plugins/lib/italic/cmd":{requires:["editor","../font/cmd"]},"editor-plugins/lib/justify-center/cmd":{requires:["../justify-cmd"]},"editor-plugins/lib/justify-left/cmd":{requires:["../justify-cmd"]},"editor-plugins/lib/justify-right/cmd":{requires:["../justify-cmd"]},"editor-plugins/lib/link/dialog":{requires:["util","editor","../dialog","./utils"]},"editor-plugins/lib/link/utils":{requires:["editor","node"]},"editor-plugins/lib/list-utils/btn":{requires:["editor","../button","../menubutton"]},"editor-plugins/lib/list-utils/cmd":{requires:["editor","../list-utils","ua","node","dom"]},"editor-plugins/lib/maximize/cmd":{requires:["editor","event/dom","util","ua","node","dom"]},"editor-plugins/lib/ordered-list/cmd":{requires:["editor","../list-utils/cmd"]},"editor-plugins/lib/outdent/cmd":{requires:["editor","../dent-cmd"]},"editor-plugins/lib/remove-format/cmd":{requires:["editor","dom"]},"editor-plugins/lib/strike-through/cmd":{requires:["editor","../font/cmd"]},"editor-plugins/lib/table/dialog":{requires:["util","editor","../dialog","../menubutton","ua","node","dom"]},"editor-plugins/lib/underline/cmd":{requires:["editor","../font/cmd"]},"editor-plugins/lib/undo/btn":{requires:["../button","editor"]},"editor-plugins/lib/undo/cmd":{requires:["editor","ua","util"]},"editor-plugins/lib/unordered-list/cmd":{requires:["editor","../list-utils/cmd"]},"editor-plugins/lib/video/dialog":{requires:["util","editor","io","../flash/dialog","../menubutton"]},"editor-plugins/lib/xiami-music/dialog":{requires:["util","editor","../flash/dialog","../menubutton","dom","node"]}});