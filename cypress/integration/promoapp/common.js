

function loginUser() {
    cy.visit(Cypress.env('baseUrl'))
    
    cy.fixture('users').then((user) => {
        cy.wait(5000);
        cy.get("[class='pa-color-pink pa-login-button-header pa-font-14 pa-font-wt-500 md-button md-ink-ripple']").click();
        cy.get("input[id='input_5']")
            .type(user.username).should('have.value', user.username);

        cy.get("input[id='input_6']")
            .type(user.password).should('have.value', user.password);

            cy.get("button[class='btn btn-login ob-padding-0 h-48 ob-line-ht-48 pa-font-bold pa-font-16']").click();
        cy.screenshot();
        cy.wait(5000);
        cy.get(['class="img-circle header-profile-img ng-scope']).should('be.visible');
    });
}

module.exports = { 
    loginUser 
};

