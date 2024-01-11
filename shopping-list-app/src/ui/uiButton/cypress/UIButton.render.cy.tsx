import UIButton from "../UIButton";
import "../../../styles/styles.scss";

describe("UIButton (Render)", () => {
  it("renders", () => {
    cy.mount(<UIButton label="press me" />);
    cy.get("button").should("contains.text", "press me");
  });

  it("render with test id", () => {
    cy.mount(<UIButton label="press me" testId="test-ui-button" />);
    cy.get("button").should("contains.text", "press me");
    cy.get('[data-testid="test-ui-button"]').should("exist");
  });

  //
  // Button Sizes
  //
  it("render size small", () => {
    cy.mount(<UIButton label="small" small />);
    cy.get("button").should("contains.text", "small").should("have.class", "btn-small");
  });

  it("render size large", () => {
    cy.mount(<UIButton label="large" large />);
    cy.get("button").should("contains.text", "large").should("have.class", "btn-large");
  });

  it("render size extra large", () => {
    cy.mount(<UIButton label="extra large" extraLarge />);
    cy.get("button").should("contains.text", "extra large").should("have.class", "btn-ex-large");
  });

  //
  // Button widths
  //
  it("render width standard", () => {
    cy.mount(<UIButton label="standard" widthStandard />);
    cy.get("button").should("contains.text", "standard").should("have.class", "btn-width-standard");
  });

  it("render width wide", () => {
    cy.mount(<UIButton label="wide" widthWide />);
    cy.get("button").should("contains.text", "wide").should("have.class", "btn-width-wide");
  });

  it("render width extra wide", () => {
    cy.mount(<UIButton label="extra wide" widthExtraWide />);
    cy.get("button").should("contains.text", "extra wide").should("have.class", "btn-width-ex-wide");
  });

  //
  // font weight bold
  //
  it("render bold-text", () => {
    cy.mount(<UIButton label="bold" bold />);
    cy.get("button").should("contains.text", "bold").should("have.class", "btn-bold");
  });

  // textSmall
  it("render text small", () => {
    cy.mount(<UIButton label="Small" textSmall />);
    cy.get("button").should("contains.text", "Small").should("have.class", "btn-txt-small");
  });

  // textLarge
  it("render text large", () => {
    cy.mount(<UIButton label="Large" textLarge />);
    cy.get("button").should("contains.text", "Large").should("have.class", "btn-txt-large");
  });

  // textExtraLarge
  it("render text extra large", () => {
    cy.mount(<UIButton label="Extra Large" textExtraLarge />);
    cy.get("button").should("contains.text", "Extra Large").should("have.class", "btn-txt-ex-large");
  });

  // disabled
  it("render disabled", () => {
    cy.mount(<UIButton label="Disabled" disabled />);
    cy.get("button").should("contains.text", "Disabled").should("be.disabled");
  });
});
