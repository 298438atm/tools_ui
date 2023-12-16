export const code1 =
  `
<template>
  <ClIconSelect v-model="val"></ClIconSelect>
</template>

<script>
export default {
  data() {
    return {
      val: undefined,
    }
  }
}
` +
  "<" +
  "/script>"

export const code2 =
  `
<template>
  <ClIconSelect v-model="val" :iconList="iconList"></ClIconSelect>
</template>

<script>
export default {
  data() {
    return {
      val: undefined,
      iconList: ["icon-jiagongchang", "icon-nongyerongdan", "icon-guangfuban"]
    }
  }
}
` +
  "<" +
  `/script>
  <style lang="less" scoped>
  @import "../../assets/css/iconfont.css"
  </style>
  //若是只想局部引入也可以添加如下方式
  //<style src="../../assets/css/iconfont.css"></style>
  `
