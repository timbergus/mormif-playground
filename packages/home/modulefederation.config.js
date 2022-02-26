const deps = require('./package.json').dependencies

module.exports = {
  name: 'Home',
  filename: 'remoteEntry.js',
  exposes: {
    './Home': './src/components/App',
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
