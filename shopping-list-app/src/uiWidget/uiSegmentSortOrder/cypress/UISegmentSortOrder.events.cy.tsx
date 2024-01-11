import EnumListSortOrder from "src/enum/EnumListSortOrder";
import UISegmentSortOrderTestHarness from "./UISegmentSortOrderTestHarness";
import "../../../styles/styles.scss";

describe("UISegmentSortOrder (events)", () => {
  it("select name", () => {
    let value: EnumListSortOrder | null;
    cy.mount(
      <UISegmentSortOrderTestHarness
        value={EnumListSortOrder.Name}
        onValueChanged={(newValue: EnumListSortOrder) => {
          value = newValue;
        }}
      />
    );

    // click on name
    cy.get('button:contains("Name")')
      .click()
      .then(() => {
        expect(value).to.equal(EnumListSortOrder.Name);
      });

    cy.contains("button", "Name").should("exist").should("have.class", "selected");
    cy.contains("button", "Completed").should("exist").should("not.have.class", "selected");
    cy.contains("button", "Created").should("exist").should("not.have.class", "selected");

    // click on completed
    cy.get('button:contains("Completed")')
      .click()
      .then(() => {
        expect(value).to.equal(EnumListSortOrder.Completed);
      });

    // ensure options are rendered, and correct one is selected
    cy.contains("button", "Name").should("exist").should("not.have.class", "selected");
    cy.contains("button", "Completed").should("exist").should("have.class", "selected");
    cy.contains("button", "Created").should("exist").should("not.have.class", "selected");

    // click on created
    cy.get('button:contains("Created")')
      .click()
      .then(() => {
        expect(value).to.equal(EnumListSortOrder.Date);
      });

    // ensure options are rendered, and correct one is selected
    cy.contains("button", "Name").should("exist").should("not.have.class", "selected");
    cy.contains("button", "Completed").should("exist").should("not.have.class", "selected");
    cy.contains("button", "Created").should("exist").should("have.class", "selected");
  });
});
