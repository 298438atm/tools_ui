<template>
  <el-card>
    <template #header>
      <slot></slot>
    </template>
    <el-collapse-transition>
      <div class="code_box" v-show="!hide">
        <div class="code_text"><slot name="codeText"></slot></div>
        <div class="code_show">
          <el-button
            class="copy_btn"
            size="mini"
            type="primary"
            plain
            @click="copyCode"
            >复制</el-button
          >
          <pre
            class="language-html"
          ><code class="language-html" ref="codeRefs"><slot name="codeShow"></slot></code></pre>
        </div>
      </div>
    </el-collapse-transition>
    <div
      v-if="$slots.codeText || $slots.codeShow"
      :class="hide ? 'active toggle' : 'toggle'"
      @click="hide = !hide"
    >
      <i :class="hide ? 'el-icon-caret-bottom' : 'el-icon-caret-top'"></i>
      {{ hide ? '显示代码' : '隐藏代码' }}
    </div>
  </el-card>
</template>

<script>
import { copyData } from '../../utils/commonFun'
export default {
  name: 'CodeTemplate',
  props: {
    hideToggleBtn: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      hide: true
    }
  },
  methods: {
    copyCode() {
      const codeText = this.$refs.codeRefs.innerText
      copyData(codeText)
    }
  },
  watch: {
    hide(flag) {
      if (!flag) {
        window.Prism.highlightAll()
      }
    }
  }
}
</script>

<style lang="less" scoped>
/deep/ .el-card__body {
  padding: 0;
  font-size: 14px;
  background-color: #fafafa;
  .code_box {
    .code_text {
      padding: 15px 20px;
      background-color: #fff;
      color: #5e6d82;
    }
    .code_show {
      position: relative;
      padding: 0 20px;
      color: #5e6d82;
      .copy_btn {
        position: absolute;
        top: 5px;
        right: 25px;
      }
    }
  }
  .toggle {
    height: 45px;
    line-height: 45px;
    text-align: center;
    font-size: 12px;
    border-top: 1px solid #eaeefb;
    cursor: pointer;
  }
  .toggle:hover {
    color: #409eff;
  }
}
</style>
