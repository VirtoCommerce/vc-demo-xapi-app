const path = require('path');
const PurgeCSSPlugin = require('purgecss-webpack-plugin');

module.exports = (config) => {
  config.module.rules = config.module.rules || [];
  config.module.rules.push({
    include: /\.(graphql|gql)$/,
    exclude: /node_modules/,
    loader: '@graphql-tools/webpack-loader'
  });
  if (config.mode === 'production') {
    config.plugins = config.plugins || [];
    config.plugins.push(
      new PurgeCSSPlugin({
        safelist: {
          deep: [/^dynamic-ng-/]
        },
        paths: require('glob').sync(`${path.join(__dirname, 'src')}/**/*`,
          { nodir: true }),
      }));
  }
  return config;
};
