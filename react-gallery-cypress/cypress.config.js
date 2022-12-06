const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;

module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    charts: true,
    reportPageTitle: "reports-react-gallery",
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  e2e: {
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx,feature}",
    baseUrl: "http://localhost:3000",
    chromeWebSecurity: false,

    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber());

      require("cypress-mochawesome-reporter/plugin")(on);
    },
  },
});
