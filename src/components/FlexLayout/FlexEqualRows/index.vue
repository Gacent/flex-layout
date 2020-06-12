<template>
  <div class="flex-equal-rows">
    <div
      class="flex-equal-rows-box"
      :style="`width: calc(100% + ${_px2rem(gutter*2)});height: calc(100% + ${_px2rem(gutter*2)});margin: -${_px2rem(gutter)};`"
    >
      <template v-for="item in rowNum">
        <div
          :key="'equalRowsItem_'+ item"
          :style="`width: calc(100% / ${columns});height: calc(100% / ${row})`"
          class="flex-equal-rows-item"
        >
          <div class="flex-equal-rows-content" :style="{padding: _px2rem(gutter)}">
            <slot :name="`${name}${item}`" />
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import { px2rem } from '@/utils/isRem'

export default {
  name: 'FlexEqualRows',
  components: {},
  filters: {},
  mixins: [],
  props: {
    name: {
      type: String,
      default() {
        return 'equalRows'
      }
    },
    row: {
      type: Number,
      default() {
        return 1
      }
    },
    columns: {
      type: Number,
      default() {
        return 1
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
    return {
      rowNum: 1,
      styleObject: {}
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
    this.rowNum = parseInt(this.row * this.columns)
  },
  methods: {
    _px2rem(px) {
      return px2rem(px)
    }
  }
}
</script>

<style lang="scss" scoped>
.flex-equal-rows {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  .flex-equal-rows-box {
    position: relative;
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: flex-start;
    flex: 1;
    width: 100%;
    height: 100%;
  }
  .flex-equal-rows-item {
    position: relative;
    flex: 0 0 auto;
    overflow: hidden;
  }
  .flex-equal-rows-content {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
}
</style>
