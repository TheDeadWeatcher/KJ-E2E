/// <reference types="cypress" />

describe('KJ - Design /  Home page - E2E', () => {
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
    cy.title().should('contain', 'KJ Design');
  });

  it('Should check all main nav links', () => {
    cy.checkLinksUrl('[data-css_id="to7d484"] a');
  });

  it('Should check all main category links and h1', () => {
    cy.checkLinksUrl('[data-css_id="7azh46"] a');
    cy.get('[data-css_id="7azh46"] a').should('have.length', 4);
    cy.checkTxt('[data-css_id="7azh46"] h1');
  });

  it('Should check links and txt of section "skontaktuj się ze mną"', () => {
    cy.checkLinksUrl('[data-css_id="vhna565"] a');
    cy.checkTxt('[data-css_id="vhna565"] p');
  });

  it('Should check links and txt of section "nowości"', () => {
    cy.checkLinksUrl('.tb_xwty540 a');
    cy.get('.tb_xwty540 a').should('have.length', 6); //  include mobile version
    cy.checkTxt('.tb_2wrd393 p');
  });

  // happy sleep and ilumni links are not working - report to owner

  it('Should check links and txt of section "klienci"', () => {
    // cy.checkLinksUrl('[data-css_id="naic846"] a');
    cy.get('[data-css_id="naic846"] a').should('have.length', 4);
    cy.checkTxt('[data-css_id="naic846"] p');
  });

  it('Should check all links and img in footer section ', () => {
    cy.get('.tb_leql329 a').should('have.length', 3);
    cy.checkLinksUrl('.tb_leql329 a');
    cy.get('.tb_3w03329 img').should('exist');
    cy.checkTxt('.tb_l0u1330 p');
    cy.get('#wpfront-scroll-top-container').should('exist').click({ force: true });
  });
});
