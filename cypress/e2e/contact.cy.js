/// <reference types="cypress" />

describe('KJ - Design /  Home page - E2E', () => {
  before(function () {
    cy.fixture('pagesUrl').then(function (url) {
      globalThis.url = url;
    });
  });

  beforeEach(() => {
    cy.visit(url.kontaktUrl);
  });

  it('Should open home page, verify url and title', () => {
    cy.url().should('eq', url.kontaktUrl);
    cy.title().should('contain', 'Contact – KJ Design');
  });

  it.only('Should check h1, also check contact form', () => {
    cy.get('#wpforms-504-field_0').should('be.visible');
    cy.get('#wpforms-504-field_0').type('Bartosz', { force: true });
    cy.get('#wpforms-504-field_0-last').should('be.visible');
    cy.get('#wpforms-504-field_0-last').type('Jasyk', { force: true });
    cy.get('#wpforms-504-field_1').should('be.visible');
    cy.get('#wpforms-504-field_1').type('jasykbartosz@gmail.com', { force: true });
    cy.get('#wpforms-504-field_2').should('be.visible');
    cy.get('#wpforms-504-field_2').type(
      'Dzień dobry, jest to atumatyczny test twojej aplikacji, proszę odpisz jeżeli otrzymałeś tego maila. Bartosz Jasyk',
      { force: true }
    );
    cy.get('#wpforms-submit-504').click();
    cy.get('#wpforms-confirmation-504').should(
      'contain',
      'Thanks for contacting us! We will be in touch with you shortly.'
    );
  });
});
