describe('Cypress Sample', () => {
  it('MyReact App Test', () => {
    cy.visit('/');

    cy.get('a[href="/book/form"]').click();
    cy.get('[type="submit"]').click();
    cy.get('ul').should('have.length', 2);

    cy.get('#title').type('速習React');
    cy.get('#price').type('-500');
    cy.get('[type="submit"]').click();
    cy.get('form li:eq(0)').should('contain', '正数');

    cy.get('#price').clear().type('500');
    cy.get('#published').type('2024-01-05');
    cy.get('[type="submit"]').click();
    cy.url().should('equal', 'http://localhost:3000/');
  });
});