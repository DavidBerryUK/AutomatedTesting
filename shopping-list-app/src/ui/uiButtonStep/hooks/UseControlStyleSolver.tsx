import IStyleButtonStepper from "src/styles/interfaces/IStyleButtonStepper";

/**
 * hook used to generate styles for the stop button
 * @param leadingRounded
 * @param trailingRounded
 * @returns
 */
const useControlStyleSolver = (style: IStyleButtonStepper): string => {
  let className = "ui-button-step";

  if (style.leadingRounded) {
    className += " leading-rounded";
  }
  if (style.trailingRounded) {
    className += " trailing-rounded";
  }

  return className;
};

export default useControlStyleSolver;
