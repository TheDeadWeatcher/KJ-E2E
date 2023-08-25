/// <reference types="cypress" />

describe('KJ - Design /  Wnętrza page - E2E', () => {
  before(function () {
    cy.fixture('pagesUrl').then(function (url) {
      globalThis.url = url;
    });
  });

  beforeEach(() => {
    cy.visit(url.prawaUrl);
  });

  it('Should open home page, verify url and title', () => {
    cy.url().should('eq', url.prawaUrl);
    cy.title().should('contain', 'Prawa autorskie – KJ Design');
  });

  it('Should check visibility of main law text also h1', () => {
    cy.checkTxt('.tb_musr284 h1');
    cy.checkTxt('.tb_text_wrap p');
    cy.get('.tb_text_wrap p a').should('have.attr', 'href');
  });
});
