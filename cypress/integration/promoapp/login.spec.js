const utils = require('./utils');


context('login flow', () => {
    beforeEach(() => { 
      cy.visit(Cypress.env('baseUrl'))
      cy.wait(5000);
      cy.get("[class='pa-color-pink pa-login-button-header pa-font-14 pa-font-wt-500 md-button md-ink-ripple']").click();

    });

    it('Blank form submit', () => {
        cy.wait(3000);
        cy.get("button[class='btn btn-login ob-padding-0 h-48 ob-line-ht-48 pa-font-bold pa-font-16']").click();
        cy.screenshot();
    });

    it('empty email/username', () => {
        cy.get(("input[id='input_6']").type(utils.password));
        cy.get("button[class='btn btn-login ob-padding-0 h-48 ob-line-ht-48 pa-font-bold pa-font-16']").click();
        cy.screenshot();
    });


    it('wrong email format', () => {
        cy.get("input[id='input_5']").type(utils.wrongemail_format());
        cy.get(("input[id='input_6']").type(utils.password));
        cy.get("button[class='btn btn-login ob-padding-0 h-48 ob-line-ht-48 pa-font-bold pa-font-16']").click();
        cy.screenshot();
    });

    it('wrong email', () => {
        cy.get("input[id='input_5']").type(utils.email());
        cy.get(("input[id='input_6']").type(utils.password));
        cy.get("button[class='btn btn-login ob-padding-0 h-48 ob-line-ht-48 pa-font-bold pa-font-16']").click();
        cy.screenshot();
    });

    it('empty password ', () => {

       cy.get("input[id='input_5']").type(utils.username);
        //cy.get(("input[id='input_6']").type(utils.password));
       cy.get("button[class='btn btn-login ob-padding-0 h-48 ob-line-ht-48 pa-font-bold pa-font-16']").click();
        cy.screenshot();
    }); 

    it('enter wrong password Format', () => {
        cy.get("input[id='input_5']").type(utils.username);
        cy.get(("input[id='input_6']").type(utils.randompassword()));
       cy.get("button[class='btn btn-login ob-padding-0 h-48 ob-line-ht-48 pa-font-bold pa-font-16']").click();
        cy.screenshot();
    });

    it('enter Wrong password', async () => {
        cy.get("input[name='username']").type(utils.username);
        cy.get("input[name='password']").type(utils.randomwrongpassword());
        cy.get("button[class='btn btn-login ob-padding-0 h-48 ob-line-ht-48 pa-font-bold pa-font-16']").click();
        cy.screenshot();
    });

    it('Both email & password wrong', async () => {
        cy.get("input[id='input_5']").type(utils.email());
        cy.get(("input[id='input_6']").type(utils.randomwrongpassword()));
       cy.get("button[class='btn btn-login ob-padding-0 h-48 ob-line-ht-48 pa-font-bold pa-font-16']").click();
        cy.screenshot();
    });

    it('Both email & password wrong format', async () => {
        cy.get("input[id='input_5']").type(utils.wrongemail_format());
        cy.get(("input[id='input_6']").type(utils.randomwrongpassword()));
       cy.get("button[class='btn btn-login ob-padding-0 h-48 ob-line-ht-48 pa-font-bold pa-font-16']").click();
        cy.screenshot();
    });
        
    it('Login successfully', async function () {
        cy.get("input[id='input_5']").type(utils.username);
        cy.get(("input[id='input_6']").type(utils.password));
       cy.get("button[class='btn btn-login ob-padding-0 h-48 ob-line-ht-48 pa-font-bold pa-font-16']").click();
        cy.screenshot();
        
    });

});