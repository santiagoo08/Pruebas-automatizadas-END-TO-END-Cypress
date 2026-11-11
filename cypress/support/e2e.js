// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
// ***********************************************************

import './commands'

// Ignore third-party script errors from external production sites (YouTube / iLovePDF)
Cypress.on('uncaught:exception', () => false)

// Prevent ServiceWorkers on SPA sites like YouTube from blocking Cypress page-load events
Cypress.on('window:before:load', (win) => {
  delete win.navigator.serviceWorker
})
