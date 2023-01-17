

describe("Note app", function () {
  beforeEach(function () {
    cy.request("POST", "http://localhost:3001/api/testing/reset");
    const user = {
      name: "santi",
      username: "santibp",
      password: "docpuber",
    };
    cy.request("POST", "http://localhost:3001/api/users", user);
    cy.visit("http://localhost:3000");
  });

  // tests start here  

  it("front page can be opened", function () {
    cy.contains("Note List Application");
  });

  it("login form can be opened", function () {
    cy.contains("LOG IN").click();
  });

  it("user can login", function () {
    cy.contains("LOG IN").click();
    cy.get("#username").type("santibp");
    cy.get("#password").type("docpuber");
    cy.get("#loginBtn").click();

    cy.contains("Logged in successfully. Welcome santi!");
  });
  
  describe("when logged in", function () {
    beforeEach(function() {
      cy.login({ username: 'santibp', password: 'docpuber' })
    })

    it("a new note is created", function () {
      // cy.contains("LOG IN").click(); // added this line
      cy.contains("Add Note").click();
      cy.get("#noteInput").type(
        "new note with reseted db"
      );
      cy.get("#addNoteBtn").click();

      cy.contains("new note with reseted db");
    });

    describe('when a note is created, we can', function() {
      beforeEach(function() {
        cy.createNote({
          content: 'another note cypress',
          important: false
        })
      })

      it('make the note important', function(){
        cy.contains('another note cypress')
        .contains('make important')
        .click()

        cy.contains('another note cypress')
        .contains('make not important')
      })
    })

  });

    
});


//   it.only('user cannot login if invalid credentials', function() {
//     cy.contains("LOG IN").click();
//     cy.get("#username").type("santibp");
//     cy.get("#password").type("wrong");
//     cy.get("#loginBtn").click();

//     cy.contains("invalid username or password");
//     cy.get('html').should('not.contain', 'Logged in successfully. Welcome santi!')

// })