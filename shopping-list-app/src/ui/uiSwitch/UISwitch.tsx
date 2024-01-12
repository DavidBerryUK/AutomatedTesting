import useViewController from "./hooks/UseViewController";

interface IProperties {
  value: boolean;
  testId?: string;
  onValueChange?: (value: boolean) => void;
}

const UISwitch: React.FC<IProperties> = (props) => {
  /********************************************/
  /* View Controller
  /********************************************/
  const { controlId, handleOnValueChanged } = useViewController(props.onValueChange);

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
