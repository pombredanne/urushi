define("Input",["Urushi","materialConfig","addInputEventListener","removeInputEventListener","Base","text!inputTemplate","text!inputTransitionUnitTemplate"],function(t,i,e,n,o,s,a){"use strict";var l={ID_PREFIX:"urushi.input",EMBEDDED:{inputClass:"",additionalClass:""},DATA_URUSHI_FOCUS:"data-urushi-focus",INPUTNODE_FLOATING_LABEL:".floating-label"},d=0;return o.extend({template:void 0,embedded:void 0,callbacks:void 0,timeoutId:void 0,underlineFixShown:!1,initFloatinglabelCss:null,_initProperties:function(t){this.template=s,this.embedded=l.EMBEDDED,this.callbacks={},this.timeoutId=NaN,this.underlineFixShown=!1,this.initFloatinglabelCss=null},_render:function(i){this._super(i),this._createPraceholder(i.placeholder),this._createHint(i.hint),t.hasTransitionSupport()||($(this.rootNode).find(".material-input").replaceWith(a),t.hasTransitionSupport()||$(this.rootNode).find(".input-transition-unit-underline").css({"margin-left":"50%"}))},initOption:function(i){this.callbacks=e(this.inputNode,this._onInput.bind(this)),t.addEvent(this.inputNode,"focus",this,"_onFocus"),t.addEvent(this.inputNode,"blur",this,"_onBlur")},_getInputNode:function(){return this.rootNode.getElementsByTagName("input")[0]},_createPraceholder:function(i){i&&(this.floatinglabelNode=document.createElement("div"),this.floatinglabelNode.id=this.id+"-floating-lebel",this.floatinglabelNode.className="floating-label",this.floatinglabelNode.textContent=i,this._getInputNode().parentElement.appendChild(this.floatinglabelNode),t.hasTransitionSupport()||(t.addEvent(this.floatinglabelNode,"click",this,"_onClickFloatingLabel"),this.initFloatinglabelCss={top:5,"font-size":"14px"}))},_createHint:function(t){var i;t&&(i=document.createElement("div"),i.className="hint",i.textContent=t,this._getInputNode().parentElement.appendChild(i))},setValue:function(t){"string"==typeof t&&(this.inputNode.value=t,this._onInput())},getValue:function(){return this.inputNode.value},clear:function(){this.setValue("")},_attachNode:function(){this.inputNode=this.rootNode.getElementsByTagName("input")[0],t.hasTransitionSupport()||(this.underlineNode=this.rootNode.getElementsByClassName("input-transition-unit-underline")[0],this.floatinglabelNode=this.rootNode.getElementsByClassName("floating-label")[0])},_getId:function(){return l.ID_PREFIX+d++},_onInput:function(i){t.hasTransitionSupport()||this.inputNode===document.activeElement||(this.inputNode.classList.contains("empty")&&this.inputNode.value?this._moveOutPlaceholder():this.inputNode.classList.contains("empty")||this.inputNode.value||this._moveInPlaceholder()),this.inputNode.value?this.inputNode.classList.remove("empty"):this.inputNode.classList.add("empty")},_onClickFloatingLabel:function(i){t.hasTransitionSupport()||isNaN(this.timeoutId)&&this.inputNode.classList.contains("empty")&&this.inputNode.focus()},_onFocus:function(i){i.stopPropagation(),t.hasTransitionSupport()||(this._showUnderline(),this._showPlaceholder(),this._showHint())},_onBlur:function(i){i.stopPropagation(),t.hasTransitionSupport()||(this.underlineFixShown||this._hideUnderline(),this._hidePlaceholder(),this._hideHint())},_showUnderline:function(){$(this.underlineNode).stop(),$(this.underlineNode).animate({"margin-left":0,width:"100%"},i.DEFAULT_VALUE_DURATION)},_hideUnderline:function(){$(this.underlineNode).stop(),$(this.underlineNode).animate({"margin-left":"50%",width:0},i.DEFAULT_VALUE_DURATION)},_showPlaceholder:function(){var t=$(this.rootNode).find(l.INPUTNODE_FLOATING_LABEL);this.inputNode.setAttribute(l.DATA_URUSHI_FOCUS,!0),t.length&&$(this.inputNode).hasClass("empty")&&(this.timeoutId?(clearTimeout(this.timeoutId),this.timeoutId=NaN):(t.is(":animated")||t.css(this.initFloatinglabelCss),this._moveOutPlaceholder()))},_hidePlaceholder:function(){var t=$(this.rootNode).find(l.INPUTNODE_FLOATING_LABEL);t.length?this.timeoutId=setTimeout(function(){this.inputNode.removeAttribute(l.DATA_URUSHI_FOCUS),this.timeoutId=NaN,$(this.inputNode).hasClass("empty")&&this._moveInPlaceholder()}.bind(this),150):this.inputNode.removeAttribute(l.DATA_URUSHI_FOCUS)},_moveInPlaceholder:function(){var t=$(this.rootNode).find(l.INPUTNODE_FLOATING_LABEL);t.stop(),t.animate(this.initFloatinglabelCss,i.DEFAULT_VALUE_DURATION)},_moveOutPlaceholder:function(){var t=$(this.rootNode).find(l.INPUTNODE_FLOATING_LABEL);t.stop(),t.animate({top:-16,"font-size":"10px"},i.DEFAULT_VALUE_DURATION)},_showHint:function(){$(this.rootNode).find(".hint").animate({opacity:1},i.DEFAULT_VALUE_DURATION)},_hideHint:function(){$(this.rootNode).find(".hint").animate({opacity:0},i.DEFAULT_VALUE_DURATION)},setDisabled:function(t){return this._super(t)?(t?(this.inputNode.setAttribute("tabIndex","-1"),this.inputNode.setAttribute("disabled",!0)):(this.inputNode.removeAttribute("tabIndex"),this.inputNode.removeAttribute("disabled")),!0):!1},destroy:function(){t.removeEvent(this.inputNode,"focus",this,"_onFocus"),t.removeEvent(this.inputNode,"blur",this,"_onBlur"),n(this.inputNode,this.callbacks),this._super()}})});