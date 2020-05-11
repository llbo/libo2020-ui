// 所有组件的入口
import ButtonLi from './button-li/button-li.vue'
import Icon from './icon/icon.vue'
import ButtonGroup from './button-li/button-group.vue'
import Col from './layout/col.vue'
import Row from './layout/row.vue'

const install = (Vue) => {
  Vue.component(ButtonLi.name, ButtonLi)
  Vue.component(Icon.name, Icon)
  Vue.component(ButtonGroup.name, ButtonGroup)
  Vue.component(Col.name, Col)
  Vue.component(Row.name, Row)
}

// 有可能组件会通过script标签的方式引入
if (typeof window.Vue !== 'undefined') {
  install(Vue)
}
export default {
  install
}