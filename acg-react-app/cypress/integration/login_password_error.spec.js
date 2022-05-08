describe("My First Test", () => {
  it("Opens the application", () => {
    cy.visit("localhost:3000");

    cy.get('input[id="email-input"]').type("testacg@gmail.com");
    //cy.get('input[id="password-input"]').type("abcdefgh");
    cy.get('button[id="submit-button"]').click();
    cy.get('div[id="error-message"]').should(
      "have.text",
      "The password is invalid"
    );
  });
});
