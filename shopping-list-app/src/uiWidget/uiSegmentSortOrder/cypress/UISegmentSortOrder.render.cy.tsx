import EnumListSortOrder from "src/enum/EnumListSortOrder";
import UISegmentSortOrder from "../UISegmentSortOrder";
import "../../../styles/styles.scss";

describe("UISegmentSortOrder (Render)", () => {
  it("renders with option name selected (sort by name)", () => {
    cy.mount(<UISegmentSortOrder value={EnumListSortOrder.Name}/>);

    // ensure label is rendered
    cy.get("label span").should("contains.text", "Sort Order");

    // ensure options are rendered, and correct one is selected
    cy.contains("button", "Name").should("exist").should("have.class", "selected");
    cy.contains("button", "Completed").should("exist").should("not.have.class", "selected");
    cy.contains("button", "Created").should("exist").should("not.have.class", "selected");
  });

  it("render with test id", () => {
    cy.mount(<UISegmentSortOrder value={EnumListSortOrder.Name} testId="sort-order"/>);    
    cy.get('[data-testid="sort-order"]').should("exist");
  });

  it("renders with option completed selected", () => {
    cy.mount(<UISegmentSortOrder value={EnumListSortOrder.Completed} />);

    // ensure label is rendered
    cy.get("label span").should("contains.text", "Sort Order");

    // ensure options are rendered, and correct one is selected
    cy.contains("button", "Name").should("exist").should("not.have.class", "selected");
    cy.contains("button", "Completed").should("exist").should("have.class", "selected");
    cy.contains("button", "Created").should("exist").should("not.have.class", "selected");
  });

  it("renders with option created selected (sort by date created)", () => {
    cy.mount(<UISegmentSortOrder value={EnumListSortOrder.Date} />);

    // ensure label is rendered
    cy.get("label span").should("contains.text", "Sort Order");

    // ensure options are rendered, and correct one is selected
    cy.contains("button", "Name").should("exist").should("not.have.class", "selected");
    cy.contains("button", "Completed").should("exist").should("not.have.class", "selected");
    cy.contains("button", "Created").should("exist").should("have.class", "selected");
  });
});
