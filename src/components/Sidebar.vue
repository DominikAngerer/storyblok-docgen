<template>
  <nav class="sidebar">
    <h3>Storyblok DocGen</h3>
    <ul class="sidebar__list">
      <li class="sidebar__item">
        <router-link :to="{ name: 'Index' }">Home</router-link>
      </li>
      <li class="sidebar__item">
        <router-link :to="{ name: 'ComponentOverview' }">Components</router-link>
        <ul class="sidebar__list sidebar__list--level2">
          <li v-for="component in components" class="sidebar__item">
            <router-link :to="{ name: 'ComponentDetail', params: { id: component.id }}">{{component.name}}</router-link>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'sidebar',
  computed: {
    ...mapState([
      'components'
    ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.sidebar {
  display: block;
  width: 300px;
  padding: 50px 45px 60px 45px;
  position: fixed;
  border-right: 1px solid #e5e5e5;
  height: 100vh;
}

.sidebar__list {
  margin: 0;
  padding: 0;
}

.sidebar__item {
  display: block;
  padding-bottom: 5px;

  a {
    color: #5a5a5a;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
}

.sidebar__list--level2 {
  padding-top: 10px;
  padding-left: 20px;
  font-size: 90%;
  a {
    color: #252525;
  }
}


h3 {
  margin-top: 0px;
}
</style>
