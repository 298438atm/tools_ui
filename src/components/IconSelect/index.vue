<template>
  <el-dropdown ref="dropdown" trigger="click" hide-on-click>
    <el-input
      v-model="localIcon"
      clearable
      :placeholder="$attrs.placeholder || '请选择图标'"
    >
      <!-- 图标展示 -->
      <template
        :slot="showSlot"
        v-if="['prepend', 'append'].includes(showSlot) && localIcon && iconShow"
      >
        <i :class="localIcon"></i>
      </template>
    </el-input>
    <el-dropdown-menu slot="dropdown" class="icon_box">
      <ul :style="{ width: selectWidth }">
        <li
          v-for="item in icons"
          :key="item.icon"
          @click="iconSelected(item.icon)"
          :class="{ active: item.icon === localIcon }"
        >
          <i
            :class="[item.icon, iconType === 'iconfont' ? 'fonticon' : '']"
          ></i>
        </li>
      </ul>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
import iconData from "./iconData.js"
export default {
  name: "ClIconSelect",
  npmUp: true,
  props: {
    modelValue: {
      type: String,
      default: "",
    },
    iconList: {
      type: Array,
      default: () => [],
    },
    // 图标类型
    iconType: {
      type: String,
      default: "elemetUi",
    },
    iconShow: {
      type: Boolean,
      default: true,
    },
    // 图标显示方向
    showSlot: {
      type: String,
      default: "prepend",
    },
    fontClassUrlType: {
      type: String,
      default: "url",
    },
    fontClassUrl: {
      type: String,
      default: "http://at.alicdn.com/t/c/font_4340062_umkhqv5at8.css",
    },
    // 下拉宽度
    selectWidth: {
      type: String,
      default: "500px",
    },
  },
  model: {
    prop: "modelValue",
    event: "updateModelValue",
  },
  computed: {
    localIcon: {
      get() {
        return this.modelValue
      },
      set(newV) {
        this.$emit("updateModelValue", newV)
      },
    },
  },
  data() {
    return {
      icons: iconData,
    }
  },
  destroyed() {
    this.linkEleToggle()
  },
  methods: {
    iconSelected(icon) {
      this.localIcon = icon
      this.$refs.dropdown.visible = false
    },
    linkEleToggle(type) {
      if (type === "create") {
        const link = document.createElement("link")
        link.classList.add("IconSelect")
        link.rel = "stylesheet"
        link.href = this.fontClassUrl
        document.head.appendChild(link)
      } else {
        document.head.querySelector(".IconSelect")?.remove()
      }
    },
  },
  watch: {
    fontClassUrl: {
      immediate: true,
      handler(val) {
        if (val) {
          this.$nextTick(() => {
            this.linkEleToggle("create")
          })
        }
      },
    },
  },
}
</script>

<style lang="less" scoped>
.icon_box {
  max-height: 300px;
  overflow-y: scroll;
  overflow-x: hidden;
}
ul {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(50px, 1fr));
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  li:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
    cursor: pointer;
    color: #409eff;
  }
  .active {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
    background-color: #409eff;
    color: #fff;
  }
  .active:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
    background-color: #409eff;
    color: #fff;
  }
}
</style>
