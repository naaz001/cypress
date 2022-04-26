

describe('my first test case',function(){
    it('verify title of the page',function(){
    cy.visit('https://www.nopcommerce.com/en/demo')
    cy.get('div [ id="ph-title"]').should('be.visible')
    })
})