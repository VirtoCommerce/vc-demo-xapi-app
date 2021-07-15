// Karma configuration file for CI, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html
const base = require('./karma.conf.base.js');

module.exports = function (config) {
  base(config);
  config.set({
    plugins: [
      ...config.plugins,
      require('karma-sonarqube-unit-reporter')
    ],
    coverageReporter: {
      reporters: [
        { type: 'lcovonly' },
      ]
    },
    sonarQubeUnitReporter: {
      sonarQubeVersion: 'LATEST',
      outputFile: 'coverage/vc-demo-xapi-app/report.xml',
      overrideTestDescription: true,
      testPaths: ['./src'],
      testFilePattern: '.spec.ts',
      useBrowserName: false
    },
    reporters: [
      ...config.reporters,
      'coverage',
      'sonarqubeUnit',
    ],
    browsers: ['ChromeHeadlessCI'],
    customLaunchers: {
      ChromeHeadlessCI: {
        base: 'ChromeHeadless',
        flags: ['--no-sandbox']
      }
    },
    logLevel: config.LOG_ERROR,
  });
};
