import Vue from 'vue'
import Vuex from 'vuex'
import config from './config.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    space: {
      name: ''
    },
    spaceId: config.storyblok.spaceId,
    components: []
  },
  mutations: {
    setSpace (state, payload) {
      console.log(payload)
      state.space = payload
    },
    setComponents (state, payload) {
      console.log(payload)
      state.components = payload
    }
  },
  actions: {
    loadSpace(context, storyblok) {
      storyblok.get('spaces/' + context.state.spaceId)
      .then((response) => {
        context.commit('setSpace', response.data.space);
      })
      .catch((error) => {
        console.log(error);
      });
    },
    loadComponents(context, storyblok) {
      storyblok.get(`spaces/${context.state.spaceId}/components/`)
      .then((response) => {
        context.commit('setComponents', response.data.components);
      })
      .catch((error) => {
        console.log(error);
      });
    }
  }
})