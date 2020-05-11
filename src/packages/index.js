// 所有组件的入口
import ButtonLi from './button-li/button-li.vue'
import Icon from './icon/icon.vue'
import ButtonGroup from './button-li/button-group.vue'

const install = (Vue) => {
  Vue.component(ButtonLi.name, ButtonLi)
  Vue.component(Icon.name, Icon)
  Vue.component(ButtonGroup.name, ButtonGroup)
}

// 有可能组件会通过script标签的方式引入
if (typeof window.Vue !== 'undefined') {
  install(Vue)
}
export default {
  install
}