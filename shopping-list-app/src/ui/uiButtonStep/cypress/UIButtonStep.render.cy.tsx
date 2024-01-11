import UIButtonStep from "../UIButtonStep";
import "../../../styles/styles.scss";

describe("UIButtonStep (Render)", () => {
  it("renders with correct label '+'", () => {
    cy.mount(<UIButtonStep label="+" />);
    cy.get("button").should("contains.text", "+");
  });

  it("renders with correct label '-'", () => {
    cy.mount(<UIButtonStep label="-" />);
    cy.get("button").should("contains.text", "-");
  });

  it("render with test id", () => {
    cy.mount(<UIButtonStep label="+" testId="test-ui-button" />);

    // get button by test id and test rendering
    //
    const button = cy.get('[data-testid="test-ui-button"]');
    button.should("exist");
    button.should("contains.text", "+");
  });
});
