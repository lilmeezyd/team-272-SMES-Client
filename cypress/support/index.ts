// ***********************************************************
// This example support/index.js is processed and
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

// When a command from ./commands is ready to use, import with `import * as commands from './commands'` syntax

// import './commands';

// tslint:disable-next-line: no-namespace
declare namespace Cypress {
  interface Chainable {
    login(email: any, password: any): void;
  }
}

