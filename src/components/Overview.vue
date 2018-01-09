<template>
  <div class="overview">
    <h1>Space Documentation: {{space.name}}</h1>

    <div class="alert" v-if="spaceId == 0">
      AuthorizationToken or SpaceId are not configured in your <code>src/config.js</code>.
    </div>

    <h2>Essential Links</h2>
    <ul>
      <li><a :href=spaceUrl target="_blank">Space Dashboard</a></li>
    </ul>
    <h2>Components <span class="text--small"><router-link :to="{ name: 'ComponentOverview'}">View all</router-link></span></h2>
    <ul>
      <li v-for="component in components"><router-link :to="{ name: 'ComponentDetail', params: { id: component.id }}">{{component.name}}</router-link></li>
    </ul>

    <h2>Ecosystem</h2>
    <ul>
      <li><a href="https://www.storyblok.com/docs/Prologue/Introduction" target="_blank">Content Delivery API</a></li>
      <li><a href="https://www.storyblok.com/docs/management-api/authentication" target="_blank">Management API</a></li>
      <li><a href="https://app.storyblok.com/" target="_blank">Storyblok App</a></li>
      <li><a href="https://twitter.com/storyblok" target="_blank">Storyblok on Twitter</a></li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Overview',
  computed: {
    spaceUrl() {
      return `https://app.storyblok.com/#!/me/spaces/${this.spaceId}/dashboard`;
    },
    ...mapState([
      'spaceId',
      'space',
      'components'
    ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.alert {
  display: block;
  background: #e80000;
  border: 1px solid #bb0000;
  color: #fff;
  padding: 10px; 
}
</style>
