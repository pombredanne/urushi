define("Toast",["jquery","Urushi","materialConfig","Base","Deferred","text!toastTemplate"],function(t,o,n,e,i,s){"use strict";var d={ID_PREFIX:"urushi.toast",EMBEDDED:{additionalClass:"",content:""},CLASS_NAME_TOAST_OPENED:"toast-opened"},r=0;return e.extend({template:void 0,embedded:void 0,isShown:void 0,_initProperties:function(t){this.template=s,this.embedded=d.EMBEDDED,this.isShown=!1},initOption:function(t){this.setContent(t.content)},setContent:function(t){if(!o.setDomContents(this.contentNode,t))throw new Error("Bad argument : content is required.")},show:function(){var e,s;return this.isShown?null:(this.isShown=!0,s=new i,o.hasTransitionSupport()?(o.addEvent(this.rootNode,"transitionend",this,"_onEndShow",s),this.rootNode.classList.add(d.CLASS_NAME_TOAST_OPENED)):(e={position:"relative","-ms-transform":"translateY(100%)",height:"auto",padding:"14px 15px","margin-bottom":"20px",opacity:0},t(this.rootNode).css(e),t(this.rootNode).animate({bottom:n.TOAST_STYLE_BOTTOM,opacity:n.DEFAULT_VALUE_OPACITY_MAX},n.DEFAULT_VALUE_DURATION,function(){s.resolve()})),s)},hide:function(){var e;return this.isShown?(this.isShown=!1,e=new i,o.hasTransitionSupport()?(o.addEvent(this.rootNode,"transitionend",this,"_onEndHide",e),this.rootNode.classList.remove(d.CLASS_NAME_TOAST_OPENED)):t(this.rootNode).animate({bottom:0,opacity:n.DEFAULT_VALUE_OPACITY_MIN},n.DEFAULT_VALUE_DURATION,function(){this.rootNode.classList.add("hidden"),e.resolve()}.bind(this)),e):null},_onEndShow:function(t){t.resolve(),o.removeEvent(this.rootNode,"transitionend",this,"_onEndShow")},_onEndHide:function(t){this.rootNode.classList.add("hidden"),t.resolve(),o.removeEvent(this.rootNode,"transitionend",this,"_onEndHide")},_attachNode:function(){this.contentNode=this.rootNode.childNodes[0]},_getId:function(){return d.ID_PREFIX+r++}})});