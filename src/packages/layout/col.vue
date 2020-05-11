<template>
  <div class="li-col" :class="colClass" :style="colStyle">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "li-col",
  data() {
    return { gutter: 0 };
  },
  props: {
    span: {
      type: Number,
      default: 12
    },
    offset: {
      type: Number,
      default: null
    },
    xs: [Number, Object],
    sm: [Number, Object],
    md: [Number, Object],
    lg: [Number, Object],
    xl: [Number, Object]
  },
  computed: {
    colClass() {
      // 统一管理我们的样式
      let classes = [];
      classes.push(`li-col-${this.span}`);
      if (this.offset) {
        // 说明用户传入了偏移量
        classes.push(`li-col-offset-${this.offset}`);
      }
      ["xs", "sm", "md", "lg", "xl"].forEach(type => {
        if (typeof this[type] === "object") {
          let { span, offset } = this[type];
          span && classes.push(`li-col-${type}-${span}`); // li-col-xs-1
          offset && classes.push(`li-col-${type}-offset-${offset}`); // li-col-xs-offset-1
        } else {
          this[type] && classes.push(`li-col-${type}-${this[type]}`); // li-col-xs-1
        }
      });
      return classes;
    },
    colStyle() {
      let style = {};
      if (this.gutter) {
        style = {
          ...style,
          paddingLeft: this.gutter / 2 + "px",
          paddingRight: this.gutter / 2 + "px"
        };
      }
      return style;
    }
  }
};
</script>

<style lang="scss">
@import '@/styles/var-li.scss';
// 需要通过循环12 来创造出不同的宽度
@for $i from 1 through 12 {
  .li-col-#{$i} {
    width: $i/12 * 100%;
  }
  .li-col-offset-#{$i} {
    margin-left: $i/12 * 100%;
  }
}

@include res(xs) {
  @for $i from 1 through 12 {
    .li-col-xs-#{$i} {
      width: $i/12 * 100%;
    }
    .li-col-xs-offset-#{$i} {
      margin-left: $i/12 * 100%;
    }
  }
}
@include res(sm) {
  @for $i from 1 through 12 {
    .li-col-sm-#{$i} {
      width: $i/12 * 100%;
    }
    .li-col-sm-offset-#{$i} {
      margin-left: $i/12 * 100%;
    }
  }
}
@include res(md) {
  @for $i from 1 through 12 {
    .li-col-md-#{$i} {
      width: $i/12 * 100%;
    }
    .li-col-md-offset-#{$i} {
      margin-left: $i/12 * 100%;
    }
  }
}
@include res(lg) {
  @for $i from 1 through 12 {
    .li-col-lg-#{$i} {
      width: $i/12 * 100%;
    }
    .li-col-lg-offset-#{$i} {
      margin-left: $i/12 * 100%;
    }
  }
}
@include res(xl) {
  @for $i from 1 through 12 {
    .li-col-xl-#{$i} {
      width: $i/12 * 100%;
    }
    .li-col-xl-offset-#{$i} {
      margin-left: $i/12 * 100%;
    }
  }
}
</style>