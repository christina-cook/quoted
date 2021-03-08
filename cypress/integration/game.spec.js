describe('Game', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/game')
  })

  it('Should display text at the top of the page', () => {
    cy.get('.start-options').should('contain', 'Choose Number of Questions')
  })

  it('Should display four buttons on the page', () => {
    cy.get('button').eq(0).should('exist')
      .get('button').eq(1).should('exist')
      .get('button').eq(2).should('exist')
      .get('button').eq(3).should('exist')
  })

  it('Should be able to start a game with 5 questions', () => {
    cy.fixture('testQuotes5.json')
      .then((testQuotes5) => {
        cy.intercept({
          method: 'GET',
          url: 'https://friends-quotes-api.herokuapp.com/quotes/5'
          },
          {
            statusCode: 200,
            body: testQuotes5
          })
      })
      .get('.start-button').eq(0).should('contain', '5').click()
      .get('.question-count').should('have.text', 'Question 1 of 5')
  })

  it('Should be able to start a game with 10 questions', () => {
    cy.fixture('testQuotes10.json')
      .then((testQuotes10) => {
        cy.intercept({
          method: 'GET',
          url: 'https://friends-quotes-api.herokuapp.com/quotes/10'
        },
        {
          statusCode: 200,
          body: testQuotes10
        })
      })
      .get('.start-button').eq(1).should('contain', '10').click()
      .get('.question-count').should('have.text', 'Question 1 of 10')
  })

  it('Should be able to start a game with 15 questions', () => {
    cy.fixture('testQuotes15.json')
      .then((testQuotes15) => {
        cy.intercept({
          method: 'GET',
          url: 'https://friends-quotes-api.herokuapp.com/quotes/15'
        },
        {
          statusCode: 200,
          body: testQuotes15
        })
      })
      .get('.start-button').eq(2).should('contain', '15').click()
      .get('.question-count').should('have.text', 'Question 1 of 15')
  })

  it('Should be able to click a button to go back to the home page', () => {
    cy.get('.home').should('have.text', 'Home')
      .click().url().should('include', '/')
  })

  it('Should see a question card displayed on the page during a game', () => {
    cy.get('.start-button').eq(0).should('contain', '5').click()
      .get('.game-card').should('be.visible')
  })

  it('Should see an image and quote displayed on the card', () => {
    cy.get('.start-button').eq(0).should('contain', '5').click()
      .get('.game-card').find('.card-icon').should('be.visible')
      .get('.game-card').find('.question').should('be.visible')
  })

  it('Should display 6 character buttons when playing a game', () => {
    cy.get('.start-button').eq(0).should('contain', '5').click()
      .get('.character-button').eq(0).should('have.text', 'Monica')
      .get('.character-button').eq(1).should('have.text', 'Joey')
      .get('.character-button').eq(2).should('have.text', 'Rachel')
      .get('.character-button').eq(3).should('have.text', 'Ross')
      .get('.character-button').eq(4).should('have.text', 'Phoebe')
      .get('.character-button').eq(5).should('have.text', 'Chandler')
  })

  it('Should see a message displayed when a character button is clicked', () => {
    cy.get('.start-button').eq(0).should('contain', '5').click()
      .get('.character-button').eq(0).click()
      .get('.answer-message').should('be.visible')
  })

  it('Should be able to click a button to display the next question', () => {
    cy.get('.start-button').eq(0).should('contain', '5').click()
      .get('.character-button').eq(0).click()
      .get('.arrow').click()
      .get('.question-count').should('have.text', 'Question 2 of 5')
  })

  it('Should be able to start a game over by clicking a button', () => {
    cy.get('.start-button').eq(0).should('contain', '5').click()
      .get('.restart').click()
      .get('.start-options').should('contain', 'Choose Number of Questions')
  })

  it.only('Should see an error message displayed if the questions do not load', () => {
    cy.intercept({
      method: 'GET',
      url: 'https://friends-quotes-api.herokuapp.com/quotes/5',
      },
      {
        'forceNetworkError': true,
      }
    )
      .get('.start-button').eq(0).should('contain', '5').click()
      .get('.error-image').should('be.visible')
      .get('.error-message').eq(0).should('have.text', 'Oops, something went wrong!')
      .get('.error-message').eq(1).should('have.text', 'Please reload the page or try again later.')
  })
})
