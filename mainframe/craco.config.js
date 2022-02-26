const cracoModuleFederation = require('craco-module-federation')

module.exports = {
  mode: 'development',
  devServer: {
    port: 5000,
  },
  plugins: [
    {
      plugin: cracoModuleFederation,
    },
  ],
}
