//
// create consistant size-styles

import IStyleSize from "src/styles/interfaces/IStyleSize";

//
const useStyleSolverSive = (prefix: string, style: IStyleSize): string => {
  if (style.small) {
    return `${prefix}small`;
  }

  if (style.large) {
    return `${prefix}large`;
  }

  if (style.extraLarge) {
    return `${prefix}ex-large`;
  }

  return ``;
};

export default useStyleSolverSive;
