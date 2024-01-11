import ShoppingItemCollection from "src/models/ShoppingItemCollection";
import TestDataFactoryShoppingItems from "./TestDataFactoryShoppingItems";

export default class TestDataFactoryShoppingList {
  static get(): ShoppingItemCollection {
    const collection = new ShoppingItemCollection();
    collection.items = [
      TestDataFactoryShoppingItems.getApples(),
      TestDataFactoryShoppingItems.getBananas(),
      TestDataFactoryShoppingItems.getCarrots(),
      TestDataFactoryShoppingItems.getGrapes(),
      TestDataFactoryShoppingItems.getTomatoes(),
    ];
    return collection;
  }
}
