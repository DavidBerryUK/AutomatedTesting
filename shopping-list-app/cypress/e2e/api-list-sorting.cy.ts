describe('test list sorting', () => {
  // Add 6 items
  
  // Milk               x 2 (completed)
  // Frozen chips       x 1    
  // Carrots            x 3 (completed)
  // Cheese             x 1 
  // Bread              x 1 
  // Red Onions         x 6
  
  // Add items in none alphabetic order as above
  // 1) sort in name order and validate
  // 2) sorted in completed order and validate
  // 3) sorted in date created order and validate
  //
  it('test sort orders', () => {
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
    cy.shoppingListAdd("Milk",2)
    cy.shoppingListAdd("Frozen Chips",1);
    cy.shoppingListAdd("Carrots",3);
    cy.shoppingListAdd("Cheese",1);
    cy.shoppingListAdd("Bread",1);
    cy.shoppingListAdd("Red Onions",6);             
    
    //*******************************************************************/
    // Sort by name and validate order                                  */
    //*******************************************************************/
    cy.shoppingListHeaderSetSortOrder("Name");

    //*******************************************************************/
    // validate order when sorted by name
    //*******************************************************************/
    cy.shoppingListLineValidate(1,"Bread",1,false);
    cy.shoppingListLineValidate(2,"Carrots",3,false);
    cy.shoppingListLineValidate(3,"Cheese",1,false);
    cy.shoppingListLineValidate(4,"Frozen Chips",1,false);
    cy.shoppingListLineValidate(5,"Milk",2,false);
    cy.shoppingListLineValidate(6,"Red Onions",6,false);    

    //*******************************************************************/
    // Set Carrots and Milk to 'completed',                             */        
    //*******************************************************************/    
    cy.shoppingListLineToggleComplete(2);    // carrots
    cy.shoppingListLineToggleComplete(5);    // milk
    
    //*******************************************************************/
    // Sort by Completed Items                                          */
    //*******************************************************************/
    cy.shoppingListHeaderSetSortOrder("Completed");

    //*******************************************************************/
    // validate order when sorted by Completed
    //*******************************************************************/
    cy.shoppingListLineValidate(1,"Carrots",3,true);
    cy.shoppingListLineValidate(2,"Milk",2,true);
    cy.shoppingListLineValidate(3,"Bread",1,false);    
    cy.shoppingListLineValidate(4,"Cheese",1,false);
    cy.shoppingListLineValidate(5,"Frozen Chips",1,false);    
    cy.shoppingListLineValidate(6,"Red Onions",6,false);      

    //*******************************************************************/
    // Sort by Date Created                                             */
    //*******************************************************************/    
    cy.shoppingListHeaderSetSortOrder("Created");

    //*******************************************************************/
    // validate order when sorted by Date Created
    //*******************************************************************/
    cy.shoppingListLineValidate(1,"Milk",2,true);
    cy.shoppingListLineValidate(2,"Frozen Chips",1,false);    
    cy.shoppingListLineValidate(3,"Carrots",3,true);
    cy.shoppingListLineValidate(4,"Cheese",1,false);
    cy.shoppingListLineValidate(5,"Bread",1,false);            
    cy.shoppingListLineValidate(6,"Red Onions",6,false);      
  })
})