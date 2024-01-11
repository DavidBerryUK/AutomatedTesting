import ShoppingItemModel from "src/models/ShoppingItemModel";

export default class TestDataFactoryShoppingItems {
  static getApples(): ShoppingItemModel {
    const model = new ShoppingItemModel();
    model.id = "AP1";
    model.name = "Apples";
    model.quantity = 6;
    model.isChecked = false;
    return model;
  }

  static getBananas(): ShoppingItemModel {
    const model = new ShoppingItemModel();
    model.id = "BN1";
    model.name = "Bananas";
    model.quantity = 4;
    model.isChecked = false;
    return model;
  }

  static getCarrots(): ShoppingItemModel {
    const model = new ShoppingItemModel();
    model.id = "CR1";
    model.name = "Carrots";
    model.quantity = 3;
    model.isChecked = true;
    return model;
  }

  static getGrapes(): ShoppingItemModel {
    const model = new ShoppingItemModel();
    model.id = "GRP";
    model.name = "Grapes";
    model.quantity = 1;
    model.isChecked = false;
    return model;
  }

  static getTomatoes(): ShoppingItemModel {
    const model = new ShoppingItemModel();
    model.id = "TOM";
    model.name = "Tomatoes";
    model.quantity = 8;
    model.isChecked = true;
    return model;
  }
}
