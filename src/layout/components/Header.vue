<template>
  <div class="header_box">
    <span class="left_text">tools_ui</span>
    <span class="center_text"
      >这是一个解决基本的element-ui不满足我们业务需求的一个ui组件库。</span
    >
    <span class="right_text">来自code_life团队</span>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="less" scoped>
.header_box {
  position: fixed;
  z-index: 999;
  padding: 10px 20px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  background-color: #409eff;
  width: 100%;
  height: 60px;
}
.left_text {
  font: 24px fantasy;
}
.center_text {
  font: 16px fantasy;
}
</style>
