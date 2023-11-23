<template>
  <el-dropdown ref="dropdown" trigger="click" hide-on-click>
    <el-input
      v-model="iconModel"
      :clearable="clearable"
      :placeholder="$attrs.placeholder || '请选择图标'"
    >
      <!-- 图标展示 -->
      <template :slot="showSlot" v-if="iconModel">
        <i
          :class="[iconModel, isElemenUiIcon(iconModel) ? '' : 'iconfont']"
          class="cl_icon_select"
        ></i>
      </template>
    </el-input>
    <el-dropdown-menu slot="dropdown" class="icon_box">
      <ul :style="{ width: selectWidth }">
        <li
          v-for="iconName in icons"
          :key="iconName"
          @click="iconSelected(iconName)"
          :class="{ active: iconName === iconModel }"
        >
          <i
            :class="[iconName, isElemenUiIcon(iconName) ? '' : 'iconfont']"
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
      default: "elemet-ui",
    },
    showSlot: {
      type: [String, Boolean],
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
    clearable() {
      return this.$attrs.clearable === false ? false : true
    },
    iconModel: {
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
    // 判断是否是elementui的icon
    isElemenUiIcon(iconName) {
      console.log(iconName, "iconName")
      return iconName.slice(0, 7) === "el-icon"
    },
    iconSelected(icon) {
      this.iconModel = icon
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
    iconList: {
      deep: true,
      immediate: true,
      handler(newV) {
        if (newV.length > 0) {
          this.icons = newV
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
/deep/ .el-input__prefix {
  left: 0;
}
/deep/ .el-input__prefix,
/deep/ .el-input__suffix {
  width: 30px;
  i:not(.el-input__clear) {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  .el-input__clear {
    line-height: 3 !important;
  }
}
.el-input:hover /deep/ .el-input__suffix .cl_icon_select {
  display: none;
}
</style>
