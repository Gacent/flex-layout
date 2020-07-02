<template>
  <flex v-if="layoutObj" :direction="layoutObj.direction" :name="layoutObj.name" :item="layoutObj.item" :gutter="layoutObj.gutter">
    <template v-for="(item,index) in layoutObj.item" :slot="`${layoutObj.name}${index+1}`">
      <template v-if="item.components">
        <!-- 展示components -->
        <component :is="item.components" :key="`${layoutObj.name}${index+1}`" />
      </template>
      <template v-else>
        <!-- 递归 -->
        <ZFlexLayout :key="`${layoutObj.name}${index+1}`" :layout-obj="item.layoutObj" />
      </template>
    </template>
  </flex>
</template>

<script>
import flex from './flex.vue'
export default {
  name: 'ZFlexLayout',
  components: {
    flex
  },
  props: {
    layoutObj: {
      type: Object,
      default: null
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
