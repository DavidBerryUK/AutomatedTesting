(self.webpackChunkshopping_list_app=self.webpackChunkshopping_list_app||[]).push([[622],{"./src/ui/uiStepper/storyboard/UIStepper.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,InteractiveExample:()=>InteractiveExample,TestAddButton:()=>TestAddButton,TestSubtractButton:()=>TestSubtractButton,TestSubtractMinZero:()=>TestSubtractMinZero,TestTypeNewValue:()=>TestTypeNewValue,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_jest__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@storybook/jest/dist/index.mjs"),_storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/testing-library/dist/index.mjs"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_UIStepper__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/ui/uiStepper/UIStepper.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"UI/UIStepper",component:_UIStepper__WEBPACK_IMPORTED_MODULE_2__.Z,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{value:{control:{type:"number",min:0,max:30,step:1}},onValueChanged:{action:"value changed"}}},Default={args:{value:2}},InteractiveExample=()=>{const[value,setValue]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_UIStepper__WEBPACK_IMPORTED_MODULE_2__.Z,{value,onValueChanged:newValue=>{setValue(newValue)}})},TestSubtractButton={args:{buttonSubtractTestId:"stepper-button-subtract",value:10,onValueChanged:_storybook_jest__WEBPACK_IMPORTED_MODULE_4__.e.fn()},play:async _ref=>{let{canvasElement}=_ref;const refButton=(0,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__.uh)(canvasElement).getByTestId("stepper-button-subtract");await _storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__.mV.click(refButton),await(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_4__.l)(TestSubtractButton.args.onValueChanged).toHaveBeenCalledWith(9)}},TestSubtractMinZero={args:{buttonSubtractTestId:"stepper-button-subtract",value:0,onValueChanged:_storybook_jest__WEBPACK_IMPORTED_MODULE_4__.e.fn()},play:async _ref2=>{let{canvasElement}=_ref2;const refButton=(0,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__.uh)(canvasElement).getByTestId("stepper-button-subtract");await _storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__.mV.click(refButton),await(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_4__.l)(TestSubtractMinZero.args.onValueChanged).toHaveBeenCalledTimes(0)}},TestAddButton={args:{buttonAddTestId:"stepper-button-add",value:10,onValueChanged:_storybook_jest__WEBPACK_IMPORTED_MODULE_4__.e.fn()},play:async _ref3=>{let{canvasElement}=_ref3;const refButton=(0,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__.uh)(canvasElement).getByTestId("stepper-button-add");await _storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__.mV.click(refButton),await(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_4__.l)(TestAddButton.args.onValueChanged).toHaveBeenCalledWith(11)}},TestTypeNewValue={args:{txtValueTestId:"text-number-demo",value:10,onValueChanged:_storybook_jest__WEBPACK_IMPORTED_MODULE_4__.e.fn()},play:async _ref4=>{let{canvasElement}=_ref4;const refTextBox=(0,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__.uh)(canvasElement).getByTestId("text-number-demo");await _storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__.mV.type(refTextBox,"5",{initialSelectionStart:0,initialSelectionEnd:1e3}),await(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_4__.l)(TestTypeNewValue.args.onValueChanged).toHaveBeenCalledWith(5)}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    value: 2\n  }\n}",...Default.parameters?.docs?.source}}},InteractiveExample.parameters={...InteractiveExample.parameters,docs:{...InteractiveExample.parameters?.docs,source:{originalSource:"() => {\n  const [value, setValue] = useState(1);\n  return <UIStepper value={value} onValueChanged={newValue => {\n    setValue(newValue);\n  }} />;\n}",...InteractiveExample.parameters?.docs?.source}}},TestSubtractButton.parameters={...TestSubtractButton.parameters,docs:{...TestSubtractButton.parameters?.docs,source:{originalSource:'{\n  args: {\n    buttonSubtractTestId: "stepper-button-subtract",\n    value: 10,\n    onValueChanged: jest.fn()\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    const refButton = canvas.getByTestId("stepper-button-subtract");\n    await userEvent.click(refButton);\n    await expect(TestSubtractButton.args.onValueChanged).toHaveBeenCalledWith(9);\n  }\n}',...TestSubtractButton.parameters?.docs?.source}}},TestSubtractMinZero.parameters={...TestSubtractMinZero.parameters,docs:{...TestSubtractMinZero.parameters?.docs,source:{originalSource:'{\n  args: {\n    buttonSubtractTestId: "stepper-button-subtract",\n    value: 0,\n    onValueChanged: jest.fn()\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    const refButton = canvas.getByTestId("stepper-button-subtract");\n    await userEvent.click(refButton);\n    // should not be called when value is zero\n    await expect(TestSubtractMinZero.args.onValueChanged).toHaveBeenCalledTimes(0);\n  }\n}',...TestSubtractMinZero.parameters?.docs?.source}}},TestAddButton.parameters={...TestAddButton.parameters,docs:{...TestAddButton.parameters?.docs,source:{originalSource:'{\n  args: {\n    buttonAddTestId: "stepper-button-add",\n    value: 10,\n    onValueChanged: jest.fn()\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    const refButton = canvas.getByTestId("stepper-button-add");\n    await userEvent.click(refButton);\n    await expect(TestAddButton.args.onValueChanged).toHaveBeenCalledWith(11);\n  }\n}',...TestAddButton.parameters?.docs?.source}}},TestTypeNewValue.parameters={...TestTypeNewValue.parameters,docs:{...TestTypeNewValue.parameters?.docs,source:{originalSource:'{\n  args: {\n    txtValueTestId: "text-number-demo",\n    value: 10,\n    onValueChanged: jest.fn()\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    const refTextBox = canvas.getByTestId("text-number-demo");\n    await userEvent.type(refTextBox, "5", {\n      initialSelectionStart: 0,\n      initialSelectionEnd: 1000\n    });\n    await expect(TestTypeNewValue.args.onValueChanged).toHaveBeenCalledWith(5);\n  }\n}',...TestTypeNewValue.parameters?.docs?.source}}};const __namedExportsOrder=["Default","InteractiveExample","TestSubtractButton","TestSubtractMinZero","TestAddButton","TestTypeNewValue"];try{InteractiveExample.displayName="InteractiveExample",InteractiveExample.__docgenInfo={description:"",displayName:"InteractiveExample",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/ui/uiStepper/storyboard/UIStepper.stories.tsx#InteractiveExample"]={docgenInfo:InteractiveExample.__docgenInfo,name:"InteractiveExample",path:"src/ui/uiStepper/storyboard/UIStepper.stories.tsx#InteractiveExample"})}catch(__react_docgen_typescript_loader_error){}},"./src/ui/uiButtonStep/UIButtonStep.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>uiButtonStep_UIButtonStep});const hooks_UseControlStyleSolver=style=>{let className="ui-button-step";return style.leadingRounded&&(className+=" leading-rounded"),style.trailingRounded&&(className+=" trailing-rounded"),className};try{UseControlStyleSolver.displayName="UseControlStyleSolver",UseControlStyleSolver.__docgenInfo={description:"hook used to generate styles for the stop button",displayName:"UseControlStyleSolver",props:{leadingRounded:{defaultValue:null,description:"is the leading edge rounded",name:"leadingRounded",required:!1,type:{name:"boolean"}},trailingRounded:{defaultValue:null,description:"is the trailing edge rounded",name:"trailingRounded",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/ui/uiButtonStep/hooks/UseControlStyleSolver.tsx#UseControlStyleSolver"]={docgenInfo:UseControlStyleSolver.__docgenInfo,name:"UseControlStyleSolver",path:"src/ui/uiButtonStep/hooks/UseControlStyleSolver.tsx#UseControlStyleSolver"})}catch(__react_docgen_typescript_loader_error){}const hooks_UseViewController=onClick=>({handleOnClickEvent:()=>{onClick&&onClick()}});try{UseViewController.displayName="UseViewController",UseViewController.__docgenInfo={description:"View controller for UI Button, seperates logic from compoment\nfor easier testing",displayName:"UseViewController",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/ui/uiButtonStep/hooks/UseViewController.tsx#UseViewController"]={docgenInfo:UseViewController.__docgenInfo,name:"UseViewController",path:"src/ui/uiButtonStep/hooks/UseViewController.tsx#UseViewController"})}catch(__react_docgen_typescript_loader_error){}var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const UIButtonStep=props=>{const className=hooks_UseControlStyleSolver(props),{handleOnClickEvent}=hooks_UseViewController(props.onClick);return(0,jsx_runtime.jsx)("button",{className,type:"button","data-testid":props.testId,onClick:handleOnClickEvent,children:props.label})},uiButtonStep_UIButtonStep=UIButtonStep;try{UIButtonStep.displayName="UIButtonStep",UIButtonStep.__docgenInfo={description:"Button to be used with the stepper control. Note that\nthe button can be rounded on the leading or trailing edge.",displayName:"UIButtonStep",props:{label:{defaultValue:null,description:"Label to display on the button, idealy a single character",name:"label",required:!0,type:{name:"string"}},testId:{defaultValue:null,description:"optional test id",name:"testId",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"Optional click handler",name:"onClick",required:!1,type:{name:"(() => void)"}},leadingRounded:{defaultValue:null,description:"is the leading edge rounded",name:"leadingRounded",required:!1,type:{name:"boolean"}},trailingRounded:{defaultValue:null,description:"is the trailing edge rounded",name:"trailingRounded",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/ui/uiButtonStep/UIButtonStep.tsx#UIButtonStep"]={docgenInfo:UIButtonStep.__docgenInfo,name:"UIButtonStep",path:"src/ui/uiButtonStep/UIButtonStep.tsx#UIButtonStep"})}catch(__react_docgen_typescript_loader_error){}},"./src/ui/uiStepper/UIStepper.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>uiStepper_UIStepper});var UIButtonStep=__webpack_require__("./src/ui/uiButtonStep/UIButtonStep.tsx"),UITextNumber=__webpack_require__("./src/ui/uiTextNumber/UITextNumber.tsx");const hooks_UseViewController=(value,onValueChanged)=>({handleOnButtonIncrementEvent:()=>{onValueChanged&&onValueChanged(value+1)},handleOnButtonSubtractEvent:()=>{onValueChanged&&value>0&&onValueChanged(value-1)},handleOnValueChanged:newValue=>{onValueChanged&&newValue>=0&&onValueChanged(newValue)}});try{UseViewController.displayName="UseViewController",UseViewController.__docgenInfo={description:"Hook for managing a counter with increment and decrement functionality.\n\nThe controller manages events that control the stepper value.\nnote that the value can not go below 0",displayName:"UseViewController",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/ui/uiStepper/hooks/UseViewController.tsx#UseViewController"]={docgenInfo:UseViewController.__docgenInfo,name:"UseViewController",path:"src/ui/uiStepper/hooks/UseViewController.tsx#UseViewController"})}catch(__react_docgen_typescript_loader_error){}var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const UIStepper=props=>{const{handleOnValueChanged,handleOnButtonIncrementEvent,handleOnButtonSubtractEvent}=hooks_UseViewController(props.value,props.onValueChanged);return(0,jsx_runtime.jsxs)("div",{className:"ui-stepper","data-testid":props.testId,children:[(0,jsx_runtime.jsx)(UIButtonStep.Z,{leadingRounded:!0,label:"-",onClick:handleOnButtonSubtractEvent,testId:props.buttonSubtractTestId}),(0,jsx_runtime.jsx)(UITextNumber.Z,{value:props.value,onValueChanged:handleOnValueChanged,testId:props.txtValueTestId}),(0,jsx_runtime.jsx)(UIButtonStep.Z,{trailingRounded:!0,label:"+",onClick:handleOnButtonIncrementEvent,testId:props.buttonAddTestId})]})},uiStepper_UIStepper=UIStepper;try{UIStepper.displayName="UIStepper",UIStepper.__docgenInfo={description:"",displayName:"UIStepper",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"number"}},testId:{defaultValue:null,description:"",name:"testId",required:!1,type:{name:"string"}},buttonAddTestId:{defaultValue:null,description:"",name:"buttonAddTestId",required:!1,type:{name:"string"}},buttonSubtractTestId:{defaultValue:null,description:"",name:"buttonSubtractTestId",required:!1,type:{name:"string"}},txtValueTestId:{defaultValue:null,description:"",name:"txtValueTestId",required:!1,type:{name:"string"}},onValueChanged:{defaultValue:null,description:"",name:"onValueChanged",required:!1,type:{name:"((value: number) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/ui/uiStepper/UIStepper.tsx#UIStepper"]={docgenInfo:UIStepper.__docgenInfo,name:"UIStepper",path:"src/ui/uiStepper/UIStepper.tsx#UIStepper"})}catch(__react_docgen_typescript_loader_error){}},"./src/ui/uiTextNumber/UITextNumber.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>uiTextNumber_UITextNumber});const hooks_UseViewController=onValueChanged=>({handleOnValueChanged:event=>{if(onValueChanged){const value=Number(event.target.value);if(isNaN(value))return;onValueChanged(value)}}});try{UseViewController.displayName="UseViewController",UseViewController.__docgenInfo={description:"View controller for UI Button, seperates logic from compoment\nfor easier testing",displayName:"UseViewController",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/ui/uiTextNumber/hooks/UseViewController.tsx#UseViewController"]={docgenInfo:UseViewController.__docgenInfo,name:"UseViewController",path:"src/ui/uiTextNumber/hooks/UseViewController.tsx#UseViewController"})}catch(__react_docgen_typescript_loader_error){}var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const UITextNumber=props=>{const{handleOnValueChanged}=hooks_UseViewController(props.onValueChanged);return(0,jsx_runtime.jsx)("input",{className:"ui-text-number",value:props.value,"data-testid":props.testId,onChange:handleOnValueChanged})},uiTextNumber_UITextNumber=UITextNumber;try{UITextNumber.displayName="UITextNumber",UITextNumber.__docgenInfo={description:"Control to display and edit a numeric value",displayName:"UITextNumber",props:{value:{defaultValue:null,description:"Current value of the number",name:"value",required:!0,type:{name:"number"}},testId:{defaultValue:null,description:"Optional test id",name:"testId",required:!1,type:{name:"string"}},onValueChanged:{defaultValue:null,description:"Optional value change event",name:"onValueChanged",required:!1,type:{name:"((value: number) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/ui/uiTextNumber/UITextNumber.tsx#UITextNumber"]={docgenInfo:UITextNumber.__docgenInfo,name:"UITextNumber",path:"src/ui/uiTextNumber/UITextNumber.tsx#UITextNumber"})}catch(__react_docgen_typescript_loader_error){}},"?4f7e":()=>{}}]);