import UITextNumberTestHarness from "./UITextNumberTestHarness";
import "../../../styles/styles.scss";

describe("UITextNumber (Events)", () => {
  it("clear edit value", () => {
    var value = 10;
    cy.mount(
      <UITextNumberTestHarness
        value={value}
        testId="test-value-text"
        onValueChange={(newValue: number) => {
          value = newValue;
        }}
      />
    );

    var element = cy.get('[data-testid="test-value-text"]');

    element.should("have.value", 10);
    element
      .get('[data-testid="test-value-text"]')
      .clear()
      .then(() => {
        expect(value).to.equal(0);
      });
  });

  //
  // the testing is quite limited as the react component does not re-render,
  // thus we can only test a single event
  //
  it("type new value", () => {
    var value = 10;
    cy.mount(
      <UITextNumberTestHarness
        value={value}
        testId="test-value-text"
        onValueChange={(newValue: number) => {
          value = newValue;
        }}
      />
    );

    var element = cy.get('[data-testid="test-value-text"]');

    element.should("have.value", 10);
    element.clear();
    element
      .get('[data-testid="test-value-text"]')
      .type("25")
      .then(() => {
        expect(value).to.equal(25);
      });
  });
});
