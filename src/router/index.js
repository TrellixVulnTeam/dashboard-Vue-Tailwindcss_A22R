import Vue from 'vue'
import VueRouter from 'vue-router'

import Dashboard from '@/components/base/Dashboard.vue'
import Project from '@/components/base/Project.vue'
import Terms from '@/components/base/Terms.vue'
import Staffs from '@/components/base/Staffs.vue'
import Stations from '@/components/base/Stations.vue'
import Calender from '@/components/base/Calender.vue'
import Product from '@/components/base/Product.vue'
import GoldenCalculator from '@/components/base/GoldenCalculator.vue'
import Level from '@/components/base/Level.vue'
Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'dashboard', component: Dashboard },
  { path: '/dashboard', name: 'Level', component: Level },
  { path: '/project', name: 'project', component: Project },
  { path: '/terms', name: 'terms', component: Terms },
  { path: '/staffs', name: 'staffs', component: Staffs },
  { path: '/stations', name: 'stations', component: Stations },
  { path: '/calender', name: 'Calender', component: Calender },
  { path: '/product', name: 'product', component: Product },
  { path: '/GoldenCalculator', name: 'GoldenCalculator', component: GoldenCalculator }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
