describe('Home', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('Should display text at the top of the page', () => {
    cy.get('.home-header').should('exist').and('have.text', 'The One With All the Questions')
  })

  it('Should display an image of a frame on the page', () => {
    cy.get('.frame').should('be.visible')
  })

  it('Should display two buttons on the page', () => {
    cy.get('button').eq(0).should('exist')
      .get('button').eq(1).should('exist')
  })

  it('Should click a button to learn how to play', () => {
    cy.get('button').eq(0).should('contain', 'How To Play')
      .click().url().should('include', '/how-to-play')
  })

  it('Should click a button to start a game', () => {
    cy.get('button').eq(1).should('contain', 'Get Started')
      .click().url().should('include', '/game')
  })
})
