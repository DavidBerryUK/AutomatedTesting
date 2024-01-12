import useStyleSolverPadding from "src/styles/hooks/useStyleSolverPadding";
import IStylePadding from "src/styles/interfaces/IStylePadding";

describe("Create UIBox Styles", () => {
  test("provide no parameters, expect empty string", () => {
    var styleProperties = {};
    var classNames = useStyleSolverPadding(styleProperties);
    expect(classNames).toBe("");
  });

  test("margins 'all' with different sizes, expect valid class names", () => {
    var styleMarginAll_1: IStylePadding = { p1: true };
    var styleMarginAll_2: IStylePadding = { p2: true };
    var styleMarginAll_3: IStylePadding = { p3: true };
    var styleMarginAll_4: IStylePadding = { p4: true };
    var styleMarginAll_5: IStylePadding = { p5: true };

    var classNames1 = useStyleSolverPadding(styleMarginAll_1);
    var classNames2 = useStyleSolverPadding(styleMarginAll_2);
    var classNames3 = useStyleSolverPadding(styleMarginAll_3);
    var classNames4 = useStyleSolverPadding(styleMarginAll_4);
    var classNames5 = useStyleSolverPadding(styleMarginAll_5);

    expect(classNames1).toBe("p1");
    expect(classNames2).toBe("p2");
    expect(classNames3).toBe("p3");
    expect(classNames4).toBe("p4");
    expect(classNames5).toBe("p5");
  });

  test("margins 'left' with different sizes, expect valid class names", () => {
    var styleMarginLeft_1: IStylePadding = { pl1: true };
    var styleMarginLeft_2: IStylePadding = { pl2: true };
    var styleMarginLeft_3: IStylePadding = { pl3: true };
    var styleMarginLeft_4: IStylePadding = { pl4: true };
    var styleMarginLeft_5: IStylePadding = { pl5: true };

    var classNames1 = useStyleSolverPadding(styleMarginLeft_1);
    var classNames2 = useStyleSolverPadding(styleMarginLeft_2);
    var classNames3 = useStyleSolverPadding(styleMarginLeft_3);
    var classNames4 = useStyleSolverPadding(styleMarginLeft_4);
    var classNames5 = useStyleSolverPadding(styleMarginLeft_5);

    expect(classNames1).toBe("pl1");
    expect(classNames2).toBe("pl2");
    expect(classNames3).toBe("pl3");
    expect(classNames4).toBe("pl4");
    expect(classNames5).toBe("pl5");
  });

  test("margins 'right' with different sizes, expect valid class names", () => {
    var styleMarginRight_1: IStylePadding = { pr1: true };
    var styleMarginRight_2: IStylePadding = { pr2: true };
    var styleMarginRight_3: IStylePadding = { pr3: true };
    var styleMarginRight_4: IStylePadding = { pr4: true };
    var styleMarginRight_5: IStylePadding = { pr5: true };

    var classNames1 = useStyleSolverPadding(styleMarginRight_1);
    var classNames2 = useStyleSolverPadding(styleMarginRight_2);
    var classNames3 = useStyleSolverPadding(styleMarginRight_3);
    var classNames4 = useStyleSolverPadding(styleMarginRight_4);
    var classNames5 = useStyleSolverPadding(styleMarginRight_5);

    expect(classNames1).toBe("pr1");
    expect(classNames2).toBe("pr2");
    expect(classNames3).toBe("pr3");
    expect(classNames4).toBe("pr4");
    expect(classNames5).toBe("pr5");
  });

  test("margins 'top' with different sizes, expect valid class names", () => {
    var styleMarginTop_1: IStylePadding = { pt1: true };
    var styleMarginTop_2: IStylePadding = { pt2: true };
    var styleMarginTop_3: IStylePadding = { pt3: true };
    var styleMarginTop_4: IStylePadding = { pt4: true };
    var styleMarginTop_5: IStylePadding = { pt5: true };

    var classNames1 = useStyleSolverPadding(styleMarginTop_1);
    var classNames2 = useStyleSolverPadding(styleMarginTop_2);
    var classNames3 = useStyleSolverPadding(styleMarginTop_3);
    var classNames4 = useStyleSolverPadding(styleMarginTop_4);
    var classNames5 = useStyleSolverPadding(styleMarginTop_5);

    expect(classNames1).toBe("pt1");
    expect(classNames2).toBe("pt2");
    expect(classNames3).toBe("pt3");
    expect(classNames4).toBe("pt4");
    expect(classNames5).toBe("pt5");
  });

  test("margins 'bottom' with different sizes, expect valid class names", () => {
    var styleMarginBottom_1: IStylePadding = { pb1: true };
    var styleMarginBottom_2: IStylePadding = { pb2: true };
    var styleMarginBottom_3: IStylePadding = { pb3: true };
    var styleMarginBottom_4: IStylePadding = { pb4: true };
    var styleMarginBottom_5: IStylePadding = { pb5: true };

    var classNames1 = useStyleSolverPadding(styleMarginBottom_1);
    var classNames2 = useStyleSolverPadding(styleMarginBottom_2);
    var classNames3 = useStyleSolverPadding(styleMarginBottom_3);
    var classNames4 = useStyleSolverPadding(styleMarginBottom_4);
    var classNames5 = useStyleSolverPadding(styleMarginBottom_5);

    expect(classNames1).toBe("pb1");
    expect(classNames2).toBe("pb2");
    expect(classNames3).toBe("pb3");
    expect(classNames4).toBe("pb4");
    expect(classNames5).toBe("pb5");
  });

  test("margins mix of different parameters expect valid class names", () => {
    var style: IStylePadding = { pb1: true, pt5: true, pl3: true, pr4: true };
    var classNames = useStyleSolverPadding(style);
    expect(classNames).toBe("pb1 pt5 pl3 pr4");
  });
});
