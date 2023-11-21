<template>
  <div class="layout">
    <el-header><Header></Header></el-header>
    <el-container class="content_box">
      <el-aside><Menu></Menu></el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import Header from "./components/Header.vue"
import Menu from "./components/Menu.vue"
export default {
  name: "Layout",
  components: {
    Header,
    Menu,
  },
}
</script>

<style lang="less" scoped>
.el-aside {
  // position: absolute;
}
</style>

<style lang="less" scoped>
.el-header {
  padding: 0;
}
.content_box {
  display: flex;
  justify-content: center;
  margin: auto;
  width: 1200px;
}
</style>
