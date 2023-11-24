describe("Basic spec", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("Should display the navbar", () => {
    cy.get("nav").should("exist");
  });

  it("Navbar links to sections", () => {
    cy.get("nav a").each(($link) => {
      const sectionId = $link.attr("href");
      cy.get($link).click();
      cy.url().should("include", sectionId);
    });
  });

  it("Contains hero title", () => {
    cy.get('[data-test="hero-title"]').contains("Fotowoltaika Elektryka");
  });
});
