import useViewController from "../hooks/UseViewController";
import SegmentOption from "../models/SegmentOption";

// test the when the button is pressed
// a click event is fired
//
describe("UISegment Events", () => {
  test("that on on value changed event is raised", () => {
    //
    // Arrange
    //

    // the callback function should be raised when the button is clicked
    const option = new SegmentOption("T", "Text Option");
    const onButtonClicked = jest.fn(); // Mock the callback function
    const { handleValueChangedEvent } = useViewController(onButtonClicked);

    //
    // Act
    //
    // simulate the ui control's click event being called
    handleValueChangedEvent(option);

    //
    // Assert
    //
    expect(onButtonClicked).toHaveBeenCalledWith(option);
  });

  test("on click event with no provided callback", () => {
    //
    // Arrange
    //
    const { handleValueChangedEvent } = useViewController();

    // Mock console.error to prevent unwanted error messages in the console
    const originalError = console.error;
    console.error = jest.fn();

    //
    // Act
    //
    handleValueChangedEvent(new SegmentOption("T", "Text Option"));

    //
    // Assert
    //
    // In this case, you can check if console.error was not called,
    // indicating that no exceptions were thrown.
    expect(console.error).not.toHaveBeenCalled();

    // Restore the original console.error function
    console.error = originalError;
  });
});
