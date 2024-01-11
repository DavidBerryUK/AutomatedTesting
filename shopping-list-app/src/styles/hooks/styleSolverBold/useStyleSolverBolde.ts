//
// create consistant bold styles

import IStyleBold from "src/styles/interfaces/IStyleBold";

//
const useStyleSolverBold = (prefix: string, style: IStyleBold): string => {
  if (style.bold) {
    return `${prefix}bold`;
  }

  return ``;
};

export default useStyleSolverBold;
