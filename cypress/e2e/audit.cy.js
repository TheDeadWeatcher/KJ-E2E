/// <reference types="cypress" />
/// <reference types="@cypress-audit/lighthouse" />

describe('KJ Design -  speed audit', () => {
  before(function () {
    cy.fixture('pagesUrl').then(function (url) {
      globalThis.url = url;
    });
  });

  it('Audit - lighthouse ', () => {
    cy.visit('/');
    cy.lighthouse({
      performance: 50, // jest 30 popracuj :(
      accessibility: 80,
      'best-practices': 80,
      seo: 80,
    });
  });
});
