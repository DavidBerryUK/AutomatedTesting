import useViewController from "../hooks/UseViewController";

// test the when the switch controll is pressed (toggled)
//
describe("UISwitch Events", () => {
  test("that on click is raised toggled to on", () => {
    //
    // Arrange
    //

    // the callback function should be raised when the button is clicked
    const onButtonClicked = jest.fn(); // Mock the callback function
    const { handleOnValueChanged } = useViewController(onButtonClicked);

    //
    // Act
    //
    // simulate the ui control's click event being called
    // Mock the event object with target.checked set to true
    const mockChangeEvent = {
      target: {
        checked: true,
      },
    } as any;
    handleOnValueChanged(mockChangeEvent);

    //
    // Assert
    //
    expect(onButtonClicked).toHaveBeenCalledWith(true);
  });

  test("that on click is raised toggled to off", () => {
    //
    // Arrange
    //

    // the callback function should be raised when the button is clicked
    const onButtonClicked = jest.fn(); // Mock the callback function
    const { handleOnValueChanged } = useViewController(onButtonClicked);

    //
    // Act
    //
    // simulate the ui control's click event being called
    // Mock the event object with target.checked set to true
    const mockChangeEvent = {
      target: {
        checked: false,
      },
    } as any;
    handleOnValueChanged(mockChangeEvent);

    //
    // Assert
    //
    expect(onButtonClicked).toHaveBeenCalledWith(false);
  });
});
