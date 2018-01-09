<template>
  <div class="component-detail">
    <h1>Component: {{ component.name }}</h1>
    <img v-if="component.image" :src="component.image">
    <h2>Fields:</h2>
    <ul>
      <li v-for="(data, field) in schema" v-if="data.type != 'section'">
        <h3>{{field}}</h3>
        <ul>
          <li>
            <h4>type: {{data.type}}</h4>
            <div v-if="data.restrict_components">
              <h5>Allowed Components:</h5>
              <ul v-for="item in data.component_whitelist">
                <li>{{item}}</li>
              </ul>
            </div>
            <div v-if="data.description">{{data.description}}</div>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import _ from 'underscore'

export default {
  name: 'ComponentDetail',
  computed: {
    ...mapState([
      'components'
    ]),
    component() {
      return this.components.length > 0 ? _.findWhere(this.components, { id: parseInt(this.$route.params.id) }) : { name: 'loading', schema: '', image: ''}
    },
    schema() {
      return JSON.parse(this.component.schema)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
