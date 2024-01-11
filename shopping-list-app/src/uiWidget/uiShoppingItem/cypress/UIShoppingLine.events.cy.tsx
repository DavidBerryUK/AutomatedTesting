import ShoppingItemModel from "src/models/ShoppingItemModel";
import UIShoppingLineTestHarness from "./UIShoppingLineTestHarness";
import TestDataFactoryShoppingItems from "src/testDataFactory/TestDataFactoryShoppingItems";
import "../../../styles/styles.scss";

const viewportSize = { width: 700, height: 60 };

describe("UIShoppingItem (Events)", () => {
  //
  // test that data has been passed to all sub controls correct
  // and values are being displayed as expected
  //
  it("type new text", () => {
    var ShoppingItemModel = TestDataFactoryShoppingItems.getApples();
    var deleteButtonPressed = false;
    var addButtonPressed = false;

    cy.viewport(viewportSize.width, viewportSize.height);
    cy.mount(
      <UIShoppingLineTestHarness
        value={ShoppingItemModel}
        onValueChanged={(newValue: ShoppingItemModel) => {
          ShoppingItemModel = newValue;
        }}
        onDelete={(newValue: ShoppingItemModel) => {
          ShoppingItemModel = newValue;
          deleteButtonPressed = true;
        }}
        onAdd={(newValue: ShoppingItemModel) => {
          ShoppingItemModel = newValue;
          addButtonPressed = true;
        }}
        textTestId="test-text-control"
        stepperTestId="test-stepper-control"
        switchTestId="test-switch-control"
        deleteTestId="test-delete-button"
        addTestId="test-add-button"
        showButtonAdd={true}
        showButtonDelete={true}
        showSwitchComplete={true}
      />
    );

    // amend text to Bananas and verify
    //
    cy.log("**** Testing Editing Text ****");
    cy.get('[data-testid="test-text-control"]')
      .should("contain.value", "Apples")
      .clear()
      .type("bananas")
      .should("contain.value", "bananas")
      .then(() => {
        // validate model is updated
        expect(ShoppingItemModel.name).to.eq("bananas");
      });

    // switch completed from OFF to ON
    // check is off initially,
    cy.log("**** Testing Completed Switch ****");
    cy.get('[data-testid="test-switch-control"] input').should("not.be.checked");
    cy.get('[data-testid="test-switch-control"]').click();
    cy.get('[data-testid="test-switch-control"] input')
      .should("be.checked")
      .then(() => {
        // validate model is updated
        expect(ShoppingItemModel.isChecked).to.eq(true);
      });

    // test the stepper control
    // click the stepper decrement button x 2
    cy.log("**** Testing Stepper Decrement Button ****");
    cy.get('[data-testid="test-stepper-control"] > button:contains("-")').click()
    cy.get('[data-testid="test-stepper-control"] > button:contains("-")').click()
    cy.get('[data-testid="test-stepper-control"] > button:contains("-")');
    cy.get('[data-testid="test-stepper-control"] > input')
      .should("have.value", "4")
      .then(() => {
        // validate model is updated
        expect(ShoppingItemModel.quantity).to.eq(4);
      });

    // test the stepper control
    // click the stepper increment button x 4
    cy.log("**** Testing Stepper Increment Button ****");
    cy.get('[data-testid="test-stepper-control"] > button:contains("+")').click();
    cy.get('[data-testid="test-stepper-control"] > button:contains("+")').click();
    cy.get('[data-testid="test-stepper-control"] > button:contains("+")').click();
    cy.get('[data-testid="test-stepper-control"] > button:contains("+")').click();
    cy.get('[data-testid="test-stepper-control"] > input')
      .should("have.value", "8")
      .then(() => {
        // validate model is updated
        expect(ShoppingItemModel.quantity).to.eq(8);
      });

    // Test delete button works
    //
    cy.log("**** Testing DELETE Button ****");
    deleteButtonPressed = false;
    cy.get('[data-testid="test-delete-button"]')
      .click()
      .then(() => {
        expect(deleteButtonPressed).to.eq(true);
      });

    // Test add button works when text and quantity are entered
    //
    cy.log("**** Testing ADD Button with valid values ****");
    addButtonPressed = false;
    cy.get('[data-testid="test-text-control"]').clear().type("cake");
    cy.get('[data-testid="test-stepper-control"] > input').clear().type("3");
    cy.get('[data-testid="test-add-button"]')
      .click()
      .then(() => {
        expect(addButtonPressed).to.eq(true);
        expect(ShoppingItemModel.name).to.eq("cake");
        expect(ShoppingItemModel.quantity).to.eq(3);
      });

    // Test add button with no text
    //
    cy.log("**** Testing ADD Button with invalid text ****");
    addButtonPressed = false;
    cy.get('[data-testid="test-text-control"]').clear();
    cy.get('[data-testid="test-stepper-control"] > input').clear().type("3");
    cy.get('[data-testid="test-add-button"]').should("be.disabled");
  });
});
