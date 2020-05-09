<template>
  <div>
    <li-button>默认按钮</li-button>
    <li-button type="primary">主要按钮</li-button>
    <li-button type="warning">警告按钮</li-button>
    <li-button type="danger">危险按钮</li-button>
    <li-button type="success">成功按钮</li-button>
    <li-button type="info">信息按钮</li-button>
    <!-- 点击事件 -->
    <li-button type="success" @click="fn">触发事件</li-button>
  </div>
</template>

<script>
export default {
  name: 'button-test',
  methods: {
    fn (e) {
      console.log(123)
    }
  }
}
</script>

<style>

</style>