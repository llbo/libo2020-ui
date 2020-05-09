// 所有组件的入口
import Button from './button/button.vue'
import Icon from './icon/icon.vue'
import ButtonGroup from './button/button-group.vue'

const install = (Vue) => {
  Vue.component(Button.name, Button)
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