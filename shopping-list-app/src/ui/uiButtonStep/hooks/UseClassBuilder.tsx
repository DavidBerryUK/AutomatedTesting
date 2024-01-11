/**
 * hook used to generate styles for the stop button
 * @param leadingRounded
 * @param trailingRounded
 * @returns
 */
const useClassBuilder = (
  leadingRounded: boolean = false,
  trailingRounded: boolean = false
): string => {
  let className = "ui-button-step";

  if (leadingRounded) {
    className += " leading-rounded";
  }
  if (trailingRounded) {
    className += " trailing-rounded";
  }

  return className;
};

export default useClassBuilder;
