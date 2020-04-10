// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
import 'cypress-file-upload';

Cypress.Commands.add("login", (user) => {
    cy.visit(Cypress.env('baseUrl'))
    cy.fixture('users').then((user) => {
        cy.get("input[name='username']")
            .type(user.username).should('have.value', user.username);

        cy.get("input[name='password']")
            .type(user.password).should('have.value', user.password);

        cy.get('ul > :nth-child(2) > .log-btn').click();
        cy.wait(5000);
        cy.get('.power-btn > .fa').should('be.visible');
    })
})
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
