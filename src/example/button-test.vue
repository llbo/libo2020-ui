<template>
  <div>
    <li-button class="li_button">默认按钮</li-button>
    <li-button class="li_button" type="primary">主操作按钮</li-button>
    <li-button class="li_button" type="warning">警告按钮</li-button>
    <li-button class="li_button" type="success">成功按钮</li-button>
    <li-button class="li_button" type="info">信息按钮</li-button>
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
.li-button {
  margin: 5px 0;
}
</style>