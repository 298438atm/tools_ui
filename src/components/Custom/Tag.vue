<template>
  <el-tag size="mini" effect="plain">
    <slot></slot>
  </el-tag>
</template>

<script>
export default {
  name: 'Tag'
}
</script>
<style lang="less" scoped>
.el-tag {
  margin: 0 5px;
}
</style>
