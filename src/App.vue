<template>
  <div id="app">
    <sidebar/>
    <main class="content">
      <router-view/>
    </main>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Sidebar from '@/components/Sidebar'

export default {
  name: 'app',
  computed: {
    ...mapState([
      'spaceId'
    ])
  },
  components: {
    Sidebar
  },
  mounted() {
    this.$store.dispatch('loadSpace', this.$storyblok)
    this.$store.dispatch('loadComponents', this.$storyblok)
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

html, body {
  margin: 0px;
  padding: 0px;
}

* {
  box-sizing: border-box;
}

.content {
  padding-top: 45px;
  max-width: 675px;
  margin: 0px 30px 0px 350px;
}

h1 {
  margin-top: 0px;
}

a {
  color: #09b3af;
}

.text--small {
  font-size: 60%;
}
</style>
