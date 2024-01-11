import cypress from "cypress"

describe('intercept API', () => {
    it('show existing items', () => {

        //
        // intercept API call and return predefined JSON
        //
        cy.intercept("GET", "ListItem", { fixture: 'shopping-list-initial.json' })

        //
        // visit page
        //
        cy.visit('http://localhost:3000/')

        //***********************************************/
        // validate page is rendered correctly          */
        //***********************************************/

        // validate line count
        cy.shoppingListValidateLinecount(6);

        // validate each lines details
        cy.shoppingListLineValidate(1,"Apples",6,false);
        cy.shoppingListLineValidate(2,"Bread",6,true);
        cy.shoppingListLineValidate(3,"Cheese",1,false);
        cy.shoppingListLineValidate(4,"Milk",2,true);
        cy.shoppingListLineValidate(5,"Pasta",1,true);
        cy.shoppingListLineValidate(6,"Steak",2,false);                        
    })
})