import ShoppingItemModel from "../../models/ShoppingItemModel";
import UIStepper from "../../ui/uiStepper/UIStepper";
import UISwitch from "src/ui/uiSwitch/UISwitch";
import UITextString from "../../ui/uiTextString/UITextString";
import useViewController from "./hooks/UseViewController";
import UIButton from "src/ui/uiButton/UIButton";
import UIShowIf from "src/ui/uiShowIf/UIShowIf";
import UISpacer from "src/ui/uiSpacer/UISpacer";

/**
 * the task UIShoppingItem represents a single shopping item,
 * This control is made up of multiple sub controls
 * All the data is represented by the rowData parameter
 * Any update caused the onRowUpdated event to be raised
 *
 * The ADD button is only enabled if there is text entered in the name and quantity is > 0
 *
 *
 *
 * @param value               The data class representing a single shopping item
 * @param onValueChanged      Event callback when any item value is updated
 * @param onDelete            Event callback when Delete Button is pressed
 * @param onAdd               Event callback when Add Button is pressed
 * @param showSwitchComplete  Determine is Complete Switch button is displayed (default = false)
 * @param showButtonAdd       Determine is Add Button is displayed (default = false)
 * @param showButtonDelete    Determine if Delete Button is displayed (default = false)
 * @param testId              Test id for automated testing for this control
 * @param textTestId          Test id for automated testing for the text sub control
 * @param stepperTestId       Test id for automated testing for the stepper sub control
 * @param switchTestId        Test id for automated testing for the switch sub control
 * @param deleteTestId        Test id for automated testing for the delete button
 * @param addTestId           Test id for automated testing for the add button
 */
interface IProperties {
  value: ShoppingItemModel;
  onValueChanged?: (row: ShoppingItemModel) => void;
  onDelete?: (row: ShoppingItemModel) => void;
  onAdd?: (row: ShoppingItemModel) => void;
  showSwitchComplete?: boolean;
  showButtonDelete?: boolean;
  showButtonAdd?: boolean;
  testId?: string;
  textTestId?: string;
  stepperTestId?: string;
  switchTestId?: string;
  addTestId?: string;
  deleteTestId?: string;
}

const UIShoppingItem: React.FC<IProperties> = (props) => {
  /********************************************/
  /* Event Handlers                           */
  /********************************************/
  const {
    addButtonDisabled,
    handleOnAddEvent,
    handleNameUpdatedEvent,
    handleQuantityUpdatedEvent,
    handleIsCheckedUpdateEvent,
    handleOnDeleteEvent,
  } = useViewController(props.value, props.onValueChanged, props.onDelete, props.onAdd);

  /********************************************/
  /* Template                                 */
  /********************************************/
  return (
    <div className="ui-shopping-item" data-testid={props.testId}>
      <UITextString value={props.value.name} onValueChange={handleNameUpdatedEvent} testId={props.textTestId} />
      <UIStepper value={props.value.quantity} onValueChange={handleQuantityUpdatedEvent} testId={props.stepperTestId} />
      <UIShowIf value={props.showSwitchComplete}>
        <UISwitch value={props.value.isChecked} onValueChange={handleIsCheckedUpdateEvent} testId={props.switchTestId} />
      </UIShowIf>
      <UISpacer />
      <UIShowIf value={props.showButtonAdd}>
        <UIButton
          disabled={addButtonDisabled}
          bold
          textLarge
          widthStandard
          label="Add"
          onClick={handleOnAddEvent}
          testId={props.addTestId}
        />
      </UIShowIf>
      <UIShowIf value={props.showButtonDelete}>
        <UIButton bold textLarge widthStandard label="Delete" onClick={handleOnDeleteEvent} testId={props.deleteTestId} />
      </UIShowIf>
    </div>
  );
};

export default UIShoppingItem;
