<template>
  <div class="muchSelect_box">
    <h3>ClMuchSelects</h3>
    <p>
      针对<code>el-select</code>下拉数据量过大时的替代组件。他的原理其实是将数据进行分批渲染，每次滑到底部再加载指定条数。
    </p>
    <h4>基础原组件</h4>
    <el-link
      href="https://element.eleme.cn/#/zh-CN/component/select"
      type="primary"
      target="_blank"
      >el-select</el-link
    >
    <h4>基础用法</h4>
    <CodeTemplate>
      <ClMuchSelect
        v-model="val1"
        :showListNum="50"
        :loadListNum="30"
        :options="options"
        ref="ClMuchSelect"
      >
      </ClMuchSelect>
      <template #codeText>
        <span
          >这是一个拥有十万条数据的下拉框，通过<code>options</code>设置下拉数据。
          <code>showListNum</code>
          设置初次加载条数，<code>loadListNum</code>设置往后每次加载条数。
          默认可搜索，可设置<code>filterable</code>为false取消搜索</span
        >
      </template>
      <template #codeShow>
        <pre>
          {{ code2 }}
        </pre>
      </template>
    </CodeTemplate>
    <br />
    <h4>初次加载组件回显</h4>
    <CodeTemplate>
      <ClMuchSelect
        v-model="val2"
        :showListNum="50"
        :loadListNum="30"
        :options="options"
      >
      </ClMuchSelect>
      <template #codeText>
        <p>当首次加载组件就拥有值得情况下，会将该条数据移到顶部回显。</p>
      </template>
      <template #codeShow>
        <pre>
          {{ code3 }}
        </pre>
      </template>
    </CodeTemplate>
    <br />
    <h4>多选 + 回显</h4>
    <CodeTemplate>
      <ClMuchSelect
        v-model="val3"
        :showListNum="50"
        :loadListNum="30"
        :options="options"
        multiple
      >
      </ClMuchSelect>
      <template #codeText>
        <p>
          使用<code>multiple</code>可以开启多选模式，回显时会将所有选中数据加载至顶部显示
        </p>
      </template>
      <template #codeShow>
        <pre>
          {{ code4 }}
        </pre>
      </template>
    </CodeTemplate>
    <p>
      我们也可以使用该组件提供的<code>option</code>插槽对下拉显示内容进行自定义修改
    </p>
    <CodeTemplate>
      <ClMuchSelect v-model="val4" :options="options">
        <template #option="{ data }">
          <span>{{ data }}</span>
        </template>
      </ClMuchSelect>
      <template #codeText>
        通过<code>#option="{ data }"</code>就可以获取到option对象数据
      </template>
      <template #codeShow>
        <pre>
          {{ code5 }}
        </pre>
      </template>
    </CodeTemplate>
    <CustomAttrTable
      typeShow="ClMuchSelects属性列表"
      :tableData="attrList"
    ></CustomAttrTable>
    <CustomAttrTable
      typeShow="插槽列表"
      type="slot"
      :tableData="slotList"
    ></CustomAttrTable>
  </div>
</template>

<script>
import { code1, code2, code3, code4, code5 } from "./code"
export default {
  name: "HomeView",
  data() {
    return {
      val1: undefined,
      val2: 100,
      val3: [20, 80],
      val4: undefined,
      options: [],
      attrList: [
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
          params: "multiple",
          des: "是否多选",
          type: "boolean",
          select: "true/false",
          default: "false",
        },
        {
          params: "disabled",
          des: "某个option选项是否禁用",
          type: "boolean",
          select: "true/false",
          default: "false",
        },
        {
          params: "optionDisabled",
          des: "是否禁用",
          type: "boolean",
          select: "true/false",
          default: "false",
        },
        {
          params: "size",
          des: "输入框尺寸",
          type: "string",
          select: "medium/small/mini",
          default: "medium",
        },
        {
          params: "clearable",
          des: "是否可以清空选项",
          type: "boolean",
          select: "true/false",
          default: "true",
        },
        {
          params: "collapse-tags",
          des: "多选时是否将选中值按文字的形式展示	",
          type: "boolean",
          select: "true/false",
          default: "false",
        },
        {
          params: "multiple-limit",
          des: "多选时用户最多可以选择的项目数，为 0 则不限制",
          type: "number",
          select: "-",
          default: "0",
        },
        {
          params: "placeholder",
          des: "占位符",
          type: "string",
          select: "-",
          default: "请选择",
        },
        {
          params: "filterable",
          des: "是否可搜索",
          type: "boolean",
          select: "true/false",
          default: "true",
        },
        {
          params: "optionDisabled",
          des: "某个option选项是否禁用",
          type: "boolean",
          select: "true/false",
          default: "false",
        },
        {
          params: "allow-create",
          des: "是否允许用户创建新条目，需配合 filterable 使用",
          type: "boolean",
          select: "true/false",
          default: "false",
        },
        {
          params: "no-match-text",
          des: "搜索条件无匹配时显示的文字，也可以使用slot='empty'设置",
          type: "string",
          select: "-",
          default: "无匹配数据",
        },
        {
          params: "no-data-text",
          des: "选项为空时显示的文字，也可以使用slot='empty'设置",
          type: "string",
          select: "string",
          default: "无数据",
        },
        {
          params: "default-first-option",
          des: "在输入框按下回车，选择第一个匹配项。需配合 filterable 或 remote 使用",
          type: "boolean",
          select: "true/false",
          default: "false",
        },
        {
          params: "popper-append-to-body",
          des: "是否将弹出框插入至 body 元素。在弹出框的定位出现问题时，可将该属性设置为 false",
          type: "boolean",
          select: "true/false",
          default: "true",
        },
        {
          params: "filter-method",
          des: "自定义搜索方法，该方法会有两个回调参数，一个label为输入的值，一个options为所有的列表数据，该方法需要返回一个Array作为新的下拉列表数据",
          type: "function",
          different: true,
          default: "默认会有一个过滤函数，函数会以optionLabel作为过滤字段",
        },
      ],
      slotList: [
        {
          slotName: "option",
          des: "下拉数据的插槽，可自定义下拉列表数据的展示",
          slotData: "data：当前条下拉数据",
        },
      ],
      activeName: "elemetUi",
      code1: code1,
      code2: code2,
      code3: code3,
      code4: code4,
      code5: code5,
    }
  },
  created() {
    for (let index = 0; index < 10000; index++) {
      this.options.push({
        label: `我说第${index + 1}条数据`,
        value: index + 1,
      })
    }
  },
}
</script>
<style lang="less" scoped>
.muchSelect_box {
  width: 100%;
}
</style>
