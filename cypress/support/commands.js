// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })

//LOGIN COMMAND
Cypress.Commands.add('login', ({ username, password }) => {
  cy.contains('LOG IN').click()
  cy.get('#username').type(`${username}`)
  cy.get('#password').type(`${password}`)
  cy.get('#loginBtn').click()

  // cy.request('POST', 'http://localhost:3001/api/login', {username,password})
  // .then(response => {
  //     localStorage.setItem('loggedNoteappUser', JSON.stringify(response.body))

  // })
  // cy.reload()
  // cy.visit('http://localhost:3000')
})

// CREATE NEW NOTE COMMAND

Cypress.Commands.add('createNote', ({ content }) => {
  cy.contains('Add Note').click()
  cy.get('#noteInput').type(`${content}`)
  cy.get('#addNoteBtn').click()
  // cy.request({
  //   url: 'http://localhost:3001/api/notes',
  //   method: 'POST',
  //   body: { content, important },
  //   headers: {
  //     'Authorization': `bearer ${JSON.parse(localStorage.getItem('loggedNoteappUser')).token}`
  //   }
  // })

  // cy.visit('http://localhost:3000')
})
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

