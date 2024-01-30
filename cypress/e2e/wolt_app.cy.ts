
// TODO 
// Should be divided into separate files 
//and often used commands moved to commands.ts


describe('Wolt delivery fee calculator', function() {
    beforeEach(function() {
        cy.visit('http://localhost:5173')
    })
    it('front page can be opened', function() {
      cy.contains('Delivery Fee Calculator')
    })
    it('user can type their information and calculate the delivery', function() {
        cy.get('[data-test-id="cartValue"]').type('10')
        cy.get('[data-test-id="deliveryDistance"]').type('1000')
        cy.get('[data-test-id="numberOfItems"]').type('4')
        cy.get('[data-test-id="orderTime"]').type('100120241040AM')
        cy.get('[data-test-id="calculate"]').click()

        cy.contains('Delivery price: 2 €')
        cy.contains('Delivery fee calculated successfully')
    })
    it('user can reset their filled in information', function() {
        cy.get('[data-test-id="cartValue"]').type('10')
        cy.get('[data-test-id="deliveryDistance"]').type('1000')
        cy.get('[data-test-id="numberOfItems"]').type('4')
        cy.get('[data-test-id="orderTime"]').type('100120241040AM')
        cy.get('[data-test-id="calculate"]').click()

        cy.get('[data-test-id="cartValue"]').should('not.be.empty')
        cy.get('[data-test-id="reset"]').click()
        cy.get('[data-test-id="cartValue"]').should('have.value', '')
     })
     it('user gets feedback on invalid input', function() {
        cy.get('[data-test-id="cartValue"]').type('eee')
        cy.get('[data-test-id="deliveryDistance"]').type('1000')
        cy.get('[data-test-id="numberOfItems"]').type('4')
        cy.get('[data-test-id="orderTime"]').type('100120241040AM')
        cy.get('[data-test-id="calculate"]').click()

        cy.contains('Incorrect input values.')
     })
  })