import { useState } from "react";
import UIShoppingItem from "../UIShoppingItem";
import ShoppingItemModel from "src/models/ShoppingItemModel";
import "../../../styles/styles.scss";

interface IProperties {
  value: ShoppingItemModel;
  testId?: string;
  textTestId?: string;
  stepperTestId?: string;
  switchTestId?: string;
  deleteTestId?: string;
  addTestId?: string;
  onValueChanged: (value: ShoppingItemModel) => void;
  onDelete: (item: ShoppingItemModel) => void;
  onAdd: (item: ShoppingItemModel) => void;
  showButtonAdd?: boolean;
  showButtonDelete?: boolean;
  showSwitchComplete?: boolean;
}

/**
 * The test harness is used to wrap controls and manage their state
 * to allow state changes thoughout the component testing lifetime
 */
const UIShoppingLineTestHarness: React.FC<IProperties> = (props) => {
  const [valueState, setValueState] = useState(props.value);

  const handleValueChangeEvent = (value: ShoppingItemModel) => {
    setValueState(value);
    props.onValueChanged(value);
  };

  const handleOnDeleteEvent = (value: ShoppingItemModel) => {
    props.onDelete(value);
  };

  const handleOnAddEvent = (value: ShoppingItemModel) => {
    props.onAdd(value);
  };

  return (
    <UIShoppingItem
      value={valueState}
      onValueChanged={handleValueChangeEvent}
      onDelete={handleOnDeleteEvent}
      onAdd={handleOnAddEvent}
      showButtonAdd={props.showButtonAdd}
      showButtonDelete={props.showButtonDelete}
      showSwitchComplete={props.showSwitchComplete}
      testId={props.testId}
      textTestId={props.textTestId}
      stepperTestId={props.stepperTestId}
      switchTestId={props.switchTestId}
      deleteTestId={props.deleteTestId}
      addTestId={props.addTestId}
    />
  );
};

export default UIShoppingLineTestHarness;
