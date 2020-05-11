<template>
  <section class="page_demo">
    <div
      class="list"
      v-show="group.name!=='demos'"
      v-for="(group, index) in navs"
      @click="$router.push(group.path)"
      :key="group+index"
    >{{group.name}}</div>
  </section>
</template>

<style lang='scss'>
.page_demo {
  padding-bottom: 50px;
  width: 100%;
  text-align: center;
}
.list {
  padding: 6px 0;
  border-bottom: 1px solid #eee;
}
.list:nth-of-type(1) {
  border: none;
}
.list_a {
  text-decoration: none;
  color: #333;
}
</style>

<script type="text/babel">
import router from './router'

export default {
  data () {
    return {
      navs: []
    };
  },

  created () {
    this.navs = router.options.routes
  }
};
</script>
