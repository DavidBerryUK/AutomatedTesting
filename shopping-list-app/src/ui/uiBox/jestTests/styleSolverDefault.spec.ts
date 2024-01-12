import useControlStyleSolver from "../hooks/UseControlStyleSolver";

describe("Create UIBox Styles", () => {
  test("provide no parameters, expect basic 'ui-box'", () => {
    var styleProperties = {};
    var classNames = useControlStyleSolver(styleProperties);
    expect(classNames).toBe("ui-box");
  });
});
