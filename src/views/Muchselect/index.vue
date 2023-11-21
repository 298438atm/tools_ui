<template>
  <div class="muchSelect_box">
    <h3>MuchSelect</h3>
    <p>
      <el-link
        href="https://element.eleme.cn/#/zh-CN/component/select"
        target="_blank"
        type="primary"
        >el-select</el-link
      >是一个使用率极高的表单组件，然而当我们想要使用该组件进行大量数据渲染的时候，他就有些不堪负重了！
    </p>
    <p>
      我们特地提供了<code>MuchSelect</code>组件来支持庞大数据量的支持。他的原理其实是将数据进行分批渲染，每次滑到底部再加载指定条数。
    </p>
    <CodeTemplate>
      <template #header>
        <ClMuchSelect
          v-model="val1"
          :showListNum="50"
          :loadListNum="30"
          :options="options"
          ref="ClMuchSelect"
        >
        </ClMuchSelect>
      </template>
      <template #codeText>
        <span
          >这是一个拥有十万条数据的下拉框，通过<code>options</code>设置下拉数据。<code>showListNum</code>设置初次加载条数，<code>loadListNum</code>设置往后每次加载条数。默认可搜索，可设置<code>filterable</code>为false取消搜索</span
        >
      </template>
      <template #codeShow>
        <pre>
          {{ code1 }}
        </pre>
      </template>
    </CodeTemplate>
    <CustomAttrTable :tableData="tableData"></CustomAttrTable>
    <h4>不支持的属性</h4>
    <el-tag type="danger">该组件暂不支持绑定对象类型</el-tag>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  data() {
    return {
      val1: undefined,
      options: [],
      tableData: [
        {
          params: "v-model",
          des: "绑定的值",
          type: "array/string/number/boolean",
          select: "—",
          default: "—",
        },
        {
          params: "options",
          des: "下拉列表的值",
          type: "array",
          select: "—",
          default: "[]",
        },
        {
          params: "showListNum",
          des: "第一次展示的条数",
          type: "number",
          select: "—",
          default: "20",
        },
        {
          params: "loadListNum",
          des: "一次加载的条数",
          type: "number",
          select: "—",
          default: "20",
        },
        {
          params: "optionLabel",
          des: "option标签绑定的label属性名称",
          type: "string",
          select: "—",
          default: "label",
        },
        {
          params: "optionValue",
          des: "option标签绑定的value属性名称",
          type: "String",
          select: "—",
          default: "value",
        },
        {
          params: "optionDisabled",
          des: "某个option选项是否禁用",
          type: "boolean",
          select: "true/false",
          default: "false",
        },
        {
          params: "filterable",
          des: "是否可搜索",
          type: "boolean",
          select: "true/false",
          default: "ture",
        },
        {
          params: "filter-method",
          des: "自定义搜索方法，该方法会有两个回调参数，一个label为输入的值，一个options为所有的列表数据，该方法需要返回一个Array作为新的下拉列表数据",
          type: "function",
          different: true,
          default: "默认会有一个过滤函数，函数会以optionLabel作为过滤字段",
        },
      ],
      activeName: "elemetUi",
      code1:
        `
<template>
  <ClMuchSelect v-model="val1" :options="options"></ClMuchSelect>
</template>
<script>
export default {
  data() {
    return {
      options: [],
    }
  },
  created() {
    for (let index = 0; index < 100000; index++) {
      this.options.push({
        label: '我说第' +  index + 1 +'条数据',
        value: index + 1,
      })
    }
  },
}
` +
        "<" +
        "/script>",
    }
  },
  created() {
    for (let index = 0; index < 100000; index++) {
      this.options.push({
        label: `我说第${index + 1}条数据`,
        value: index + 1,
      })
    }
  },
  mounted() {},
  methods: {},
}
</script>
<style lang="less" scoped>
.muchSelect_box {
  width: 100%;
}
</style>
