const deps = require('./package.json').dependencies

module.exports = {
  name: 'About',
  filename: 'remoteEntry.js',
  exposes: {
    './About': './src/components/App',
  },
  shared: {
    ...deps,
    react: {
      singleton: true,
      requiredVersion: deps['react'],
    },
    recoil: {
      singleton: true,
      requiredVersion: deps['recoil'],
    },
  },
}
