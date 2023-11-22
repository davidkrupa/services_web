describe("Basic spec", () => {
  it("Contains hero title", () => {
    cy.visit("http://localhost:3000/");
    cy.get('[data-test="hero-title"]').contains("Fotowoltaika Elektryka");
  });
});
