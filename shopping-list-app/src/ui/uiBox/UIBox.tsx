import { ReactNode } from "react";
import IStyleMargin from "src/styles/interfaces/iStyleMargin";
import IStylePadding from "src/styles/interfaces/IStylePadding";
import useStyleSolverMargin from "src/styles/hooks/styleSolverMargin/useStyleSolverMargin";
import useClassMerge from "src/styles/hooks/classMerge/useClassMerge";
import useStyleSolverPadding from "src/styles/hooks/styleSolverPadding/useStyleSolverPadding";

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
  const paddingClass = useStyleSolverPadding(props);
  const marginClass = useStyleSolverMargin(props);
  const className = useClassMerge(["ui-box", paddingClass, marginClass]);

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
