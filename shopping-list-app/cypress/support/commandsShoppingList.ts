/// <reference types="cypress" />

// allow logMessage command to be used before its registed to commands
import { logMessage } from "./commandsUtility";

//***********************************************************************************************************************/
// Note that this file has to be included in "commands.ts" and "e2e.ts"                                                 *
//                                                                                                                      *
// Note that the comment needs to be included input [global/cypress/Chainable] interface in the component.ts file       *
//***********************************************************************************************************************/

/**
 * Add a new item to the shopping list
 * @param name 
 * @param quantity 
 */
const shoppingListAdd = (name: string, quantity: number): void => {
    logMessage('shoppingListAdd',`name:${name} quantity:${quantity}`);
    cy.get('[data-testid="new-item-text"]').clear().type(name);
    for (var i = 0; i < quantity; i++) {
        cy.get('[data-testid="new-item-stepper"]').find("button:contains('+')").click();
    }
    cy.get('[data-testid="add-button"]').click();
};

/**
 * Toggle Complete line
 * @param lineNo 
 */
const shoppingListLineToggleComplete = (lineNo: number): void => {
    logMessage('shoppingListLineToggleComplete',`line:${lineNo}`);
    const rowSelector = `[data-testid="shopping-list"] .ui-shopping-item:nth-child(${lineNo})`;
    cy.get(`${rowSelector} label`).click();
    //cy.get(rowSelector).find("label").click();
};

/**
 * Validate a shopping line contains correct information
 * @param lineNo 
 * @param name 
 * @param quantity 
 * @param isCompleted 
 */
const shoppingListLineValidate = (lineNo: number, name: string, quantity: number, isCompleted: boolean): void => {
    logMessage('shoppingListLineValidate',`line:${lineNo} name:${name} quantity:${quantity} isCompleted:${isCompleted}`);
    const rowSelector = `[data-testid="shopping-list"] .ui-shopping-item:nth-child(${lineNo})`;
    // validate name
    cy.get(`${rowSelector} .ui-text-string`).should("have.value", name);
    // validate quantity
    cy.get(`${rowSelector} .ui-text-number`).should("have.value", quantity);
    // validate completed
    if (isCompleted) {
        cy.get(`${rowSelector} .ui-switch input`).should("exist").should("be.checked");
    } else {
        cy.get(`${rowSelector} .ui-switch input`).should("exist").should("not.be.checked");
    }
};



/**
 * press the DELETE button on the shopping line number
 * @param lineNo - the line number to press delete on
 */
const shoppingListLinePressDelete = (lineNo: number): void => {
    logMessage('ShoppingListLinePressDelete',`line:${lineNo}`);
    const rowSelector = `[data-testid="shopping-list"] .ui-shopping-item:nth-child(${lineNo}) button:contains('Delete')`;
    cy.get(rowSelector).click();
}

/**
 * Validate the number of shopping lines
 * @param expectedLines - the number of expected shopping lines
 */
const shoppingListValidateLinecount = (expectedLines: number): void => {
    logMessage('shoppingListValidateLinecount',`expectedLines:${expectedLines}`);
    cy.get('[data-testid="shopping-list"]').find(".ui-shopping-item").its("length").should("eq", expectedLines);
}


const shoppingListHeaderPressButtonDeleteAll = (): void => {
    logMessage(`shoppingListHeaderPressButtonDeleteAll`,'');
    cy.get('[data-testid="test-btn-delete-all"]').click();
}

const shoppingListHeaderPressButtonDeleteCompleted = (): void => {
    logMessage(`shoppingListHeaderPressButtonCompleted`,'');
    cy.get('[data-testid="test-btn-delete-completed"]').click();
}

const shoppingListHeaderSetSortOrder = (sortOrder: "Created" | "Completed" | "Name"): void => {
    logMessage('shoppingListHeaderSetSortOrder',`sortOrder:${sortOrder}`);
    cy.get(`[data-testid="sort-order"] button:contains("${sortOrder}")`).click()
}

Cypress.Commands.add('shoppingListAdd', shoppingListAdd);
Cypress.Commands.add('shoppingListLinePressDelete', shoppingListLinePressDelete);
Cypress.Commands.add('shoppingListLineToggleComplete', shoppingListLineToggleComplete);
Cypress.Commands.add('shoppingListLineValidate', shoppingListLineValidate);
Cypress.Commands.add('shoppingListHeaderPressButtonDeleteAll', shoppingListHeaderPressButtonDeleteAll);
Cypress.Commands.add('shoppingListHeaderPressButtonDeleteCompleted', shoppingListHeaderPressButtonDeleteCompleted);
Cypress.Commands.add('shoppingListValidateLinecount', shoppingListValidateLinecount);
Cypress.Commands.add('shoppingListHeaderSetSortOrder', shoppingListHeaderSetSortOrder);