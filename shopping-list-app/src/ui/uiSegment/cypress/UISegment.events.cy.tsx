import UISegment from "../UISegment";
import SegmentOption from "../models/SegmentOption";
import "../../../styles/styles.scss";

const segmentOptions = [new SegmentOption("A", "Alphabetic"), new SegmentOption("C", "Completed"), new SegmentOption("D", "Date")];

describe("UISegment (Events)", () => {
  let lastOptionSelected: SegmentOption | null;

  it("event (select option 1)", () => {
    lastOptionSelected = null;
    cy.mount(
      <UISegment
        options={segmentOptions}
        value={segmentOptions[0].code}
        onChange={(option) => {
          lastOptionSelected = option;
        }}
      />
    );
    cy.get("button:nth-child(1)")
      .click()
      .then(() => {
        expect(lastOptionSelected).to.equal(segmentOptions[0]);
      });
  });

  it("event (select option 2)", () => {
    lastOptionSelected = null;
    cy.mount(
      <UISegment
        options={segmentOptions}
        value={segmentOptions[0].code}
        onChange={(option) => {
          lastOptionSelected = option;
        }}
      />
    );
    cy.get("button:nth-child(2)")
      .click()
      .then(() => {
        expect(lastOptionSelected).to.equal(segmentOptions[1]);
      });
  });

  it("event (select option 3)", () => {
    lastOptionSelected = null;
    cy.mount(
      <UISegment
        options={segmentOptions}
        value={segmentOptions[0].code}
        onChange={(option) => {
          lastOptionSelected = option;
        }}
      />
    );
    cy.get("button:nth-child(3)")
      .click()
      .then(() => {
        expect(lastOptionSelected).to.equal(segmentOptions[2]);
      });
  });
});
