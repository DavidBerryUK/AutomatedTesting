// ***********************************************************
// This example support/component.ts is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands';
import './commandsUtility';
import './commandsShoppingList';

// Alternatively you can use CommonJS syntax:
// require('./commands')

import { mount } from 'cypress/react18'

// Augment the Cypress namespace to include type definitions for
// your custom command.
// Alternatively, can be defined in cypress/support/component.d.ts
// with a <reference path="./component" /> at the top of your spec.
declare global {
  namespace Cypress {
    interface Chainable {
      //
      // cypress commands
      //
      mount: typeof mount;
      //
      // custom utility commands
      //
      logMessage: (commandName: string, message: string) => void;
      //
      // custom shopping list commands
      //
      shoppingListAdd: (name: string, quantity: number) => void;
      shoppingListHeaderPressButtonDeleteAll: () => void;
      shoppingListHeaderPressButtonDeleteCompleted: () => void;
      shoppingListHeaderSetSortOrder: (sortOrder: "Created" | "Completed" | "Name") => void;
      shoppingListLinePressDelete: (lineNo: number) => void;
      shoppingListLineToggleComplete: (lineNo: number) => void;
      shoppingListLineValidate: (lineNo: number, name: string, quantity: number, isCompleted: boolean) => void;
      shoppingListValidateLinecount: (expectedLines: number) => void;
    }
  }
}




Cypress.Commands.add('mount', mount)

