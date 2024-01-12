import IStyleLabelWidth from "src/styles/interfaces/IStyleLabelWidth";
import useControlStyleSolver from "../hooks/UseControlStyleSolver";

describe("Create UILabel Styles", () => {
  test("provide no parameters, expect basic 'ui-label'", () => {
    var styleProperties: IStyleLabelWidth = {};
    var classNames = useControlStyleSolver(styleProperties);
    expect(classNames).toBe("ui-label");
  });
});
