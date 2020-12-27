import Vue from 'vue'
import VueRouter from 'vue-router'

import dashboard from '../views/Dashboard.vue'
import forms from '../views/Forms.vue'
import project from '../views/Project.vue'
import terms from '../views/Terms.vue'
import staffs from '../views/Staffs.vue'
import stations from '../views/stations.vue'
import calender from '../views/calender.vue'
Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'dashboard', component: dashboard },
  { path: '/form', name: 'form', component: forms },
  { path: '/project', name: 'project', component: project },
  { path: '/terms', name: 'terms', component: terms },
  { path: '/staffs', name: 'staffs', component: staffs },
  { path: '/stations', name: 'stations', component: stations },
  { path: '/calender', name: 'calender', component: calender }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
