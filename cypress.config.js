const { defineConfig } = require('cypress');
const { lighthouse, prepareAudit } = require('@cypress-audit/lighthouse');

module.exports = defineConfig({
  projectId: 'qi37yk',
  // reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      // allureWriter(on, config);
      // require('cypress-mochawesome-reporter/plugin')(on);
      on('before:browser:launch', (browser = {}, launchOptions) => {
        prepareAudit(launchOptions);
      });
      on('task', {
        lighthouse: lighthouse(), // calling the function is important
      });
    },
    baseUrl: 'https://www.katarzynajasyk.com/',
    // experimentalRunAllSpecs: false,
    bloclHosts: ['www.google-analytics.com', 'ssl.google-analytics.com'],
    includeShadowDom: true,
    viewportHeight: 1080,
    viewportWidth: 1920,
    hideXHRInCommandLog: true,
    chromeWebSecurity: false,
    video: false,
    videoUploadOnPasses: false,
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx,feature}',
    // retries: {
    //   runMode: 4,
    //   openMode: 4,
    // },
  },
});
