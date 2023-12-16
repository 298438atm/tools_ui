<template>
  <div>
    <el-scrollbar>
      <h2>何为tools_ui</h2>
      <p>
        这是一个依托<el-link
          type="primary"
          target="_blank"
          href="https://element.eleme.cn/#/zh-CN/component/layout"
          >element-ui</el-link
        >
        +
        <el-link type="primary" target="_blank" href="https://v2.cn.vuejs.org/"
          >vue</el-link
        >
        构建的一个ui组件库，它最大程度保留了<code>elemen-ui</code>原有的方法和属性，并在此基础上进行功能拓展！如果您经常使用<code>element-ui</code>，
        那么tools_ui对您来说也会得心应手。
      </p>
      <h2>安装与使用</h2>
      <pre>npm i @code_life/tools_ui</pre>
      <h4>完整引入</h4>
      <pre>{{ code }} </pre>
      <h4>按需引入</h4>
      <pre>{{ code2 }} </pre>
      <h2>使用须知</h2>
      <p>
        很多组件整体依托的是原<code>element-ui</code>改造而成，那么他会有一个基础原组件，
        例如<code>ClMuchSelect</code>的基础原组件就是<code>el-select</code>
        当你直接使用<code>ref</code>绑定组件时，可以直接拿到基础原组件的实例对象。
        基础原组件的属性和方法也会最大程度保留到现组件当中。若无基础原组件，
        则<code>ref</code>直接获取到当前组件实例
      </p>
      <pre>{{ code3 }}</pre>
      <p>
        很多时候，我们会将<code>element-ui</code>里面的一些组件的默认值修改，
        例如<code>ClMuchSelect</code>组件里会默认开启可搜索可清除等功能，
        如不需要可按<code>element-ui</code>文档进行关闭
      </p>
      <p>
        该文档展示的属性与方法大都与<code>element-ui</code>一致，
        有差异的属性或方法会以红色字体展示。
      </p>

      <h2>注意</h2>
      <p>
        该ui库<code>element-ui</code>版本为2.15.14，<code>vue</code>版本为2.6.14
      </p>
      <h2>联系作者</h2>
      <p>
        目前该库还不完善，若在使用过程中发现问题可第一事件联系我们，或者有更好的形式以及优化也可以交流！
      </p>
      <img
        src="@/assets/image/wx_qrcode.jpg"
        alt="联系方式17623643348"
        width="150"
      />
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
      code3:
        `
<template>
  <CLMuchSelect ref="muchSelectRef"></CLMuchSelect>
</template>

<script>
export default {
  mounted() {
    conso.log(this.$refs.muchSelectRef)  //获取到的将是el-select的实例
  }
}
` +
        "<" +
        "/script>",
    }
  },
}
</script>

<style lang="less" scoped></style>
