const deps = require('./package.json').dependencies

module.exports = {
  name: 'News',
  filename: 'remoteEntry.js',
  remotes: {
    Mainframe: 'Mainframe@http://localhost:5000/remoteEntry.js',
  },
  exposes: {
    './News': './src/components/App',
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
