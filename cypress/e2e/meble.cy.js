/// <reference types="cypress" />

describe('KJ - Design /  Meble page - E2E', () => {
  before(function () {
    cy.fixture('pagesUrl').then(function (url) {
      globalThis.url = url;
    });
  });

  beforeEach(() => {
    cy.visit(url.mebleUrl);
  });

  it('Should open home page, verify url and title', () => {
    cy.url().should('eq', url.mebleUrl);
    cy.title().should('contain', 'Meble – KJ Design');
  });

  it('Should check visiblity and lenght of article', () => {
    cy.checkLength('[data-css_id="9sa3873"] article', 32);
  });

  it('Should check correct url of all article', () => {
    cy.checkLinksUrl('[data-css_id="9sa3873"] article a');
  });

  it('Should check visibility of search input and loop icon', () => {
    cy.get('[data-css_id="umgc629"] input').should('be.visible');
    cy.get('.tbp_icon_search svg').should('be.visible');
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
