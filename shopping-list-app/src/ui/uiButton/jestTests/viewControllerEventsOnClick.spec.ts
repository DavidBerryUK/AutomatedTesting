import useViewController from "../hooks/UseViewController";

// test the when the button is pressed
// a click event is fired
//
describe("UIButton Events", () => {
  test("on click event with no provided callback", () => {
    //
    // Arrange
    //
    const { handleOnClickEvent } = useViewController();

    // Mock console.error to prevent unwanted error messages in the console
    const originalError = console.error;
    console.error = jest.fn();

    //
    // Act
    //
    handleOnClickEvent();

    //
    // Assert
    //
    // In this case, you can check if console.error was not called,
    // indicating that no exceptions were thrown.
    expect(console.error).not.toHaveBeenCalled();

    // Restore the original console.error function
    console.error = originalError;
  });

  test("that on click is raised", () => {
    //
    // Arrange
    //

    // the callback function should be raised when the button is clicked
    const onButtonClicked = jest.fn(); // Mock the callback function
    const { handleOnClickEvent } = useViewController(onButtonClicked);

    //
    // Act
    //
    // simulate the ui control's click event being called
    handleOnClickEvent();

    //
    // Assert
    //
    expect(onButtonClicked).toHaveBeenCalled();
  });
});
