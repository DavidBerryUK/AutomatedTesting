import useStyleSolverLabelWidth from "src/styles/hooks/useStyleSolverLabelWidth";
import IStyleLabelWidth from "src/styles/interfaces/IStyleLabelWidth";

describe("Create UILabel width Styles", () => {
  test("extra small", () => {
    var styleProperties: IStyleLabelWidth = { extraSmall: true };
    var classNames = useStyleSolverLabelWidth("prefix", styleProperties);
    expect(classNames).toBe("prefix lbl-ex-small");
  });

  test("small", () => {
    var styleProperties: IStyleLabelWidth = { small: true };
    var classNames = useStyleSolverLabelWidth("prefix", styleProperties);
    expect(classNames).toBe("prefix lbl-small");
  });

  test("medium", () => {
    var styleProperties: IStyleLabelWidth = { medium: true };
    var classNames = useStyleSolverLabelWidth("prefix", styleProperties);
    expect(classNames).toBe("prefix lbl-medium");
  });

  test("wide", () => {
    var styleProperties: IStyleLabelWidth = { wide: true };
    var classNames = useStyleSolverLabelWidth("prefix", styleProperties);
    expect(classNames).toBe("prefix lbl-wide");
  });

  test("extra wide", () => {
    var styleProperties: IStyleLabelWidth = { extraWide: true };
    var classNames = useStyleSolverLabelWidth("prefix", styleProperties);
    expect(classNames).toBe("prefix lbl-ex-wide");
  });
});
