import IStyleLabelWidth from "src/styles/interfaces/IStyleLabelWidth";
//
// create consistant size-styles

//
const useStyleSolverLabelWidth = (prefix: string, style: IStyleLabelWidth): string => {
  if (style.extraSmall) {
    return `${prefix}lbl-ex-small`;
  }

  if (style.small) {
    return `${prefix}lbl-small`;
  }

  if (style.medium) {
    return `${prefix}lbl-medium`;
  }

  if (style.wide) {
    return `${prefix}lbl-wide`;
  }

  if (style.extraWide) {
    return `${prefix}lbl-ex-wide`;
  }

  return "";
};

export default useStyleSolverLabelWidth;
