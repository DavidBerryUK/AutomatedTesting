import TestDataFactoryShoppingList from "src/testDataFactory/TestDataFactoryShoppingList";
import UIShoppingListTestHarness from "./UIShoppingListTestHarness";
import ShoppingItemCollection from "src/models/ShoppingItemCollection";
import ShoppingItemModel from "src/models/ShoppingItemModel";
import "../../../styles/styles.scss";

const viewportSize = { width: 630, height: 250 };

describe("UIShoppingList (Events)", () => {
  //
  // test that data has been passed to all sub controls correct
  // and values are being displayed as expected
  //
  it("test UI updating various details in the shopping list", () => {
    let collection = TestDataFactoryShoppingList.get();
    let lastUpdatedItem: ShoppingItemModel | null = null;
    let lastDeletedItem: ShoppingItemModel | null = null;

    cy.viewport(viewportSize.width, viewportSize.height);
    cy.mount(
      <UIShoppingListTestHarness
        collection={collection}
        onCollectionChanged={(newCollection: ShoppingItemCollection) => {
          collection = newCollection;
        }}
        onItemChanged={(item: ShoppingItemModel) => {
          lastUpdatedItem = item;
        }}
        onItemDeleted={(item: ShoppingItemModel) => {
          lastDeletedItem = item;
        }}
      />
    );

    // find rows of items in the shopping list
    const carrotsRow = collection.items.findIndex((item) => item.name === "Carrots");
    const applesRow = collection.items.findIndex((item) => item.name === "Apples");
    const grapesRow = collection.items.findIndex((item) => item.name === "Grapes");
    let rowSelector = "";

    // update "Carrots" description to "Oranges"
    lastUpdatedItem = null;
    rowSelector = `.ui-shopping-list .ui-shopping-item:nth-child(${carrotsRow + 1})`;
    cy.get(rowSelector)
      .find(".ui-text-string")
      .should("have.value", "Carrots")
      .clear()
      .type("Oranges")
      .should("have.value", "Oranges")
      .then(() => {
        // validate model is updated
        expect(collection.items[carrotsRow].name).to.eq("Oranges");
        expect(lastUpdatedItem).to.eq(collection.items[carrotsRow]);
      });

    // update "Grapes" quantity to 10
    lastUpdatedItem = null;
    rowSelector = `.ui-shopping-list .ui-shopping-item:nth-child(${grapesRow + 1})`;
    cy.get(rowSelector)
      .find(".ui-text-number")
      .should("have.value", "1")
      .clear()
      .type("10")
      .should("have.value", "10")
      .then(() => {
        // validate model is updated
        expect(collection.items[grapesRow].quantity).to.eq(10);
        expect(lastUpdatedItem).to.eq(collection.items[grapesRow]);
      });

    // update "Apples" check box to completed
    lastUpdatedItem = null;
    rowSelector = `.ui-shopping-list .ui-shopping-item:nth-child(${applesRow + 1})`;
    cy.get(rowSelector)
      .find(".ui-switch")
      .should("not.be.checked")
      .click()
      .should("not.be.checked")
      .then(() => {
        // validate model is updated
        expect(collection.items[applesRow].isChecked).to.eq(true);
        expect(lastUpdatedItem).to.eq(collection.items[applesRow]);
      });

    // delete grapes
    lastDeletedItem = null;
    rowSelector = `.ui-shopping-list .ui-shopping-item:nth-child(${grapesRow + 1})`;
    cy.get(rowSelector)
      .find("button:contains('Delete')")
      .click()
      .then(() => {
        // validate model was returned in callback 'onDelete'
        expect(lastDeletedItem).to.eq(collection.items[grapesRow]);
      });
  });
});
