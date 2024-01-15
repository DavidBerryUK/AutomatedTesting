import useViewController from "./hooks/UseViewController";

interface IProperties {
  value: boolean;
  testId?: string;
  onValueChanged?: (value: boolean) => void;
}

const UISwitch: React.FC<IProperties> = (props) => {
  /********************************************/
  /* View Controller
  /********************************************/
  const { controlId, handleOnValueChanged } = useViewController(props.onValueChanged);

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
