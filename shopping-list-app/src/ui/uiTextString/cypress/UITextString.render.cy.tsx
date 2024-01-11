import UITextString from "../UITextString";
import "../../../styles/styles.scss";

describe("UITextString (Render)", () => {
  it("renders", () => {
    cy.mount(<UITextString value="hello" />);
    cy.get("input").should("has.value", "hello");
  });

  it("render with test ids", () => {
    cy.mount(<UITextString value={"hello"} testId="test-value-text" />);
    cy.get('[data-testid="test-value-text"]').should("exist").and("contain.value", "hello");
  });
});
