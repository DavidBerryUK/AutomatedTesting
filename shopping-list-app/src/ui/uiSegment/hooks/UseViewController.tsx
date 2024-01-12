import SegmentOption from "../models/SegmentOption";

/**
 * View controller for UI Segment, seperates logic from compoment
 * for easier testing
 *
 * @param onValueChanged
 * @returns
 */
const useViewController = (onValueChanged?: (option: SegmentOption) => void) => {
  /********************************************/
  /* Event Handlers                           *
  /********************************************/
  const handleValueChangedEvent = (option: SegmentOption) => {
    if (onValueChanged) {
      onValueChanged(option);
    }
  };

  // Return public function for use by host
  return {
    handleValueChangedEvent,
  };
};

export default useViewController;
