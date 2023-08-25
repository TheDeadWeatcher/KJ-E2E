/// <reference types="cypress" />

describe('KJ - Design /  About - E2E', () => {
  before(function () {
    cy.fixture('pagesUrl').then(function (url) {
      globalThis.url = url;
    });
  });

  beforeEach(() => {
    cy.visit(url.aboutUrl);
  });

  it('Should open home page, verify url and title', () => {
    cy.url().should('eq', url.aboutUrl);
    cy.title().should('contain', 'About me – KJ Design');
  });

  it('Should verify visibility of img', () => {
    cy.get('.image-wrap img').should('be.visible').and('have.attr', 'title');
  });

  it('Should check correct text "p"', () => {
    cy.checkTxt('.tb_text_wrap p', 'Kocham design, sztukę i piękne wnetrza.');
  });

  it('Should check visibility of seciton about, verify correct url of all links', { browser: '!firefox' }, () => {
    cy.checkLinksUrl('.tb_text_wrap a'); // firefox wraping empty link
  });

  // it.only('only for firefox', () => {
  //   const excludedBrowsers = ['chrome', 'edge'];

  //   if (!excludedBrowsers.includes(Cypress.env('firefox'))) {
  //     cy.get('.tb_text_wrap a').eq(0).click();

  //     cy.origin('https://www.instagram.com', () => {
  //       cy.url().should('eq', 'https://www.instagram.com/studio_okooko/');
  //     });
  //     cy.visit(url.aboutUrl);
  //   }
  // });
});
