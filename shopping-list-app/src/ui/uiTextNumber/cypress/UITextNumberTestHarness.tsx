import { useState } from "react";
import UITextNumber from "../UITextNumber";
import "../../../styles/styles.scss";

interface IProperties {
  value: number;
  testId?: string;
  onValueChange: (value: number) => void;
}

/**
 * The test harness is used to wrap controls and manage their state
 * to allow state changes thoughout the component testing lifetime
 */
const UITextNumberTestHarness: React.FC<IProperties> = (props) => {
  const [valueState, setValueState] = useState(props.value);

  const handleValueChangeEvent = (value: number) => {
    setValueState(value);
    props.onValueChanged(value);
  };

  return <UITextNumber value={valueState} testId={props.testId} onValueChange={handleValueChangeEvent} />;
};

export default UITextNumberTestHarness;
