//
// create consistant margins

import IStyleMargin from "src/styles/interfaces/iStyleMargin";

const useStyleSolverMargin = (style: IStyleMargin): string => {
  let className = "";

  for (const prop in style) {
    if (style.hasOwnProperty(prop) && isValidMarginStyle(prop) && (style as any)[prop] === true) {
      className = `${className}${prop} `;
    }
  }

  return className;
};

export default useStyleSolverMargin;

const isValidMarginStyle = (prop: string): boolean => {
  // Define the valid margin styles with exact matches
  const validMarginStyles = [
    "m1",
    "m2",
    "m3",
    "m4",
    "m5",
    "ml1",
    "ml2",
    "ml3",
    "ml4",
    "ml5",
    "mr1",
    "mr2",
    "mr3",
    "mr4",
    "mr5",
    "mt1",
    "mt2",
    "mt3",
    "mt4",
    "mt5",
    "mb1",
    "mb2",
    "mb3",
    "mb4",
    "mb5",
  ];

  // Check if the property is in the list of valid styles
  return validMarginStyles.includes(prop);
};
