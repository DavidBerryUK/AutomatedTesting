import { useEffect, useState } from "react";
import EnumListSortOrder from "src/enum/EnumListSortOrder";
import ShoppingItemCollection from "src/models/ShoppingItemCollection";
import ShoppingItemModel from "src/models/ShoppingItemModel";
import useFactoryShoppingListRepository from "src/repositories/shoppingList/FactoryShoppingListRepository";

const useViewController = () => {
  /********************************************/
  /* State                                    */
  /********************************************/
  const [collection, setCollection] = useState(new ShoppingItemCollection());
  const [newItem, setNewItem] = useState(new ShoppingItemModel());
  const [sortOrder, setSortOrder] = useState(EnumListSortOrder.Name);

  /****************************************************/
  /* Repo (this get either a live or mock repository) */
  /****************************************************/
  const repo = useFactoryShoppingListRepository();

  useEffect(() => {
    async function getData() {
      // get shopping items from server
      const collection = await repo.getAllAsync();
      // sort in the correct order
      collection.sortBySortOrder(sortOrder);
      // set state
      setCollection(collection);
    }
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /********************************************/
  /* Event Handlers
  /********************************************/

  /**
   * an item in the shopping list has been updated by the user
   * @param updatedItem
   */
  const handleItemChangedEventAsync = async (item: ShoppingItemModel) => {
    var updatedItem = await repo.addOrUpdateAsync(item);
    const clone = collection.clone();
    clone.updateItem(updatedItem);
    clone.sortBySortOrder(sortOrder);
    setCollection(clone);
  };

  /**
   * An item in the shopping list has been requested to be deleted
   * @param item
   */
  const handleItemDeletedEventAsync = async (item: ShoppingItemModel) => {
    // call repo to save item
    await repo.deleteAsync(item);

    const clone = collection.clone();
    clone.removeItem(item);
    clone.sortBySortOrder(sortOrder);
    setCollection(clone);
  };

  /**
   * The shopping list collection has been updated by the user
   * @param updatedCollection
   */
  const handleCollectionChangedEvent = (updatedCollection: ShoppingItemCollection) => {
    updatedCollection.sortBySortOrder(sortOrder);
    setCollection(updatedCollection);
  };

  /**
   * The user has pressed the 'add' button to add the
   * new item to the shopping list
   * @param newItem
   */
  const handleAddItemEventAsync = async (item: ShoppingItemModel) => {
    // call repo to save item
    var updatedItem = await repo.addOrUpdateAsync(item);

    // update state
    const clone = collection.clone();
    clone.updateItem(updatedItem);
    clone.sortBySortOrder(sortOrder);
    setCollection(clone);

    // clear existing item
    setNewItem(new ShoppingItemModel());
  };

  /**
   * user has requested to delete all completed items
   */
  const handleOnDeleteCompletedItemsAsync = async() => {
      // call repo to delete all completed items
     await repo.deleteCompletedAsync();

    const clone = collection.clone();
    clone.deleteCompleted();
    clone.sortBySortOrder(sortOrder);
    setCollection(clone);
  }

  /**
   * user has requested to delete all items
   */
  const handleOnDeleteAllItemsEventAsync = async() => {
    // call repo to delete all items
    await repo.deleteAllAsync();

    const clone = collection.clone();
    clone.clear();
    clone.sortBySortOrder(sortOrder);
    setCollection(clone);
  }

  /**
   * The new item has been updated by the user, update the state
   * @param updatedItem
   */
  const handleNewItemChangedEvent = (updatedItem: ShoppingItemModel) => {
    setNewItem(updatedItem);
    collection.sortBySortOrder(sortOrder);
  };

  /**
   * handle sort order changed
   * @param newSortOrder
   */
  const handleSortOrderChangedEvent = (newSortOrder: EnumListSortOrder) => {
    setSortOrder(newSortOrder);
    collection.sortBySortOrder(newSortOrder);
  };

  return {
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
  };
};

export default useViewController;
