"use strict";(self.webpackChunkshopping_list_app=self.webpackChunkshopping_list_app||[]).push([[976],{"./src/uiWidget/uiShoppingListApp/storyboard/UIShoppingListApp.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>UIShoppingListApp_stories});var UIBox=__webpack_require__("./src/ui/uiBox/UIBox.tsx"),UISegmentSortOrder=__webpack_require__("./src/uiWidget/uiSegmentSortOrder/UISegmentSortOrder.tsx"),UIShoppingItem=__webpack_require__("./src/uiWidget/uiShoppingItem/UIShoppingItem.tsx"),UIShoppingList=__webpack_require__("./src/uiWidget/uiShoppingList/UIShoppingList.tsx"),react=__webpack_require__("./node_modules/react/index.js"),EnumListSortOrder=__webpack_require__("./src/enum/EnumListSortOrder.ts"),ShoppingItemCollection=__webpack_require__("./src/models/ShoppingItemCollection.ts"),ShoppingItemModel=__webpack_require__("./src/models/ShoppingItemModel.ts"),TestDataFactoryShoppingList=__webpack_require__("./src/testDataFactory/TestDataFactoryShoppingList.ts");const UseShoppingListMockRepository=()=>({addOrUpdateAsync:async item=>item,deleteAllAsync:async()=>{},deleteAsync:async item=>{},deleteCompletedAsync:async()=>{},getAllAsync:async()=>TestDataFactoryShoppingList.Z.get()});var EnumHttpVerbs=function(EnumHttpVerbs){return EnumHttpVerbs.Delete="DELETE",EnumHttpVerbs.Get="GET",EnumHttpVerbs.Patch="PATCH",EnumHttpVerbs.Post="POST",EnumHttpVerbs.Put="PUT",EnumHttpVerbs}(EnumHttpVerbs||{});const enum_EnumHttpVerbs=EnumHttpVerbs;class JsonConvertorShoppingItem{static toObject(json){const object=new ShoppingItemModel.Z;return null==json||(object.id=json.id,object.dateCreated=json.dateCreated,object.isChecked=json.isChecked,object.name=json.name,object.quantity=json.quantity),object}static toObjectArray(json){if(null==json)return new Array;return json.map((item=>this.toObject(item)))}}const UseShoppingListRepository=()=>{const baseRepo=function useBaseRepository(){const fetchAsync=async(url,method,body)=>{const fullUrl="".concat("").concat(url);try{const response=await fetch(fullUrl,createHeaders(method,body));return await response.json()}catch(error){return console.error("Error fetching data from ".concat(url,":"),error),null}},createHeaders=(method,body)=>(method===enum_EnumHttpVerbs.Post||enum_EnumHttpVerbs.Put,{method,cache:"no-cache",mode:"cors",credentials:"omit",headers:{"Content-Type":"application/json"},body:body?JSON.stringify(body):void 0});return{getAsync:async url=>fetchAsync(url,enum_EnumHttpVerbs.Get),deleteAsync:async url=>fetchAsync(url,enum_EnumHttpVerbs.Delete),postAsync:async(url,data)=>fetchAsync(url,enum_EnumHttpVerbs.Post,data)}}();return{addOrUpdateAsync:async item=>{const json=await baseRepo.postAsync("ListItem",item);return JsonConvertorShoppingItem.toObject(json)},deleteAllAsync:async()=>{await baseRepo.deleteAsync("".concat("ListItem","/all"))},deleteAsync:async item=>{await baseRepo.deleteAsync("".concat("ListItem","/").concat(item.id))},deleteCompletedAsync:async()=>{await baseRepo.deleteAsync("".concat("ListItem","/completed"))},getAllAsync:async()=>{const json=await baseRepo.getAsync("ListItem"),collection=new ShoppingItemCollection.Z;return collection.items=JsonConvertorShoppingItem.toObjectArray(json),collection}}},FactoryShoppingListRepository=()=>{const repoMock=UseShoppingListMockRepository();UseShoppingListRepository();return repoMock},hooks_useViewController=()=>{const[collection,setCollection]=(0,react.useState)(new ShoppingItemCollection.Z),[newItem,setNewItem]=(0,react.useState)(new ShoppingItemModel.Z),[sortOrder,setSortOrder]=(0,react.useState)(EnumListSortOrder.Z.Name),repo=FactoryShoppingListRepository();(0,react.useEffect)((()=>{!async function getData(){const collection=await repo.getAllAsync();collection.sortBySortOrder(sortOrder),setCollection(collection)}()}),[]);return{sortOrder,newItem,collection,handleAddItemEventAsync:async item=>{var updatedItem=await repo.addOrUpdateAsync(item);const clone=collection.clone();clone.updateItem(updatedItem),clone.sortBySortOrder(sortOrder),setCollection(clone),setNewItem(new ShoppingItemModel.Z)},handleCollectionChangedEvent:updatedCollection=>{updatedCollection.sortBySortOrder(sortOrder),setCollection(updatedCollection)},handleItemChangedEventAsync:async item=>{var updatedItem=await repo.addOrUpdateAsync(item);const clone=collection.clone();clone.updateItem(updatedItem),clone.sortBySortOrder(sortOrder),setCollection(clone)},handleItemDeletedEventAsync:async item=>{await repo.deleteAsync(item);const clone=collection.clone();clone.removeItem(item),clone.sortBySortOrder(sortOrder),setCollection(clone)},handleNewItemChangedEvent:updatedItem=>{setNewItem(updatedItem),collection.sortBySortOrder(sortOrder)},handleOnDeleteAllItemsEventAsync:async()=>{await repo.deleteAllAsync();const clone=collection.clone();clone.clear(),clone.sortBySortOrder(sortOrder),setCollection(clone)},handleOnDeleteCompletedItemsAsync:async()=>{await repo.deleteCompletedAsync();const clone=collection.clone();clone.deleteCompleted(),clone.sortBySortOrder(sortOrder),setCollection(clone)},handleSortOrderChangedEvent:newSortOrder=>{setSortOrder(newSortOrder),collection.sortBySortOrder(newSortOrder)}}};var UISpacer=__webpack_require__("./src/ui/uiSpacer/UISpacer.tsx"),UIButton=__webpack_require__("./src/ui/uiButton/UIButton.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const UIShoppingListApp=()=>{const{sortOrder,newItem,collection,handleAddItemEventAsync,handleCollectionChangedEvent,handleItemChangedEventAsync,handleItemDeletedEventAsync,handleNewItemChangedEvent,handleOnDeleteAllItemsEventAsync,handleOnDeleteCompletedItemsAsync,handleSortOrderChangedEvent}=hooks_useViewController();return(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsxs)(UIBox.Z,{mb4:!0,ml2:!0,mr2:!0,mt2:!0,children:[(0,jsx_runtime.jsx)(UISegmentSortOrder.Z,{value:sortOrder,onValueChanged:handleSortOrderChangedEvent,testId:"sort-order"}),(0,jsx_runtime.jsx)(UISpacer.Z,{}),(0,jsx_runtime.jsx)(UIButton.Z,{label:"Delete Completed",onClick:handleOnDeleteCompletedItemsAsync,testId:"test-btn-delete-completed"}),(0,jsx_runtime.jsx)(UIButton.Z,{ml1:!0,label:"Delete All",onClick:handleOnDeleteAllItemsEventAsync,testId:"test-btn-delete-all"})]}),(0,jsx_runtime.jsx)(UIBox.Z,{mb4:!0,children:(0,jsx_runtime.jsx)(UIShoppingItem.Z,{value:newItem,onAdd:handleAddItemEventAsync,onValueChanged:handleNewItemChangedEvent,showButtonAdd:!0,testId:"new-item-container",addTestId:"add-button",textTestId:"new-item-text",stepperTestId:"new-item-stepper"})}),(0,jsx_runtime.jsx)(UIShoppingList.Z,{collection,onItemDeleted:handleItemDeletedEventAsync,onItemChanged:handleItemChangedEventAsync,onCollectionChanged:handleCollectionChangedEvent,testId:"shopping-list"})]})},uiShoppingListApp_UIShoppingListApp=UIShoppingListApp;try{UIShoppingListApp.displayName="UIShoppingListApp",UIShoppingListApp.__docgenInfo={description:"",displayName:"UIShoppingListApp",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/uiWidget/uiShoppingListApp/UIShoppingListApp.tsx#UIShoppingListApp"]={docgenInfo:UIShoppingListApp.__docgenInfo,name:"UIShoppingListApp",path:"src/uiWidget/uiShoppingListApp/UIShoppingListApp.tsx#UIShoppingListApp"})}catch(__react_docgen_typescript_loader_error){}const UIShoppingListApp_stories={title:"Widget/UIShoppingListApp",component:uiShoppingListApp_UIShoppingListApp,parameters:{layout:"top",viewport:{viewports:__webpack_require__("./src/storybook/viewportConfig/customViewPortConfig.ts").Z,defaultViewport:"DesktopStandard"},docs:{description:{component:"Setup Story Documentation"}}},tags:["autodocs"]},Default={args:{}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {}\n}",...Default.parameters?.docs?.source},description:{story:"Default story",...Default.parameters?.docs?.description}}};const __namedExportsOrder=["Default"];try{Default.displayName="Default",Default.__docgenInfo={description:"Default story",displayName:"Default",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/uiWidget/uiShoppingListApp/storyboard/UIShoppingListApp.stories.tsx#Default"]={docgenInfo:Default.__docgenInfo,name:"Default",path:"src/uiWidget/uiShoppingListApp/storyboard/UIShoppingListApp.stories.tsx#Default"})}catch(__react_docgen_typescript_loader_error){}},"./src/enum/EnumListSortOrder.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var EnumListSortOrder=function(EnumListSortOrder){return EnumListSortOrder.Name="N",EnumListSortOrder.Date="D",EnumListSortOrder.Completed="C",EnumListSortOrder}(EnumListSortOrder||{});const __WEBPACK_DEFAULT_EXPORT__=EnumListSortOrder},"./src/models/ShoppingItemCollection.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>ShoppingItemCollection});var src_enum_EnumListSortOrder__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/enum/EnumListSortOrder.ts");class ShoppingItemCollection{constructor(){this.items=void 0,this.items=new Array}clear(){this.items=new Array}deleteCompleted(){this.items=this.items.filter((i=>!1===i.isChecked))}updateItem(item){const index=this.items.findIndex((i=>i.id===item.id));-1===index?this.items.push(item):this.items[index]=item}removeItem(item){this.items=this.items.filter((i=>i.id!==item.id))}clone(){const model=new ShoppingItemCollection;return model.items=this.items,model}sortBySortOrder(sortOrder){switch(sortOrder){case src_enum_EnumListSortOrder__WEBPACK_IMPORTED_MODULE_0__.Z.Name:return void this.sortByName();case src_enum_EnumListSortOrder__WEBPACK_IMPORTED_MODULE_0__.Z.Completed:return void this.sortByCompleted();case src_enum_EnumListSortOrder__WEBPACK_IMPORTED_MODULE_0__.Z.Date:return void this.sortByDateCreated()}}sortByName(){this.items=this.items.sort(((a,b)=>a.name.localeCompare(b.name)))}sortByDateCreated(){this.items=this.items.sort(((a,b)=>a.dateCreated<b.dateCreated?-1:a.dateCreated>b.dateCreated?1:a.name.localeCompare(b.name)))}sortByCompleted(){this.items=this.items.sort(((a,b)=>a.isChecked&&!b.isChecked?-1:!a.isChecked&&b.isChecked?1:a.name.localeCompare(b.name)))}}},"./src/testDataFactory/TestDataFactoryShoppingList.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>TestDataFactoryShoppingList});var src_models_ShoppingItemCollection__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/models/ShoppingItemCollection.ts"),_TestDataFactoryShoppingItems__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/testDataFactory/TestDataFactoryShoppingItems.ts");class TestDataFactoryShoppingList{static get(){const collection=new src_models_ShoppingItemCollection__WEBPACK_IMPORTED_MODULE_0__.Z;return collection.items=[_TestDataFactoryShoppingItems__WEBPACK_IMPORTED_MODULE_1__.Z.getApples(),_TestDataFactoryShoppingItems__WEBPACK_IMPORTED_MODULE_1__.Z.getBananas(),_TestDataFactoryShoppingItems__WEBPACK_IMPORTED_MODULE_1__.Z.getCarrots(),_TestDataFactoryShoppingItems__WEBPACK_IMPORTED_MODULE_1__.Z.getGrapes(),_TestDataFactoryShoppingItems__WEBPACK_IMPORTED_MODULE_1__.Z.getTomatoes()],collection}}},"./src/uiWidget/uiSegmentSortOrder/UISegmentSortOrder.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>uiSegmentSortOrder_UISegmentSortOrder});var UISegment=__webpack_require__("./src/ui/uiSegment/UISegment.tsx"),UILabel=__webpack_require__("./src/ui/uiLabel/UILabel.tsx");class EnumHelpers{}EnumHelpers.reverseLookup=(value,enumObject)=>{for(const enumKey in enumObject)if(enumObject.hasOwnProperty(enumKey)&&enumObject[enumKey]===value)return enumObject[enumKey]};var EnumListSortOrder=__webpack_require__("./src/enum/EnumListSortOrder.ts"),SegmentOption=__webpack_require__("./src/ui/uiSegment/models/SegmentOption.ts");const hooks_UseViewController=onValueChanged=>({options:[new SegmentOption.Z(EnumListSortOrder.Z.Name,"Name"),new SegmentOption.Z(EnumListSortOrder.Z.Completed,"Completed"),new SegmentOption.Z(EnumListSortOrder.Z.Date,"Created")],handleOnValueChangedEvent:option=>{if(onValueChanged){const value=EnumHelpers.reverseLookup(option.code,EnumListSortOrder.Z);void 0!==value&&onValueChanged(value)}}});try{UseViewController.displayName="UseViewController",UseViewController.__docgenInfo={description:"",displayName:"UseViewController",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/uiWidget/uiSegmentSortOrder/hooks/UseViewController.tsx#UseViewController"]={docgenInfo:UseViewController.__docgenInfo,name:"UseViewController",path:"src/uiWidget/uiSegmentSortOrder/hooks/UseViewController.tsx#UseViewController"})}catch(__react_docgen_typescript_loader_error){}var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const UISegmentSortOrder=props=>{const{handleOnValueChangedEvent,options}=hooks_UseViewController(props.onValueChanged);return(0,jsx_runtime.jsx)(UILabel.Z,{label:"Sort Order",medium:!0,testId:props.testId,children:(0,jsx_runtime.jsx)(UISegment.Z,{options,value:props.value,onChange:handleOnValueChangedEvent})})},uiSegmentSortOrder_UISegmentSortOrder=UISegmentSortOrder;try{UISegmentSortOrder.displayName="UISegmentSortOrder",UISegmentSortOrder.__docgenInfo={description:"",displayName:"UISegmentSortOrder",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"enum",value:[{value:'"N"'},{value:'"D"'},{value:'"C"'}]}},onValueChanged:{defaultValue:null,description:"",name:"onValueChanged",required:!1,type:{name:"((row: EnumListSortOrder) => void)"}},testId:{defaultValue:null,description:"",name:"testId",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/uiWidget/uiSegmentSortOrder/UISegmentSortOrder.tsx#UISegmentSortOrder"]={docgenInfo:UISegmentSortOrder.__docgenInfo,name:"UISegmentSortOrder",path:"src/uiWidget/uiSegmentSortOrder/UISegmentSortOrder.tsx#UISegmentSortOrder"})}catch(__react_docgen_typescript_loader_error){}},"./src/uiWidget/uiShoppingList/UIShoppingList.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _uiShoppingItem_UIShoppingItem__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/uiWidget/uiShoppingItem/UIShoppingItem.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const UIShoppingList=props=>{const handleShoppingItemChangedEvent=item=>{if(props.onItemChanged&&props.onItemChanged(item),props.onCollectionChanged){const collection=props.collection.clone();collection.updateItem(item),props.onCollectionChanged(collection)}},handleShoppingItemDeletedEvent=item=>{props.onItemDeleted&&props.onItemDeleted(item)};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"ui-shopping-list","data-testid":props.testId,children:props.collection.items.map((item=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_uiShoppingItem_UIShoppingItem__WEBPACK_IMPORTED_MODULE_0__.Z,{value:item,showButtonDelete:!0,showSwitchComplete:!0,onValueChanged:handleShoppingItemChangedEvent,onDelete:handleShoppingItemDeletedEvent},item.id)))})},__WEBPACK_DEFAULT_EXPORT__=UIShoppingList;try{UIShoppingList.displayName="UIShoppingList",UIShoppingList.__docgenInfo={description:"",displayName:"UIShoppingList",props:{collection:{defaultValue:null,description:"",name:"collection",required:!0,type:{name:"ShoppingItemCollection"}},onCollectionChanged:{defaultValue:null,description:"",name:"onCollectionChanged",required:!1,type:{name:"((collection: ShoppingItemCollection) => void)"}},onItemChanged:{defaultValue:null,description:"",name:"onItemChanged",required:!1,type:{name:"((item: ShoppingItemModel) => void)"}},onItemDeleted:{defaultValue:null,description:"",name:"onItemDeleted",required:!1,type:{name:"((item: ShoppingItemModel) => void)"}},testId:{defaultValue:null,description:"",name:"testId",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/uiWidget/uiShoppingList/UIShoppingList.tsx#UIShoppingList"]={docgenInfo:UIShoppingList.__docgenInfo,name:"UIShoppingList",path:"src/uiWidget/uiShoppingList/UIShoppingList.tsx#UIShoppingList"})}catch(__react_docgen_typescript_loader_error){}},"./src/ui/uiBox/UIBox.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>uiBox_UIBox});var useClassMerge=__webpack_require__("./src/styles/hooks/useClassMerge.ts"),useStyleSolverMargin=__webpack_require__("./src/styles/hooks/useStyleSolverMargin.ts"),useStyleSolverPadding=__webpack_require__("./src/styles/hooks/useStyleSolverPadding.ts");const UseControlStyleSolver=style=>{const paddingClass=(0,useStyleSolverPadding.Z)(style),marginClass=(0,useStyleSolverMargin.Z)(style);return(0,useClassMerge.Z)(["ui-box",paddingClass,marginClass])};var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const UIBox=props=>{const className=UseControlStyleSolver(props);return(0,jsx_runtime.jsx)("div",{className,"data-testid":props.testId,children:props.children})},uiBox_UIBox=UIBox;try{UIBox.displayName="UIBox",UIBox.__docgenInfo={description:"Simple box used for layouts, contains padding and margin options",displayName:"UIBox",props:{testId:{defaultValue:null,description:"",name:"testId",required:!1,type:{name:"string"}},m1:{defaultValue:null,description:"",name:"m1",required:!1,type:{name:"boolean"}},m2:{defaultValue:null,description:"",name:"m2",required:!1,type:{name:"boolean"}},m3:{defaultValue:null,description:"",name:"m3",required:!1,type:{name:"boolean"}},m4:{defaultValue:null,description:"",name:"m4",required:!1,type:{name:"boolean"}},m5:{defaultValue:null,description:"",name:"m5",required:!1,type:{name:"boolean"}},ml1:{defaultValue:null,description:"",name:"ml1",required:!1,type:{name:"boolean"}},ml2:{defaultValue:null,description:"",name:"ml2",required:!1,type:{name:"boolean"}},ml3:{defaultValue:null,description:"",name:"ml3",required:!1,type:{name:"boolean"}},ml4:{defaultValue:null,description:"",name:"ml4",required:!1,type:{name:"boolean"}},ml5:{defaultValue:null,description:"",name:"ml5",required:!1,type:{name:"boolean"}},mr1:{defaultValue:null,description:"",name:"mr1",required:!1,type:{name:"boolean"}},mr2:{defaultValue:null,description:"",name:"mr2",required:!1,type:{name:"boolean"}},mr3:{defaultValue:null,description:"",name:"mr3",required:!1,type:{name:"boolean"}},mr4:{defaultValue:null,description:"",name:"mr4",required:!1,type:{name:"boolean"}},mr5:{defaultValue:null,description:"",name:"mr5",required:!1,type:{name:"boolean"}},mt1:{defaultValue:null,description:"",name:"mt1",required:!1,type:{name:"boolean"}},mt2:{defaultValue:null,description:"",name:"mt2",required:!1,type:{name:"boolean"}},mt3:{defaultValue:null,description:"",name:"mt3",required:!1,type:{name:"boolean"}},mt4:{defaultValue:null,description:"",name:"mt4",required:!1,type:{name:"boolean"}},mt5:{defaultValue:null,description:"",name:"mt5",required:!1,type:{name:"boolean"}},mb1:{defaultValue:null,description:"",name:"mb1",required:!1,type:{name:"boolean"}},mb2:{defaultValue:null,description:"",name:"mb2",required:!1,type:{name:"boolean"}},mb3:{defaultValue:null,description:"",name:"mb3",required:!1,type:{name:"boolean"}},mb4:{defaultValue:null,description:"",name:"mb4",required:!1,type:{name:"boolean"}},mb5:{defaultValue:null,description:"",name:"mb5",required:!1,type:{name:"boolean"}},p1:{defaultValue:null,description:"",name:"p1",required:!1,type:{name:"boolean"}},p2:{defaultValue:null,description:"",name:"p2",required:!1,type:{name:"boolean"}},p3:{defaultValue:null,description:"",name:"p3",required:!1,type:{name:"boolean"}},p4:{defaultValue:null,description:"",name:"p4",required:!1,type:{name:"boolean"}},p5:{defaultValue:null,description:"",name:"p5",required:!1,type:{name:"boolean"}},pl1:{defaultValue:null,description:"",name:"pl1",required:!1,type:{name:"boolean"}},pl2:{defaultValue:null,description:"",name:"pl2",required:!1,type:{name:"boolean"}},pl3:{defaultValue:null,description:"",name:"pl3",required:!1,type:{name:"boolean"}},pl4:{defaultValue:null,description:"",name:"pl4",required:!1,type:{name:"boolean"}},pl5:{defaultValue:null,description:"",name:"pl5",required:!1,type:{name:"boolean"}},pr1:{defaultValue:null,description:"",name:"pr1",required:!1,type:{name:"boolean"}},pr2:{defaultValue:null,description:"",name:"pr2",required:!1,type:{name:"boolean"}},pr3:{defaultValue:null,description:"",name:"pr3",required:!1,type:{name:"boolean"}},pr4:{defaultValue:null,description:"",name:"pr4",required:!1,type:{name:"boolean"}},pr5:{defaultValue:null,description:"",name:"pr5",required:!1,type:{name:"boolean"}},pt1:{defaultValue:null,description:"",name:"pt1",required:!1,type:{name:"boolean"}},pt2:{defaultValue:null,description:"",name:"pt2",required:!1,type:{name:"boolean"}},pt3:{defaultValue:null,description:"",name:"pt3",required:!1,type:{name:"boolean"}},pt4:{defaultValue:null,description:"",name:"pt4",required:!1,type:{name:"boolean"}},pt5:{defaultValue:null,description:"",name:"pt5",required:!1,type:{name:"boolean"}},pb1:{defaultValue:null,description:"",name:"pb1",required:!1,type:{name:"boolean"}},pb2:{defaultValue:null,description:"",name:"pb2",required:!1,type:{name:"boolean"}},pb3:{defaultValue:null,description:"",name:"pb3",required:!1,type:{name:"boolean"}},pb4:{defaultValue:null,description:"",name:"pb4",required:!1,type:{name:"boolean"}},pb5:{defaultValue:null,description:"",name:"pb5",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/ui/uiBox/UIBox.tsx#UIBox"]={docgenInfo:UIBox.__docgenInfo,name:"UIBox",path:"src/ui/uiBox/UIBox.tsx#UIBox"})}catch(__react_docgen_typescript_loader_error){}},"./src/ui/uiLabel/UILabel.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>uiLabel_UILabel});var useClassMerge=__webpack_require__("./src/styles/hooks/useClassMerge.ts");const hooks_useStyleSolverLabelWidth=(prefix,style)=>(prefix.length>0&&(prefix="".concat(prefix.trim()," ")),style.extraSmall?"".concat(prefix,"lbl-ex-small"):style.small?"".concat(prefix,"lbl-small"):style.medium?"".concat(prefix,"lbl-medium"):style.wide?"".concat(prefix,"lbl-wide"):style.extraWide?"".concat(prefix,"lbl-ex-wide"):""),hooks_UseControlStyleSolver=style=>{const classWidth=hooks_useStyleSolverLabelWidth("",style);return(0,useClassMerge.Z)(["ui-label",classWidth])};try{UseControlStyleSolver.displayName="UseControlStyleSolver",UseControlStyleSolver.__docgenInfo={description:"Create style for label dependant upon the style options provided",displayName:"UseControlStyleSolver",props:{extraSmall:{defaultValue:null,description:"",name:"extraSmall",required:!1,type:{name:"boolean"}},small:{defaultValue:null,description:"",name:"small",required:!1,type:{name:"boolean"}},medium:{defaultValue:null,description:"",name:"medium",required:!1,type:{name:"boolean"}},wide:{defaultValue:null,description:"",name:"wide",required:!1,type:{name:"boolean"}},extraWide:{defaultValue:null,description:"",name:"extraWide",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/ui/uiLabel/hooks/UseControlStyleSolver.tsx#UseControlStyleSolver"]={docgenInfo:UseControlStyleSolver.__docgenInfo,name:"UseControlStyleSolver",path:"src/ui/uiLabel/hooks/UseControlStyleSolver.tsx#UseControlStyleSolver"})}catch(__react_docgen_typescript_loader_error){}var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const UILabel=props=>{const className=hooks_UseControlStyleSolver(props);return(0,jsx_runtime.jsxs)("label",{className,"data-testid":props.testId,children:[(0,jsx_runtime.jsx)("span",{className:"lbl-text",children:props.label}),props.children]})},uiLabel_UILabel=UILabel;try{UILabel.displayName="UILabel",UILabel.__docgenInfo={description:"",displayName:"UILabel",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},flex:{defaultValue:null,description:"",name:"flex",required:!1,type:{name:"boolean"}},testId:{defaultValue:null,description:"",name:"testId",required:!1,type:{name:"string"}},extraSmall:{defaultValue:null,description:"",name:"extraSmall",required:!1,type:{name:"boolean"}},small:{defaultValue:null,description:"",name:"small",required:!1,type:{name:"boolean"}},medium:{defaultValue:null,description:"",name:"medium",required:!1,type:{name:"boolean"}},wide:{defaultValue:null,description:"",name:"wide",required:!1,type:{name:"boolean"}},extraWide:{defaultValue:null,description:"",name:"extraWide",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/ui/uiLabel/UILabel.tsx#UILabel"]={docgenInfo:UILabel.__docgenInfo,name:"UILabel",path:"src/ui/uiLabel/UILabel.tsx#UILabel"})}catch(__react_docgen_typescript_loader_error){}},"./src/ui/uiSegment/UISegment.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>uiSegment_UISegment});const hooks_UseViewController=onValueChanged=>({handleValueChangedEvent:option=>{onValueChanged&&onValueChanged(option)}});try{UseViewController.displayName="UseViewController",UseViewController.__docgenInfo={description:"View controller for UI Segment, seperates logic from compoment\nfor easier testing",displayName:"UseViewController",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/ui/uiSegment/hooks/UseViewController.tsx#UseViewController"]={docgenInfo:UseViewController.__docgenInfo,name:"UseViewController",path:"src/ui/uiSegment/hooks/UseViewController.tsx#UseViewController"})}catch(__react_docgen_typescript_loader_error){}var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const UISegmentOption=props=>{var className="";props.selected&&(className="".concat(className," selected"));return(0,jsx_runtime.jsx)("button",{className,onClick:()=>{props.onClick&&props.onClick(props.option)},children:props.option.text})},support_UISegmentOption=UISegmentOption;try{UISegmentOption.displayName="UISegmentOption",UISegmentOption.__docgenInfo={description:"",displayName:"UISegmentOption",props:{option:{defaultValue:null,description:"",name:"option",required:!0,type:{name:"SegmentOption"}},selected:{defaultValue:null,description:"",name:"selected",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((option: SegmentOption) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/ui/uiSegment/support/UISegmentOption.tsx#UISegmentOption"]={docgenInfo:UISegmentOption.__docgenInfo,name:"UISegmentOption",path:"src/ui/uiSegment/support/UISegmentOption.tsx#UISegmentOption"})}catch(__react_docgen_typescript_loader_error){}const UISegment=props=>{const{handleValueChangedEvent}=hooks_UseViewController(props.onChange);return(0,jsx_runtime.jsx)("div",{className:"ui-segment",children:props.options.map((option=>(0,jsx_runtime.jsx)(support_UISegmentOption,{option,selected:option.code===props.value,onClick:handleValueChangedEvent},option.code)))})},uiSegment_UISegment=UISegment;try{UISegment.displayName="UISegment",UISegment.__docgenInfo={description:"",displayName:"UISegment",props:{testId:{defaultValue:null,description:"",name:"testId",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"SegmentOption[]"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((option: SegmentOption) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/ui/uiSegment/UISegment.tsx#UISegment"]={docgenInfo:UISegment.__docgenInfo,name:"UISegment",path:"src/ui/uiSegment/UISegment.tsx#UISegment"})}catch(__react_docgen_typescript_loader_error){}},"./src/ui/uiSegment/models/SegmentOption.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>SegmentOption});class SegmentOption{constructor(code,text){this.code=void 0,this.text=void 0,this.code=code,this.text=text}}}}]);