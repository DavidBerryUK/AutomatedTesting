"use strict";(self.webpackChunkshopping_list_app=self.webpackChunkshopping_list_app||[]).push([[199],{"./src/uiWidget/uiShoppingItem/storyboard/UIShoppingItem.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,EditItem:()=>EditItem,InteractiveExample:()=>InteractiveExample,NewItem:()=>NewItem,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),src_testDataFactory_TestDataFactoryShoppingItems__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/testDataFactory/TestDataFactoryShoppingItems.ts"),_UIShoppingItem__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/uiWidget/uiShoppingItem/UIShoppingItem.tsx"),src_storybook_viewportConfig_customViewPortConfig__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/storybook/viewportConfig/customViewPortConfig.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Widget/UIShoppingItem",component:_UIShoppingItem__WEBPACK_IMPORTED_MODULE_1__.Z,parameters:{layout:"centered",viewport:{viewports:src_storybook_viewportConfig_customViewPortConfig__WEBPACK_IMPORTED_MODULE_2__.Z,defaultViewport:"DesktopStandard"},docs:{description:{component:"Setup Story Documentation"}}},tags:["autodocs"]},Default={args:{showSwitchComplete:!0,showButtonDelete:!0,showButtonAdd:!0,value:src_testDataFactory_TestDataFactoryShoppingItems__WEBPACK_IMPORTED_MODULE_4__.Z.getApples()}},NewItem={args:{showButtonAdd:!0,value:src_testDataFactory_TestDataFactoryShoppingItems__WEBPACK_IMPORTED_MODULE_4__.Z.getApples()}},EditItem={args:{showButtonDelete:!0,showSwitchComplete:!0,value:src_testDataFactory_TestDataFactoryShoppingItems__WEBPACK_IMPORTED_MODULE_4__.Z.getApples()}},InteractiveExample=()=>{const[value,setValue]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(src_testDataFactory_TestDataFactoryShoppingItems__WEBPACK_IMPORTED_MODULE_4__.Z.getApples());return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_UIShoppingItem__WEBPACK_IMPORTED_MODULE_1__.Z,{value,showButtonAdd:!0,showButtonDelete:!0,showSwitchComplete:!0,onValueChanged:newValue=>{setValue(newValue)}})};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    showSwitchComplete: true,\n    showButtonDelete: true,\n    showButtonAdd: true,\n    value: TestDataFactoryShoppingItems.getApples()\n  }\n}",...Default.parameters?.docs?.source},description:{story:"Default story",...Default.parameters?.docs?.description}}},NewItem.parameters={...NewItem.parameters,docs:{...NewItem.parameters?.docs,source:{originalSource:"{\n  args: {\n    showButtonAdd: true,\n    value: TestDataFactoryShoppingItems.getApples()\n  }\n}",...NewItem.parameters?.docs?.source}}},EditItem.parameters={...EditItem.parameters,docs:{...EditItem.parameters?.docs,source:{originalSource:"{\n  args: {\n    showButtonDelete: true,\n    showSwitchComplete: true,\n    value: TestDataFactoryShoppingItems.getApples()\n  }\n}",...EditItem.parameters?.docs?.source}}},InteractiveExample.parameters={...InteractiveExample.parameters,docs:{...InteractiveExample.parameters?.docs,source:{originalSource:"() => {\n  const [value, setValue] = useState(TestDataFactoryShoppingItems.getApples());\n  return <UIShoppingItem value={value} showButtonAdd={true} showButtonDelete={true} showSwitchComplete={true} onValueChanged={newValue => {\n    setValue(newValue);\n  }} />;\n}",...InteractiveExample.parameters?.docs?.source},description:{story:"Interactive example",...InteractiveExample.parameters?.docs?.description}}};const __namedExportsOrder=["Default","NewItem","EditItem","InteractiveExample"];try{Default.displayName="Default",Default.__docgenInfo={description:"Default story",displayName:"Default",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/uiWidget/uiShoppingItem/storyboard/UIShoppingItem.stories.tsx#Default"]={docgenInfo:Default.__docgenInfo,name:"Default",path:"src/uiWidget/uiShoppingItem/storyboard/UIShoppingItem.stories.tsx#Default"})}catch(__react_docgen_typescript_loader_error){}try{InteractiveExample.displayName="InteractiveExample",InteractiveExample.__docgenInfo={description:"Interactive example",displayName:"InteractiveExample",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/uiWidget/uiShoppingItem/storyboard/UIShoppingItem.stories.tsx#InteractiveExample"]={docgenInfo:InteractiveExample.__docgenInfo,name:"InteractiveExample",path:"src/uiWidget/uiShoppingItem/storyboard/UIShoppingItem.stories.tsx#InteractiveExample"})}catch(__react_docgen_typescript_loader_error){}}}]);