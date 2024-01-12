import useClassMerge from "src/styles/hooks/classMerge/useClassMerge";
import IStyleLabelWidth from "src/styles/interfaces/IStyleLabelWidth";
import useStyleSolverLabelWidth from "src/styles/hooks/styleSolverLabelWidth/useStyleSolverLabelWidth";

/**
 * Create style for label dependant upon the style options provided
 * @param style - style options - see individual options and solvers
 * @returns
 */
const useControlStyleSolver = (style: IStyleLabelWidth): string => {
  const classWidth = useStyleSolverLabelWidth("", style);
  const className = useClassMerge(["ui-label", classWidth]);
  return className;
};

export default useControlStyleSolver;
