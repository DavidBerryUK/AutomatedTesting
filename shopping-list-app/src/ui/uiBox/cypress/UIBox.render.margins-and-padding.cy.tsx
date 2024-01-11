import UIBox from "../UIBox";
import "../../../styles/styles.scss";

describe("UIBox (Render Margins and Padding)", () => {
  //
  // Margin All
  //
  it("margin all size 1", () => {
    cy.mount(<UIBox testId="my-test-box" m1 />);
    cy.get('[data-testid="my-test-box"]').should("have.class", "m1");
  });
  it("margin all size 2", () => {
    cy.mount(<UIBox testId="my-test-box" m2 />);
    cy.get('[data-testid="my-test-box"]').should("have.class", "m2");
  });
  it("margin all size 3", () => {
    cy.mount(<UIBox testId="my-test-box" m3 />);
    cy.get('[data-testid="my-test-box"]').should("have.class", "m3");
  });
  it("margin all size 4", () => {
    cy.mount(<UIBox testId="my-test-box" m4 />);
    cy.get('[data-testid="my-test-box"]').should("have.class", "m4");
  });
  it("margin all size 5", () => {
    cy.mount(<UIBox testId="my-test-box" m5 />);
    cy.get('[data-testid="my-test-box"]').should("have.class", "m5");
  });
  //
  // Margin Top
  //
  it("margin top size 1", () => {
    cy.mount(<UIBox testId="my-test-box" mt1 />);
    cy.get('[data-testid="my-test-box"]').should("have.class", "mt1");
  });
  it("margin top size 2", () => {
    cy.mount(<UIBox testId="my-test-box" mt2 />);
    cy.get('[data-testid="my-test-box"]').should("have.class", "mt2");
  });
  it("margin top size 3", () => {
    cy.mount(<UIBox testId="my-test-box" mt3 />);
    cy.get('[data-testid="my-test-box"]').should("have.class", "mt3");
  });
  it("margin top size 4", () => {
    cy.mount(<UIBox testId="my-test-box" mt4 />);
    cy.get('[data-testid="my-test-box"]').should("have.class", "mt4");
  });
  it("margin top size 5", () => {
    cy.mount(<UIBox testId="my-test-box" mt5 />);
    cy.get('[data-testid="my-test-box"]').should("have.class", "mt5");
  });
  //
  // Margin Bottom
  //
  it("margin bottom size 1", () => {
    cy.mount(<UIBox testId="my-test-box" mb1 />);
    cy.get('[data-testid="my-test-box"]').should("have.class", "mb1");
  });
  it("margin bottom size 2", () => {
    cy.mount(<UIBox testId="my-test-box" mb2 />);
    cy.get('[data-testid="my-test-box"]').should("have.class", "mb2");
  });
  it("margin bottom size 3", () => {
    cy.mount(<UIBox testId="my-test-box" mb3 />);
    cy.get('[data-testid="my-test-box"]').should("have.class", "mb3");
  });
  it("margin bottom size 4", () => {
    cy.mount(<UIBox testId="my-test-box" mb4 />);
    cy.get('[data-testid="my-test-box"]').should("have.class", "mb4");
  });
  it("margin bottom size 5", () => {
    cy.mount(<UIBox testId="my-test-box" mb5 />);
    cy.get('[data-testid="my-test-box"]').should("have.class", "mb5");
  });

  //
  // Margin left
  //
  it("margin left size 1", () => {
    cy.mount(<UIBox testId="my-test-box" ml1 />);
    cy.get('[data-testid="my-test-box"]').should("have.class", "ml1");
  });
  it("margin left size 2", () => {
    cy.mount(<UIBox testId="my-test-box" ml2 />);
    cy.get('[data-testid="my-test-box"]').should("have.class", "ml2");
  });
  it("margin left size 3", () => {
    cy.mount(<UIBox testId="my-test-box" ml3 />);
    cy.get('[data-testid="my-test-box"]').should("have.class", "ml3");
  });
  it("margin left size 4", () => {
    cy.mount(<UIBox testId="my-test-box" ml4 />);
    cy.get('[data-testid="my-test-box"]').should("have.class", "ml4");
  });
  it("margin left size 5", () => {
    cy.mount(<UIBox testId="my-test-box" ml5 />);
    cy.get('[data-testid="my-test-box"]').should("have.class", "ml5");
  });
  //
  // Margin right
  //
  it("margin right size 1", () => {
    cy.mount(<UIBox testId="my-test-box" mr1 />);
    cy.get('[data-testid="my-test-box"]').should("have.class", "mr1");
  });
  it("margin right size 2", () => {
    cy.mount(<UIBox testId="my-test-box" mr2 />);
    cy.get('[data-testid="my-test-box"]').should("have.class", "mr2");
  });
  it("margin right size 3", () => {
    cy.mount(<UIBox testId="my-test-box" mr3 />);
    cy.get('[data-testid="my-test-box"]').should("have.class", "mr3");
  });
  it("margin right size 4", () => {
    cy.mount(<UIBox testId="my-test-box" mr4 />);
    cy.get('[data-testid="my-test-box"]').should("have.class", "mr4");
  });
  it("margin right size 5", () => {
    cy.mount(<UIBox testId="my-test-box" mr5 />);
    cy.get('[data-testid="my-test-box"]').should("have.class", "mr5");
  });

  //
  // padding All
  //
  it("padding all size 1", () => {
    cy.mount(<UIBox testId="my-test-box" p1 />);
    cy.get('[data-testid="my-test-box"]').should("have.class", "p1");
  });
  it("padding all size 2", () => {
    cy.mount(<UIBox testId="my-test-box" p2 />);
    cy.get('[data-testid="my-test-box"]').should("have.class", "p2");
  });
  it("padding all size 3", () => {
    cy.mount(<UIBox testId="my-test-box" p3 />);
    cy.get('[data-testid="my-test-box"]').should("have.class", "p3");
  });
  it("padding all size 4", () => {
    cy.mount(<UIBox testId="my-test-box" p4 />);
    cy.get('[data-testid="my-test-box"]').should("have.class", "p4");
  });
  it("padding all size 5", () => {
    cy.mount(<UIBox testId="my-test-box" p5 />);
    cy.get('[data-testid="my-test-box"]').should("have.class", "p5");
  });
  //
  // padding Top
  //
  it("padding top size 1", () => {
    cy.mount(<UIBox testId="my-test-box" pt1 />);
    cy.get('[data-testid="my-test-box"]').should("have.class", "pt1");
  });
  it("padding top size 2", () => {
    cy.mount(<UIBox testId="my-test-box" pt2 />);
    cy.get('[data-testid="my-test-box"]').should("have.class", "pt2");
  });
  it("padding top size 3", () => {
    cy.mount(<UIBox testId="my-test-box" pt3 />);
    cy.get('[data-testid="my-test-box"]').should("have.class", "pt3");
  });
  it("padding top size 4", () => {
    cy.mount(<UIBox testId="my-test-box" pt4 />);
    cy.get('[data-testid="my-test-box"]').should("have.class", "pt4");
  });
  it("padding top size 5", () => {
    cy.mount(<UIBox testId="my-test-box" pt5 />);
    cy.get('[data-testid="my-test-box"]').should("have.class", "pt5");
  });
  //
  // padding Bottom
  //
  it("padding bottom size 1", () => {
    cy.mount(<UIBox testId="my-test-box" pb1 />);
    cy.get('[data-testid="my-test-box"]').should("have.class", "pb1");
  });
  it("padding bottom size 2", () => {
    cy.mount(<UIBox testId="my-test-box" pb2 />);
    cy.get('[data-testid="my-test-box"]').should("have.class", "pb2");
  });
  it("padding bottom size 3", () => {
    cy.mount(<UIBox testId="my-test-box" pb3 />);
    cy.get('[data-testid="my-test-box"]').should("have.class", "pb3");
  });
  it("padding bottom size 4", () => {
    cy.mount(<UIBox testId="my-test-box" pb4 />);
    cy.get('[data-testid="my-test-box"]').should("have.class", "pb4");
  });
  it("padding bottom size 5", () => {
    cy.mount(<UIBox testId="my-test-box" pb5 />);
    cy.get('[data-testid="my-test-box"]').should("have.class", "pb5");
  });

  //
  // padding left
  //
  it("padding left size 1", () => {
    cy.mount(<UIBox testId="my-test-box" pl1 />);
    cy.get('[data-testid="my-test-box"]').should("have.class", "pl1");
  });
  it("padding left size 2", () => {
    cy.mount(<UIBox testId="my-test-box" pl2 />);
    cy.get('[data-testid="my-test-box"]').should("have.class", "pl2");
  });
  it("padding left size 3", () => {
    cy.mount(<UIBox testId="my-test-box" pl3 />);
    cy.get('[data-testid="my-test-box"]').should("have.class", "pl3");
  });
  it("padding left size 4", () => {
    cy.mount(<UIBox testId="my-test-box" pl4 />);
    cy.get('[data-testid="my-test-box"]').should("have.class", "pl4");
  });
  it("padding left size 5", () => {
    cy.mount(<UIBox testId="my-test-box" pl5 />);
    cy.get('[data-testid="my-test-box"]').should("have.class", "pl5");
  });
  //
  // padding right
  //
  it("padding right size 1", () => {
    cy.mount(<UIBox testId="my-test-box" pr1 />);
    cy.get('[data-testid="my-test-box"]').should("have.class", "pr1");
  });
  it("padding right size 2", () => {
    cy.mount(<UIBox testId="my-test-box" pr2 />);
    cy.get('[data-testid="my-test-box"]').should("have.class", "pr2");
  });
  it("padding right size 3", () => {
    cy.mount(<UIBox testId="my-test-box" pr3 />);
    cy.get('[data-testid="my-test-box"]').should("have.class", "pr3");
  });
  it("padding right size 4", () => {
    cy.mount(<UIBox testId="my-test-box" pr4 />);
    cy.get('[data-testid="my-test-box"]').should("have.class", "pr4");
  });
  it("padding right size 5", () => {
    cy.mount(<UIBox testId="my-test-box" pr5 />);
    cy.get('[data-testid="my-test-box"]').should("have.class", "pr5");
  });
});
