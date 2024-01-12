import IStyleMargin from "src/styles/interfaces/iStyleMargin";
import useControlStyleSolver from "../hooks/UseControlStyleSolver";

describe("Create UIBox Styles", () => {
  test("provide no parameters, expect basic 'ui-box'", () => {
    var styleProperties = {};
    var classNames = useControlStyleSolver(styleProperties);
    expect(classNames).toBe("ui-box");
  });

  test("margins 'all' expect 'ui-box' with margins", () => {
    var styleMarginAll_1: IStyleMargin = { m1: true };
    var styleMarginAll_2: IStyleMargin = { m2: true };
    var styleMarginAll_3: IStyleMargin = { m3: true };
    var styleMarginAll_4: IStyleMargin = { m4: true };
    var styleMarginAll_5: IStyleMargin = { m5: true };

    var classNames1 = useControlStyleSolver(styleMarginAll_1);
    var classNames2 = useControlStyleSolver(styleMarginAll_2);
    var classNames3 = useControlStyleSolver(styleMarginAll_3);
    var classNames4 = useControlStyleSolver(styleMarginAll_4);
    var classNames5 = useControlStyleSolver(styleMarginAll_5);

    expect(classNames1).toBe("ui-box m1");
    expect(classNames2).toBe("ui-box m2");
    expect(classNames3).toBe("ui-box m3");
    expect(classNames4).toBe("ui-box m4");
    expect(classNames5).toBe("ui-box m5");
  });

  test("margins 'left' expect 'ui-box' with margins", () => {
    var styleMarginLeft_1: IStyleMargin = { ml1: true };
    var styleMarginLeft_2: IStyleMargin = { ml2: true };
    var styleMarginLeft_3: IStyleMargin = { ml3: true };
    var styleMarginLeft_4: IStyleMargin = { ml4: true };
    var styleMarginLeft_5: IStyleMargin = { ml5: true };

    var classNames1 = useControlStyleSolver(styleMarginLeft_1);
    var classNames2 = useControlStyleSolver(styleMarginLeft_2);
    var classNames3 = useControlStyleSolver(styleMarginLeft_3);
    var classNames4 = useControlStyleSolver(styleMarginLeft_4);
    var classNames5 = useControlStyleSolver(styleMarginLeft_5);

    expect(classNames1).toBe("ui-box ml1");
    expect(classNames2).toBe("ui-box ml2");
    expect(classNames3).toBe("ui-box ml3");
    expect(classNames4).toBe("ui-box ml4");
    expect(classNames5).toBe("ui-box ml5");
  });

  test("margins 'right' expect 'ui-box' with margins", () => {
    var styleMarginRight_1: IStyleMargin = { mr1: true };
    var styleMarginRight_2: IStyleMargin = { mr2: true };
    var styleMarginRight_3: IStyleMargin = { mr3: true };
    var styleMarginRight_4: IStyleMargin = { mr4: true };
    var styleMarginRight_5: IStyleMargin = { mr5: true };

    var classNames1 = useControlStyleSolver(styleMarginRight_1);
    var classNames2 = useControlStyleSolver(styleMarginRight_2);
    var classNames3 = useControlStyleSolver(styleMarginRight_3);
    var classNames4 = useControlStyleSolver(styleMarginRight_4);
    var classNames5 = useControlStyleSolver(styleMarginRight_5);

    expect(classNames1).toBe("ui-box mr1");
    expect(classNames2).toBe("ui-box mr2");
    expect(classNames3).toBe("ui-box mr3");
    expect(classNames4).toBe("ui-box mr4");
    expect(classNames5).toBe("ui-box mr5");
  });

  test("margins 'top' expect 'ui-box' with margins", () => {
    var styleMarginTop_1: IStyleMargin = { mt1: true };
    var styleMarginTop_2: IStyleMargin = { mt2: true };
    var styleMarginTop_3: IStyleMargin = { mt3: true };
    var styleMarginTop_4: IStyleMargin = { mt4: true };
    var styleMarginTop_5: IStyleMargin = { mt5: true };

    var classNames1 = useControlStyleSolver(styleMarginTop_1);
    var classNames2 = useControlStyleSolver(styleMarginTop_2);
    var classNames3 = useControlStyleSolver(styleMarginTop_3);
    var classNames4 = useControlStyleSolver(styleMarginTop_4);
    var classNames5 = useControlStyleSolver(styleMarginTop_5);

    expect(classNames1).toBe("ui-box mt1");
    expect(classNames2).toBe("ui-box mt2");
    expect(classNames3).toBe("ui-box mt3");
    expect(classNames4).toBe("ui-box mt4");
    expect(classNames5).toBe("ui-box mt5");
  });

  test("margins 'bottom' expect 'ui-box' with margins", () => {
    var styleMarginBottom_1: IStyleMargin = { mb1: true };
    var styleMarginBottom_2: IStyleMargin = { mb2: true };
    var styleMarginBottom_3: IStyleMargin = { mb3: true };
    var styleMarginBottom_4: IStyleMargin = { mb4: true };
    var styleMarginBottom_5: IStyleMargin = { mb5: true };

    var classNames1 = useControlStyleSolver(styleMarginBottom_1);
    var classNames2 = useControlStyleSolver(styleMarginBottom_2);
    var classNames3 = useControlStyleSolver(styleMarginBottom_3);
    var classNames4 = useControlStyleSolver(styleMarginBottom_4);
    var classNames5 = useControlStyleSolver(styleMarginBottom_5);

    expect(classNames1).toBe("ui-box mb1");
    expect(classNames2).toBe("ui-box mb2");
    expect(classNames3).toBe("ui-box mb3");
    expect(classNames4).toBe("ui-box mb4");
    expect(classNames5).toBe("ui-box mb5");
  });

  test("margins mix of different parameters expect 'ui-box' with margins", () => {
    var style: IStyleMargin = { mb1: true, mt5: true, ml3: true, mr4: true };
    var classNames = useControlStyleSolver(style);
    expect(classNames).toBe("ui-box mb1 mt5 ml3 mr4");
  });
});
