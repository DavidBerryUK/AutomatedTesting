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
  onValueChange?: (value: number) => void;
}

/**
 * Control to display and edit a numeric value
 */
const UITextNumber: React.FC<IProperties> = (props) => {
  /********************************************/
  /* Event Handlers                           *
  /********************************************/
  const handleOnValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (props.onValueChange) {
      const value = Number(event.target.value);
      if (isNaN(value)) {
        return;
      }
      props.onValueChange(value);
    }
  };

  /********************************************/
  /* Template                                 */
  /********************************************/
  return <input className="ui-text-number" value={props.value} data-testid={props.testId} onChange={handleOnValueChange} />;
};

export default UITextNumber;
