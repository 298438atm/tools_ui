<template>
  <div>
    <h3>IconSelect</h3>
    <p>
      在项目中很多时候我们都需要用到图标，但遗憾的是element-ui并没有提供一个可供选择的图标组件
      于是我们创造出IconSelect可以让您自由的选择图标
    </p>
    <CodeTemplate>
      <ClIconSelect v-model="val"></ClIconSelect>
      <template #codeText>我们提供了280个element-ui原有图标供您选择</template>
    </CodeTemplate>
  </div>
</template>

<script>
export default {
  name: "IconSelectDoc",
  data() {
    return {
      val: null,
    }
  },
}
</script>

<style lang="less" scoped></style>
