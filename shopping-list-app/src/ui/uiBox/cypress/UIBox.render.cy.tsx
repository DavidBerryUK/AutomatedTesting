import TestRectangle from "src/storybook/testControls/TestRectangle";
import UIBox from "../UIBox";
import "../../../styles/styles.scss";

describe("UIBox (Render)", () => {
  it("renders correct test id and displays child'+'", () => {
    cy.mount(
      <UIBox testId="my-test-box">
        <TestRectangle testId="my-test-rectangle" colorNo={1} />
      </UIBox>
    );

    cy.get('[data-testid="my-test-box"]').should("exist");
    cy.get('[data-testid="my-test-box"] [data-testid="my-test-rectangle"]').should("exist");
  });
});
