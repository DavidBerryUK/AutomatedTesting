/**
 * View controller for UI Button, seperates logic from compoment
 * for easier testing
 *
 * @param onValueChanged
 * @returns
 */
const useViewController = (onValueChanged?: (value: number) => void) => {
  /********************************************/
  /* Event Handlers                           *
  /********************************************/
  const handleOnValueChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onValueChanged) {
      const value = Number(event.target.value);
      if (isNaN(value)) {
        return;
      }
      onValueChanged(value);
    }
  };

  return {
    handleOnValueChanged,
  };
};

export default useViewController;
