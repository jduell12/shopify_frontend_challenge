/*eslint no-undef: */
describe("App renders", () => {
  it("renders the page with a blank search bar", () => {
    cy.visit("/");
    cy.url().should("include", "localhost");
    cy.get("h1").should("contain", "The Shoppies");
    cy.get("label").should("contain", "Movie Title");
    cy.get("#movie").should("be.empty");
  });
});
