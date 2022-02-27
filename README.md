# Monorepo Micro Frontend Playground

This project aims to provide an example of a monorepo containing five microfrontends.

- Shell: the main container that contains the routing and shares the error boundary component.
- Home: the home page. No extra contents.
- News: a page that has an asynchronous call that uses the parent suspense. It also uses [Recoil](https://recoiljs.org/) and [Immer](https://github.com/immerjs/immer).
- About: an empty page like home.
- Contact: a page with a form using [Material UI](https://mui.com/) and [Recoil](https://recoiljs.org/) and [Immer](https://github.com/immerjs/immer).

## Structure

This is a monorepo that uses [NPM Workspaces](https://docs.npmjs.com/cli/v8/using-npm/workspaces) to install and manage packages. It also creates symlinks for the packages contained in the `packages` folder.

Of course, this is only a commodity. The five projects can be totally independent, and I think this is better for projects with a certain size.

To create a micro frontend we need the latest version of [Create React App](https://create-react-app.dev/), because it contains [WebPack 5](https://webpack.js.org/) that support [Module Federation](https://webpack.js.org/concepts/module-federation).

The idea is that each frontend is an small server to which we can ask for contents. Each frontend defines inside a `modulefederation.config.js` the following values:

- name: the name of the frontend.
- filename: the name of the file that will be served.
- remotes: the list of the other frontends that we can ask for contents.
- exposes: the list of the exposed exports.
- shared: the list of the shared exports.

I'm not going to go into the details because it's better explained by other in the resources sections.

At the end, the idea is to be able to reduce the size of a huge application into small, independent verticals that could be handled by smaller teams more efficiently.

## Installation

To modify the WebPack configuration we are going to use [CRACO](https://github.com/gsoft-inc/craco).

```bash
npm install @craco/craco --legacy-peer-deps

npm install craco-module-federation
```

## Running

To run a frontend, we need to have running all its dependencies. The main dependency for every one is `shell`. Of course this is just a test. Usually for small components we have a Design System. `Shell` shares the error boundary.

```bash
npm run news
```

This launches `shell` and `news`, for example, using [concurrently](https://github.com/open-cli-tools/concurrently).

## Resources

- [Introducing Module Federation in Webpack 5](https://www.youtube.com/watch?v=D3XYAx30CNc)
- [Use CRACO to avoid ejecting your app](https://www.linkedin.com/pulse/microfrontends-create-react-app-without-eject-using-rany)
- [ErrorBoundary](https://reactjs.org/docs/error-boundaries.html)
- [Error Boundaries](https://mhnpd.github.io/react-loader-spinner)
- [Micro frontends with React and Typescript](https://ogzhanolguncu.com/blog/micro-frontends-with-module-federation)
- [Micro frontends at scale](https://medium.com/xgeeks/micro-frontends-at-scale-part-1-a8ab67bfb773)
- [Typescript with Module Federation](https://www.youtube.com/watch?v=UbEx1v26kCs)
