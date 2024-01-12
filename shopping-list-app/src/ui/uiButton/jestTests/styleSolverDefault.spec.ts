import useControlStyleSolver from "../hooks/UseControlStyleSolver";

describe("Create UIButton Styles", () => {
  test("provide no parameters, expect basic 'ui-button'", () => {
    var styleProperties = {};
    var classNames = useControlStyleSolver(styleProperties);
    expect(classNames).toBe("ui-button");
  });
});
