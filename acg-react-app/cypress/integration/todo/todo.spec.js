describe("Test everything of the todo list", () => {
    const todos = ["Buy a new laptop", "Do my homeworks", "Cook a great meal"];
  
    it("Logs in", () => {
      cy.login("acg_test@gmail.com", "123456");
    });
  
    it("Creates a todo", () => {
      cy.get('input[id="todo-input"]').type(`${todos[0]}{enter}`);
      cy.get('.todo-text')
          .should("have.length", 1)
          .last()
          .should("have.text", todos[0]);
    });

    it("Creates some todos", () => {
        cy.get('input[id="todo-input"]').type(`${todos[1]}{enter}`);
        cy.get('.todo-text')
            .should("have.length", 2)
            .last()
            .should("have.text", todos[1]);

        cy.get('input[id="todo-input"]').type(`${todos[2]}{enter}`);
        cy.get('.todo-text')
            .should("have.length", 3)
            .last()
            .should("have.text", todos[2]);
      });

    it("Marks todo as done", () => {
        cy.get('[type="checkbox"]').first().check();
        cy.get('.todo-text').last().should("have.class", "strike");
    });

    it("Unmarks todo as undone", () => {
        cy.get('[type="checkbox"]').last().uncheck();
        cy.get('.todo-text').first().should("not.have.class", "strike");
    })
  
    it("Removes a todo", () => {
      cy.get('.rm-button').last().click('center');
      cy.get('.todo-text').should("have.length", 2);
    });

    it("Removes all todos", () => {
        cy.get('.rm-button').last().click('center');
        cy.get('.rm-button').last().click('center');
        cy.get('.todo-text').should("not.exist");
    })
  });
    