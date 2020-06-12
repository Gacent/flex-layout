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
    <flex-equal-rows name="flexRow" :row="2" :gutter="10">
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
    </flex-equal-rows>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  data() {
    return {
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
