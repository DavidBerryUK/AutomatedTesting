//
// create consistant padding

import IStylePadding from "src/styles/interfaces/IStylePadding";

const useStyleSolverPadding = (style: IStylePadding): string => {
  let className = "";

  for (const prop in style) {
    if (style.hasOwnProperty(prop) && isValidMarginStyle(prop) && (style as any)[prop] === true) {
      className = `${className}${prop} `;
    }
  }

  return className;
};

export default useStyleSolverPadding;

const isValidMarginStyle = (prop: string): boolean => {
  // Define the valid margin styles with exact matches
  const validMarginStyles = [
    "p1",
    "p2",
    "p3",
    "p4",
    "p5",
    "pl1",
    "pl2",
    "pl3",
    "pl4",
    "pl5",
    "pr1",
    "pr2",
    "pr3",
    "pr4",
    "pr5",
    "pt1",
    "pt2",
    "pt3",
    "pt4",
    "pt5",
    "pb1",
    "pb2",
    "pb3",
    "pb4",
    "pb5",
  ];

  // Check if the property is in the list of valid styles
  return validMarginStyles.includes(prop);
};
