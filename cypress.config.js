const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'gmyjhx',
  e2e: {
    baseUrl: "https://telnyx.com",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
