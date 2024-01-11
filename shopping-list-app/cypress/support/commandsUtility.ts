/// <reference types="cypress" />

//***********************************************************************************************************************/
// Note that this file has to be included in "commands.ts" and "e2e.ts"                                                 *
//                                                                                                                      *
// Note that the comment needs to be included input [global/cypress/Chainable] interface in the component.ts file       *
//***********************************************************************************************************************/

/**
 * Consistant logging to assist in tracing when errors occur
 * @param message message to output to log
 */
export const logMessage = (commandName: string, message: string = '') => {
    const formatStart = "_**";
    const formatEnd = "**_";
    const length = commandName.length +  message.length  + 5;
    const border = '*';
    const outline = border.repeat(length)
    const text = `${border} ${formatStart}${commandName}${formatEnd} ${message} ${border}`
    cy.log(outline)
    cy.log(text);
    cy.log(outline)    
}

Cypress.Commands.add('logMessage', logMessage);