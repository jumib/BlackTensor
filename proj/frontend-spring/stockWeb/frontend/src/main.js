// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import BootstrapVue from 'bootstrap-vue'
import Vuetify from 'vuetify'
import JQuery from 'jquery'
import VueSlideBar from 'vue-slide-bar'
import vuex from 'vuex'

// eslint-disable-next-line
let $ = JQuery

Vue.use(BootstrapVue)
Vue.use(Vuetify)
Vue.use(vuex)
Vue.component('vue-slide-bar', VueSlideBar)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
