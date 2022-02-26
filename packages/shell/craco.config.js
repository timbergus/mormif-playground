const cracoModuleFederation = require('craco-module-federation')

module.exports = {
  mode: 'development',
  devServer: {
    port: 5300,
  },
  plugins: [
    {
      plugin: cracoModuleFederation,
    },
  ],
}
