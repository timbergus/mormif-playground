const cracoModuleFederation = require('craco-module-federation')

module.exports = {
  mode: 'development',
  devServer: {
    port: 5302,
  },
  plugins: [
    {
      plugin: cracoModuleFederation,
    },
  ],
}
