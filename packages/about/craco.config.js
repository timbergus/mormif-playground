const cracoModuleFederation = require('craco-module-federation')

module.exports = {
  mode: 'development',
  devServer: {
    port: 5303,
  },
  plugins: [
    {
      plugin: cracoModuleFederation,
    },
  ],
}
