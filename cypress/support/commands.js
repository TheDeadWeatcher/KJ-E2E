// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('requestCheckLink', ($selector) => {
  // cy.get($selector).should('be.visible');
  cy.get($selector).each(($el) => {
    const linkHref = $el.attr('href');
    cy.request(linkHref).then((response) => {
      expect(response.status).to.eq(200);
    });
  });
});

Cypress.Commands.add('checkLength', ($selector, options) => {
  cy.get($selector).should('be.visible').and('have.length', options);
});

Cypress.Commands.add('checkTxt', ($selector) => {
  cy.get($selector).then(($txt) => {
    const txt = $txt.text();
    cy.get($selector).should('have.text', txt);
  });
});

Cypress.Commands.add('checkLinksUrl', ($selector) => {
  cy.get($selector).each(($link) => {
    cy.wrap($link).then(($link) => {
      const href = $link.attr('href');
      cy.visit(href, { failOnStatusCode: false });
      cy.url().should('include', href);
      cy.go('back');
    });
  });
});
