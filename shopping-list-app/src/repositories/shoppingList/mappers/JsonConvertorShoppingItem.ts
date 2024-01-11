import ShoppingItemModel from "src/models/ShoppingItemModel";

export default class JsonConvertorShoppingItem {
  static toObject(json: ShoppingItemModel | undefined): ShoppingItemModel {
    const object = new ShoppingItemModel();
    if (json === null || json === undefined) {
      return object;
    }
    object.id = json.id;
    object.dateCreated = json.dateCreated;
    object.isChecked = json.isChecked;
    object.name = json.name;
    object.quantity = json.quantity;
    return object;
  }

  static toObjectArray(json: Array<ShoppingItemModel>): Array<ShoppingItemModel> {
    if (json === undefined || json === null) {
      return new Array<ShoppingItemModel>();
    }
    const objectArray = json.map((item: ShoppingItemModel) => {
      return this.toObject(item);
    });
    return objectArray;
  }
}
