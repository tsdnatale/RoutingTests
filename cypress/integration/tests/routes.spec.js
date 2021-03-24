/// <reference types="cypress" />

context('route tests', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('default route', () => {
    cy.location('pathname').should('include', 'c1')
  })
})
