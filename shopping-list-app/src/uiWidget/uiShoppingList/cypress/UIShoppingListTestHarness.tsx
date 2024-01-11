import { useState } from "react";
import ShoppingItemCollection from "src/models/ShoppingItemCollection";
import UIShoppingList from "../UIShoppingList";
import ShoppingItemModel from "src/models/ShoppingItemModel";
import "../../../styles/styles.scss";

interface IProperties {
  collection: ShoppingItemCollection;
  onItemChanged?: (UIShoppingItem: ShoppingItemModel) => void;
  onItemDeleted?: (UIShoppingItem: ShoppingItemModel) => void;
  onCollectionChanged?: (collection: ShoppingItemCollection) => void;
}

/**
 * The test harness is used to wrap controls and manage their state
 * to allow state changes thoughout the component testing lifetime
 */
const UIShoppingListTestHarness: React.FC<IProperties> = (props) => {
  const [valueState, setValueState] = useState(props.collection);

  const handleItemChangedEvent = (item: ShoppingItemModel) => {
    if (props.onItemChanged) {
      props.onItemChanged(item);
    }
  };

  const handleItemDeletedEvent = (item: ShoppingItemModel) => {
    if (props.onItemDeleted) {
      props.onItemDeleted(item);
    }
  };

  const handleCollectionChangedEvent = (collection: ShoppingItemCollection) => {
    setValueState(collection);
    if (props.onCollectionChanged) {
      props.onCollectionChanged(collection);
    }
  };

  return (
    <UIShoppingList
      collection={valueState}
      onCollectionChanged={handleCollectionChangedEvent}
      onItemChanged={handleItemChangedEvent}
      onItemDeleted={handleItemDeletedEvent}
      testId="shopping-list"
    />
  );
};

export default UIShoppingListTestHarness;
