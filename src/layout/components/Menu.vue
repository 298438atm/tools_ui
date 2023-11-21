<template>
  <div class="menu_box">
    <ul>
      <li v-for="item in menuList" :key="item.path">
        <span
          :class="$route.path === item.path ? 'active' : ''"
          @click="$router.push(item.path)"
          >{{ item.meta.title }}</span
        >
      </li>
    </ul>
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
  created() {
    console.log(this.$route)
  },
}
</script>

<style lang="less" scoped>
.menu_box {
  margin-top: 100px;
  display: inline-block;
  width: 230px;
  ul {
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
