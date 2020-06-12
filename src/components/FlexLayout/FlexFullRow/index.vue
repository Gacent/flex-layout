<template>
  <div class="flex-full-row">
    <div class="flex-full-box">
      <template v-for="(val,index) in item">
        <div
          :key="name + '_'+index"
          :style="itemStyleObject(val)"
          class="flex-full-item"
        >
          <div class="flex-full-content">
            <slot :name="`${name}${index+1}`" />
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import { px2rem } from '@/utils/isRem'
export default {
  name: 'FlexFullRow',
  components: {},
  filters: {},
  mixins: [],
  props: {
    name: {
      type: String,
      default() {
        return 'flexFull'
      }
    },
    item: {
      type: Array,
      default() {
        return [
          {
            flex: 1
          }
        ]
      }
    },
    gutter: {
      type: Number,
      default() {
        return 0
      }
    }
  },
  data() {
    return {}
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    boxStyleObject() {
      return {
        width: `calc(100% + ${px2rem(this.gutter * 2)})`,
        margin: `0 -${px2rem(this.gutter)}`
      }
    },
    itemStyleObject(val) {
      const styleObject = {
        // margin: `0 ${px2rem(this.gutter)}`
        marginLeft: `${px2rem(this.gutter)}`
      }
      val.width ? styleObject.width = val.width : styleObject.flex = val.flex
      return styleObject
    }
  }
}
</script>

<style lang="scss" scoped>
.flex-full-row {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  .flex-full-box {
    position: relative;
    display: flex;
    flex-flow: row nowrap;
    flex: 1;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .flex-full-item {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    &:first-child {
      margin-left: 0 !important;
    }
  }
  .flex-full-content {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
}
</style>
