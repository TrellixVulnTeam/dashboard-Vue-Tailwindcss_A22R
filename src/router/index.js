import Vue from 'vue'
import VueRouter from 'vue-router'

import dashboard from '../views/Dashboard.vue'
import project from '../views/Project.vue'
import terms from '../views/Terms.vue'
import staffs from '../views/Staffs.vue'
import stations from '../views/stations.vue'
import calender from '../views/calender.vue'
import pharmacy from '../views/Pharmacy.vue'
import Appoinement from '../views/Appointment.vue'
import BloodGroup from '../views/BloodGroup.vue'
import GoldenCalculator from '../views/GoldenCalculator.vue'
import Level from '../views/Level.vue'
Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'dashboard', component: dashboard },
  { path: '/dashboard', name: 'Level', component: Level },
  { path: '/project', name: 'project', component: project },
  { path: '/terms', name: 'terms', component: terms },
  { path: '/staffs', name: 'staffs', component: staffs },
  { path: '/stations', name: 'stations', component: stations },
  { path: '/calender', name: 'calender', component: calender },
  { path: '/pharmacy', name: 'pharmacy', component: pharmacy },
  { path: '/appointment', name: 'appoinement', component: Appoinement },
  { path: '/bloodgroup/:group', name: 'BloodGroup', component: BloodGroup, props: true },
  { path: '/GoldenCalculator', name: 'GoldenCalculator', component: GoldenCalculator }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
