describe("Test an error in password", () => {
  it("Opens the application", () => {
    cy.visit("localhost:3000");
  });

  it("Fills the data and submits", () => {
    cy.get('input[id="email-input"]').type("testacg@gmail.com");
    cy.get('button[id="submit-button"]').click();
  });

  it("Checks the error message", () => {
    cy.get('div[id="error-message"]').should(
      "have.text",
      "The password is invalid"
    );
  });
});
