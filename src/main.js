// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import vuex from 'vuex'

import App from './App'
import router from './router/index'
import Vuefire from 'vuefire'
import VueResource from 'vue-resource'

Vue.use(VueResource)
Vue.use(Vuefire)
Vue.use(vuex)
Vue.use(require('vue-moment'))
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
