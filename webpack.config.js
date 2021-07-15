const path = require('path');
const PurgeCSSPlugin = require('purgecss-webpack-plugin');

module.exports = (config) => {
  if (config.mode === 'production') {
    config.plugins = config.plugins || [];
    config.plugins.push(
      new PurgeCSSPlugin({
        paths: require('glob').sync(`${path.join(__dirname, 'src')}/**/*`,
          { nodir: true }),
      }));
  }
  return config;
};
