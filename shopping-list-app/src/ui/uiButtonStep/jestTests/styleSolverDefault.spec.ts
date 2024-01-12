import IStyleButtonStepper from "src/styles/interfaces/IStyleButtonStepper";
import useControlStyleSolver from "../hooks/UseControlStyleSolver";

describe("Create UIButtonStep Styles", () => {
  //
  //
  test("provide no parameters, expect basic 'ui-button-step'", () => {
    var styleProperties: IStyleButtonStepper = {};
    var classNames = useControlStyleSolver(styleProperties);
    expect(classNames).toBe("ui-button-step");
  });
  //
  //
  test("leading rounded", () => {
    var styleProperties: IStyleButtonStepper = { leadingRounded: true };
    var classNames = useControlStyleSolver(styleProperties);
    expect(classNames).toBe("ui-button-step leading-rounded");
  });

  //
  //
  test("trailing rounded", () => {
    var styleProperties: IStyleButtonStepper = { trailingRounded: true };
    var classNames = useControlStyleSolver(styleProperties);
    expect(classNames).toBe("ui-button-step trailing-rounded");
  });

  //
  //
  test("leading and trailing rounded", () => {
    var styleProperties: IStyleButtonStepper = { leadingRounded: true, trailingRounded: true };
    var classNames = useControlStyleSolver(styleProperties);
    expect(classNames).toBe("ui-button-step leading-rounded trailing-rounded");
  });
});
