import SegmentOption from "./models/SegmentOption";
import UISegmentOption from "./support/UISegmentOption";

interface IProperties {
  testId?: string;
  value: string;
  options: Array<SegmentOption>;
  onChange?: (option: SegmentOption) => void;
}

const UISegment: React.FC<IProperties> = (props) => {
  /********************************************/
  /* View Controller
  /********************************************/
  const handleSegmentClickedEvent = (option: SegmentOption) => {
    if (props.onChange) {
      props.onChange(option);
    }
  };

  /********************************************/
  /* Template                                 */
  /********************************************/
  return (
    <div className="ui-segment">
      {props.options.map((option) => (
        <UISegmentOption key={option.code} option={option} selected={option.code === props.value} onClick={handleSegmentClickedEvent} />
      ))}
    </div>
  );
};

export default UISegment;
