define("Panel",["Urushi","Base","text!panelTemplate"],function(e,t,o){"use strict";var n={ID_PREFIX:"urushi.Panel",EMBEDDED:{panelClass:"",additionalClass:"",header:"",content:"",footer:""}},s=0;return t.extend({template:void 0,embedded:void 0,_initProperties:function(e){this.template=o,this.embedded=n.EMBEDDED},initOption:function(e){this.setContent(e.content),this.setHeader(e.header),this.setFooter(e.footer)},setHeader:function(t){e.setDomContents(this.headerNode,t)&&this.headerNode.textContent?this.headerNode.classList.remove("hidden"):this.headerNode.classList.add("hidden")},setContent:function(t){"function"==typeof t&&(t=t()),e.setDomContents(this.contentNode,t)||e.clearDomContents(this.contentNode)},setFooter:function(t){e.setDomContents(this.footerNode,t)&&this.footerNode.textContent?this.footerNode.classList.remove("hidden"):this.footerNode.classList.add("hidden")},_attachNode:function(){this.headerNode=this.rootNode.getElementsByClassName("panel-header")[0],this.contentNode=this.rootNode.getElementsByClassName("panel-body")[0],this.footerNode=this.rootNode.getElementsByClassName("panel-footer")[0]},_getId:function(){return n.ID_PREFIX+s++}})});