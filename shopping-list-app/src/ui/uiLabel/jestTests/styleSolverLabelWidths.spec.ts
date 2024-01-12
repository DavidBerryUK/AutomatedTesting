import IStyleLabelWidth from "src/styles/interfaces/IStyleLabelWidth";
import useControlStyleSolver from "../hooks/UseControlStyleSolver";

describe("Create UILabel width Styles", () => {
  test("extra small", () => {
    var styleProperties: IStyleLabelWidth = { extraSmall: true };
    var classNames = useControlStyleSolver(styleProperties);
    expect(classNames).toBe("ui-label lbl-ex-small");
  });

  test("small", () => {
    var styleProperties: IStyleLabelWidth = { small: true };
    var classNames = useControlStyleSolver(styleProperties);
    expect(classNames).toBe("ui-label lbl-small");
  });

  test("medium", () => {
    var styleProperties: IStyleLabelWidth = { medium: true };
    var classNames = useControlStyleSolver(styleProperties);
    expect(classNames).toBe("ui-label lbl-medium");
  });

  test("wide", () => {
    var styleProperties: IStyleLabelWidth = { wide: true };
    var classNames = useControlStyleSolver(styleProperties);
    expect(classNames).toBe("ui-label lbl-wide");
  });

  test("extra wide", () => {
    var styleProperties: IStyleLabelWidth = { extraWide: true };
    var classNames = useControlStyleSolver(styleProperties);
    expect(classNames).toBe("ui-label lbl-ex-wide");
  });
});
