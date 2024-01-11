import TestDataFactoryShoppingItems from "src/testDataFactory/TestDataFactoryShoppingItems";
import UIShoppingItem from "../UIShoppingItem";
import "../../../styles/styles.scss";


const viewportSize = { width: 700, height: 60 };

describe("UIShoppingItem (Render)", () => {
  //
  // test simple render
  //
  it("simple render", () => {
    cy.viewport(viewportSize.width, viewportSize.height);
    cy.mount(<UIShoppingItem value={TestDataFactoryShoppingItems.getApples()} />);
  });

  //
  // test that data has been passed to all sub controls correct
  // and values are being displayed as expected
  //
  it("render with test ids and check content", () => {
    cy.viewport(viewportSize.width, viewportSize.height);
    cy.mount(
      <UIShoppingItem
        value={TestDataFactoryShoppingItems.getApples()}
        showButtonAdd={true}
        showButtonDelete={true}
        showSwitchComplete={true}
        testId="test-shopping-line"
        textTestId="test-text-control"
        stepperTestId="test-stepper-control"
        switchTestId="test-switch-control"
        deleteTestId="text-delete-button"
      />
    );

    // test sub controls have correct values passed in via value (ShoppingItemModel);
    cy.get('[data-testid="test-shopping-line"]').should("exist");
    cy.get('[data-testid="test-text-control"]').should("exist").and("contain.value", "Apples");
    cy.get('[data-testid="test-stepper-control"]').should("exist").find("input").should("have.value", "6");
    cy.get('[data-testid="test-switch-control"]').should("exist").find("input").should("not.be.checked");
    cy.get('[data-testid="text-delete-button"]').should("exist").should("contain.text", "Delete");
  });
});
