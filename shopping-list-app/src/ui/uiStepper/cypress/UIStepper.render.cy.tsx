import UIStepper from "../UIStepper";
import "../../../styles/styles.scss";

describe("UIStepper (Render)", () => {
  it("simple render", () => {
    cy.mount(<UIStepper value={5} />);
  });

  it("render with test ids and check content", () => {
    cy.mount(<UIStepper value={10} testId="test-control-container" buttonSubtractTestId="test-subtract-button" buttonAddTestId="test-add-button" txtValueTestId="test-value-text" />);

    cy.get('[data-testid="test-control-container"]').should("exist");
    cy.get('[data-testid="test-subtract-button"]').should("exist").and("contain.text", "-");
    cy.get('[data-testid="test-add-button"]').should("exist").and("contain.text", "+");
    cy.get('[data-testid="test-value-text"]').should("exist").and("contain.value", "10");

    // experiment setting element to an attrubtute
    const elementValue = cy.get('[data-testid="test-value-text"]');
    elementValue.should("exist");
    elementValue.should("has.value", "10");
  });
});
