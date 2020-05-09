import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
// dome集合
const demos = r => require.ensure([], () => r(require('../demos.vue')), 'demos')
// 单个组件
const button = r => require.ensure([], () => r(require('../example/button-test.vue')), 'button')
const icon = r => require.ensure([], () => r(require('../example/icon-test.vue')), 'icon')
const router = new Router({
  routes: [
    { path: '/', name: 'demos', component: demos, meta: { title: 'demos' } },
    { path: '/button', name: 'button', component: button, meta: { title: 'button' } },
    { path: '/icon', name: 'icon', component: icon, meta: { title: 'icon' } }
  ]

})
export default router
