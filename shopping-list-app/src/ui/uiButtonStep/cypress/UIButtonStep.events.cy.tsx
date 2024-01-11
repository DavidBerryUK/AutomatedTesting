import UIButtonStep from "../UIButtonStep";
import "../../../styles/styles.scss";

describe("UIButtonStep (Events)", () => {
  it("raises click event when pressed", () => {
    //
    // Arrange
    // set flag and mount the control
    var clicked = false;
    cy.mount(
      <UIButtonStep
        label="+"
        onClick={() => {
          clicked = true;
        }}
      />
    );
    //
    // Act,
    // click the button
    cy.get("button")
      .click()
      .then(() => {
        //
        // Assert,
        // that the button was pressed
        expect(clicked).to.eq(true);
      });
  });
});
