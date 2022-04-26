
describe('verify login credentials',function(){
    it('verify with valid credentials',function(){
        cy.visit('http://www.testyou.in/Login.aspx?Username=')
        cy.get("#ctl00_CPHContainer_txtUserLogin").type("neo32110")
        cy.get('#ctl00_CPHContainer_txtPassword').type("neo32110")
        cy.get('#ctl00_CPHContainer_btnLoginn').click() 
        cy.contains("Welcome to TestYou - Attempt Unlimited Online Tests")

    })

    it('verify with invalid credentials',function(){
        cy.visit('http://www.testyou.in/Login.aspx?Username=')
        cy.get("#ctl00_CPHContainer_txtUserLogin").type("neot32110")
        cy.get('#ctl00_CPHContainer_txtPassword').type("neot32110")
        cy.get('#ctl00_CPHContainer_btnLoginn').click() 
        cy.contains("Welcome to TestYou - Attempt Unlimited Online Tests")

    })
})