<template>
  <div>
    <button class="li-button" :class="btnClass" :disabled="loading" @click="$emit('click',$event)">
      <li-icon :icon="icon" v-if="icon&&!loading" class="icon"></li-icon>
      <li-icon icon="jiazai" v-if="loading" class="icon"></li-icon>
      <span v-if="$slots.default">
        <slot></slot>
      </span>
    </button>
  </div>
</template>

<script>
export default {
  name: "li-button",
  props: {
    type: {
      type: String,
      default: "",
      validator (type) {
        if (
          type &&
          !["warning", "success", "danger", "info", "primary"].includes(type)
        ) {
          console.error(
            "type类型必须为" +
            ["warning", "success", "danger", "info", "primary"].join("、")
          );
        }
        return true;
      }
    },
    icon: {
      type: String
    },
    iconPosition: {
      type: String,
      default: 'left',
      validator (type) {
        if (!['left', 'right'].includes(type)) {
          console.error('iconPosition属性必须为：left|right')
        }
        return true
      }
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    btnClass () {
      let classes = [];
      if (this.type) {
        classes.push(`li-button-${this.type}`);
      }
      if (this.iconPosition) {
        classes.push(`li-button-${this.iconPosition}`)
      }
      return classes;
    }
  }
};
</script>

<style lang='scss'>
@import "../../styles/var-li.scss";
$height: 42px;
$font-size: 16px;
$color: #323233;
$border-color: #dcdee0;
$background: #fff;
$active-color: #323233;
.li-button {
  background-color: $background;
  border-radius: $border-radius;
  border: 1px solid $border-color;
  height: $height;
  line-height: 1;
  font-size: $font-size;
  width: 100%;
  padding: 12px 20px;
  display: inline-flex;
  justify-content: center;
  vertical-align: middle;
  user-select: none;
  &:hover {
    border: $border-color;
    background-color: $background;
  }
  &:focus,
  &:active {
    color: $active-color;
    border: 1px solid #dcdee0;
    background-color: #eaeaea;
    outline: none;
  }
  @each $type,
    $color
      in (
        primary: $primary,
        success: $success,
        info: $info,
        warning: $warning,
        danger: $danger
      )
  {
    &-#{$type} {
      background: #{$color};
      border: 1px solid #{$color};
      color: #fff;
      fill: #fff;
    }
  }
  @each $type,
    $color
      in (
        primary: $primary-hover,
        success: $success-hover,
        info: $info-hover,
        warning: $warning-hover,
        danger: $danger-hover
      )
  {
    &-#{$type}:hover {
      background: #{$color};
      border: 1px solid #{$color};
      color: #fff;
    }
  }
  @each $type,
    $color
      in (
        primary: $primary-active,
        success: $success-active,
        info: $info-active,
        warning: $warning-active,
        danger: $danger-active
      )
  {
    &-#{$type}:active,
    &-#{$type}:focus {
      background: #{$color};
      border: 1px solid #{$color};
      color: #fff;
    }
  }
  .icon {
  }
  .icon + span {
    padding-left: 4px;
  }
  &-left {
    svg {
      order: 1;
    }
    span {
      order: 2;
    }
  }
  &-right {
    svg {
      order: 2;
    }
    span {
      order: 1;
    }
    .icon + span {
      margin-left: 0px;
      margin-right: 4px;
    }
  }
  &[disabled] {
    cursor: not-allowed;
  }
}
</style>