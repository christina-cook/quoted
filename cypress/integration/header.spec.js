describe('Header', () => {
  it('Should display a header on every page', () => {
    cy.visit('http://localhost:3000/')
      .get('.app-header').should('be.visible')
    cy.visit('http://localhost:3000/how-to-play')
      .get('.app-header').should('be.visible')
    cy.visit('http://localhost:3000/game')
      .get('.app-header').should('be.visible')
  })

  it('Should include a title and subtitle', () => {
    cy.visit('http://localhost:3000/')
      .get('h1').should('have.text', 'Quoted')
      .get('.subtitle')
        .should('have.text', 'Trivia Edition')
        .find('.friends-title').should('be.visible')
  })
})
