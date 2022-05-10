describe("Test a successful login", () => {
  it("Opens the application", () => {
    cy.visit("localhost:3000");

    cy.get('input[id="email-input"]').type("acg_test@gmail.com");
    cy.get('input[id="password-input"]').type("123456");
    cy.get('button[id="submit-button"]').click();
    cy.location("pathname").should("eq", "/home");
    cy.get('div[id="user-email"]').should("have.text", "acg_test@gmail.com");
  });
});
