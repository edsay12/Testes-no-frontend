describe("should test login page", () => {
  it("when click on login should go to the dashboard page", () => {
    cy.visit("http://localhost:5173");

    cy.intercept("GET", "http://localhost:3000/pokemon", {
      fixture: "pokemons.json",
    });

    cy.get('[name="email"]').type("meu email")
    cy.get('[name="senha"]').type("minha senha")

    cy.contains("Enviar").click();
    cy.contains("Dashboard");
  });
  it("when click on login should go to the dashboard page and shoud be a pikachu", () => {
    cy.visit("http://localhost:5173");

    cy.intercept("GET", "http://localhost:3000/pokemon", {
      fixture: "pokemons.json",
    });

    cy.contains("Enviar").click();
    cy.contains("Dashboard");
    cy.contains("Pikachu");
  });
});
