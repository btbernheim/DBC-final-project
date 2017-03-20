CKEDITOR.dialog.add("cellProperties",function(t){function e(t){return function(e){for(var i=t(e[0]),l=1;l<e.length;l++)if(t(e[l])!==i){i=null;break}void 0!==i&&(this.setValue(i),CKEDITOR.env.gecko&&"select"==this.type&&!i&&(this.getInputElement().$.selectedIndex=-1))}}function i(t){if(t=a.exec(t.getStyle("width")||t.getAttribute("width")))return t[2]}var l=t.lang.table,o=l.cell,n=t.lang.common,r=CKEDITOR.dialog.validate,a=/^(\d+(?:\.\d+)?)(px|%)$/,s={type:"html",html:"&nbsp;"},u="rtl"==t.lang.dir,g=t.plugins.colordialog;return{title:o.title,minWidth:CKEDITOR.env.ie&&CKEDITOR.env.quirks?450:410,minHeight:CKEDITOR.env.ie&&(CKEDITOR.env.ie7Compat||CKEDITOR.env.quirks)?230:220,contents:[{id:"info",label:o.title,accessKey:"I",elements:[{type:"hbox",widths:["40%","5%","40%"],children:[{type:"vbox",padding:0,children:[{type:"hbox",widths:["70%","30%"],children:[{type:"text",id:"width",width:"100px",label:n.width,validate:r.number(o.invalidWidth),onLoad:function(){var t=this.getDialog().getContentElement("info","widthType").getElement(),e=this.getInputElement(),i=e.getAttribute("aria-labelledby");e.setAttribute("aria-labelledby",[i,t.$.id].join(" "))},setup:e(function(t){var e=parseInt(t.getAttribute("width"),10),t=parseInt(t.getStyle("width"),10);return isNaN(t)?isNaN(e)?"":e:t}),commit:function(t){var e=parseInt(this.getValue(),10),l=this.getDialog().getValueOf("info","widthType")||i(t);isNaN(e)?t.removeStyle("width"):t.setStyle("width",e+l),t.removeAttribute("width")},"default":""},{type:"select",id:"widthType",label:t.lang.table.widthUnit,labelStyle:"visibility:hidden","default":"px",items:[[l.widthPx,"px"],[l.widthPc,"%"]],setup:e(i)}]},{type:"hbox",widths:["70%","30%"],children:[{type:"text",id:"height",label:n.height,width:"100px","default":"",validate:r.number(o.invalidHeight),onLoad:function(){var t=this.getDialog().getContentElement("info","htmlHeightType").getElement(),e=this.getInputElement(),i=e.getAttribute("aria-labelledby");e.setAttribute("aria-labelledby",[i,t.$.id].join(" "))},setup:e(function(t){var e=parseInt(t.getAttribute("height"),10),t=parseInt(t.getStyle("height"),10);return isNaN(t)?isNaN(e)?"":e:t}),commit:function(t){var e=parseInt(this.getValue(),10);isNaN(e)?t.removeStyle("height"):t.setStyle("height",CKEDITOR.tools.cssLength(e)),t.removeAttribute("height")}},{id:"htmlHeightType",type:"html",html:"<br />"+l.widthPx}]},s,{type:"select",id:"wordWrap",label:o.wordWrap,"default":"yes",items:[[o.yes,"yes"],[o.no,"no"]],setup:e(function(t){var e=t.getAttribute("noWrap");if("nowrap"==t.getStyle("white-space")||e)return"no"}),commit:function(t){"no"==this.getValue()?t.setStyle("white-space","nowrap"):t.removeStyle("white-space"),t.removeAttribute("noWrap")}},s,{type:"select",id:"hAlign",label:o.hAlign,"default":"",items:[[n.notSet,""],[n.alignLeft,"left"],[n.alignCenter,"center"],[n.alignRight,"right"],[n.alignJustify,"justify"]],setup:e(function(t){var e=t.getAttribute("align");return t.getStyle("text-align")||e||""}),commit:function(t){var e=this.getValue();e?t.setStyle("text-align",e):t.removeStyle("text-align"),t.removeAttribute("align")}},{type:"select",id:"vAlign",label:o.vAlign,"default":"",items:[[n.notSet,""],[n.alignTop,"top"],[n.alignMiddle,"middle"],[n.alignBottom,"bottom"],[o.alignBaseline,"baseline"]],setup:e(function(t){var e=t.getAttribute("vAlign"),t=t.getStyle("vertical-align");switch(t){case"top":case"middle":case"bottom":case"baseline":break;default:t=""}return t||e||""}),commit:function(t){var e=this.getValue();e?t.setStyle("vertical-align",e):t.removeStyle("vertical-align"),t.removeAttribute("vAlign")}}]},s,{type:"vbox",padding:0,children:[{type:"select",id:"cellType",label:o.cellType,"default":"td",items:[[o.data,"td"],[o.header,"th"]],setup:e(function(t){return t.getName()}),commit:function(t){t.renameNode(this.getValue())}},s,{type:"text",id:"rowSpan",label:o.rowSpan,"default":"",validate:r.integer(o.invalidRowSpan),setup:e(function(t){if((t=parseInt(t.getAttribute("rowSpan"),10))&&1!=t)return t}),commit:function(t){var e=parseInt(this.getValue(),10);e&&1!=e?t.setAttribute("rowSpan",this.getValue()):t.removeAttribute("rowSpan")}},{type:"text",id:"colSpan",label:o.colSpan,"default":"",validate:r.integer(o.invalidColSpan),setup:e(function(t){if((t=parseInt(t.getAttribute("colSpan"),10))&&1!=t)return t}),commit:function(t){var e=parseInt(this.getValue(),10);e&&1!=e?t.setAttribute("colSpan",this.getValue()):t.removeAttribute("colSpan")}},s,{type:"hbox",padding:0,widths:["60%","40%"],children:[{type:"text",id:"bgColor",label:o.bgColor,"default":"",setup:e(function(t){var e=t.getAttribute("bgColor");return t.getStyle("background-color")||e}),commit:function(t){this.getValue()?t.setStyle("background-color",this.getValue()):t.removeStyle("background-color"),t.removeAttribute("bgColor")}},g?{type:"button",id:"bgColorChoose","class":"colorChooser",label:o.chooseColor,onLoad:function(){this.getElement().getParent().setStyle("vertical-align","bottom")},onClick:function(){t.getColorFromDialog(function(t){t&&this.getDialog().getContentElement("info","bgColor").setValue(t),this.focus()},this)}}:s]},s,{type:"hbox",padding:0,widths:["60%","40%"],children:[{type:"text",id:"borderColor",label:o.borderColor,"default":"",setup:e(function(t){var e=t.getAttribute("borderColor");return t.getStyle("border-color")||e}),commit:function(t){this.getValue()?t.setStyle("border-color",this.getValue()):t.removeStyle("border-color"),t.removeAttribute("borderColor")}},g?{type:"button",id:"borderColorChoose","class":"colorChooser",label:o.chooseColor,style:(u?"margin-right":"margin-left")+": 10px",onLoad:function(){this.getElement().getParent().setStyle("vertical-align","bottom")},onClick:function(){t.getColorFromDialog(function(t){t&&this.getDialog().getContentElement("info","borderColor").setValue(t),this.focus()},this)}}:s]}]}]}]}],onShow:function(){this.cells=CKEDITOR.plugins.tabletools.getSelectedCells(this._.editor.getSelection()),this.setupContent(this.cells)},onOk:function(){for(var t=this._.editor.getSelection(),e=t.createBookmarks(),i=this.cells,l=0;l<i.length;l++)this.commitContent(i[l]);this._.editor.forceNextSelectionCheck(),t.selectBookmarks(e),this._.editor.selectionChange()},onLoad:function(){var t={};this.foreach(function(e){e.setup&&e.commit&&(e.setup=CKEDITOR.tools.override(e.setup,function(i){return function(){i.apply(this,arguments),t[e.id]=e.getValue()}}),e.commit=CKEDITOR.tools.override(e.commit,function(i){return function(){t[e.id]!==e.getValue()&&i.apply(this,arguments)}}))})}}});