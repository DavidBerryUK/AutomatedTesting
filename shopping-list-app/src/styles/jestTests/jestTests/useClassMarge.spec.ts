import useClassMerge from "../../hooks/useClassMerge";

describe("use Class Merge Test", () => {
  test("null", () => {
    // Act
    const result = useClassMerge(null as unknown as Array<string>);

    // Assert
    expect(result).toEqual("");
  });

  test("undefined", () => {
    // Act
    const result = useClassMerge(null as unknown as Array<string>);

    // Assert
    expect(result).toEqual("");
  });

  test("not an array", () => {
    // Act
    const result = useClassMerge("this is a string" as unknown as Array<string>);

    // Assert
    expect(result).toEqual("");
  });

  test("no elements", () => {
    // Act
    const result = useClassMerge([]);

    // Assert
    expect(result).toEqual("");
  });

  test("single elements", () => {
    // Act
    const result = useClassMerge(["one"]);

    // Assert
    expect(result).toEqual("one");
  });

  test("multiple elements", () => {
    // Act
    const result = useClassMerge(["one", "two", "three", "four"]);

    // Assert
    expect(result).toEqual("one two three four");
  });

  test("multiple elements with blanks", () => {
    // Act
    const result = useClassMerge(["", "one", "", "", "two", "", "three", "", "", "four", "", "", ""]);

    // Assert
    expect(result).toEqual("one two three four");
  });

  test("multiple elements with undefined", () => {
    // Act
    const result = useClassMerge(["", "one", undefined, "", "two", "", "three", "", "", "four", "", undefined, ""] as Array<string>);

    // Assert
    expect(result).toEqual("one two three four");
  });

  test("multiple elements with nulls", () => {
    // Act
    const result = useClassMerge([null, "one", null, "", "two", "", "three", "", "", "four", "", null, ""] as Array<string>);

    // Assert
    expect(result).toEqual("one two three four");
  });
});
