describe("Test a successful login", () => {
  it("Opens the application", () => {
    cy.visit("localhost:3000");
  });

  it("Fills the data and submits", () => {
    cy.get('input[id="email-input"]').type("acg_test@gmail.com");
    cy.get('input[id="password-input"]').type("123456");
    cy.get('button[id="submit-button"]').click();
  });

  it("Checks redirection", () => {
    cy.location("pathname").should("eq", "/home");
  });

  it("Checks that main page contains user email", () => {
    cy.get('div[id="user-email"]').should("have.text", "acg_test@gmail.com");
  });
});
