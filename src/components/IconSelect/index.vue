<template>
  <el-dropdown
    ref="dropdown"
    :placement="placement"
    trigger="click"
    :hide-on-click="hideOnClick"
    @visible-change="visibleChange"
    :style="`--color: ${color}`"
  >
    <el-input
      v-model="iconModel"
      ref="input"
      :placeholder="placeholder"
      :clearable="clearable"
      :disabled="disabled"
      :size="size"
      :readonly="false"
      @focus="inputFocus"
      @clear="clear"
      @input="inputIcon"
      v-on="$listeners"
    >
      <!-- 图标展示 -->
      <template :slot="showSlot" v-if="iconModel && icons.includes(iconModel)">
        <i
          :class="[iconModel, isElemenUiIcon(iconModel) ? '' : 'iconfont']"
          class="cl_icon_select"
        ></i>
      </template>
    </el-input>
    <el-dropdown-menu slot="dropdown" ref="dropdownMenu">
      <el-scrollbar>
        <ul
          class="icon_ul"
          :style="{ maxWidth: maxWidth, maxHeight: maxHeight }"
        >
          <li
            v-for="iconName in iconFilterList"
            :key="iconName"
            @click="iconSelected(iconName)"
            :class="{ active: iconName === iconModel }"
          >
            <i
              :class="[iconName, isElemenUiIcon(iconName) ? '' : 'iconfont']"
            ></i>
          </li>
        </ul>
      </el-scrollbar>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
import { dispatch } from '@/utils/dispatch.js'
import iconData from './iconData.js'
export default {
  name: 'ClIconSelect',
  npmUp: true,
  props: {
    modelValue: {
      type: String,
      default: ''
    },
    iconList: {
      type: Array,
      default: () => []
    },
    showSlot: {
      type: [String, Boolean],
      default: 'prepend'
    },
    // 下拉最大宽度
    maxWidth: {
      type: String,
      default: '500px'
    },
    // 最大高度
    maxHeight: {
      type: String,
      default: '300px'
    },
    // 图标颜色
    color: {
      type: String,
      default: '#000'
    },
    hoverColor: {
      type: String,
      default: '#409eff'
    },
    activeColor: {
      type: String,
      default: '#fff'
    },
    activeBgkColor: {
      type: String,
      default: '#409eff'
    },
    hoverBgkColor: {
      type: String,
      default: '#fff'
    },
    filterable: {
      type: Boolean,
      default: false
    },
    // input属性
    selectonly: {
      type: Boolean,
      default: true
    },
    placeholder: {
      type: String,
      default: '请选择图标'
    },
    clearable: {
      type: Boolean,
      default: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: 'medium'
    },
    placement: {
      type: String,
      default: 'bottom-end'
    },
    hideOnClick: {
      type: Boolean,
      default: true
    }
  },
  model: {
    prop: 'modelValue',
    event: 'updateModelValue'
  },
  computed: {
    iconModel: {
      get() {
        return this.modelValue
      },
      set(newV) {
        this.$emit('updateModelValue', newV)
      }
    },
    iconFilterList() {
      if (this.filterable && this.iconModel && !this.selectonly) {
        return this.icons.filter((item) => item.includes(this.iconModel))
      } else {
        return this.icons
      }
    }
  },
  mounted() {
    // 如是自定义图标并且有非elementui图标，则认为包含iconfont图标，进行字体初始化
    if (
      this.iconList.length > 0 &&
      this.iconList.some((item) => item.includes('el-icon-'))
    ) {
      this.initIconfont()
    }
    dispatch(this, 'ClIconSelect')
  },
  data() {
    return {
      icons: iconData
    }
  },
  methods: {
    // iconfont的fontclass引入，只有在使用图标的时候才会去请求字体
    // 所以提前定义i标签优先拿到字体，避免图标闪烁
    initIconfont() {
      let iEle = document.createElement('i')
      iEle.classList.add('iconfont')
      document.body.append(iEle)
      const timer = setTimeout(() => {
        iEle.remove()
        clearTimeout(timer)
      }, 100)
    },
    inputFocus() {
      if (this.selectonly) {
        this.$refs.input.blur()
      }
    },
    // 判断是否是elementui的icon
    isElemenUiIcon(iconName) {
      return iconName.slice(0, 7) === 'el-icon'
    },
    // 图标选中
    iconSelected(icon = undefined) {
      if (icon) {
        this.$emit('selected', icon)
      }
      this.iconModel = icon
      if (this.hideOnClick) {
        this.$refs.dropdown.visible = false
      }
    },
    visibleChange(isShow) {
      this.$emit('visible-change', isShow)
      if (isShow) {
        this.$nextTick(() => {
          this.iconColorInit()
        })
      }
    },
    // 搜索后重新布局
    inputIcon() {
      if (this.filterable && !this.selectonly) {
        this.$refs.dropdownMenu.createPopper()
      }
    },
    // 图标颜色定义
    iconColorInit() {
      const dropdownMenuEle = this.$refs.dropdown.popperElm
      if (!dropdownMenuEle) return false
      dropdownMenuEle.style = `--color: ${this.color};
      --activeColor: ${this.activeColor};
      --hoverColor: ${this.hoverColor};
      --activeBgkColor: ${this.activeBgkColor};
      --hoverBgkColor: ${this.hoverBgkColor}`
    },
    clear() {
      setTimeout(() => {
        this.$refs.dropdown.visible = false
      }, 1)
    }
  },
  watch: {
    fontClassUrl: {
      immediate: true,
      handler(val) {
        if (val) {
          this.$nextTick(() => {
            // this.linkEleToggle("create")
          })
        }
      }
    },
    iconList: {
      deep: true,
      immediate: true,
      handler(newV) {
        if (newV.length > 0) {
          this.icons = newV
        }
      }
    }
  }
}
</script>
<style lang="less" scoped>
.icon_ul {
  margin: 0;
  padding: 0 5px;
  max-height: 300px;
  display: flex;
  flex-wrap: wrap;
  list-style: none;

  li {
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--color);
  }
  li:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
    cursor: pointer;
    color: var(--hoverColor) !important;
    background-color: var(--hoverBgkColor);
  }
  .active {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
    background-color: var(--activeBgkColor) !important;
    color: var(--activeColor) !important;
  }
  .active:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
    background-color: #409eff;
    color: #fff !important;
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
    position: absolute;
    top: 55%;
    transform: translate(-50%, -50%);
    left: 50%;
  }
}
.el-input:hover /deep/ .el-input__suffix .cl_icon_select {
  display: none;
}
.cl_icon_select {
  color: var(--color) !important;
}
</style>
