import UIStepper from "../UIStepper";
import "../../../styles/styles.scss";

describe("UIStepper (Events)", () => {
  it("test increment button to change value from 10 to 11", () => {
    let value = 10;

    cy.mount(
      <UIStepper
        value={value}
        testId="test-control-container"
        buttonSubtractTestId="test-subtract-button"
        buttonAddTestId="test-add-button"
        txtValueTestId="test-value-text"
        onValueChanged={(newValue: number) => {
          value = newValue;
        }}
      />
    );

    cy.get('[data-testid="test-add-button"]')
      .click()
      .then(() => {
        //
        // Assert,
        // that the button was pressed
        expect(value).to.equal(11);
      });
  });

  it("test decrement button to change value from 10 to 9", () => {
    let value = 10;

    cy.mount(
      <UIStepper
        value={value}
        testId="test-control-container"
        buttonSubtractTestId="test-subtract-button"
        buttonAddTestId="test-add-button"
        txtValueTestId="test-value-text"
        onValueChanged={(newValue: number) => {
          value = newValue;
        }}
      />
    );

    cy.get('[data-testid="test-subtract-button"]')
      .click()
      .then(() => {
        //
        // Assert,
        // that the button was pressed
        expect(value).to.equal(9);
      });
  });

  it("test decrement button to limit value to 0", () => {
    let value = 0;

    cy.mount(
      <UIStepper
        value={value}
        testId="test-control-container"
        buttonSubtractTestId="test-subtract-button"
        buttonAddTestId="test-add-button"
        txtValueTestId="test-value-text"
        onValueChanged={(newValue: number) => {
          value = newValue;
        }}
      />
    );

    cy.get('[data-testid="test-subtract-button"]')
      .click()
      .then(() => {
        //
        // Assert,
        // that the button was pressed
        expect(value).to.equal(0);
      });
  });

  it("test text edit to change value to 5", () => {
    let value = 0;

    cy.mount(
      <UIStepper
        value={value}
        testId="test-control-container"
        buttonSubtractTestId="test-subtract-button"
        buttonAddTestId="test-add-button"
        txtValueTestId="test-value-text"
        onValueChanged={(newValue: number) => {
          value = newValue;
        }}
      />
    );

    cy.get('[data-testid="test-value-text"]')
      .type("5")
      .then(() => {
        //
        // Assert,
        // that the button was pressed
        expect(value).to.equal(5);
      });
  });
});
