import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import store from './store'
import routes from './router'
import 'bulma/css/bulma.css'

Vue.use(VueRouter)

var router = new VueRouter({
  routes: routes,
  mode: 'history'
})
new Vue({
  store,
  router,
  el: '#app',
  render: h => h(App)
})
