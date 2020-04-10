//import { utils } from "mocha";
const utils = require('./utils');

context('SIgnup flow', () => {
    beforeEach(() => { 
     cy.visit(Cypress.env('baseUrl'))
    
    });

it('Blank form submit', () => {
        cy.get('button[class=log-btn]').click();
        cy.screenshot();
    });

});