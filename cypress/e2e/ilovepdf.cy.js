describe('iLovePDF E2E Flows', () => {
  beforeEach(() => {
    Cypress.on('uncaught:exception', () => false);
  });

  it('ILP-01: loads the Spanish homepage and displays core PDF tool cards', () => {
    cy.visit('https://www.ilovepdf.com/es');
    cy.get('h1').should('contain.text', 'Herramientas online para amantes de los PDF');
    cy.contains('h3', 'Unir PDF').should('be.visible');
    cy.contains('h3', 'Dividir PDF').should('be.visible');
    cy.contains('h3', 'Comprimir PDF').should('be.visible');
    cy.contains('h3', 'PDF a Word').should('be.visible');
  });

  it('ILP-02: filters PDF tools dynamically using the Security category tab', () => {
    cy.visit('https://www.ilovepdf.com/es');
    cy.contains('Seguridad PDF').should('be.visible').click();
    cy.contains('h3', 'Desbloquear PDF').should('be.visible');
    cy.contains('h3', 'Proteger PDF').should('be.visible');
    cy.contains('h3', 'Firmar PDF').should('be.visible');
  });

  it('ILP-03: clicks the Merge PDF card from homepage and verifies upload controls', () => {
    cy.visit('https://www.ilovepdf.com/es');
    cy.contains('h3', 'Unir PDF').should('be.visible').click();
    cy.url().should('include', '/es/unir_pdf');
    cy.get('h1').should('contain.text', 'Unir archivos PDF');
    cy.contains('a', 'Seleccionar archivos PDF').should('be.visible');
  });

  it('ILP-04: navigates to Login and validates empty form submission and input typing', () => {
    cy.visit('https://www.ilovepdf.com/es');
    cy.contains('a', 'Acceder').should('be.visible').click();
    cy.url().should('include', '/es/login');
    cy.get('h2').should('contain.text', 'Acceder a mi cuenta');
    cy.contains('button', 'Acceder').should('be.visible').click();
    cy.contains('Email no puede estar vacío.').should('be.visible');
    cy.contains('Contraseña no puede estar vacío.').should('be.visible');
    cy.get('input[placeholder*="email"], input[name*="Email"], input[type="text"]')
      .first()
      .type('usuario.prueba@ejemplo.com')
      .should('have.value', 'usuario.prueba@ejemplo.com');
  });
});
