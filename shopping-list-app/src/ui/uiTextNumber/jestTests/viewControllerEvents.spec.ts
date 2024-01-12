import useViewController from "../hooks/UseViewController";

/**
 * UITextNumber Control
 *
 */
describe("UIStepper Events", () => {
  test("enter a valid number, expect event to be raised", () => {
    //
    // Arrange
    //

    // the callback function should be raised when the button is clicked
    const onValueChanged = jest.fn(); // Mock the callback function
    const { handleOnValueChanged } = useViewController(onValueChanged);

    //
    // Act
    //
    // simulate the ui control's click event being called
    // simulate the ui control's click event being called
    // Mock the event object with target.checked set to true
    const mockChangeEvent = {
      target: {
        value: "1234",
      },
    } as any;
    handleOnValueChanged(mockChangeEvent);
    //
    // Assert
    //
    expect(onValueChanged).toHaveBeenLastCalledWith(1234);
  });

  test("enter an invalid valid number, no event should be raised", () => {
    //
    // Arrange
    //

    // the callback function should be raised when the button is clicked
    const onValueChanged = jest.fn(); // Mock the callback function
    const { handleOnValueChanged } = useViewController(onValueChanged);

    //
    // Act
    //
    // simulate the ui control's click event being called
    // simulate the ui control's click event being called
    // Mock the event object with target.checked set to true
    const mockChangeEvent = {
      target: {
        value: "ABC",
      },
    } as any;
    handleOnValueChanged(mockChangeEvent);
    //
    // Assert
    //
    expect(onValueChanged).toHaveBeenCalledTimes(0);
  });
});
