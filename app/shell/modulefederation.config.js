const deps = require('./package.json').dependencies

module.exports = {
  name: 'Mainframe',
  filename: 'remoteEntry.js',
  remotes: {
    Home: 'Home@http://localhost:5001/remoteEntry.js',
    News: 'News@http://localhost:5002/remoteEntry.js',
    About: 'About@http://localhost:5003/remoteEntry.js',
  },
  exposes: {
    './ErrorBoundary': './src/components/ErrorBoundary',
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
