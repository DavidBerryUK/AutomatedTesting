import UISegment from "../UISegment";
import SegmentOption from "../models/SegmentOption";
import "../../../styles/styles.scss";

const segmentOptions = [new SegmentOption("A", "Alphabetic"), new SegmentOption("C", "Completed"), new SegmentOption("D", "Date")];

describe("UISegment (Render)", () => {
  it("renders (option 1 selected)", () => {
    cy.mount(<UISegment options={segmentOptions} value={segmentOptions[0].code} />);

    cy.get("button:nth-child(1)").should("contains.text", segmentOptions[0].text).should("have.class", "selected");
    cy.get("button:nth-child(2)").should("contains.text", segmentOptions[1].text).should("not.have.class", "selected");
    cy.get("button:nth-child(3)").should("contains.text", segmentOptions[2].text).should("not.have.class", "selected");
  });

  it("renders (option 2 selected)", () => {
    cy.mount(<UISegment options={segmentOptions} value={segmentOptions[1].code} />);

    cy.get("button:nth-child(1)").should("contains.text", segmentOptions[0].text).should("not.have.class", "selected");
    cy.get("button:nth-child(2)").should("contains.text", segmentOptions[1].text).should("have.class", "selected");
    cy.get("button:nth-child(3)").should("contains.text", segmentOptions[2].text).should("not.have.class", "selected");
  });

  it("renders (option 3 selected)", () => {
    cy.mount(<UISegment options={segmentOptions} value={segmentOptions[2].code} />);

    cy.get("button:nth-child(1)").should("contains.text", segmentOptions[0].text).should("not.have.class", "selected");
    cy.get("button:nth-child(2)").should("contains.text", segmentOptions[1].text).should("not.have.class", "selected");
    cy.get("button:nth-child(3)").should("contains.text", segmentOptions[2].text).should("have.class", "selected");
  });
});
