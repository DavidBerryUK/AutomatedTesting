import IStyleBold from "src/styles/interfaces/IStyleBold";
import IStyleMargin from "src/styles/interfaces/iStyleMargin";
import IStylePadding from "src/styles/interfaces/IStylePadding";
import IStyleSize from "src/styles/interfaces/IStyleSize";
import IStyleTextSize from "src/styles/interfaces/IStyleTextSize";
import IStyleWidth from "src/styles/interfaces/IStyleWidth";
import useClassMerge from "src/styles/hooks/classMerge/useClassMerge";
import useStyleSolverBold from "src/styles/hooks/styleSolverBold/useStyleSolverBolde";
import useStyleSolverMargin from "src/styles/hooks/styleSolverMargin/useStyleSolverMargin";
import useStyleSolverPadding from "src/styles/hooks/styleSolverPadding/useStyleSolverPadding";
import useStyleSolverSive from "src/styles/hooks/styleSolverSize/useStyleSolverSize";
import useStyleSolverSize from "src/styles/hooks/styleSolverTextSize/useStyleSolverTextSize";
import useStyleSolverWidth from "src/styles/hooks/styleSolverWidth/useStyleSolverWidth";

/**
 * Create style for button dependant upon the style options provided
 * @param style - style options - see individual options and solvers
 * @returns
 */
const useControlStyleSolver = (style: IStyleTextSize & IStyleSize & IStyleWidth & IStyleBold & IStyleMargin & IStylePadding): string => {
  const classSize = useStyleSolverSive("btn-", style);
  const classWidth = useStyleSolverWidth("btn-", style);
  const classBold = useStyleSolverBold("btn-", style);
  const classText = useStyleSolverSize("btn-", style);
  const classPadding = useStyleSolverPadding(style);
  const classMargin = useStyleSolverMargin(style);
  const className = useClassMerge(["ui-button", classSize, classBold, classWidth, classText, classPadding, classMargin]);
  return className;
};

export default useControlStyleSolver;
