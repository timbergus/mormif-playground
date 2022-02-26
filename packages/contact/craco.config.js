const cracoModuleFederation = require('craco-module-federation')

module.exports = {
  mode: 'development',
  devServer: {
    port: 5304,
  },
  plugins: [
    {
      plugin: cracoModuleFederation,
    },
  ],
}
