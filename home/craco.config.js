const cracoModuleFederation = require('craco-module-federation')

module.exports = {
  mode: 'development',
  devServer: {
    port: 5001,
  },
  plugins: [
    {
      plugin: cracoModuleFederation,
    },
  ],
}
