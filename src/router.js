import Vue from 'vue'
import Router from 'vue-router'
import Overview from '@/components/Overview'
import ComponentOverview from '@/components/ComponentOverview'
import ComponentDetail from '@/components/ComponentDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Overview
    },
    {
      path: '/components',
      name: 'ComponentOverview',
      component: ComponentOverview
    },
    {
      path: '/components/:id',
      name: 'ComponentDetail',
      component: ComponentDetail
    }
  ]
})