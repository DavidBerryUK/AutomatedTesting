import ShoppingItemCollection from "src/models/ShoppingItemCollection";
import ShoppingItemModel from "src/models/ShoppingItemModel";
import TestDataFactoryShoppingList from "../../testDataFactory/TestDataFactoryShoppingList";

const useShoppingListMockRepository = () => {
  //
  // Get All Items in the shopping list
  //
  const getAllAsync = async (): Promise<ShoppingItemCollection> => {
    const collection = TestDataFactoryShoppingList.get();
    return collection;
  };

  //
  // add or update item
  //
  const addOrUpdateAsync = async (item: ShoppingItemModel): Promise<ShoppingItemModel> => {
    return item;
  };

  //
  // delete an Item
  //
  const deleteAsync = async (item: ShoppingItemModel): Promise<any> => {
    return;
  };

  /**
   * Delete all items
   */
  const deleteAllAsync = async () : Promise<any> => {
    return;
  }

  /**
   * Delete all COMPLETED items
   */
  const deleteCompletedAsync = async () : Promise<any> => {
    return;
  }

  return {
    addOrUpdateAsync,
    deleteAllAsync,
    deleteAsync,
    deleteCompletedAsync,
    getAllAsync,
  };
};

export default useShoppingListMockRepository;
