import UITextNumber from "../UITextNumber";
import "../../../styles/styles.scss";

describe("UITextNumber (Render)", () => {
  it("renders", () => {
    cy.mount(<UITextNumber value={5} />);
    cy.get("input").should("has.value", "5");
  });

  it("render with test ids", () => {
    cy.mount(<UITextNumber value={10} testId="test-value-text" />);
    cy.get('[data-testid="test-value-text"]').should("exist").and("contain.value", "10");
  });
});
