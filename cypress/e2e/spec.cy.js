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

  it("Should display sections", () => {
    // check if sections exist
    cy.get("section").should("have.length.greaterThan", 0);
  });

  it("Contains hero title", () => {
    cy.get("section#hero h1").should("exist");

    cy.get('[data-test="hero-title"]').contains("Fotowoltaika Elektryka");
  });

  it("Hero contains image", () => {
    cy.get("section#hero img").should("exist");
  });

  it("Buttons should exist", () => {
    cy.get('[data-test="hero-buttons-container"]')
      .should("have.length.greaterThan", 0)
      // check if each <a> contains <button>
      .each(($link) => {
        cy.wrap($link).find("button").should("exist");
      });
  });

  it("Should display and have at leat 4 values", () => {
    cy.get("h2").contains("Why Me", { matchCase: false });

    cy.get('[data-test="value-icon"]').should("exist");

    cy.get('[data-test="value-text"]').should("have.length.greaterThan", 3);
  });

  it("Should have same amount of icons as text fields", () => {
    cy.get('[data-test="value-icon"]')
      .its("length")
      .then((iconAmount) => {
        cy.get('[data-test="value-text"]')
          .its("length")
          .should("eq", iconAmount);
      });
  });

  it("About Me section displayed properly", () => {
    cy.get('[data-test="about-me-title"]').contains("About Me", {
      matchCase: false,
    });

    cy.get('[data-test="about-me-name"]').should("exist");

    cy.get('[data-test="about-me-description"]').should("exist");

    cy.get('[data-test="about-me-image"] img').should("exist");
  });
});
