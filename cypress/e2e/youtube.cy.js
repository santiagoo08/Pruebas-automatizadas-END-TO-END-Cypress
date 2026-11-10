describe('YouTube E2E Flows', () => {
  beforeEach(() => {
    Cypress.on('uncaught:exception', () => false);
  });

  it('loads the homepage with navigation banner and search input', () => {
    cy.visit('https://www.youtube.com');
    cy.title().should('include', 'YouTube');
    cy.get('input[name="search_query"]').should('be.visible');
  });

  it('executes a search query and displays video results', () => {
    cy.visit('https://www.youtube.com/results?search_query=Cypress+E2E+Testing');
    cy.title().should('include', 'Cypress E2E Testing');
    cy.get('input[name="search_query"]').should('have.value', 'Cypress E2E Testing');
    cy.get('ytd-video-renderer, ytd-reel-shelf-renderer', { timeout: 15000 })
      .should('have.length.greaterThan', 0);
  });

  it('loads the video watch page and renders the HTML5 video player', () => {
    cy.visit('https://www.youtube.com/watch?v=HDFNjDKKO6A');
    cy.get('#movie_player, video', { timeout: 15000 }).should('exist');
    cy.get('input[name="search_query"]').should('be.visible');
  });
});
