//
// create consistant size-styles

import IStyleTextSize from "src/styles/interfaces/IStyleTextSize";

//
const useStyleSolverSize = (prefix: string, style: IStyleTextSize): string => {
  if (style.textSmall) {
    return `${prefix}txt-small`;
  }

  if (style.textLarge) {
    return `${prefix}txt-large`;
  }

  if (style.textExtraLarge) {
    return `${prefix}txt-ex-large`;
  }

  return ``;
};

export default useStyleSolverSize;
