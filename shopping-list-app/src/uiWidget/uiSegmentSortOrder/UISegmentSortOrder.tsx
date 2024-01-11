import EnumListSortOrder from "src/enum/EnumListSortOrder";
import UISegment from "../../ui/uiSegment/UISegment";
import UILabel from "src/ui/uiLabel/UILabel";
import useViewController from "./hooks/UseViewController";

/**
 * @param value           - The current selected sort order, valid values are defined by EnumListSortOrder
 * @param onValueChanged  - Event callback for when user selects a new sort order
 * @param testId          - html attribute value to assist with automated testing
 */
interface IProperties {
  value: EnumListSortOrder;
  onValueChanged?: (row: EnumListSortOrder) => void;
  testId?: string;
}

const UISegmentSortOrder: React.FC<IProperties> = (props) => {
  const { handleOnValueChangedEvent, options } = useViewController(props.onValueChanged);

  /********************************************/
  /* Template                                 */
  /********************************************/
  return (
    <UILabel label="Sort Order" medium testId={props.testId}>
      <UISegment options={options} value={props.value} onChange={handleOnValueChangedEvent} />
    </UILabel>
  );
};

export default UISegmentSortOrder;
