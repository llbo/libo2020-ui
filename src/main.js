import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import liUi from './packages/index'
Vue.use(liUi)
new Vue({
  render: h => h(App),
}).$mount('#app')
