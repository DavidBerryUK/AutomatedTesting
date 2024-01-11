import UIButtonStep from "../uiButtonStep/UIButtonStep";
import UITextNumber from "../uiTextNumber/UITextNumber";
import useViewController from "./hooks/UseViewController";

/**
 * The stepper control consists of
 * [UIButtonStep][UITextNumber][UIButtonStep]
 *
 * the [UIButtonStep] buttons increase and decreate the value,
 * the [UITextNumber] control allows direct editing of the control
 *
 * When the value changes, the [onValueChange] event is raised, note
 * that the value can not go below 0.
 */
interface IProperties {
  value: number;
  testId?: string;
  buttonAddTestId?: string;
  buttonSubtractTestId?: string;
  txtValueTestId?: string;
  onValueChange?: (value: number) => void;
}

/**
 * @param value                 The current value of the stepper
 * @param testId                Optional parameter used to decorate control for automated testing
 * @param buttonSubtractTestId  Optional parameter used to decorate decrement button for automated testing
 * @param txtValueTestId        Optional parameter used to decorate the text value for automated testing
 * @param buttonAddTestId       Optional parameter used to decorate increment button for automated testing
 * @param onValueChange         Optional callback that is raised when user interaction causes the value to change
 * @returns
 */
const UIStepper: React.FC<IProperties> = (props) => {
  /********************************************/
  /* View Controller                          *
  /********************************************/
  const { handleOnValueChanged, handleOnButtonIncrementEvent, handleOnButtonSubtractEvent } = useViewController(
    props.value,
    props.onValueChange
  );

  /********************************************/
  /* Template                                 */
  /********************************************/
  return (
    <div className="ui-stepper" data-testid={props.testId}>
      <UIButtonStep leadingRounded label="-" onClick={handleOnButtonSubtractEvent} testId={props.buttonSubtractTestId} />
      <UITextNumber value={props.value} onValueChange={handleOnValueChanged} testId={props.txtValueTestId} />
      <UIButtonStep trailingRounded label="+" onClick={handleOnButtonIncrementEvent} testId={props.buttonAddTestId} />
    </div>
  );
};

export default UIStepper;
