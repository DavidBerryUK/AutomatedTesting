/*! For license information please see ui-uiSwitch-storyboard-UISwitch-stories.9514e409.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkshopping_list_app=self.webpackChunkshopping_list_app||[]).push([[917],{"./src/ui/uiSwitch/storyboard/UISwitch.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,InteractiveExample:()=>InteractiveExample,SwitchedOff:()=>SwitchedOff,SwitchedOn:()=>SwitchedOn,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _UISwitch__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/ui/uiSwitch/UISwitch.tsx"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"UI/UISwitch",component:_UISwitch__WEBPACK_IMPORTED_MODULE_0__.Z,parameters:{layout:"centered",docs:{description:{component:"Setup Story Documentation"}}},tags:["autodocs"]},Default={args:{value:!0}},SwitchedOn={args:{value:!0}},SwitchedOff={args:{value:!1}},InteractiveExample=()=>{const[value,setValue]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!0);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_UISwitch__WEBPACK_IMPORTED_MODULE_0__.Z,{value,onValueChanged:newValue=>{setValue(newValue)}})};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    value: true\n  }\n}",...Default.parameters?.docs?.source},description:{story:"Default story",...Default.parameters?.docs?.description}}},SwitchedOn.parameters={...SwitchedOn.parameters,docs:{...SwitchedOn.parameters?.docs,source:{originalSource:"{\n  args: {\n    value: true\n  }\n}",...SwitchedOn.parameters?.docs?.source}}},SwitchedOff.parameters={...SwitchedOff.parameters,docs:{...SwitchedOff.parameters?.docs,source:{originalSource:"{\n  args: {\n    value: false\n  }\n}",...SwitchedOff.parameters?.docs?.source}}},InteractiveExample.parameters={...InteractiveExample.parameters,docs:{...InteractiveExample.parameters?.docs,source:{originalSource:"() => {\n  const [value, setValue] = useState(true);\n  return <UISwitch value={value} onValueChanged={newValue => {\n    setValue(newValue);\n  }} />;\n}",...InteractiveExample.parameters?.docs?.source}}};const __namedExportsOrder=["Default","SwitchedOn","SwitchedOff","InteractiveExample"];try{Default.displayName="Default",Default.__docgenInfo={description:"Default story",displayName:"Default",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/ui/uiSwitch/storyboard/UISwitch.stories.tsx#Default"]={docgenInfo:Default.__docgenInfo,name:"Default",path:"src/ui/uiSwitch/storyboard/UISwitch.stories.tsx#Default"})}catch(__react_docgen_typescript_loader_error){}try{InteractiveExample.displayName="InteractiveExample",InteractiveExample.__docgenInfo={description:"",displayName:"InteractiveExample",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/ui/uiSwitch/storyboard/UISwitch.stories.tsx#InteractiveExample"]={docgenInfo:InteractiveExample.__docgenInfo,name:"InteractiveExample",path:"src/ui/uiSwitch/storyboard/UISwitch.stories.tsx#InteractiveExample"})}catch(__react_docgen_typescript_loader_error){}},"./src/ui/uiSwitch/UISwitch.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>uiSwitch_UISwitch});const hooks_UseViewController=onValueChanged=>({handleOnValueChanged:event=>{if(onValueChanged){const value=event.target.checked;onValueChanged(value)}}});try{UseViewController.displayName="UseViewController",UseViewController.__docgenInfo={description:"",displayName:"UseViewController",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/ui/uiSwitch/hooks/UseViewController.tsx#UseViewController"]={docgenInfo:UseViewController.__docgenInfo,name:"UseViewController",path:"src/ui/uiSwitch/hooks/UseViewController.tsx#UseViewController"})}catch(__react_docgen_typescript_loader_error){}var react=__webpack_require__("./node_modules/react/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const UISwitch=props=>{const[controlId]=(0,react.useState)(((size=21)=>crypto.getRandomValues(new Uint8Array(size)).reduce(((id,byte)=>id+((byte&=63)<36?byte.toString(36):byte<62?(byte-26).toString(36).toUpperCase():byte>62?"-":"_")),""))()),{handleOnValueChanged}=hooks_UseViewController(props.onValueChanged);return(0,jsx_runtime.jsxs)("label",{className:"ui-switch",htmlFor:controlId,"data-testid":props.testId,children:[(0,jsx_runtime.jsx)("input",{type:"checkbox",id:controlId,checked:props.value,onChange:handleOnValueChanged}),(0,jsx_runtime.jsx)("span",{className:"ui-switch-background"}),(0,jsx_runtime.jsx)("span",{className:"ui-switch-button"})]})},uiSwitch_UISwitch=UISwitch;try{UISwitch.displayName="UISwitch",UISwitch.__docgenInfo={description:"",displayName:"UISwitch",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"boolean"}},testId:{defaultValue:null,description:"",name:"testId",required:!1,type:{name:"string"}},onValueChanged:{defaultValue:null,description:"",name:"onValueChanged",required:!1,type:{name:"((value: boolean) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/ui/uiSwitch/UISwitch.tsx#UISwitch"]={docgenInfo:UISwitch.__docgenInfo,name:"UISwitch",path:"src/ui/uiSwitch/UISwitch.tsx#UISwitch"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);