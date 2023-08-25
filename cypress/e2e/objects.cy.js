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
    cy.checkLength('[data-css_id="9sa3873"] article', 14);
  });

  it('Should check correct url of all article', () => {
    cy.checkLinksUrl('[data-css_id="9sa3873"] article a');
  });
});
