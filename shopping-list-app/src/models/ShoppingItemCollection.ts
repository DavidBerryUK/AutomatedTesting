import EnumListSortOrder from "src/enum/EnumListSortOrder";
import ShoppingItemModel from "./ShoppingItemModel";

export default class ShoppingItemCollection {
  items: Array<ShoppingItemModel>;

  constructor() {
    this.items = new Array<ShoppingItemModel>();
  }

  clear() {
    this.items = new Array<ShoppingItemModel>();
  }

  deleteCompleted() {
    this.items = this.items.filter((i) => i.isChecked === false);  
  }
  updateItem(item: ShoppingItemModel) {
    // Find the index of the item in the collection
    const index = this.items.findIndex((i) => i.id === item.id);

    if (index === -1) {
      // insert into collection
      this.items.push(item);
    } else {
      // Update the item's value in the collection
      this.items[index] = item;
    }
  }

  removeItem(item: ShoppingItemModel) {
    this.items = this.items.filter((i) => i.id !== item.id);
  }

  clone(): ShoppingItemCollection {
    const model = new ShoppingItemCollection();
    model.items = this.items;
    return model;
  }

  /**
   * Sort by 'SortOrder'
   */
  sortBySortOrder(sortOrder: EnumListSortOrder) {
    switch (sortOrder) {
      case EnumListSortOrder.Name:
        this.sortByName();
        return;
      case EnumListSortOrder.Completed:
        this.sortByCompleted();
        return;
      case EnumListSortOrder.Date:
        this.sortByDateCreated();
        return;
    }
  }

  /**
   * sort by fields name
   */
  sortByName() {
    this.items = this.items.sort((a, b) => a.name.localeCompare(b.name));
  }

  /**
   * Sort by fields dateCreated then by name
   */
  sortByDateCreated() {
    this.items = this.items.sort((a, b) => {
      // Compare dateCreated first
      if (a.dateCreated < b.dateCreated) return -1;
      if (a.dateCreated > b.dateCreated) return 1;
      // If dateCreated is the same, compare by name
      return a.name.localeCompare(b.name);
    });
  }

  /**
   * Sort by fields isChecked then by name
   */
  sortByCompleted() {
    this.items = this.items.sort((a, b) => {
      // Compare isChecked first (true comes before false)
      if (a.isChecked && !b.isChecked) return -1;
      if (!a.isChecked && b.isChecked) return 1;
      // If isChecked is the same, compare by name
      return a.name.localeCompare(b.name);
    });
  }
}
