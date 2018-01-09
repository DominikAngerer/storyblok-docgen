# Storyblok DocGen

> A very basic Vue.js project setup to document Storyblok components and content-types

![Storyblok DocGen Result](https://a.storyblok.com/f/39898/1742x1274/3a4c579e8a/bildschirmfoto-2018-01-09-um-12-53-27.png)

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


```javascript
export default {
  storyblok: {
    spaceId: 0,             // Your Space id (can be found on your Space Dashboard)
    authorizationToken: ''  // https://www.storyblok.com/docs/management-api/authentication
  }
}
```

4. Customize stylings or adjust as you need it.