import useClassMerge from "src/styles/hooks/classMerge/useClassMerge";
import useStyleSolverMargin from "src/styles/hooks/styleSolverMargin/useStyleSolverMargin";
import useStyleSolverPadding from "src/styles/hooks/styleSolverPadding/useStyleSolverPadding";
import IStylePadding from "src/styles/interfaces/IStylePadding";
import IStyleMargin from "src/styles/interfaces/iStyleMargin";

/**
 * Create class names for the UIBOX UI Component based upon
 * the provided parameters
 *
 * @param style properties passed into the UIBox control for styling
 * @returns string of space delimited css class names
 */
const useControlStyleSolver = (style: IStyleMargin & IStylePadding): string => {
  const paddingClass = useStyleSolverPadding(style);
  const marginClass = useStyleSolverMargin(style);
  const className = useClassMerge(["ui-box", paddingClass, marginClass]);
  return className;
};

export default useControlStyleSolver;
