import useViewController from "../hooks/UseViewController";

/**
 * UIStepper Control
 *
 * user can click '-' to decrement the value, but minimum value is 0
 * user can click '+' to increment the value
 * user can overtype the value
 */
describe("UIStepper Events", () => {
  test("click '-' when value 10 which return new value of 9", () => {
    //
    // Arrange
    //

    // the callback function should be raised when the button is clicked
    const onValueChanged = jest.fn(); // Mock the callback function
    const { handleOnButtonSubtractEvent } = useViewController(10, onValueChanged);

    //
    // Act
    //
    // simulate the ui control's click event being called
    handleOnButtonSubtractEvent();
    //
    // Assert
    //
    expect(onValueChanged).toHaveBeenLastCalledWith(9);
  });

  test("click '-' when value 0, should not decrement, no value change event", () => {
    //
    // Arrange
    //

    // the callback function should be raised when the button is clicked
    const onValueChanged = jest.fn(); // Mock the callback function
    const { handleOnButtonSubtractEvent } = useViewController(0, onValueChanged);

    //
    // Act
    //
    // simulate the ui control's click event being called
    handleOnButtonSubtractEvent();
    //
    // Assert
    //
    expect(onValueChanged).toHaveBeenCalledTimes(0);
  });

  test("click '+' when value 10 which return new value of 11", () => {
    //
    // Arrange
    //

    // the callback function should be raised when the button is clicked
    const onValueChanged = jest.fn(); // Mock the callback function
    const { handleOnButtonIncrementEvent } = useViewController(10, onValueChanged);

    //
    // Act
    //
    // simulate the ui control's click event being called
    handleOnButtonIncrementEvent();
    //
    // Assert
    //
    expect(onValueChanged).toHaveBeenLastCalledWith(11);
  });

  test("edit new value via text field", () => {
    //
    // Arrange
    //

    // the callback function should be raised when the button is clicked
    const onValueChanged = jest.fn(); // Mock the callback function
    const { handleOnValueChanged } = useViewController(10, onValueChanged);

    //
    // Act
    //
    // simulate the ui control's click event being called
    handleOnValueChanged(123);
    //
    // Assert
    //
    expect(onValueChanged).toHaveBeenLastCalledWith(123);
  });
});
