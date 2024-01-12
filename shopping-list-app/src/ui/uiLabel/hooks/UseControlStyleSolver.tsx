import useClassMerge from "src/styles/hooks/useClassMerge";
import IStyleLabelWidth from "src/styles/interfaces/IStyleLabelWidth";
import useStyleSolverLabelWidth from "src/styles/hooks/useStyleSolverLabelWidth";

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
