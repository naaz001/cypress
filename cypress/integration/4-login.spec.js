describe('login functionality',function(){
    it('check with invalid credentials',function(){
        cy.visit('https://www.zoomin.com/sign-in?%2F')
        cy.get('input[name="email"]').type('wogyxa@spiuucethainj.com')
        cy.get('input[name="password"]').type('neo8932110')
        cy.contains('LOG IN').click()
    })
    it('check with valid credentials',function(){
        cy.visit('https://www.zoomin.com/sign-in?%2F')
        cy.get('input[name="email"]').type('wogyxa@spicethainj.com')
        cy.get('input[name="password"]').type('neo32110')
        cy.contains('LOG IN').click()
    })


})