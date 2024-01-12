import { ReactNode } from "react";
import IStyleMargin from "src/styles/interfaces/iStyleMargin";
import IStylePadding from "src/styles/interfaces/IStylePadding";
import useControlStyleSolver from "./hooks/UseControlStyleSolver";

/**
 * Control properties
 */
type IProperties = {
  testId?: string;
  children?: ReactNode;
} & /*
 *Style Properties
 */ IStyleMargin &
  IStylePadding;

/**
 * Simple box used for layouts, contains padding and margin options
 * @param testId - Optional parameter used for automated testing
 * @returns React Component for the button
 */
const UIBox: React.FC<IProperties> = (props) => {
  /********************************************/
  /* Create Styles
  /********************************************/
  const className = useControlStyleSolver(props);

  /********************************************/
  /* Template                                 */
  /********************************************/
  return (
    <div className={className} data-testid={props.testId}>
      {props.children}
    </div>
  );
};

export default UIBox;
