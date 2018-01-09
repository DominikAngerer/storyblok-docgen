import Vue from 'vue'
import StoryblokClient from 'storyblok-js-client'
import config from './config.js'

let storyblokClient = new StoryblokClient({
  headers: {'Authorization': config.storyblok.authorizationToken }
});

export default {
  install (Vue, options) {
    Vue.prototype.$storyblok = storyblokClient
  }
}