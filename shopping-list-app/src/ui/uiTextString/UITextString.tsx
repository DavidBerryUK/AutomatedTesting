import useViewController from "./hooks/useViewController";

interface IProperties {
  /**
   * Current value of the string
   */
  value: string;
  /**
   * Optional test id
   */
  testId?: string;
  /**
   * Optional value change event
   */
  onValueChanged?: (value: string) => void;
}

const UITextString: React.FC<IProperties> = (props) => {
  /********************************************/
  /* Event Handlers                           *
  /********************************************/
  const { handleOnValueChanged } = useViewController(props.onValueChanged);

  /********************************************/
  /* Template                                 */
  /********************************************/
  return <input className="ui-text-string" value={props.value} data-testid={props.testId} onChange={handleOnValueChanged} />;
};

export default UITextString;
