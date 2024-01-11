import { v4 as uuidv4 } from "uuid";

export default class ShoppingItemModel {
  id: string;
  name: string;
  quantity: number;
  dateCreated: Date;
  isChecked: boolean;

  constructor() {
    //
    // each shopping item is given a guid by default
    //
    this.id = uuidv4();
    this.dateCreated = new Date();
    this.name = "";
    this.quantity = 0;
    this.isChecked = false;
  }

  clone(): ShoppingItemModel {
    const model = new ShoppingItemModel();
    model.id = this.id;
    model.name = this.name;
    model.dateCreated = this.dateCreated;
    model.quantity = this.quantity;
    model.isChecked = this.isChecked;
    return model;
  }
}
