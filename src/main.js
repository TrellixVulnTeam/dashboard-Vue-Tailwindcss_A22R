import Vue from 'vue'
import App from './App.vue'
import './assets/styles/index.css'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import ProgressBar from 'vuejs-progress-bar'

// import Terms from './views/Terms.vue'

import VueApexCharts from 'vue-apexcharts'
import Multiselect from 'vue-multiselect'
import VCalendar from 'v-calendar'
import AnimatedNumber from 'animated-number-vue'

import VEModal from './components/share/VEModal.vue'
import Navbar from './components/share/Navbar.vue'

import router from './router'

import Dashboard from '@/components/base/Dashboard.vue'
import Project from '@/components/base/Project.vue'
import Terms from '@/components/base/Terms.vue'
import Staffs from '@/components/base/Staffs.vue'
import Stations from '@/components/base/Stations.vue'
import Calender from '@/components/base/Calender.vue'
import Product from '@/components/base/Product.vue'
import GoldenCalculator from '@/components/base/GoldenCalculator.vue'
import Level from '@/components/base/Level.vue'
Vue.config.productionTip = false
Vue.use(VueApexCharts)
Vue.use(ProgressBar)
Vue.use(AnimatedNumber)
Vue.use(VCalendar, {
  componentPrefix: 'vc' // Use <vc-calendar /> instead of <v-calendar />             // ...other defaults
})

Vue.component('apexchart', VueApexCharts)
Vue.component('multiselect', Multiselect)
Vue.component('ve-modal', VEModal)
Vue.component('Navbar', Navbar)
Vue.component('animated-number', AnimatedNumber)

Vue.component('Dashboard', Dashboard)
Vue.component('Project', Project)
Vue.component('Terms', Terms)
Vue.component('Staffs', Staffs)
Vue.component('Product', Product)
Vue.component('Stations', Stations)
Vue.component('Calender', Calender)
Vue.component('GoldenCalculator', GoldenCalculator)
Vue.component('Level', Level)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
