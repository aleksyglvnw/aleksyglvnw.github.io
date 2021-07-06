import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueInputAutowidth from 'vue-input-autowidth'

Vue.use(VueInputAutowidth)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
