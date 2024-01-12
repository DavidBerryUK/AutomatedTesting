import useStyleSolverMargin from "src/styles/hooks/useStyleSolverMargin";
import IStyleMargin from "src/styles/interfaces/iStyleMargin";

describe("Create UIBox Styles", () => {
  test("provide no parameters, expect empty string", () => {
    var styleProperties = {};
    var classNames = useStyleSolverMargin(styleProperties);
    expect(classNames).toBe("");
  });

  test("margins 'all' with different sizes, expect valid class names", () => {
    var styleMarginAll_1: IStyleMargin = { m1: true };
    var styleMarginAll_2: IStyleMargin = { m2: true };
    var styleMarginAll_3: IStyleMargin = { m3: true };
    var styleMarginAll_4: IStyleMargin = { m4: true };
    var styleMarginAll_5: IStyleMargin = { m5: true };

    var classNames1 = useStyleSolverMargin(styleMarginAll_1);
    var classNames2 = useStyleSolverMargin(styleMarginAll_2);
    var classNames3 = useStyleSolverMargin(styleMarginAll_3);
    var classNames4 = useStyleSolverMargin(styleMarginAll_4);
    var classNames5 = useStyleSolverMargin(styleMarginAll_5);

    expect(classNames1).toBe("m1");
    expect(classNames2).toBe("m2");
    expect(classNames3).toBe("m3");
    expect(classNames4).toBe("m4");
    expect(classNames5).toBe("m5");
  });

  test("margins 'left' with different sizes, expect valid class names", () => {
    var styleMarginLeft_1: IStyleMargin = { ml1: true };
    var styleMarginLeft_2: IStyleMargin = { ml2: true };
    var styleMarginLeft_3: IStyleMargin = { ml3: true };
    var styleMarginLeft_4: IStyleMargin = { ml4: true };
    var styleMarginLeft_5: IStyleMargin = { ml5: true };

    var classNames1 = useStyleSolverMargin(styleMarginLeft_1);
    var classNames2 = useStyleSolverMargin(styleMarginLeft_2);
    var classNames3 = useStyleSolverMargin(styleMarginLeft_3);
    var classNames4 = useStyleSolverMargin(styleMarginLeft_4);
    var classNames5 = useStyleSolverMargin(styleMarginLeft_5);

    expect(classNames1).toBe("ml1");
    expect(classNames2).toBe("ml2");
    expect(classNames3).toBe("ml3");
    expect(classNames4).toBe("ml4");
    expect(classNames5).toBe("ml5");
  });

  test("margins 'right' with different sizes, expect valid class names", () => {
    var styleMarginRight_1: IStyleMargin = { mr1: true };
    var styleMarginRight_2: IStyleMargin = { mr2: true };
    var styleMarginRight_3: IStyleMargin = { mr3: true };
    var styleMarginRight_4: IStyleMargin = { mr4: true };
    var styleMarginRight_5: IStyleMargin = { mr5: true };

    var classNames1 = useStyleSolverMargin(styleMarginRight_1);
    var classNames2 = useStyleSolverMargin(styleMarginRight_2);
    var classNames3 = useStyleSolverMargin(styleMarginRight_3);
    var classNames4 = useStyleSolverMargin(styleMarginRight_4);
    var classNames5 = useStyleSolverMargin(styleMarginRight_5);

    expect(classNames1).toBe("mr1");
    expect(classNames2).toBe("mr2");
    expect(classNames3).toBe("mr3");
    expect(classNames4).toBe("mr4");
    expect(classNames5).toBe("mr5");
  });

  test("margins 'top' with different sizes, expect valid class names", () => {
    var styleMarginTop_1: IStyleMargin = { mt1: true };
    var styleMarginTop_2: IStyleMargin = { mt2: true };
    var styleMarginTop_3: IStyleMargin = { mt3: true };
    var styleMarginTop_4: IStyleMargin = { mt4: true };
    var styleMarginTop_5: IStyleMargin = { mt5: true };

    var classNames1 = useStyleSolverMargin(styleMarginTop_1);
    var classNames2 = useStyleSolverMargin(styleMarginTop_2);
    var classNames3 = useStyleSolverMargin(styleMarginTop_3);
    var classNames4 = useStyleSolverMargin(styleMarginTop_4);
    var classNames5 = useStyleSolverMargin(styleMarginTop_5);

    expect(classNames1).toBe("mt1");
    expect(classNames2).toBe("mt2");
    expect(classNames3).toBe("mt3");
    expect(classNames4).toBe("mt4");
    expect(classNames5).toBe("mt5");
  });

  test("margins 'bottom' with different sizes, expect valid class names", () => {
    var styleMarginBottom_1: IStyleMargin = { mb1: true };
    var styleMarginBottom_2: IStyleMargin = { mb2: true };
    var styleMarginBottom_3: IStyleMargin = { mb3: true };
    var styleMarginBottom_4: IStyleMargin = { mb4: true };
    var styleMarginBottom_5: IStyleMargin = { mb5: true };

    var classNames1 = useStyleSolverMargin(styleMarginBottom_1);
    var classNames2 = useStyleSolverMargin(styleMarginBottom_2);
    var classNames3 = useStyleSolverMargin(styleMarginBottom_3);
    var classNames4 = useStyleSolverMargin(styleMarginBottom_4);
    var classNames5 = useStyleSolverMargin(styleMarginBottom_5);

    expect(classNames1).toBe("mb1");
    expect(classNames2).toBe("mb2");
    expect(classNames3).toBe("mb3");
    expect(classNames4).toBe("mb4");
    expect(classNames5).toBe("mb5");
  });

  test("margins mix of different parameters expect valid class names", () => {
    var style: IStyleMargin = { mb1: true, mt5: true, ml3: true, mr4: true };
    var classNames = useStyleSolverMargin(style);
    expect(classNames).toBe("mb1 mt5 ml3 mr4");
  });
});
