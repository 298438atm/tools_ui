<template>
  <div class="layout">
    <el-header><Header></Header></el-header>
    <el-container class="content_box" ref="containerRef">
      <el-aside ref="asideRef">
        <Menu></Menu>
      </el-aside>
      <el-main>
        <el-scrollbar>
          <router-view class="router_view"></router-view>
        </el-scrollbar>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Menu from './components/Menu.vue'
export default {
  name: 'Layout',
  components: {
    Header,
    Menu
  },
  mounted() {
    this.layoutInit()
    window.addEventListener('resize', this.layoutInit)
  },
  methods: {
    layoutInit() {
      const containerRef = this.$refs.containerRef.$el
      if (containerRef) {
        const marginVal = (document.body.offsetWidth - 1140) / 2
        containerRef.style.margin = `0 ${marginVal}px`
        this.$refs.asideRef.$el.style.left = `${marginVal}px`
      }
    }
  }
}
</script>

<style lang="less" scoped>
.el-header {
  padding: 0;
}
.content_box {
  position: relative;
  margin: auto;
  width: 1140px;
  .el-aside {
    position: fixed;
    padding: 20px 0;
  }
  .el-main {
    padding-left: 300px;
  }
}
.sidebar-wrapper .el-scrollbar__wrap {
  overflow-x: hidden;
}
.is-horizontal {
  display: none;
}

.router_view {
  max-height: calc(100vh - 150px);
}
</style>
