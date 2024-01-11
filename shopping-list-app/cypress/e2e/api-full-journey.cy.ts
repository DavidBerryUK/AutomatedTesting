describe('full journey', () => {
  // Add 3 items
  // 1) Frozen chips      x 3
  // 2) Red Onions        x 6
  // 3) Choc Chip Cookies x 1
  // 
  // Delete Frozen chips and validate
  // Set Red Onions to Complete, then press [Delete Complated] and validate
  // press [Delete all] adn validate
  //
  it('enter 3 items and delete', () => {
    //
    //
    //
    cy.visit('http://localhost:3000/')
    //
    // ensure list is clear
    //
    cy.shoppingListHeaderPressButtonDeleteAll();
    cy.reload();
    //
    // add new shopping items
    //    
    cy.shoppingListAdd("Frozen Chips",3);
    cy.shoppingListAdd("Red Onions",6);
    cy.shoppingListAdd("Choc Chip Cookies",1)            

    //*******************************************************************/
    // validate 3 items have been added to the shopping list and are    */
    // presented in name order                                          */
    //*******************************************************************/
    
    // there should be 3 shopping item lines     
    cy.shoppingListValidateLinecount(3);
    
    cy.shoppingListLineValidate(1,"Choc Chip Cookies",1,false);
    cy.shoppingListLineValidate(2,"Frozen Chips",3,false);
    cy.shoppingListLineValidate(3,"Red Onions",6,false);

    //*******************************************************************/
    // Delete Frozen Chips                                              */
    //*******************************************************************/
    cy.shoppingListLinePressDelete(2);
    // there should be 2 shopping item lines 
    cy.shoppingListValidateLinecount(2);

    //*******************************************************************/
    // Set Red Onions to 'completed', and validate                      */    
    // select [Delete Completed] and Validate                           */
    //*******************************************************************/  
    cy.shoppingListLineValidate(2,"Red Onions",6,false);        
    cy.shoppingListLineToggleComplete(2);    
    cy.shoppingListLineValidate(2,"Red Onions",6,true);

    // press [delete completed]
    cy.shoppingListHeaderPressButtonDeleteCompleted();

    // there should be 1 shopping item lines 
    cy.shoppingListValidateLinecount(1);    

    //*******************************************************************/
    // select [Delete All] and Validate                                 */
    //*******************************************************************/
    cy.shoppingListHeaderPressButtonDeleteAll();
    // there should be 0 shopping item lines 
    cy.get('[data-testid="shopping-list"] .ui-shopping-item').should("not.exist")
  })
})