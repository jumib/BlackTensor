// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import Vuetify from 'vuetify'
import JQuery from 'jquery'
import VueSlideBar from 'vue-slide-bar'
import VueSweetalert2 from 'vue-sweetalert2'
import VueGoodWizard from 'vue-good-wizard'
// eslint-disable-next-line
let $ = JQuery

Vue.use(BootstrapVue)
Vue.use(VueSweetalert2)
Vue.use(VueGoodWizard)
Vue.use(Vuetify)

Vue.component('vue-slide-bar', VueSlideBar)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
