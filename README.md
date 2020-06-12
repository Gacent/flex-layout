# flex-custom-layout
> flex弹性布局快捷方式
> 可以配合amfe-flexible使用

## usage
### install
`npm i flex-custom-layout -S`

### use
```javascript
import flexlayout from 'flex-custom-layout'
Vue.use(flexlayout,{
  isRem: true,  // 是否使用rem单位，默认是true
  htsize: '192' // Rem情况下必填，表示设计图尺寸/10，1920-->192   375-->37.5
})
```

### component
```html
<!--行排列-->
<flex-full-row name="flexRow" :item="[{flex:1},{flex:2}]" :gutter="10">
  <template v-slot:flexRow1>
    123
  </template>
  <template v-slot:flexRow2>
    123
  </template>
</flex-full-row>
<!--
  name：必填，后面v-slot需要根据此name+1
  item：必填，表示每个<template>的占比
  gutter：选填，表示块之间的间距
-->
```
```html
<!--列排列-->
<flex-full-column name="flexcolumn" :item="[{flex:1},{flex:2}]" :gutter="10">
  <template v-slot:flexcolumn1>
    123
  </template>
  <template v-slot:flexcolumn2>
    123
  </template>
</flex-full-column>
<!--
  name：必填，后面v-slot需要根据此name+1
  item：必填，表示每个<template>的占比
  gutter：选填，表示块之间的间距
-->
```
```html
<!--均等排列-->
<flex-equal-rows name="flexRow" :row="2" :columns="2" :gutter="10">
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
<!--
  name：必填，后面v-slot需要根据此name+1
  row：选填，表示多少行，默认1
  columns：选填，表示多少列，默认1
  gutter：选填，表示块之间的间距
-->
```

## 版本
### 0.1.0
1. 发布
### 0.1.1
1. 由于包名被占用，所以修改包名为flex-custom-layout