/**
 * Hook for managing a counter with increment and decrement functionality.
 *
 * The controller manages events that control the stepper value.
 * note that the value can not go below 0
 *
 * @param {Object} params - The parameters object.
 * @param {number} params.value - The current value of the counter.
 * @param {Function} [params.onValueChange] - Callback function on counter value change.
 * @returns {Object} - An object with event handler functions.
 */

const useViewController = (
  // Current value of the counter
  value: number,
  // call back to execute when the value changes
  onValueChange?: (value: number) => void
) => {
  /********************************************/
  /* Event Handlers                           *
  /********************************************/

  // decrement button
  const handleOnButtonSubtractEvent = () => {
    if (onValueChange && value > 0) {
      onValueChange(value - 1);
    }
  };

  // increment button handler
  const handleOnButtonIncrementEvent = () => {
    if (onValueChange) {
      onValueChange(value + 1);
    }
  };

  // text editor handler
  const handleOnValueChanged = (newValue: number) => {
    if (onValueChange) {
      if (newValue >= 0) {
        onValueChange(newValue);
      }
    }
  };

  /********************************************/
  /* Return functions                         *
  /********************************************/
  return {
    handleOnButtonIncrementEvent,
    handleOnButtonSubtractEvent,
    handleOnValueChanged,
  };
};

export default useViewController;
