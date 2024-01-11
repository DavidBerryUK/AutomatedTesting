import ShoppingItemCollection from "src/models/ShoppingItemCollection";
import useBaseRepository from "../base/useBaseRepository";
import JsonConvertorShoppingItem from "./mappers/JsonConvertorShoppingItem";
import ShoppingItemModel from "src/models/ShoppingItemModel";

const useShoppingListRepository = () => {
  const baseRepo = useBaseRepository();
  const baseUrl = "ListItem";

  //
  // Get All Items in the shopping list
  //
  const getAllAsync = async (): Promise<ShoppingItemCollection> => {
    // get basic json
    const json = await baseRepo.getAsync(baseUrl);
    const collection = new ShoppingItemCollection();
    // convert to strongly typed objects
    collection.items = JsonConvertorShoppingItem.toObjectArray(json);
    return collection;
  };

  //
  // add or update item
  //
  const addOrUpdateAsync = async (item: ShoppingItemModel): Promise<ShoppingItemModel> => {
    // get basic json
    const json = await baseRepo.postAsync(baseUrl, item);
    const updatedItem = JsonConvertorShoppingItem.toObject(json);
    return updatedItem;
  };

  //
  // delete an Item
  //
  const deleteAsync = async (item: ShoppingItemModel): Promise<any> => {
    // get basic json
    await baseRepo.deleteAsync(`${baseUrl}/${item.id}`);
    return;
  };

  /**
   * Delete all items
   */
  const deleteAllAsync = async (): Promise<any> => {
    await baseRepo.deleteAsync(`${baseUrl}/all`);
    return;
  }

  /**
  * Delete all COMPLETED items
  */
  const deleteCompletedAsync = async (): Promise<any> => {
    await baseRepo.deleteAsync(`${baseUrl}/completed`);
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

export default useShoppingListRepository;
