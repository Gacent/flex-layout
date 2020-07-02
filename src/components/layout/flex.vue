<template>
  <div class="z-flexWrap" :class="`z-flex-${direction}`">
    <div v-for="(val,index) in item" :key="name+'_'+index" class="z-flex-item" :style="[getGutter,getStyle(val)]">
      <slot :name="`${name}${index+1}`" />
    </div>
  </div>
</template>

<script>
import { px2rem } from '@/utils/isRem'

export default {
  name: 'ZFlex',
  props: {
    // 方向，默认row
    direction: {
      type: String,
      default: 'row'
    },
    // 多少个项（包括flex(string,number)，width(number)，height(number)）
    item: {
      type: Array,
      default: null
    },
    // 用于插槽template
    name: {
      type: String,
      default: null
    },
    // 每个项的间隔
    gutter: {
      type: Number,
      default: 0
    }
  },
  computed: {
    getGutter() {
      var gutter
      if (this.direction === 'row') {
        gutter = {
          marginLeft: px2rem(this.gutter)
        }
      } else {
        gutter = {
          marginTop: px2rem(this.gutter)
        }
      }
      return gutter
    },
    getStyle() {
      return (item) => {
        // 优先flex，后height/width
        if (item.flex) {
          return {
            flex: item.flex
          }
        } else {
          return {
            height: item.height ? px2rem(item.height) : 'auto',
            width: item.width ? px2rem(item.width) : 'auto'
          }
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.z-flexWrap{
  display: flex;
  width: 100%;
  height: 100%;
}
.z-flex-row{
  flex-direction: row;
}
.z-flex-column{
  flex-direction: column;
}
.z-flex-item{
  &:first-child{
    margin-left: 0 !important;
    margin-top: 0 !important;
  }
}
</style>
