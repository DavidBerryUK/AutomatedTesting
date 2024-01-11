import ShoppingItemModel from "../../../models/ShoppingItemModel";

const useViewController = (
  row: ShoppingItemModel,
  onRowUpdated?: (row: ShoppingItemModel) => void,
  onDelete?: (row: ShoppingItemModel) => void,
  onAdd?: (row: ShoppingItemModel) => void
) => {
  /********************************************/
  /* logic                                    */
  /********************************************/

  // The ADD button is only enabled if there is text entered in the name and quantity is > 0
  const addButtonDisabled = row.name.trim().length === 0 || row.quantity <= 0;

  /********************************************/
  /* Event Handlers                           *
  /********************************************/

  // name of shopping list item updated
  // - raise event to the host control
  const handleNameUpdatedEvent = (name: string) => {
    if (onRowUpdated) {
      const newValue = row.clone();
      newValue.name = name;
      onRowUpdated(newValue);
    }
  };

  // Quantity of shopping list item updated
  // - raise event to the host control
  const handleQuantityUpdatedEvent = (quantity: number) => {
    if (onRowUpdated) {
      const newValue = row.clone();
      newValue.quantity = quantity;
      onRowUpdated(newValue);
    }
  };

  // 'is done' of the shopping list item updated
  // - raise event to the host control
  const handleIsCheckedUpdateEvent = (isChecked: boolean) => {
    if (onRowUpdated) {
      const newValue = row.clone();
      newValue.isChecked = isChecked;
      onRowUpdated(newValue);
    }
  };

  const handleOnDeleteEvent = () => {
    if (onDelete) {
      onDelete(row);
    }
  };

  const handleOnAddEvent = () => {
    if (onAdd) {
      onAdd(row);
    }
  };

  return {
    addButtonDisabled,
    handleIsCheckedUpdateEvent,
    handleNameUpdatedEvent,
    handleOnAddEvent,
    handleOnDeleteEvent,
    handleQuantityUpdatedEvent,
  };
};

export default useViewController;
