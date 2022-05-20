describe("Test a successful sign up", () => {
  it("Opens the application", () => {
    cy.visit("localhost:3000/sign-up");
  });

  it("Fills the data and submits", () => {
    cy.get('input[id="email-input"]').type("acg_test@gmail.com");
    cy.get('input[id="password-input"]').type("123456");
    cy.get('button[id="submit-button"]').click();
  });

  it("Checks the error message", () => {
    cy.get('div[id="error-message"]').should(
      "have.text",
      "An account with this email address already exists"
    );
  });
});
