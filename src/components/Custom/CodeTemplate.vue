<template>
  <el-card>
    <template #header>
      <slot name="header"></slot>
    </template>
    <el-collapse-transition>
      <div class="code_box" v-show="!hide">
        <div class="code_text"><slot name="codeText"></slot></div>
        <div class="code_show"><slot name="codeShow"></slot></div>
      </div>
    </el-collapse-transition>
    <div :class="hide ? 'active toggle' : 'toggle'" @click="hide = !hide">
      <i :class="hide ? 'el-icon-caret-bottom' : 'el-icon-caret-top'"></i>
      {{ hide ? "显示代码" : "隐藏代码" }}
    </div>
  </el-card>
</template>

<script>
export default {
  name: "CodeTemplate",
  data() {
    return {
      hide: true,
    }
  },
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
      padding: 0 20px;
      color: #5e6d82;
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
