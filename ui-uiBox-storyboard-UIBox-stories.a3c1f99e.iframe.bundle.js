/*! For license information please see ui-uiBox-storyboard-UIBox-stories.a3c1f99e.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkshopping_list_app=self.webpackChunkshopping_list_app||[]).push([[692],{"./src/ui/uiBox/storyboard/UIBox.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Margin1:()=>Margin1,Margin2:()=>Margin2,Margin3:()=>Margin3,Margin4:()=>Margin4,Margin5:()=>Margin5,Padding1:()=>Padding1,Padding2:()=>Padding2,Padding3:()=>Padding3,Padding4:()=>Padding4,Padding5:()=>Padding5,__namedExportsOrder:()=>__namedExportsOrder,default:()=>UIBox_stories});var UIBox=__webpack_require__("./src/ui/uiBox/UIBox.tsx"),TestFlexContainer=__webpack_require__("./src/storybook/testControls/TestFlexContainer.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const TestRectangle=props=>{const colors=["#F5CD7A","#556EE6","#E66868","#F78FB3","#3EC1D3","#303A52","#F7D794","#778BEB","#EB8686","#F8A5C2","#64CDDB","#596174"],index=props.colorNo%colors.length;return(0,jsx_runtime.jsx)("div",{"data-testid":props.testId,style:{backgroundColor:colors[index],width:150,height:150,borderRadius:2}})},testControls_TestRectangle=TestRectangle;try{TestRectangle.displayName="TestRectangle",TestRectangle.__docgenInfo={description:"very simple test child control used for testing rendering",displayName:"TestRectangle",props:{colorNo:{defaultValue:null,description:"",name:"colorNo",required:!0,type:{name:"number"}},testId:{defaultValue:null,description:"",name:"testId",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/storybook/testControls/TestRectangle.tsx#TestRectangle"]={docgenInfo:TestRectangle.__docgenInfo,name:"TestRectangle",path:"src/storybook/testControls/TestRectangle.tsx#TestRectangle"})}catch(__react_docgen_typescript_loader_error){}var react=__webpack_require__("./node_modules/react/index.js");const UIBox_stories={title:"UI/UIBox",component:UIBox.Z,parameters:{layout:"centered",docs:{description:{component:"The UIBox is used to assist in page and control layout."}}},tags:["autodocs"],argTypes:{}},colorNumbers=[0,1,2,4,5,6,7,8,9,10],Default={render:args=>(0,jsx_runtime.jsx)(TestFlexContainer.Z,{children:colorNumbers.map((colorNo=>(0,react.createElement)(UIBox.Z,{...args,key:colorNo},(0,jsx_runtime.jsx)(testControls_TestRectangle,{colorNo}))))})},Margin1={render:args=>(0,jsx_runtime.jsx)(TestFlexContainer.Z,{children:colorNumbers.map((colorNo=>(0,jsx_runtime.jsx)(UIBox.Z,{m1:!0,children:(0,jsx_runtime.jsx)(testControls_TestRectangle,{colorNo})},colorNo)))})},Margin2={render:args=>(0,jsx_runtime.jsx)(TestFlexContainer.Z,{children:colorNumbers.map((colorNo=>(0,jsx_runtime.jsx)(UIBox.Z,{m2:!0,children:(0,jsx_runtime.jsx)(testControls_TestRectangle,{colorNo})},colorNo)))})},Margin3={render:args=>(0,jsx_runtime.jsx)(TestFlexContainer.Z,{children:colorNumbers.map((colorNo=>(0,jsx_runtime.jsx)(UIBox.Z,{m3:!0,children:(0,jsx_runtime.jsx)(testControls_TestRectangle,{colorNo})},colorNo)))})},Margin4={render:args=>(0,jsx_runtime.jsx)(TestFlexContainer.Z,{children:colorNumbers.map((colorNo=>(0,jsx_runtime.jsx)(UIBox.Z,{m4:!0,children:(0,jsx_runtime.jsx)(testControls_TestRectangle,{colorNo})},colorNo)))})},Margin5={render:args=>(0,jsx_runtime.jsx)(TestFlexContainer.Z,{children:colorNumbers.map((colorNo=>(0,jsx_runtime.jsx)(UIBox.Z,{m5:!0,children:(0,jsx_runtime.jsx)(testControls_TestRectangle,{colorNo})},colorNo)))})},Padding1={render:args=>(0,jsx_runtime.jsx)(TestFlexContainer.Z,{children:colorNumbers.map((colorNo=>(0,jsx_runtime.jsx)(UIBox.Z,{p1:!0,children:(0,jsx_runtime.jsx)(testControls_TestRectangle,{colorNo})},colorNo)))})},Padding2={render:args=>(0,jsx_runtime.jsx)(TestFlexContainer.Z,{children:colorNumbers.map((colorNo=>(0,jsx_runtime.jsx)(UIBox.Z,{p2:!0,children:(0,jsx_runtime.jsx)(testControls_TestRectangle,{colorNo})},colorNo)))})},Padding3={render:args=>(0,jsx_runtime.jsx)(TestFlexContainer.Z,{children:colorNumbers.map((colorNo=>(0,jsx_runtime.jsx)(UIBox.Z,{p3:!0,children:(0,jsx_runtime.jsx)(testControls_TestRectangle,{colorNo})},colorNo)))})},Padding4={render:args=>(0,jsx_runtime.jsx)(TestFlexContainer.Z,{children:colorNumbers.map((colorNo=>(0,jsx_runtime.jsx)(UIBox.Z,{p4:!0,children:(0,jsx_runtime.jsx)(testControls_TestRectangle,{colorNo})},colorNo)))})},Padding5={render:args=>(0,jsx_runtime.jsx)(TestFlexContainer.Z,{children:colorNumbers.map((colorNo=>(0,jsx_runtime.jsx)(UIBox.Z,{p5:!0,children:(0,jsx_runtime.jsx)(testControls_TestRectangle,{colorNo})},colorNo)))})};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  render: args => <TestFlexContainer>\r\n      {colorNumbers.map(colorNo => <UIBox {...args} key={colorNo}>\r\n          <TestRectangle colorNo={colorNo} />\r\n        </UIBox>)}\r\n    </TestFlexContainer>\n}",...Default.parameters?.docs?.source},description:{story:"Default story",...Default.parameters?.docs?.description}}},Margin1.parameters={...Margin1.parameters,docs:{...Margin1.parameters?.docs,source:{originalSource:"{\n  render: args => <TestFlexContainer>\r\n      {colorNumbers.map(colorNo => <UIBox m1 key={colorNo}>\r\n          <TestRectangle colorNo={colorNo} />\r\n        </UIBox>)}\r\n    </TestFlexContainer>\n}",...Margin1.parameters?.docs?.source}}},Margin2.parameters={...Margin2.parameters,docs:{...Margin2.parameters?.docs,source:{originalSource:"{\n  render: args => <TestFlexContainer>\r\n      {colorNumbers.map(colorNo => <UIBox m2 key={colorNo}>\r\n          <TestRectangle colorNo={colorNo} />\r\n        </UIBox>)}\r\n    </TestFlexContainer>\n}",...Margin2.parameters?.docs?.source}}},Margin3.parameters={...Margin3.parameters,docs:{...Margin3.parameters?.docs,source:{originalSource:"{\n  render: args => <TestFlexContainer>\r\n      {colorNumbers.map(colorNo => <UIBox m3 key={colorNo}>\r\n          <TestRectangle colorNo={colorNo} />\r\n        </UIBox>)}\r\n    </TestFlexContainer>\n}",...Margin3.parameters?.docs?.source}}},Margin4.parameters={...Margin4.parameters,docs:{...Margin4.parameters?.docs,source:{originalSource:"{\n  render: args => <TestFlexContainer>\r\n      {colorNumbers.map(colorNo => <UIBox m4 key={colorNo}>\r\n          <TestRectangle colorNo={colorNo} />\r\n        </UIBox>)}\r\n    </TestFlexContainer>\n}",...Margin4.parameters?.docs?.source}}},Margin5.parameters={...Margin5.parameters,docs:{...Margin5.parameters?.docs,source:{originalSource:"{\n  render: args => <TestFlexContainer>\r\n      {colorNumbers.map(colorNo => <UIBox m5 key={colorNo}>\r\n          <TestRectangle colorNo={colorNo} />\r\n        </UIBox>)}\r\n    </TestFlexContainer>\n}",...Margin5.parameters?.docs?.source}}},Padding1.parameters={...Padding1.parameters,docs:{...Padding1.parameters?.docs,source:{originalSource:"{\n  render: args => <TestFlexContainer>\r\n      {colorNumbers.map(colorNo => <UIBox p1 key={colorNo}>\r\n          <TestRectangle colorNo={colorNo} />\r\n        </UIBox>)}\r\n    </TestFlexContainer>\n}",...Padding1.parameters?.docs?.source}}},Padding2.parameters={...Padding2.parameters,docs:{...Padding2.parameters?.docs,source:{originalSource:"{\n  render: args => <TestFlexContainer>\r\n      {colorNumbers.map(colorNo => <UIBox p2 key={colorNo}>\r\n          <TestRectangle colorNo={colorNo} />\r\n        </UIBox>)}\r\n    </TestFlexContainer>\n}",...Padding2.parameters?.docs?.source}}},Padding3.parameters={...Padding3.parameters,docs:{...Padding3.parameters?.docs,source:{originalSource:"{\n  render: args => <TestFlexContainer>\r\n      {colorNumbers.map(colorNo => <UIBox p3 key={colorNo}>\r\n          <TestRectangle colorNo={colorNo} />\r\n        </UIBox>)}\r\n    </TestFlexContainer>\n}",...Padding3.parameters?.docs?.source}}},Padding4.parameters={...Padding4.parameters,docs:{...Padding4.parameters?.docs,source:{originalSource:"{\n  render: args => <TestFlexContainer>\r\n      {colorNumbers.map(colorNo => <UIBox p4 key={colorNo}>\r\n          <TestRectangle colorNo={colorNo} />\r\n        </UIBox>)}\r\n    </TestFlexContainer>\n}",...Padding4.parameters?.docs?.source}}},Padding5.parameters={...Padding5.parameters,docs:{...Padding5.parameters?.docs,source:{originalSource:"{\n  render: args => <TestFlexContainer>\r\n      {colorNumbers.map(colorNo => <UIBox p5 key={colorNo}>\r\n          <TestRectangle colorNo={colorNo} />\r\n        </UIBox>)}\r\n    </TestFlexContainer>\n}",...Padding5.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Margin1","Margin2","Margin3","Margin4","Margin5","Padding1","Padding2","Padding3","Padding4","Padding5"];try{Default.displayName="Default",Default.__docgenInfo={description:"Default story",displayName:"Default",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/ui/uiBox/storyboard/UIBox.stories.tsx#Default"]={docgenInfo:Default.__docgenInfo,name:"Default",path:"src/ui/uiBox/storyboard/UIBox.stories.tsx#Default"})}catch(__react_docgen_typescript_loader_error){}},"./src/storybook/testControls/TestFlexContainer.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");const TestFlexContainer=props=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"center",backgroundColor:"#fff",border:"solid 1px #eee",width:800,borderRadius:2},children:props.children}),__WEBPACK_DEFAULT_EXPORT__=TestFlexContainer;try{TestFlexContainer.displayName="TestFlexContainer",TestFlexContainer.__docgenInfo={description:"",displayName:"TestFlexContainer",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/storybook/testControls/TestFlexContainer.tsx#TestFlexContainer"]={docgenInfo:TestFlexContainer.__docgenInfo,name:"TestFlexContainer",path:"src/storybook/testControls/TestFlexContainer.tsx#TestFlexContainer"})}catch(__react_docgen_typescript_loader_error){}},"./src/styles/hooks/useClassMerge.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function useClassMerge(classes){return null!=classes&&Array.isArray(classes)&&0!==classes.length?classes.filter((item=>null!=item&&0!==item.length)).join(" ").trim():""}__webpack_require__.d(__webpack_exports__,{Z:()=>useClassMerge})},"./src/styles/hooks/useStyleSolverMargin.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=style=>{let className="";for(const prop in style)style.hasOwnProperty(prop)&&isValidMarginStyle(prop)&&!0===style[prop]&&(className="".concat(className).concat(prop," "));return className.trim()},isValidMarginStyle=prop=>["m1","m2","m3","m4","m5","ml1","ml2","ml3","ml4","ml5","mr1","mr2","mr3","mr4","mr5","mt1","mt2","mt3","mt4","mt5","mb1","mb2","mb3","mb4","mb5"].includes(prop)},"./src/styles/hooks/useStyleSolverPadding.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=style=>{let className="";for(const prop in style)style.hasOwnProperty(prop)&&isValidMarginStyle(prop)&&!0===style[prop]&&(className="".concat(className).concat(prop," "));return className.trim()},isValidMarginStyle=prop=>["p1","p2","p3","p4","p5","pl1","pl2","pl3","pl4","pl5","pr1","pr2","pr3","pr4","pr5","pt1","pt2","pt3","pt4","pt5","pb1","pb2","pb3","pb4","pb5"].includes(prop)},"./src/ui/uiBox/UIBox.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>uiBox_UIBox});var useClassMerge=__webpack_require__("./src/styles/hooks/useClassMerge.ts"),useStyleSolverMargin=__webpack_require__("./src/styles/hooks/useStyleSolverMargin.ts"),useStyleSolverPadding=__webpack_require__("./src/styles/hooks/useStyleSolverPadding.ts");const UseControlStyleSolver=style=>{const paddingClass=(0,useStyleSolverPadding.Z)(style),marginClass=(0,useStyleSolverMargin.Z)(style);return(0,useClassMerge.Z)(["ui-box",paddingClass,marginClass])};var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const UIBox=props=>{const className=UseControlStyleSolver(props);return(0,jsx_runtime.jsx)("div",{className,"data-testid":props.testId,children:props.children})},uiBox_UIBox=UIBox;try{UIBox.displayName="UIBox",UIBox.__docgenInfo={description:"Simple box used for layouts, contains padding and margin options",displayName:"UIBox",props:{testId:{defaultValue:null,description:"",name:"testId",required:!1,type:{name:"string"}},m1:{defaultValue:null,description:"",name:"m1",required:!1,type:{name:"boolean"}},m2:{defaultValue:null,description:"",name:"m2",required:!1,type:{name:"boolean"}},m3:{defaultValue:null,description:"",name:"m3",required:!1,type:{name:"boolean"}},m4:{defaultValue:null,description:"",name:"m4",required:!1,type:{name:"boolean"}},m5:{defaultValue:null,description:"",name:"m5",required:!1,type:{name:"boolean"}},ml1:{defaultValue:null,description:"",name:"ml1",required:!1,type:{name:"boolean"}},ml2:{defaultValue:null,description:"",name:"ml2",required:!1,type:{name:"boolean"}},ml3:{defaultValue:null,description:"",name:"ml3",required:!1,type:{name:"boolean"}},ml4:{defaultValue:null,description:"",name:"ml4",required:!1,type:{name:"boolean"}},ml5:{defaultValue:null,description:"",name:"ml5",required:!1,type:{name:"boolean"}},mr1:{defaultValue:null,description:"",name:"mr1",required:!1,type:{name:"boolean"}},mr2:{defaultValue:null,description:"",name:"mr2",required:!1,type:{name:"boolean"}},mr3:{defaultValue:null,description:"",name:"mr3",required:!1,type:{name:"boolean"}},mr4:{defaultValue:null,description:"",name:"mr4",required:!1,type:{name:"boolean"}},mr5:{defaultValue:null,description:"",name:"mr5",required:!1,type:{name:"boolean"}},mt1:{defaultValue:null,description:"",name:"mt1",required:!1,type:{name:"boolean"}},mt2:{defaultValue:null,description:"",name:"mt2",required:!1,type:{name:"boolean"}},mt3:{defaultValue:null,description:"",name:"mt3",required:!1,type:{name:"boolean"}},mt4:{defaultValue:null,description:"",name:"mt4",required:!1,type:{name:"boolean"}},mt5:{defaultValue:null,description:"",name:"mt5",required:!1,type:{name:"boolean"}},mb1:{defaultValue:null,description:"",name:"mb1",required:!1,type:{name:"boolean"}},mb2:{defaultValue:null,description:"",name:"mb2",required:!1,type:{name:"boolean"}},mb3:{defaultValue:null,description:"",name:"mb3",required:!1,type:{name:"boolean"}},mb4:{defaultValue:null,description:"",name:"mb4",required:!1,type:{name:"boolean"}},mb5:{defaultValue:null,description:"",name:"mb5",required:!1,type:{name:"boolean"}},p1:{defaultValue:null,description:"",name:"p1",required:!1,type:{name:"boolean"}},p2:{defaultValue:null,description:"",name:"p2",required:!1,type:{name:"boolean"}},p3:{defaultValue:null,description:"",name:"p3",required:!1,type:{name:"boolean"}},p4:{defaultValue:null,description:"",name:"p4",required:!1,type:{name:"boolean"}},p5:{defaultValue:null,description:"",name:"p5",required:!1,type:{name:"boolean"}},pl1:{defaultValue:null,description:"",name:"pl1",required:!1,type:{name:"boolean"}},pl2:{defaultValue:null,description:"",name:"pl2",required:!1,type:{name:"boolean"}},pl3:{defaultValue:null,description:"",name:"pl3",required:!1,type:{name:"boolean"}},pl4:{defaultValue:null,description:"",name:"pl4",required:!1,type:{name:"boolean"}},pl5:{defaultValue:null,description:"",name:"pl5",required:!1,type:{name:"boolean"}},pr1:{defaultValue:null,description:"",name:"pr1",required:!1,type:{name:"boolean"}},pr2:{defaultValue:null,description:"",name:"pr2",required:!1,type:{name:"boolean"}},pr3:{defaultValue:null,description:"",name:"pr3",required:!1,type:{name:"boolean"}},pr4:{defaultValue:null,description:"",name:"pr4",required:!1,type:{name:"boolean"}},pr5:{defaultValue:null,description:"",name:"pr5",required:!1,type:{name:"boolean"}},pt1:{defaultValue:null,description:"",name:"pt1",required:!1,type:{name:"boolean"}},pt2:{defaultValue:null,description:"",name:"pt2",required:!1,type:{name:"boolean"}},pt3:{defaultValue:null,description:"",name:"pt3",required:!1,type:{name:"boolean"}},pt4:{defaultValue:null,description:"",name:"pt4",required:!1,type:{name:"boolean"}},pt5:{defaultValue:null,description:"",name:"pt5",required:!1,type:{name:"boolean"}},pb1:{defaultValue:null,description:"",name:"pb1",required:!1,type:{name:"boolean"}},pb2:{defaultValue:null,description:"",name:"pb2",required:!1,type:{name:"boolean"}},pb3:{defaultValue:null,description:"",name:"pb3",required:!1,type:{name:"boolean"}},pb4:{defaultValue:null,description:"",name:"pb4",required:!1,type:{name:"boolean"}},pb5:{defaultValue:null,description:"",name:"pb5",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/ui/uiBox/UIBox.tsx#UIBox"]={docgenInfo:UIBox.__docgenInfo,name:"UIBox",path:"src/ui/uiBox/UIBox.tsx#UIBox"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);