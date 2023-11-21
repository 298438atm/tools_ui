<template>
  <div>
    <el-scrollbar>
      <h2>何为tools_ui</h2>
      <p>
        这是一个依托<code>element-ui</code> +
        <code>vue</code
        >构建的一个ui组件库，它最大程度保留了<code>elemen-ui</code>原有的方法和属性，并在此基础上进行功能拓展！如果您经常使用<code>element-ui</code>，
        那么tools_ui对您来说也会得心应手。
      </p>
      <h2>安装与使用</h2>
      <pre>npm i @code_life/tools_ui</pre>
      <h4>完整引入</h4>
      <pre>{{ code }} </pre>
      <h4>按需引入</h4>
      <pre>{{ code2 }} </pre>
      <h2>提醒</h2>
      <p>
        该文档并不会显示组件的所有属性与方法，只展示部分专属或与<code>element-ui</code>有差异（有差异的属性方法会以红色字体展示）的属性或者方法，若有<code>element-ui</code>的属性或者方法不兼容也会在文档底部提醒。
        <br />凡没有展示的<code>element-ui</code>属性或方法则表示该组件皆支持，可直接参考原<code>element-ui</code>文档使用。
      </p>
      <h2>注意</h2>
      <p>
        该ui库<code>element-ui</code>版本为2.15.14，<code>vue</code>版本为2.6.14
      </p>
    </el-scrollbar>
  </div>
</template>

<script>
export default {
  name: "Introduction",
  data() {
    return {
      code: `
import tools_ui from "@code_life/tools_ui"
Vue.use(tools_ui)
      `,
      code2: `
import tools_ui from "@code_life/tools_ui"
Vue.use(tools_ui.MuchSelect)
      `,
    }
  },
}
</script>

<style lang="less" scoped></style>
