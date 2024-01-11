import EnumHelpers from "src/enum/EnumHelpers";
import EnumListSortOrder from "src/enum/EnumListSortOrder";
import SegmentOption from "src/ui/uiSegment/models/SegmentOption";

const useViewController = (onValueChanged?: (row: EnumListSortOrder) => void) => {
  /********************************************/
  /* Constant Data
/********************************************/
  var options = [
    new SegmentOption(EnumListSortOrder.Name, "Name"),
    new SegmentOption(EnumListSortOrder.Completed, "Completed"),
    new SegmentOption(EnumListSortOrder.Date, "Created"),
  ];

  /********************************************/
  /* Event Handlers                           */
  /********************************************/
  const handleOnValueChangedEvent = (option: SegmentOption) => {
    if (onValueChanged) {
      // convert selected code (e.g. N,D,C ) to actual EnumListSortOrder value
      const value = EnumHelpers.reverseLookup(option.code, EnumListSortOrder);
      if (value !== undefined) {
        onValueChanged(value);
      }
    }
  };

  return {
    options,
    handleOnValueChangedEvent,
  };
};

export default useViewController;
