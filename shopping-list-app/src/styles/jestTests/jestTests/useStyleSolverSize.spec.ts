import useStyleSolverSize from "src/styles/hooks/useStyleSolverSize";
import IStyleSize from "src/styles/interfaces/IStyleSize";

describe("Create UILabel width Styles", () => {
  test("extra small", () => {
    var styleProperties: IStyleSize = { small: true };
    var classNames = useStyleSolverSize("prefix-", styleProperties);
    expect(classNames).toBe("prefix-small");
  });

  test("small", () => {
    var styleProperties: IStyleSize = { large: true };
    var classNames = useStyleSolverSize("prefix-", styleProperties);
    expect(classNames).toBe("prefix-large");
  });

  test("medium", () => {
    var styleProperties: IStyleSize = { extraLarge: true };
    var classNames = useStyleSolverSize("prefix-", styleProperties);
    expect(classNames).toBe("prefix-ex-large");
  });
});
