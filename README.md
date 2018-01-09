# Storyblok DocGen

> A very basic Vue.js project setup to document Storyblok components and content-types

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## How to use

This doc app will use the management API, therefore it should currently only be used internally.

1. [Get your OAuth2 token](https://www.storyblok.com/docs/management-api/authentication)
2. [Get your Space Id](https://www.storyblok.com/docs/terminology/space) 
3. Access the `src/config.js` and add the Token and the Space Id
4. Customize stylings or adjust as you need it.