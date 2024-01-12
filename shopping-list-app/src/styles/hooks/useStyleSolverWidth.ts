//
// create consistant size-styles

import IStyleWidth from "src/styles/interfaces/IStyleWidth";

//
const useStyleSolverWidth = (prefix: string, style: IStyleWidth): string => {
  if (style.widthStandard) {
    return `${prefix}width-standard`;
  }

  if (style.widthWide) {
    return `${prefix}width-wide`;
  }

  if (style.widthExtraWide) {
    return `${prefix}width-ex-wide`;
  }

  return ``;
};

export default useStyleSolverWidth;
