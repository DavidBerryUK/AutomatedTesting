import UILabel from "../UILabel";
import "../../../styles/styles.scss";

describe("UILabel (Render)", () => {
  it("renders", () => {
    cy.mount(<UILabel label="forename" />);
    cy.get("label").should("exist").should("have.class", "ui-label");
    cy.get("label span").should("exist");
  });

  it("render with test id", () => {
    cy.mount(<UILabel label="forename" testId="test-ui-label" />);
    cy.get("label").should("exist").should("have.class", "ui-label");
    cy.get("label span").should("exist");
    cy.get('[data-testid="test-ui-label"]').should("exist");
  });

  //
  // Label Sizes
  //
  it("render size small", () => {
    cy.mount(<UILabel label="small" small />);
    cy.get("label span").should("contains.text", "small");
    cy.get("label").should("exist").should("have.class", "ui-label").should("have.class", "lbl-small");
  });

  it("render size medium", () => {
    cy.mount(<UILabel label="medium label" medium />);
    cy.get("label span").should("contains.text", "medium label");
    cy.get("label").should("exist").should("have.class", "ui-label").should("have.class", "lbl-medium");
  });

  it("render size wide", () => {
    cy.mount(<UILabel label="wide label" wide />);
    cy.get("label span").should("contains.text", "wide label");
    cy.get("label").should("exist").should("have.class", "ui-label").should("have.class", "lbl-wide");
  });

  it("render size extra wide", () => {
    cy.mount(<UILabel label="extra wide label" extraWide />);
    cy.get("label span").should("contains.text", "extra wide label");
    cy.get("label").should("exist").should("have.class", "ui-label").should("have.class", "lbl-ex-wide");
  });
});
