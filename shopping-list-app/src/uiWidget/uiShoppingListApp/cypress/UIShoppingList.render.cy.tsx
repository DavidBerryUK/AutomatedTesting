import UIShoppingListApp from "../UIShoppingListApp";
import "../../../styles/styles.scss";

const viewportSize = { width: 630, height: 250 };


describe("UIShoppingListApp (render)", () => {    

  it("simple render", () => {
    cy.viewport(viewportSize.width, viewportSize.height);    
    cy.mount(<UIShoppingListApp />);
  });
});
