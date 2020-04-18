import Vue from 'vue'
import App from './App.vue'
import store from './store'

import './assets/css/core.css'
import './assets/css/styles.css'

Vue.config.productionTip = false

new Vue({
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
