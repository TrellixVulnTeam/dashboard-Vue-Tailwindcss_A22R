import Vue from 'vue'
import App from './App.vue'
import './assets/styles/index.css'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import ProgressBar from 'vuejs-progress-bar'

import Terms from './views/Terms.vue'

import * as VueGoogleMaps from 'vue2-google-maps'

import VueApexCharts from 'vue-apexcharts'
import Multiselect from 'vue-multiselect'
import VCalendar from 'v-calendar'
import AnimatedNumber from 'animated-number-vue'

import VEModal from './components/share/VEModal.vue'

import router from './router'
Vue.config.productionTip = false
Vue.use(VueApexCharts)
Vue.use(ProgressBar)
Vue.use(AnimatedNumber)
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyB3fwQqOVvo2Q8-2khB1i1McMxg-wqt-_U',
    libraries: 'places' // This is required if you use the Autocomplete plugin
  },
  installComponents: true
})
Vue.use(VCalendar, {
  componentPrefix: 'vc' // Use <vc-calendar /> instead of <v-calendar />             // ...other defaults
})

Vue.component('apexchart', VueApexCharts)
Vue.component('multiselect', Multiselect)
Vue.component('ve-modal', VEModal)
Vue.component('animated-number', AnimatedNumber)

Vue.component('Terms', Terms)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
