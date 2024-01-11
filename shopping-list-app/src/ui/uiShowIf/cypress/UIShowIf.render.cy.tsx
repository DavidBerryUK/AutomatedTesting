import UIShowIf from "../UIShowIf";
import TestColorSwatch from "../../../storybook/testControls/TestColorSwatch";
import "../../../styles/styles.scss";

describe("UIShowIf (Render)", () => {
  //
  // ensure child control is visible
  //
  it("ensure child control is visible", () => {
    cy.mount(
      <UIShowIf value={true}>
        <TestColorSwatch />
      </UIShowIf>
    );
    cy.get("#sample-child-control").should("exist");
  });

  //
  // ensure child controls are hidden
  //
  it("ensure child control is hidden with default value", () => {
    cy.mount(
      <UIShowIf>
        <TestColorSwatch />
      </UIShowIf>
    );
    cy.get("#sample-child-control").should("not.exist");
  });

  it("ensure child control is hidden with explicit value", () => {
    cy.mount(
      <UIShowIf value={false}>
        <TestColorSwatch />
      </UIShowIf>
    );
    cy.get("#sample-child-control").should("not.exist");
  });
});
