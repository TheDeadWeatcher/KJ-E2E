/// <reference types="cypress" />

describe('NewGlasses - Home (onePageSide) - E2E', () => {
  before(function () {
    cy.fixture('pagesUrl').then(function (url) {
      globalThis.url = url;
    });
  });

  beforeEach(() => {
    cy.visit('/');
  });

  it('Should open home page, verify url and title', () => {
    cy.url().should('eq', url.homeUrl);
    cy.title().should('contain', 'Optyk');
  });
});
