import UIBox from "src/ui/uiBox/UIBox";
import UISegmentSortOrder from "../uiSegmentSortOrder/UISegmentSortOrder";
import UIShoppingItem from "../uiShoppingItem/UIShoppingItem";
import UIShoppingList from "../uiShoppingList/UIShoppingList";
import useViewController from "./hooks/useViewController";
import UISpacer from "src/ui/uiSpacer/UISpacer";
import UIButton from "src/ui/uiButton/UIButton";

const UIShoppingListApp: React.FC = () => {
  /********************************************/
  /* View Controller                          */
  /********************************************/
  const {
    sortOrder,
    newItem,
    collection,
    handleAddItemEventAsync,
    handleCollectionChangedEvent,
    handleItemChangedEventAsync,
    handleItemDeletedEventAsync,
    handleNewItemChangedEvent,
    handleOnDeleteAllItemsEventAsync,
    handleOnDeleteCompletedItemsAsync,
    handleSortOrderChangedEvent,
  } = useViewController();

  /********************************************/
  /* Template                                 */
  /********************************************/
  return (
    <div>
      <UIBox mb4 ml2 mr2 mt2>
        <UISegmentSortOrder
          value={sortOrder}
          onValueChanged={handleSortOrderChangedEvent}
          testId="sort-order" />
        <UISpacer />
        <UIButton label="Delete Completed" onClick={handleOnDeleteCompletedItemsAsync} testId="test-btn-delete-completed" />
        <UIButton ml1 label="Delete All" onClick={handleOnDeleteAllItemsEventAsync}  testId="test-btn-delete-all"/>
      </UIBox>
      <UIBox mb4>
        <UIShoppingItem value={newItem}
          onAdd={handleAddItemEventAsync}
          onValueChanged={handleNewItemChangedEvent}
          showButtonAdd={true}
          testId="new-item-container"
          addTestId="add-button"
          textTestId="new-item-text"
          stepperTestId="new-item-stepper" />
      </UIBox>
      <UIShoppingList
        collection={collection}
        onItemDeleted={handleItemDeletedEventAsync}
        onItemChanged={handleItemChangedEventAsync}
        onCollectionChanged={handleCollectionChangedEvent}
        testId="shopping-list"
      />
    </div>
  );
};

export default UIShoppingListApp;
