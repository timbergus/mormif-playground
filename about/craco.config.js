const cracoModuleFederation = require('craco-module-federation')

module.exports = {
  mode: 'development',
  devServer: {
    port: 5003,
  },
  plugins: [
    {
      plugin: cracoModuleFederation,
    },
  ],
}
