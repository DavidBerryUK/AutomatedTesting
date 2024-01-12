import { useState } from "react";
import UITextString from "../UITextString";

interface IProperties {
  value: string;
  testId?: string;
  onValueChanged: (value: string) => void;
}

/*
 * The test harness is used to wrap controls and manage their state
 * to allow state changes thoughout the string testing lifetime
 */
const UITextStringTestHarness: React.FC<IProperties> = (props) => {
  const [valueState, setValueState] = useState(props.value);

  const handleValueChangeEvent = (value: string) => {
    setValueState(value);
    props.onValueChanged(value);
  };

  return <UITextString value={valueState} testId={props.testId} onValueChanged={handleValueChangeEvent} />;
};

export default UITextStringTestHarness;
