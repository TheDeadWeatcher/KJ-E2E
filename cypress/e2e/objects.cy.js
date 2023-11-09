/// <reference types="cypress" />

describe('KJ - Design /  Objects page - E2E', () => {
  before(function () {
    cy.fixture('pagesUrl').then(function (url) {
      globalThis.url = url;
    });
  });

  beforeEach(() => {
    cy.visit(url.obiektyUrl);
  });

  it('Should open home page, verify url and title', () => {
    cy.url().should('eq', url.obiektyUrl);
    cy.title().should('contain', 'Obiekty – KJ Design');
  });

  it('Should check visiblity and lenght of article', () => {
    cy.checkLength('[data-css_id="9sa3873"] article', 16);
  });

  it('Should check correct url of all article', () => {
    cy.checkLinksUrl('[data-css_id="9sa3873"] article a');
  });

  it('should search for a valid phrase', () => {
    const searchTerm = 'Kolekcja ROLL & ROLL';
    cy.get('[data-css_id="umgc629"] input').type(searchTerm);
    cy.get('.tbp_icon_search svg').click({ force: true });
    cy.get('#content h1').should('contain', searchTerm);
  });

  it('should search for a invalid phrase', () => {
    const searchTerm = 'zzzz';
    cy.get('[data-css_id="umgc629"] input').type(searchTerm);
    cy.get('.tbp_icon_search svg').click({ force: true });
    cy.get('#content p').should('have.text', 'Sorry, nothing found.');
  });
});
