define("kg/editor-plugins/1.1.3/table/dialog",["util","editor","../dialog","../menubutton","ua","node","dom"],function(e,t,l){function i(e,t){return d.substitute(e,{prefixCls:t})}function a(e){return 0!==h(e).length}function r(e){var t=this;t.editor=e,o.Utils.lazyRun(t,"_prepareTableShow","_realTableShow")}var d=e("util"),o=e("editor"),s=e("../dialog"),n=e("../menubutton"),p=e("ua").ieMode<11,c=e("node"),b=e("dom"),h=d.trim,f="ke_show_border",v="k-e-collapse-table",g=6,u="margin:0 5px 0 0;",x='<div style="padding:20px 20px 10px 20px;"><table class="{prefixCls}editor-table-config" style="width:100%"><tr><td><label>行数： <input  data-verify="^(?!0$)\\d+$"  data-warning="行数请输入正整数"  value="2"  class="{prefixCls}editor-table-rows {prefixCls}editor-table-create-only {prefixCls}editor-input" style="'+u+'" size="'+g+'" /></label></td><td><label>宽&nbsp;&nbsp;&nbsp;度： </label> <input  data-verify="^(?!0$)\\d+$"  data-warning="宽度请输入正整数" value="200" style="'+u+'" class="{prefixCls}editor-table-width {prefixCls}editor-input" size="'+g+'"/><select class="{prefixCls}editor-table-width-unit" title="宽度单位"><option value="px">像素</option><option value="%">百分比</option></select></td></tr><tr><td><label>列数： <input  data-verify="^(?!0$)\\d+$"  data-warning="列数请输入正整数" class="{prefixCls}editor-table-cols {prefixCls}editor-table-create-only {prefixCls}editor-input" style="'+u+'"value="3" size="'+g+'"/></label></td><td><label>高&nbsp;&nbsp;&nbsp;度： </label><input  data-verify="^((?!0$)\\d+)?$"  data-warning="高度请输入正整数" value="" style="'+u+'"class="{prefixCls}editor-table-height {prefixCls}editor-input" size="'+g+'"/> &nbsp;像素</td></tr><tr><td><label>对齐： </label><select class="{prefixCls}editor-table-align" title="对齐"><option value="">无</option><option value="left">左对齐</option><option value="right">右对齐</option><option value="center">中间对齐</option></select></td><td><label>标题格：</label> <select class="{prefixCls}editor-table-head {prefixCls}editor-table-create-only" title="标题格"><option value="">无</option><option value="1">有</option></select></td></tr><tr><td><label>边框： <input  data-verify="^\\d+$"  data-warning="边框请输入非负整数" value="1" style="'+u+'"class="{prefixCls}editor-table-border {prefixCls}editor-input" size="'+g+'"/></label> &nbsp;像素 <label><input type="checkbox" style="vertical-align: middle; margin-left: 5px;" class="{prefixCls}editor-table-collapse" /> 合并边框</label></td><td><label class="{prefixCls}editor-table-cellpadding-holder">边&nbsp;&nbsp;&nbsp;距： <input  data-verify="^(\\d+)?$"  data-warning="边框请输入非负整数" value="0" style="'+u+'"class="{prefixCls}editor-table-cellpadding {prefixCls}editor-input" size="'+g+'"/> &nbsp;像素</label></td></tr><tr><td colspan="2"><label>标题： <input class="{prefixCls}editor-table-caption {prefixCls}editor-input" style="width:380px;'+u+'"></label></td></tr></table></div>',C='<div style="padding:5px 20px 20px;"><a class="{prefixCls}editor-table-ok {prefixCls}editor-button ks-inline-block" style="margin-right:20px;">确定</a> <a class="{prefixCls}editor-table-cancel {prefixCls}editor-button ks-inline-block">取消</a></div>',w=o.Utils.addRes,y=o.Utils.destroyRes;d.augment(r,{_tableInit:function(){var e=this,t=e.editor.get("prefixCls"),l=new s({width:"500px",mask:!0,headerContent:"表格",bodyContent:i(x,t),footerContent:i(C,t)}).render(),a=l.get("body"),r=l.get("footer");l.twidth=a.one(i(".{prefixCls}editor-table-width",t)),l.theight=a.one(i(".{prefixCls}editor-table-height",t)),l.tborder=a.one(i(".{prefixCls}editor-table-border",t)),l.tcaption=a.one(i(".{prefixCls}editor-table-caption",t)),l.talign=n.Select.decorate(a.one(i(".{prefixCls}editor-table-align",t)),{prefixCls:i("{prefixCls}editor-big-",t),width:80,menuCfg:{prefixCls:i("{prefixCls}editor-",t),render:a}}),l.trows=a.one(i(".{prefixCls}editor-table-rows",t)),l.tcols=a.one(i(".{prefixCls}editor-table-cols",t)),l.thead=n.Select.decorate(a.one(i(".{prefixCls}editor-table-head",t)),{prefixCls:i("{prefixCls}editor-big-",t),width:80,menuCfg:{prefixCls:i("{prefixCls}editor-",t),render:a}}),l.cellpaddingHolder=a.one(i(".{prefixCls}editor-table-cellpadding-holder",t)),l.cellpadding=a.one(i(".{prefixCls}editor-table-cellpadding",t)),l.tcollapse=a.one(i(".{prefixCls}editor-table-collapse",t));var d=r.one(i(".{prefixCls}editor-table-ok",t)),o=r.one(i(".{prefixCls}editor-table-cancel",t));l.twidthunit=n.Select.decorate(a.one(i(".{prefixCls}editor-table-width-unit",t)),{prefixCls:i("{prefixCls}editor-big-",t),width:80,menuCfg:{prefixCls:i("{prefixCls}editor-",t),render:a}}),e.dialog=l,d.on("click",e._tableOk,e),o.on("click",function(e){e.halt(),l.hide()}),w.call(e,l,l.twidthunit,d,o)},_tableOk:function(e){e.halt();var t=this,l=t.dialog,i=l.get("el").all("input");if("%"===l.twidthunit.get("value")){var a=parseInt(l.twidth.val(),10);if(!a||a>100||0>a)return void alert("宽度百分比：请输入1-100之间")}var r=o.Utils.verifyInputs(i);r&&(t.dialog.hide(),setTimeout(function(){t.selectedTable?t._modifyTable():t._genTable()},0))},_modifyTable:function(){var e=this,t=e.dialog,l=e.selectedTable,i=l.one("caption"),r=t.talign.get("value"),o=t.tborder.val();if(a(r)?l.attr("align",h(r)):l.removeAttr("align"),a(o)?l.attr("border",h(o)):l.removeAttr("border"),a(o)&&"0"!==o?l.removeClass(f,void 0):l.addClass(f,void 0),a(t.twidth.val())?l.css("width",h(t.twidth.val())+t.twidthunit.get("value")):l.css("width",""),a(t.theight.val())?l.css("height",h(t.theight.val())):l.css("height",""),t.tcollapse[0].checked?l.addClass(v,void 0):l.removeClass(v,void 0),t.cellpadding.val(parseInt(t.cellpadding.val(),10)||0),e.selectedTd&&e.selectedTd.css("padding",t.cellpadding.val()),a(t.tcaption.val())){var s=d.escapeHtml(h(t.tcaption.val()));if(i&&i[0])i.html(s);else{var n=l[0].createCaption();b.html(n,"<span>"+s+"</span>")}}else i&&i.remove()},_genTable:function(){var e,t=this,l=t.dialog,i="<table ",r=parseInt(l.tcols.val(),10)||1,o=parseInt(l.trows.val(),10)||1,s=p?"":"<br/>",n=t.editor;a(l.talign.get("value"))&&(i+='align="'+h(l.talign.get("value"))+'" '),a(l.tborder.val())&&(i+='border="'+h(l.tborder.val())+'" ');var b=[];a(l.twidth.val())&&b.push("width:"+h(l.twidth.val())+l.twidthunit.get("value")+";"),a(l.theight.val())&&b.push("height:"+h(l.theight.val())+"px;"),b.length&&(i+='style="'+b.join("")+'" ');var g=[];if(a(l.tborder.val())&&"0"!==String(h(l.tborder.val()))||g.push(f),l.tcollapse[0].checked&&g.push(v),g.length&&(i+='class="'+g.join(" ")+'" '),i+=">",a(l.tcaption.val())&&(i+="<caption><span>"+d.escapeHtml(h(l.tcaption.val()))+"</span></caption>"),l.thead.get("value")){for(i+="<thead>",i+="<tr>",e=0;r>e;e++)i+="<th>"+s+"</th>";i+="</tr>",i+="</thead>",o-=1}i+="<tbody>";for(var u=0;o>u;u++){for(i+="<tr>",e=0;r>e;e++)i+="<td>"+s+"</td>";i+="</tr>"}i+="</tbody>",i+="</table>";var x=c(i,n.get("document")[0]);n.insertElement(x)},_fillTableDialog:function(){var e=this,t=e.dialog,l=e.selectedTable,i=l.one("caption");e.selectedTd&&t.cellpadding.val(parseInt(e.selectedTd.css("padding"),10)||"0"),t.talign.set("value",l.attr("align")||""),t.tborder.val(l.attr("border")||"0");var a=l.style("width")||""+l.width();t.tcollapse[0].checked=l.hasClass(v,void 0),t.twidth.val(a.replace(/px|%|(.*pt)/i,"")),-1!==a.indexOf("%")?t.twidthunit.set("value","%"):t.twidthunit.set("value","px"),t.theight.val((l.style("height")||"").replace(/px|%/i,""));var r="";i&&(r=i.text()),t.tcaption.val(r);var d=l.first("thead"),o=(l.one("tbody")?l.one("tbody").children().length:0)+(d?d.children("tr").length:0);t.trows.val(o),t.tcols.val(l.one("tr")?l.one("tr").children().length:0),t.thead.set("value",d?"1":"")},_realTableShow:function(){var e=this,t=e.editor.get("prefixCls"),l=e.dialog;e.selectedTable?(e._fillTableDialog(),l.get("el").all(i(".{prefixCls}editor-table-create-only",t)).attr("disabled","disabled"),l.thead.set("disabled",!0)):(l.get("el").all(i(".{prefixCls}editor-table-create-only",t)).removeAttr("disabled"),l.thead.set("disabled",!1)),e.selectedTd?l.cellpaddingHolder.show():l.cellpaddingHolder.hide(),e.dialog.show()},_prepareTableShow:function(){var e=this;e._tableInit()},show:function(e){var t=this;d.mix(t,e),t._prepareTableShow()},destroy:function(){y.call(this)}}),l.exports=r});