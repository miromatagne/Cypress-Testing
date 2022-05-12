describe("Test a todo item addition", () => {
    const todo = "Buy new laptop";

    it("Opens the main screen", () => {
      cy.visit("localhost:3000/home");
    });
  
    it("Fill the todo description and submit", () => {
      cy.get('input[id="todo-input"]').type(`${todo}{enter}`);
    });
  
    it("Checks the created todo", () => {
      cy.get('.todo-text')
        .should("have.length", 1)
        .last()
        .should("have.text", todo);
    });
});
  