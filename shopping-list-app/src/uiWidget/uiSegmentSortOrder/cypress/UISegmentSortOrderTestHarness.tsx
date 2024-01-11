import { useState } from "react";
import UISegmentSortOrder from "../UISegmentSortOrder";
import EnumListSortOrder from "src/enum/EnumListSortOrder";
import "../../../styles/styles.scss";

interface IProperties {
  value: EnumListSortOrder;
  onValueChanged: (value: EnumListSortOrder) => void;
}

/**
 * The test harness is used to wrap controls and manage their state
 * to allow state changes thoughout the component testing lifetime
 */
const UISegmentSortOrderTestHarness: React.FC<IProperties> = (props) => {
  const [valueState, setValueState] = useState(props.value);

  const handleValueChangeEvent = (value: EnumListSortOrder) => {
    setValueState(value);
    props.onValueChanged(value);
  };

  return <UISegmentSortOrder value={valueState} onValueChanged={handleValueChangeEvent} />;
};

export default UISegmentSortOrderTestHarness;
