import ShoppingItemModel from "src/models/ShoppingItemModel";
import UIShoppingList from "../UIShoppingList";
import TestDataFactoryShoppingList from "src/testDataFactory/TestDataFactoryShoppingList";
import "../../../styles/styles.scss";

const viewportSize = { width: 630, height: 250 };

describe("UIShoppingList (Render)", () => {
  //
  // test simple render
  //
  it("simple render", () => {
    cy.viewport(viewportSize.width, viewportSize.height);
    cy.mount(<UIShoppingList collection={TestDataFactoryShoppingList.get()} />);
  });

  //
  // test that data has been passed to all sub controls correct
  // and values are being displayed as expected
  //
  it("render  check content", () => {
    const collection = TestDataFactoryShoppingList.get();
    cy.viewport(viewportSize.width, viewportSize.height);
    cy.mount(<UIShoppingList collection={collection} />);

    //
    // loop though rows and ensure each rows ui representation
    // matches the data model
    //
    collection.items.forEach((item: ShoppingItemModel, index: number) => {
      cy.shoppingListLineValidate(index+1,item.name,item.quantity, item.isChecked);
    });
  });
});
