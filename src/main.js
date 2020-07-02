import Vue from 'vue'
import App from './App.vue'
import flexlayout from './components'
// eslint-disable-next-line
import 'amfe-flexible'
Vue.use(flexlayout, {
  isRem: true,
  htsize: '192'
})
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
