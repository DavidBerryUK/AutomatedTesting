import "../../../styles/styles.scss";
import UISwitch from "../UISwitch";

describe("UISwitch (Render)", () => {
  //
  // ensure the test-id is inserted into the dom if passed to the control
  //
  it("renders with test id", () => {
    cy.mount(<UISwitch value={false} testId="test-me" />);
    cy.get('[data-testid="test-me"]').should("exist");
  });

  //
  // test the control renders correctly in the ON state
  //
  it("renders in on state", () => {
    cy.mount(<UISwitch value={true} />);

    // Check the background color of the switch (should be green #00d084)
    cy.get(".ui-switch-background").should("have.css", "background-color", "rgb(0, 208, 132)");

    // Check the background color of the switch button
    cy.get(".ui-switch-button").should("have.css", "background-color", "rgb(255, 255, 255)");

    // Check the left position of the switch button
    cy.get(".ui-switch-button").should("have.css", "left", "25px");

    // ensure INPUT is checked
    cy.get("Input").should("be.checked");
  });

  //
  // test the control renders correctly in the OFF state
  //
  it("renders in off state", () => {
    cy.mount(<UISwitch value={false} />);
    // Check the background color of the switch (should be grey #434257)
    cy.get(".ui-switch-background").should("have.css", "background-color", "rgb(67, 66, 87)");

    // Check the background color of the switch button
    cy.get(".ui-switch-button").should("have.css", "background-color", "rgb(255, 255, 255)");

    // Check the left position of the switch button
    cy.get(".ui-switch-button").should("have.css", "left", "1px");

    // ensure INPUT is NOT checked
    cy.get("Input").should("not.be.checked");
  });
});
