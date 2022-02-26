const cracoModuleFederation = require('craco-module-federation')

module.exports = {
  mode: 'development',
  devServer: {
    port: 5002,
  },
  plugins: [
    {
      plugin: cracoModuleFederation,
    },
  ],
}
