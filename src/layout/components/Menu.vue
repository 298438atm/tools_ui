<template>
  <div class="menu_box">
    <el-scrollbar>
      <ul>
        <li v-for="item in menuList" :key="item.path">
          <span
            :class="$route.path === item.path ? 'active' : ''"
            @click="$router.push(item.path)"
            >{{ item.meta.title }}</span
          >
        </li>
      </ul>
    </el-scrollbar>
  </div>
</template>

<script>
export default {
  name: "Menu",
  data() {
    return {}
  },
  computed: {
    menuList() {
      return this.$router.options.routes[0].children
    },
  },
  created() {},
}
</script>

<style lang="less" scoped>
.menu_box {
  margin-top: 20px;
  display: inline-block;
  width: 230px;
  ul {
    margin: 0;
    max-height: calc(100vh - 120px);
    font-size: 14px;
    cursor: pointer;
    list-style: none;
    li {
      height: 40px;
      line-height: 40px;
      span:hover {
        color: #409eff;
      }
      .active {
        color: #409eff;
        font-weight: bold;
      }
    }
  }
}
</style>
