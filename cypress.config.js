const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    viewportWidth: 1280,
    viewportHeight: 720,
    defaultCommandTimeout: 15000,
    pageLoadTimeout: 60000,
    chromeWebSecurity: false,
    numTestsKeptInMemory: 0,
    video: false,
    setupNodeEvents(on, config) {
      return config;
    },
  },
});
