<template>
  <div id="app">
    <li-button>默认按钮</li-button>
    <li-button type='primary'>主要按钮</li-button>
    <li-button type='warning'>警告按钮</li-button>
    <li-button type='danger'>危险按钮</li-button>
    <li-button type='success'>成功按钮</li-button>
    <li-button type='info'>信息按钮</li-button>
    <!-- <li-icon icon="ziyuan"></li-icon> -->
    <li-icon icon="shouye"></li-icon>
    <li-button icon="shouye" type='info'>信息按钮</li-button>
    <li-button icon='ziyuan' type='info'></li-button>
    <li-button icon='jiazai' type='info' icon-position='right'>信息按钮</li-button>
    <!-- 加载中 -->
    <li-button type='success' loading>加载中</li-button>
    <!-- 点击事件 -->
    <li-button type='success' @click='fn'>触发事件</li-button>
    <!-- 组合按钮 -->
    <li-button-group>
      <li-button type='primary' icon='shouye' icon-position='left'>上一页</li-button>
      <li-button type='primary' icon='lishi' icon-position='right'>下一页</li-button>
    </li-button-group>
  </div>
</template>

<script>

export default {
  name: 'App',
  methods: {
    fn(e) {
      console.log(123)
    }
  }
}
</script>

<style lang="scss">
</style>
