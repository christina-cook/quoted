describe('How To', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/how-to-play')
  })

  it('Should display text at the top of the page', () => {
    cy.get('.how-header').should('have.text', 'How To Play')
  })

  it('Should see instructions displayed on the page', () => {
    cy.get('.instructions').should('be.visible')
      .get('.instructions').eq(0).should('have.text', 'Are you a Friends fanatic? This game will test your knowledge of the TV series by matching memorable quotes with the character who said it.')
  })

  it('Should display two buttons on the page', () => {
    cy.get('button').eq(0).should('exist')
      .get('button').eq(1).should('exist')
  })

  it('Should be able to click a button to start a game', () => {
    cy.get('button').eq(1).should('have.text', 'Get Started')
      .click().url().should('include', '/game')
  })

  it('Should be able to click a button to go back to the home page', () => {
    cy.get('button').eq(0).should('have.text', 'Home')
      .click().url().should('include', '/')
  })
})
