import useViewController from "./hooks/UseViewController";

interface IProperties {
  /**
   * Current value of the number
   */
  value: number;
  /**
   * Optional test id
   */
  testId?: string;
  /**
   * Optional value change event
   */
  onValueChanged?: (value: number) => void;
}

/**
 * Control to display and edit a numeric value
 */
const UITextNumber: React.FC<IProperties> = (props) => {
  /********************************************/
  /* View Controller
  /********************************************/
  const { handleOnValueChanged } = useViewController(props.onValueChanged);

  /********************************************/
  /* Template                                 */
  /********************************************/
  return <input className="ui-text-number" value={props.value} data-testid={props.testId} onChange={handleOnValueChanged} />;
};

export default UITextNumber;
