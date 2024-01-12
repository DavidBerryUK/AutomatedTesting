import { ReactNode } from "react";
import IStyleLabelWidth from "../../styles/interfaces/IStyleLabelWidth";
import useControlStyleSolver from "./hooks/UseControlStyleSolver";

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
  const className = useControlStyleSolver(props);

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
