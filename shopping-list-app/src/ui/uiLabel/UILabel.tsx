import { ReactNode } from "react";
import IStyleLabelWidth from "../../styles/interfaces/IStyleLabelWidth";
import useClassMerge from "src/styles/hooks/classMerge/useClassMerge";
import useStyleSolverLabelWidth from "src/styles/hooks/styleSolverLabelWidth/useStyleSolverLabelWidth";

type IProperties = {
  label?: string;
  flex?: boolean;
  children?: ReactNode;
  testId?: string;
} & IStyleLabelWidth;

const UILabel: React.FC<IProperties> = (props) => {
  /********************************************/
  /* Resolve Style                            */
  /********************************************/
  const classWidth = useStyleSolverLabelWidth("", props);
  const className = useClassMerge(["ui-label", classWidth]);

  /********************************************/
  /* Template                                 */
  /********************************************/
  return (
    <label className={className} data-testid={props.testId}>
      <span className="lbl-text">{props.label}</span>
      {props.children}
    </label>
  );
};

export default UILabel;
