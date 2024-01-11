import IStyleSize from "src/styles/interfaces/IStyleSize";
import IStyleTextSize from "src/styles/interfaces/IStyleTextSize";
import IStyleWidth from "src/styles/interfaces/IStyleWidth";
import useViewController from "./hooks/UseViewController";
import IStyleBold from "src/styles/interfaces/IStyleBold";
import useButtonStyle from "./hooks/UseButtonStyle";
import IStyleMargin from "src/styles/interfaces/iStyleMargin";
import IStylePadding from "src/styles/interfaces/IStylePadding";

/**
 * Control properties
 */
type IProperties = {
  label: string;
  // State
  disabled?: boolean;
  // test id
  testId?: string;
  // events
  onClick?: () => void;
} & /*
 *Style Properties
 */ IStyleTextSize &
  IStyleSize &
  IStyleWidth &
  IStyleTextSize &
  IStyleBold &
  IStyleMargin &
  IStylePadding;

/**
 * Simple button with label that can be pressed
 * @param label - The text that appears on the button
 * @param testId - Optional parameter used for automated testing
 * @Param onClick - The optional call back that is executed when the button is pressed
 * @returns React Component for the button
 */
const UIButton: React.FC<IProperties> = (props) => {
  /********************************************/
  /* Create Styles
  /********************************************/
  const className = useButtonStyle(props);

  /********************************************/
  /* View Controller
  /********************************************/
  const { handleOnClickEvent } = useViewController(props.onClick);

  /********************************************/
  /* Template                                 */
  /********************************************/
  return (
    <button className={className} type="button" disabled={props.disabled} data-testid={props.testId} onClick={handleOnClickEvent}>
      {props.label}
    </button>
  );
};

export default UIButton;
