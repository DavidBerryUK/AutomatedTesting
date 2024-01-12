import UISwitch from "../UISwitch";
import "../../../styles/styles.scss";

describe("UISwitch (Events)", () => {
  //
  // Change the Switch from OFF to ON
  //
  it("raise event when switch on", () => {
    let isOn = false;
    cy.mount(
      <UISwitch
        value={isOn}
        testId="switch"
        onValueChanged={(newValue: boolean) => {
          isOn = newValue;
        }}
      />
    );
    cy.get("label")
      .click()
      .then(() => {
        //
        // Assert, that the switch is now on
        expect(isOn).to.eq(true);
      });
  });

  //
  // Change the Switch from ON to OFF
  //
  it("raise event when switch off", () => {
    let isOn = true;
    cy.mount(
      <UISwitch
        value={isOn}
        testId="switch"
        onValueChanged={(newValue: boolean) => {
          isOn = newValue;
        }}
      />
    );
    cy.get("label")
      .click()
      .then(() => {
        //
        // Assert, that the switch is now off
        expect(isOn).to.eq(false);
      });
  });
});
