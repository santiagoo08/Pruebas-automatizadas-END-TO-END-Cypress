describe('YouTube E2E Flows', { testIsolation: false }, () => {
  beforeEach(() => {
    Cypress.on('uncaught:exception', () => false);
  });

  it('YT-01: loads the homepage with navigation banner and search input', () => {
    cy.visit('https://www.youtube.com');
    cy.title().should('include', 'YouTube');
    cy.get('input[name="search_query"]', { timeout: 15000 }).should('be.visible');
  });

  it('YT-02: types a search query in the search bar and renders video results', () => {
    cy.get('input[name="search_query"]', { timeout: 15000 })
      .should('be.visible')
      .clear()
      .type('Cypress E2E Testing');
    cy.get('button.ytSearchboxComponentSearchButton, button[aria-label="Search"], button[title="Buscar"], #search-icon-legacy')
      .first()
      .click();
    cy.url({ timeout: 15000 }).should('include', 'search_query=Cypress');
    cy.get('ytd-video-renderer, ytd-reel-shelf-renderer', { timeout: 15000 })
      .should('have.length.greaterThan', 0);
  });

  it('YT-03: filters search results by clicking the Videos tab', () => {
    cy.contains('[role="tab"], yt-chip-cloud-chip-renderer', /Videos|Vídeos/i, { timeout: 15000 })
      .should('be.visible')
      .click();
    cy.get('ytd-video-renderer', { timeout: 15000 })
      .should('have.length.greaterThan', 0);
  });

  it('YT-04: opens a video watch page and renders the HTML5 video player', () => {
    cy.get('ytd-video-renderer a#video-title', { timeout: 15000 })
      .first()
      .should('be.visible')
      .click();
    cy.url({ timeout: 15000 }).should('include', '/watch');
    cy.get('#movie_player', { timeout: 15000 }).should('be.visible');
    cy.get('video', { timeout: 15000 }).should('exist');
  });
});
