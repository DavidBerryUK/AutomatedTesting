import useControlStyleSolver from "./hooks/UseControlStyleSolver";
import useViewController from "./hooks/UseViewController";
import IStyleButtonStepper from "../../styles/interfaces/IStyleButtonStepper";

type IProperties = {
  /**
   * Label to display on the button, idealy a single character
   */
  label: string;

  /**
   * optional test id
   */
  testId?: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
} & IStyleButtonStepper;

/**
 * Button to be used with the stepper control. Note that
 * the button can be rounded on the leading or trailing edge.
 *
 */
const UIButtonStep: React.FC<IProperties> = (props) => {
  /********************************************/
  /* build Styles                             */
  /********************************************/
  const className = useControlStyleSolver(props);

  /********************************************/
  /* View Controller                          *
  /********************************************/
  const { handleOnClickEvent } = useViewController(props.onClick);

  /********************************************/
  /* Template                                 */
  /********************************************/
  return (
    <button className={className} type="button" data-testid={props.testId} onClick={handleOnClickEvent}>
      {props.label}
    </button>
  );
};

export default UIButtonStep;
