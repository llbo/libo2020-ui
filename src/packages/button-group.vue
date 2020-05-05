<template>
  <div class='li-button-group'>
      <slot></slot>
  </div>
</template>

<script>
export default {
    name: 'li-button-group',
    mounted(){
        // 校验内部是否是我们的button组件，如果不是报错
        let children = this.$el.children
        for (let i = 0; i<children.length;i++) {
            console.assert(children[i].tagName !== 'BUTTON', '子元素必须为button')
        }
    }
}
</script>

<style lang='scss'>
@import '../styles/_var.scss';
.li-button-group{
    display:inline-flex;
    vertical-align: middle;
    margin-left: 12px;
    button{
        // border-radius: 0;
        position: relative;
        &:first-child{
            border-top-left-radius: 0;
            border-bottom-left-radius: 0;
        }
        &:last-child{
            border-top-right-radius: $border-radius;
            border-bottom-right-radius: $border-radius;
        }
        &:hover{
            z-index:1
        }
        &:focus{
            z-index: 2;
        }
    }
}

</style>