import ShoppingItemCollection from "src/models/ShoppingItemCollection";
import ShoppingItemModel from "src/models/ShoppingItemModel";

const useViewController = (
  collection: ShoppingItemCollection,
  onCollectionChanged?: (collection: ShoppingItemCollection) => void,
  onItemChanged?: (item: ShoppingItemModel) => void,
  onItemDeleted?: (item: ShoppingItemModel) => void
) => {
  /********************************************/
  /* Event Handlers                           */
  /********************************************/
  const handleShoppingItemChangedEvent = (item: ShoppingItemModel) => {
    //
    // raise a item changed event
    //
    if (onItemChanged) {
      onItemChanged(item);
    }
    //
    // raise a collection changed event
    //
    if (onCollectionChanged) {
      const clone = collection.clone();
      clone.updateItem(item);
      onCollectionChanged(clone);
    }
  };

  const handleShoppingItemDeletedEvent = (item: ShoppingItemModel) => {
    //
    // raise a item deleted
    //
    if (onItemDeleted) {
      onItemDeleted(item);
    }
  };

  return {
    handleShoppingItemChangedEvent,
    handleShoppingItemDeletedEvent,
  };
};

export default useViewController;
