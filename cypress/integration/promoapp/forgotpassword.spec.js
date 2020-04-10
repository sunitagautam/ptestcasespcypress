const login = require('./common');
const utils = require('./utils');

context('Forgot Password', () => {
    beforeEach(() => {
        cy.visit(Cypress.env('baseUrl'));
        cy.get('#lost-password').click();
    });
//     it('Empty submit', () => {
//         //cy.get("input[name='forget_email']").type(utils.wrongemail_format());
//         cy.get("button[data-testid='resetpassword']").click();
//        // cy.focused().should('have.attr', 'name', 'forget_email');
//         cy.screenshot();
//     });

//     it('wrong email format', () => {
//         cy.get("input[name='forget_email']").type(utils.wrongemail_format());
//         cy.get("button[data-testid='resetpassword']").click();
//         cy.focused().should('have.attr', 'name', 'forget_email');
//         cy.screenshot();
//     });

//     it('wrong email', () => {
//         //clear fields
//         cy.get("input[name='forget_email']").clear();
//         cy.get("input[name='forget_email']").type(utils.email());
//         cy.get("button[data-testid='resetpassword']").click();
//         cy.get('.warning-red').should('be.visible');
//         cy.screenshot();
//     });

//     it('correct email id -forget password', () => {
//             cy.get("input[name='forget_email']").type(utils.username);
//             cy.get("button[data-testid='resetpassword']").click();
//             cy.screenshot();  
//     });

// //Reset password screen

// it('empty/wrong verification code', () => {
//     cy.wait(1000);
//     cy.get("input[name='forget_email']").type(utils.username);
//     cy.get("button[data-testid='resetpassword']").click();
//     cy.wait(2000);

//     cy.get("input[name='new_password']").type(utils.randompassword());
//    cy.screenshot();
//    cy.get("input[name='confirm_password']").type(utils.randompassword());
//    cy.get('button[class=log-btn]').click();
//    cy.screenshot();

//     });

// it('empty new password', () => {

//     cy.get("input[name='forget_email']").type(utils.username);
//     cy.get("button[data-testid='resetpassword']").click();

//     cy.get("input[name='verification_code']").type(utils.randomcode());
//     cy.wait(1000);
//    // cy.get("input[name='new_password']").type(utils.randompassword());
//     cy.screenshot();
//     cy.get("input[name='confirm_password']").type(utils.randompassword());
//     cy.get('button[class=log-btn]').click();
//     cy.screenshot();
 
//     });

//   it('Wrong format new password', () => {

//         cy.get("input[name='forget_email']").type(utils.username);
//         cy.get("button[data-testid='resetpassword']").click();
    
//         cy.get("input[name='verification_code']").type(utils.randomcode());
//         cy.wait(1000);
//         cy.get("input[name='new_password']").type(utils.randomwrongpassword());
//         cy.screenshot();
//         cy.get("input[name='confirm_password']").type(utils.randompassword());
//         cy.get('button[class=log-btn]').click();
//         cy.screenshot();
     
//         });

//    it('empty confirm password', () => {

//             cy.get("input[name='forget_email']").type(utils.username);
//             cy.get("button[data-testid='resetpassword']").click();
        
//             cy.get("input[name='verification_code']").type(utils.randomcode());
//             cy.wait(1000);
//             cy.get("input[name='new_password']").type(utils.randompassword());
//             cy.screenshot();
//            // cy.get("input[name='confirm_password']").type(utils.randompassword());
//             cy.get('button[class=log-btn]').click();
//             cy.screenshot();
         
//             })

//  it('Wrong format confirm password/not match', () => {

//                 cy.get("input[name='forget_email']").type(utils.username);
//                 cy.get("button[data-testid='resetpassword']").click();
            
//                 cy.get("input[name='verification_code']").type(utils.randomcode());
//                 cy.wait(1000);
//                // cy.get("input[name='new_password']").type(utils.randompassword());
//                 cy.screenshot();
//                 cy.get("input[name='confirm_password']").type(utils.randompassword());
//                 cy.get('button[class=log-btn]').click();
//                 cy.screenshot();
             
//                 });
// // How to get copy code from emails
//   it('correctly filled form successfully', () => {

//                     cy.get("input[name='forget_email']").type(utils.username);
//                     cy.get("button[data-testid='resetpassword']").click();
                
//                     cy.get("input[name='verification_code']").type(utils.randomcode());
//                     cy.wait(1000);
//                    cy.get("input[name='new_password']").type(utils.password);
//                     cy.screenshot();
//                     cy.get("input[name='confirm_password']").type(utils.password);
//                     cy.get('button[class=log-btn]').click();
//                     cy.screenshot();
                 
//                     });

});
