import SegmentOption from "../models/SegmentOption";

interface IProperties {
  option: SegmentOption;
  selected?: boolean;
  onClick?: (option: SegmentOption) => void;
}

const UISegmentOption: React.FC<IProperties> = (props) => {
  /********************************************/
  /* Determine Styles
  /********************************************/
  var className = "";
  if (props.selected) {
    className = `${className} selected`;
  }

  /********************************************/
  /* Event Handlers
  /********************************************/
  const handleOnClickEvent = () => {
    if (props.onClick) {
      props.onClick(props.option);
    }
  };

  /********************************************/
  /* Template                                 */
  /********************************************/
  return (
    <button className={className} onClick={handleOnClickEvent}>
      {props.option.text}
    </button>
  );
};

export default UISegmentOption;
