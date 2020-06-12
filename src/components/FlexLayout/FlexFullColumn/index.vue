<template>
  <div class="flex-full-column">
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
  name: 'FlexFullColumn',
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
        height: `calc(100% + ${px2rem(this.gutter * 2)})`,
        margin: `-${px2rem(this.gutter)} 0`
      }
    },
    itemStyleObject(val) {
      const styleObject = {
        // margin: `${px2rem(this.gutter)} 0`
        marginTop: `${px2rem(this.gutter)}`
      }
      val.height ? styleObject.height = val.height : styleObject.flex = val.flex
      return styleObject
    }
  }
}
</script>

<style lang="scss" scoped>
.flex-full-column {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  .flex-full-box {
    position: relative;
    display: flex;
    flex-flow: column nowrap;
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
      margin-top: 0 !important;
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
