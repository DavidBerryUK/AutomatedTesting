import useViewController from "./hooks/UseViewController";
import { nanoid } from "nanoid";
import { useState } from "react";

interface IProperties {
  value: boolean;
  testId?: string;
  onValueChanged?: (value: boolean) => void;
}

const UISwitch: React.FC<IProperties> = (props) => {
  // create unique value for control, this
  // is used to link the INPUT and LABEL control together
  //
  // IDEALLY THIS STATE WOULD BE IN THE VIEW CONTROLLER BUT IT
  // CAUSED JEST TO FAIL WHEN IMPORTING NANOID
  //
  const [controlId] = useState(nanoid());

  /********************************************/
  /* View Controller
  /********************************************/
  const { handleOnValueChanged } = useViewController(props.onValueChanged);

  /********************************************/
  /* Template                                 */
  /********************************************/
  return (
    <label className="ui-switch" htmlFor={controlId} data-testid={props.testId}>
      <input type="checkbox" id={controlId} checked={props.value} onChange={handleOnValueChanged} />
      <span className="ui-switch-background" />
      <span className="ui-switch-button" />
    </label>
  );
};

export default UISwitch;
