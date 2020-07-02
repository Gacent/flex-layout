<template>
  <div id="app">
    <!-- <flex-full-row name="flexRow" :item="[{flex:1},{flex:2}]" :gutter="10">
      <template v-slot:flexRow1>
        123
      </template>
      <template v-slot:flexRow2>
        123
      </template>
    </flex-full-row> -->
    <!-- <flex-equal-rows name="flexRow" :row="2" :gutter="10">
      <template v-slot:flexRow1>
        123
      </template>
      <template v-slot:flexRow2>
        123
      </template>
      <template v-slot:flexRow3>
        123
      </template>
      <template v-slot:flexRow4>
        123
      </template>
    </flex-equal-rows> -->
    <ZFlexLayout :layout-obj="ary" />
  </div>
</template>

<script>
import wai from '@/testComponent/wai.vue'
import ZFlexLayout from '@/components/layout'
export default {
  name: 'App',
  components: {
    ZFlexLayout
  },
  data() {
    return {
      ary: {
        direction: 'column',
        item: [
          { flex: 1, components: wai },
          { flex: 1, components: wai },
          {
            flex: 2,
            layoutObj: {
              direction: 'row',
              item: [
                { flex: 1, components: wai },
                { flex: 1, components: wai },
                { flex: 2,
                  layoutObj: {
                    direction: 'column',
                    gutter: 10,
                    name: 'wo',
                    item: [{ flex: 1, components: wai }, { flex: 1, components: wai }]
                  }
                }
              ],
              name: 'flexWo',
              gutter: 10
            }
          }
        ],
        name: 'flexFull',
        gutter: 10
      }
    }
  },
  created() {
  },
  mounted() {

  }
}
</script>

<style lang="scss">
body,html{
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
}
#app{
  height: 100%;
  width: 100%;
}
</style>
