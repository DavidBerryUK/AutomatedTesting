import UITextStringTestHarness from "./UITextStringTestHarness";
import "../../../styles/styles.scss";

describe("UITextString (Events)", () => {
  it("clear edit value", () => {
    var value = "welcome";
    cy.mount(
      <UITextStringTestHarness
        value={value}
        testId="test-value-text"
        onValueChange={(newValue: string) => {
          value = newValue;
        }}
      />
    );

    var element = cy.get('[data-testid="test-value-text"]');

    element.should("have.value", "welcome");
    element
      .get('[data-testid="test-value-text"]')
      .clear()
      .then(() => {
        expect(value).to.equal("");
      });
  });

  //
  // the testing is quite limited as the react component does not re-render,
  // thus we can only test a single event
  //
  it("type new value", () => {
    var value = "welcome";
    cy.mount(
      <UITextStringTestHarness
        value={value}
        testId="test-value-text"
        onValueChange={(newValue: string) => {
          value = newValue;
        }}
      />
    );

    var element = cy.get('[data-testid="test-value-text"]');

    element.should("have.value", "welcome");
    element.clear();
    element
      .get('[data-testid="test-value-text"]')
      .type("apple")
      .then(() => {
        expect(value).to.equal("apple");
      });
  });
});
