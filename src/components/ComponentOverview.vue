<template>
  <div class="components">
    <h1>Overview</h1>
    <ul>
      <li v-for="component in components"><router-link :to="{ name: 'ComponentDetail', params: { id: component.id }}">{{component.name}}</router-link></li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'ComponentOverview',
  computed: {
    ...mapState([
      'components'
    ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
