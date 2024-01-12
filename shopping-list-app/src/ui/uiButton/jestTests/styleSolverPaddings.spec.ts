import useControlStyleSolver from "../hooks/UseControlStyleSolver";
import IStylePadding from "src/styles/interfaces/IStylePadding";

describe("Create UIButton Styles", () => {
  test("provide no parameters, expect basic 'ui-button'", () => {
    var styleProperties = {};
    var classNames = useControlStyleSolver(styleProperties);
    expect(classNames).toBe("ui-button");
  });

  test("padding 'all' expect 'ui-button' with padding", () => {
    var styleMarginAll_1: IStylePadding = { p1: true };
    var styleMarginAll_2: IStylePadding = { p2: true };
    var styleMarginAll_3: IStylePadding = { p3: true };
    var styleMarginAll_4: IStylePadding = { p4: true };
    var styleMarginAll_5: IStylePadding = { p5: true };

    var classNames1 = useControlStyleSolver(styleMarginAll_1);
    var classNames2 = useControlStyleSolver(styleMarginAll_2);
    var classNames3 = useControlStyleSolver(styleMarginAll_3);
    var classNames4 = useControlStyleSolver(styleMarginAll_4);
    var classNames5 = useControlStyleSolver(styleMarginAll_5);

    expect(classNames1).toBe("ui-button p1");
    expect(classNames2).toBe("ui-button p2");
    expect(classNames3).toBe("ui-button p3");
    expect(classNames4).toBe("ui-button p4");
    expect(classNames5).toBe("ui-button p5");
  });

  test("padding 'left' expect 'ui-button' with padding", () => {
    var styleMarginLeft_1: IStylePadding = { pl1: true };
    var styleMarginLeft_2: IStylePadding = { pl2: true };
    var styleMarginLeft_3: IStylePadding = { pl3: true };
    var styleMarginLeft_4: IStylePadding = { pl4: true };
    var styleMarginLeft_5: IStylePadding = { pl5: true };

    var classNames1 = useControlStyleSolver(styleMarginLeft_1);
    var classNames2 = useControlStyleSolver(styleMarginLeft_2);
    var classNames3 = useControlStyleSolver(styleMarginLeft_3);
    var classNames4 = useControlStyleSolver(styleMarginLeft_4);
    var classNames5 = useControlStyleSolver(styleMarginLeft_5);

    expect(classNames1).toBe("ui-button pl1");
    expect(classNames2).toBe("ui-button pl2");
    expect(classNames3).toBe("ui-button pl3");
    expect(classNames4).toBe("ui-button pl4");
    expect(classNames5).toBe("ui-button pl5");
  });

  test("padding 'right' expect 'ui-button' with padding", () => {
    var styleMarginRight_1: IStylePadding = { pr1: true };
    var styleMarginRight_2: IStylePadding = { pr2: true };
    var styleMarginRight_3: IStylePadding = { pr3: true };
    var styleMarginRight_4: IStylePadding = { pr4: true };
    var styleMarginRight_5: IStylePadding = { pr5: true };

    var classNames1 = useControlStyleSolver(styleMarginRight_1);
    var classNames2 = useControlStyleSolver(styleMarginRight_2);
    var classNames3 = useControlStyleSolver(styleMarginRight_3);
    var classNames4 = useControlStyleSolver(styleMarginRight_4);
    var classNames5 = useControlStyleSolver(styleMarginRight_5);

    expect(classNames1).toBe("ui-button pr1");
    expect(classNames2).toBe("ui-button pr2");
    expect(classNames3).toBe("ui-button pr3");
    expect(classNames4).toBe("ui-button pr4");
    expect(classNames5).toBe("ui-button pr5");
  });

  test("padding 'top' expect 'ui-button' with padding", () => {
    var styleMarginTop_1: IStylePadding = { pt1: true };
    var styleMarginTop_2: IStylePadding = { pt2: true };
    var styleMarginTop_3: IStylePadding = { pt3: true };
    var styleMarginTop_4: IStylePadding = { pt4: true };
    var styleMarginTop_5: IStylePadding = { pt5: true };

    var classNames1 = useControlStyleSolver(styleMarginTop_1);
    var classNames2 = useControlStyleSolver(styleMarginTop_2);
    var classNames3 = useControlStyleSolver(styleMarginTop_3);
    var classNames4 = useControlStyleSolver(styleMarginTop_4);
    var classNames5 = useControlStyleSolver(styleMarginTop_5);

    expect(classNames1).toBe("ui-button pt1");
    expect(classNames2).toBe("ui-button pt2");
    expect(classNames3).toBe("ui-button pt3");
    expect(classNames4).toBe("ui-button pt4");
    expect(classNames5).toBe("ui-button pt5");
  });

  test("padding 'bottom' expect 'ui-button' with padding", () => {
    var styleMarginBottom_1: IStylePadding = { pb1: true };
    var styleMarginBottom_2: IStylePadding = { pb2: true };
    var styleMarginBottom_3: IStylePadding = { pb3: true };
    var styleMarginBottom_4: IStylePadding = { pb4: true };
    var styleMarginBottom_5: IStylePadding = { pb5: true };

    var classNames1 = useControlStyleSolver(styleMarginBottom_1);
    var classNames2 = useControlStyleSolver(styleMarginBottom_2);
    var classNames3 = useControlStyleSolver(styleMarginBottom_3);
    var classNames4 = useControlStyleSolver(styleMarginBottom_4);
    var classNames5 = useControlStyleSolver(styleMarginBottom_5);

    expect(classNames1).toBe("ui-button pb1");
    expect(classNames2).toBe("ui-button pb2");
    expect(classNames3).toBe("ui-button pb3");
    expect(classNames4).toBe("ui-button pb4");
    expect(classNames5).toBe("ui-button pb5");
  });

  test("padding mix of different parameters expect 'ui-button' with padding", () => {
    var style: IStylePadding = { pb1: true, pt5: true, pl3: true, pr4: true };
    var classNames = useControlStyleSolver(style);
    expect(classNames).toBe("ui-button pb1 pt5 pl3 pr4");
  });
});
