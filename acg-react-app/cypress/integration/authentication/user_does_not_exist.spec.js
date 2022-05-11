describe("Test an unsuccessful login", () => {
  it("Opens the application", () => {
    cy.visit("localhost:3000");
  });

  it("Fills the data and submits", () => {
    cy.get('input[id="email-input"]').type("acg_non_existente@gmail.com");
    cy.get('input[id="password-input"]').type("123456");
    cy.get('button[id="submit-button"]').click();
  });

  it("Checks the error message", () => {
    cy.get('div[id="error-message"]').should(
      "have.text",
      "The email or password you entered does not correspond to a registered user"
    );
  });
});
