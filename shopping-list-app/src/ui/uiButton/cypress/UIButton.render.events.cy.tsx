import UIButton from "../UIButton";
import "../../../styles/styles.scss";

describe("UIButton (Events)", () => {
  it("raises click event when pressed", () => {
    //
    // Arrange
    // set flag and mount the control
    var clicked = false;
    cy.mount(
      <UIButton
        label="press me"
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

  it("test can not press disabled button", () => {
    //
    // Arrange
    // set flag and mount the control
    var clicked = false;
    cy.mount(
      <UIButton
        label="press me"
        disabled
        onClick={() => {
          clicked = true;
        }}
      />
    );
    //
    // Act,
    // click the button
    cy.get("button")
      .click({ force: true })
      .then(() => {
        //
        // Assert,
        // that the button press event did not fire
        expect(clicked).to.eq(false);
      });
  });
});
