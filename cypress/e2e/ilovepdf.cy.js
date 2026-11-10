describe('iLovePDF E2E Flows', () => {
  beforeEach(() => {
    Cypress.on('uncaught:exception', () => false);
  });

  it('loads the Spanish homepage and displays core PDF tool cards', () => {
    cy.visit('https://www.ilovepdf.com/es');
    cy.get('h1').should('contain.text', 'Herramientas online para amantes de los PDF');
    cy.contains('h3', 'Unir PDF').should('be.visible');
    cy.contains('h3', 'Dividir PDF').should('be.visible');
    cy.contains('h3', 'Comprimir PDF').should('be.visible');
  });

  it('filters PDF tools by the security category tab', () => {
    cy.visit('https://www.ilovepdf.com/es');
    cy.contains('Seguridad PDF').click();
    cy.contains('h3', 'Desbloquear PDF').should('be.visible');
    cy.contains('h3', 'Proteger PDF').should('be.visible');
    cy.contains('h3', 'Firmar PDF').should('be.visible');
  });

  it('navigates to the Merge PDF tool page and verifies upload controls', () => {
    cy.visit('https://www.ilovepdf.com/es/unir_pdf');
    cy.get('h1').should('contain.text', 'Unir archivos PDF');
    cy.contains('a', 'Seleccionar archivos PDF').should('be.visible');
  });

  it('validates empty credentials on the login form', () => {
    cy.visit('https://www.ilovepdf.com/es/login');
    cy.get('h2').should('contain.text', 'Acceder a mi cuenta');
    cy.contains('button', 'Acceder').click();
    cy.contains('Email no puede estar vacío.').should('be.visible');
    cy.contains('Contraseña no puede estar vacío.').should('be.visible');
  });
});
