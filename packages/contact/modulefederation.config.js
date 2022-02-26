const deps = require('./package.json').dependencies

module.exports = {
  name: 'Contact',
  filename: 'remoteEntry.js',
  exposes: {
    './Contact': './src/components/App',
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
