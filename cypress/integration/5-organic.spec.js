


describe('login credentials',function(){
    it('check the valid credentials',function(){

        cy.visit('https://freshindiaorganics.com/')
        cy.get('a[class="icon-nav close-menu-mb menu-open"]').click()
        cy.get('#customer_login_link').click()
        cy.get('input[name="customer[email]"]').type("sahil.khan@yopmail.com")
        cy.get('input[name="customer[password]"]').type("Sahil@0987")
        cy.get('input[class="btn btn-login"]').click()
    })
})

