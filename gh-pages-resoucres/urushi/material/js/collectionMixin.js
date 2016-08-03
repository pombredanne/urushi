define("collectionMixin",["underscore","jquery","extend"],function(t,e,i){"use strict";return{owner:void 0,subItemList:[],_initPropertiesCollectionMixin:function(t){this.subItemList=[],this.owner=t?t.owner:void 0},getSubItem:function(t){var e=this._getSubItemIndex(t);return e>-1?this.subItemList[e]:void 0},_getSubItemIndex:function(t){var e,i;for(e=0;e<this.subItemList.length;e++)if(i=this.subItemList[e],i.id===t)return e;return-1},getSubItems:function(){var t,e=[],i=this.subItemList.length;for(t=0;i>t;t++)e.push(this.subItemList[t]);return e},getSubItemIds:function(){var t,e=[],i=this.subItemList.length;for(t=0;i>t;t++)e.push(this.subItemList[t].id);return e},_removeSubItem:function(t){var e,i=this._getSubItemIndex(t);i>-1&&(e=this.subItemList[i],this._onRemoveSubItem(e),this.subItemList.splice(i,1))},_onRemoveSubItem:function(t){},_addSubItem:function(t){if(this._getSubItemIndex(t.id)>-1)throw new Error("Duplication error : id = "+t.id);this._onAddSubItem(t),this.subItemList.push(t)},_onAddSubItem:function(t){},_destroyCollectionMixin:function(){var t,e,i=this.getSubItems();for(this.owner&&this.owner._removeSubItem(this.id),t=0,e=i.length;e>t;t++)i[t].destroy();this.subItemList=[]}}});