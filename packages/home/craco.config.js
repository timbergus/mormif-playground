const cracoModuleFederation = require('craco-module-federation')

module.exports = {
  mode: 'development',
  devServer: {
    port: 5301,
  },
  plugins: [
    {
      plugin: cracoModuleFederation,
    },
  ],
}
