// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html
const base = require('./karma.conf.base.js');
const proxies = require('./proxy.conf.json');

module.exports = function (config) {
  base(config);
  config.set({
    client: {
      ...config.client,
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    proxies: proxies,
    jasmineHtmlReporter: {
      suppressAll: true // removes the duplicated traces
    },
    coverageReporter: {
      reporters: [
        { type: 'html' },
        { type: 'text-summary' }
      ]
    },
    reporters: [
      ...config.reporters,
      'kjhtml'
    ],
    logLevel: config.LOG_INFO,
    browsers: ['Chrome'],
  });
};
