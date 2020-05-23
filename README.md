# lerna + create react app experiment

Monorepo + microfrontend architecture based on create-react-app.

This (willingly) doesn't make use of [craco](https://github.com/gsoft-inc/craco) but could to allow hot-module-reload between packages. As is, a build step is required to use a module inside another, which is... Kinda normal, actually.

## How to try?

- Clone the repo
- `yarn run bootstrap` 
- `yarn run build:all`
- `yarn start` will start the main container app. You can start each app package individually by using `yarn --cwd packages/Apps/{whatever-app} start`