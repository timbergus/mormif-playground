const deps = require('./package.json').dependencies

module.exports = {
  name: 'Shell',
  filename: 'remoteEntry.js',
  remotes: {
    Home: 'Home@http://localhost:5301/remoteEntry.js',
    News: 'News@http://localhost:5302/remoteEntry.js',
    About: 'About@http://localhost:5303/remoteEntry.js',
    Contact: 'Contact@http://localhost:5304/remoteEntry.js',
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
