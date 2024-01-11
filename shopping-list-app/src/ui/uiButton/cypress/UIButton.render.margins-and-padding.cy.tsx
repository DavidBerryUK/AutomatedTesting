import UIButton from "../UIButton";
import "../../../styles/styles.scss";

describe("UIButton  (Render Margins and Padding)", () => {
  //
  // Margin All
  //
  it("margin all size 1", () => {
    cy.mount(<UIButton label="test-button" m1 />);
    cy.get("button").should("have.class", "m1");
  });
  it("margin all size 2", () => {
    cy.mount(<UIButton label="test-button" m2 />);
    cy.get("button").should("have.class", "m2");
  });
  it("margin all size 3", () => {
    cy.mount(<UIButton label="test-button" m3 />);
    cy.get("button").should("have.class", "m3");
  });
  it("margin all size 4", () => {
    cy.mount(<UIButton label="test-button" m4 />);
    cy.get("button").should("have.class", "m4");
  });
  it("margin all size 5", () => {
    cy.mount(<UIButton label="test-button" m5 />);
    cy.get("button").should("have.class", "m5");
  });
  //
  // Margin Top
  //
  it("margin top size 1", () => {
    cy.mount(<UIButton label="test-button" mt1 />);
    cy.get("button").should("have.class", "mt1");
  });
  it("margin top size 2", () => {
    cy.mount(<UIButton label="test-button" mt2 />);
    cy.get("button").should("have.class", "mt2");
  });
  it("margin top size 3", () => {
    cy.mount(<UIButton label="test-button" mt3 />);
    cy.get("button").should("have.class", "mt3");
  });
  it("margin top size 4", () => {
    cy.mount(<UIButton label="test-button" mt4 />);
    cy.get("button").should("have.class", "mt4");
  });
  it("margin top size 5", () => {
    cy.mount(<UIButton label="test-button" mt5 />);
    cy.get("button").should("have.class", "mt5");
  });
  //
  // Margin Bottom
  //
  it("margin bottom size 1", () => {
    cy.mount(<UIButton label="test-button" mb1 />);
    cy.get("button").should("have.class", "mb1");
  });
  it("margin bottom size 2", () => {
    cy.mount(<UIButton label="test-button" mb2 />);
    cy.get("button").should("have.class", "mb2");
  });
  it("margin bottom size 3", () => {
    cy.mount(<UIButton label="test-button" mb3 />);
    cy.get("button").should("have.class", "mb3");
  });
  it("margin bottom size 4", () => {
    cy.mount(<UIButton label="test-button" mb4 />);
    cy.get("button").should("have.class", "mb4");
  });
  it("margin bottom size 5", () => {
    cy.mount(<UIButton label="test-button" mb5 />);
    cy.get("button").should("have.class", "mb5");
  });

  //
  // Margin left
  //
  it("margin left size 1", () => {
    cy.mount(<UIButton label="test-button" ml1 />);
    cy.get("button").should("have.class", "ml1");
  });
  it("margin left size 2", () => {
    cy.mount(<UIButton label="test-button" ml2 />);
    cy.get("button").should("have.class", "ml2");
  });
  it("margin left size 3", () => {
    cy.mount(<UIButton label="test-button" ml3 />);
    cy.get("button").should("have.class", "ml3");
  });
  it("margin left size 4", () => {
    cy.mount(<UIButton label="test-button" ml4 />);
    cy.get("button").should("have.class", "ml4");
  });
  it("margin left size 5", () => {
    cy.mount(<UIButton label="test-button" ml5 />);
    cy.get("button").should("have.class", "ml5");
  });
  //
  // Margin right
  //
  it("margin right size 1", () => {
    cy.mount(<UIButton label="test-button" mr1 />);
    cy.get("button").should("have.class", "mr1");
  });
  it("margin right size 2", () => {
    cy.mount(<UIButton label="test-button" mr2 />);
    cy.get("button").should("have.class", "mr2");
  });
  it("margin right size 3", () => {
    cy.mount(<UIButton label="test-button" mr3 />);
    cy.get("button").should("have.class", "mr3");
  });
  it("margin right size 4", () => {
    cy.mount(<UIButton label="test-button" mr4 />);
    cy.get("button").should("have.class", "mr4");
  });
  it("margin right size 5", () => {
    cy.mount(<UIButton label="test-button" mr5 />);
    cy.get("button").should("have.class", "mr5");
  });

  //
  // padding All
  //
  it("padding all size 1", () => {
    cy.mount(<UIButton label="test-button" p1 />);
    cy.get("button").should("have.class", "p1");
  });
  it("padding all size 2", () => {
    cy.mount(<UIButton label="test-button" p2 />);
    cy.get("button").should("have.class", "p2");
  });
  it("padding all size 3", () => {
    cy.mount(<UIButton label="test-button" p3 />);
    cy.get("button").should("have.class", "p3");
  });
  it("padding all size 4", () => {
    cy.mount(<UIButton label="test-button" p4 />);
    cy.get("button").should("have.class", "p4");
  });
  it("padding all size 5", () => {
    cy.mount(<UIButton label="test-button" p5 />);
    cy.get("button").should("have.class", "p5");
  });
  //
  // padding Top
  //
  it("padding top size 1", () => {
    cy.mount(<UIButton label="test-button" pt1 />);
    cy.get("button").should("have.class", "pt1");
  });
  it("padding top size 2", () => {
    cy.mount(<UIButton label="test-button" pt2 />);
    cy.get("button").should("have.class", "pt2");
  });
  it("padding top size 3", () => {
    cy.mount(<UIButton label="test-button" pt3 />);
    cy.get("button").should("have.class", "pt3");
  });
  it("padding top size 4", () => {
    cy.mount(<UIButton label="test-button" pt4 />);
    cy.get("button").should("have.class", "pt4");
  });
  it("padding top size 5", () => {
    cy.mount(<UIButton label="test-button" pt5 />);
    cy.get("button").should("have.class", "pt5");
  });
  //
  // padding Bottom
  //
  it("padding bottom size 1", () => {
    cy.mount(<UIButton label="test-button" pb1 />);
    cy.get("button").should("have.class", "pb1");
  });
  it("padding bottom size 2", () => {
    cy.mount(<UIButton label="test-button" pb2 />);
    cy.get("button").should("have.class", "pb2");
  });
  it("padding bottom size 3", () => {
    cy.mount(<UIButton label="test-button" pb3 />);
    cy.get("button").should("have.class", "pb3");
  });
  it("padding bottom size 4", () => {
    cy.mount(<UIButton label="test-button" pb4 />);
    cy.get("button").should("have.class", "pb4");
  });
  it("padding bottom size 5", () => {
    cy.mount(<UIButton label="test-button" pb5 />);
    cy.get("button").should("have.class", "pb5");
  });

  //
  // padding left
  //
  it("padding left size 1", () => {
    cy.mount(<UIButton label="test-button" pl1 />);
    cy.get("button").should("have.class", "pl1");
  });
  it("padding left size 2", () => {
    cy.mount(<UIButton label="test-button" pl2 />);
    cy.get("button").should("have.class", "pl2");
  });
  it("padding left size 3", () => {
    cy.mount(<UIButton label="test-button" pl3 />);
    cy.get("button").should("have.class", "pl3");
  });
  it("padding left size 4", () => {
    cy.mount(<UIButton label="test-button" pl4 />);
    cy.get("button").should("have.class", "pl4");
  });
  it("padding left size 5", () => {
    cy.mount(<UIButton label="test-button" pl5 />);
    cy.get("button").should("have.class", "pl5");
  });
  //
  // padding right
  //
  it("padding right size 1", () => {
    cy.mount(<UIButton label="test-button" pr1 />);
    cy.get("button").should("have.class", "pr1");
  });
  it("padding right size 2", () => {
    cy.mount(<UIButton label="test-button" pr2 />);
    cy.get("button").should("have.class", "pr2");
  });
  it("padding right size 3", () => {
    cy.mount(<UIButton label="test-button" pr3 />);
    cy.get("button").should("have.class", "pr3");
  });
  it("padding right size 4", () => {
    cy.mount(<UIButton label="test-button" pr4 />);
    cy.get("button").should("have.class", "pr4");
  });
  it("padding right size 5", () => {
    cy.mount(<UIButton label="test-button" pr5 />);
    cy.get("button").should("have.class", "pr5");
  });
});
