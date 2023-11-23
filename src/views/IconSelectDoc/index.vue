<template>
  <div>
    <h3>IconSelect</h3>
    <p>用于图标的的选择操作</p>
    <h4>基础原组件</h4>
    <el-link
      href="https://element.eleme.cn/#/zh-CN/component/input"
      type="primary"
      target="_blank"
      >el-input</el-link
    >
    <h4>基础使用</h4>
    <CodeTemplate>
      <el-row :gutter="20">
        <el-col :span="12">
          <ClIconSelect
            v-model="val1"
            style="width: 100%"
            placeholder="showSlot为prepend（默认）"
          ></ClIconSelect>
        </el-col>
        <el-col :span="12">
          <ClIconSelect
            v-model="val2"
            style="width: 100%"
            showSlot="append"
            placeholder="showSlot为append"
          ></ClIconSelect
          ><br />
        </el-col>
        <el-col :span="12">
          <ClIconSelect
            v-model="val3"
            style="width: 100%"
            showSlot="prefix"
            placeholder="showSlot为prefix"
          ></ClIconSelect>
        </el-col>
        <el-col :span="12">
          <ClIconSelect
            v-model="val4"
            style="width: 100%"
            showSlot="suffix"
            placeholder="showSlot为suffix"
          ></ClIconSelect>
        </el-col>
      </el-row>

      <template #codeText
        >我们提供了280个element-ui原有图标供您选择。
        并且默认会设置<code>showSlot</code>属性为<code>prepend</code>插槽展示选中的图标，
        您也可以使用组件的<code>showSlot</code>属性来设置其他展示形式，
        或者直接设置为<code>false</code>关闭图标的展示
      </template>
      <template #codeShow>
        <pre>{{ code1 }}</pre>
      </template>
    </CodeTemplate>
    <h4>icon图标的拓展</h4>
    <p>
      当然，我们想到了您可能不满足于elemet-ui的所有图标，所有我们也支持您从
      <el-link href="https://www.iconfont.cn/" type="primary" target="_blank"
        >iconfont</el-link
      >
      里面使用<code>Font class</code>的方式去进行图标导入
    </p>
    <CodeTemplate>
      <ClIconSelect
        v-model="val5"
        style="width: 300px"
        :iconList="iconList"
        placeholder="showSlot为prepend（默认）"
      ></ClIconSelect>
      <template #codeText
        >使用<code>iconList</code>即可自定义图标内容。
      </template>
      <template #codeShow>
        <pre>{{ code1 }}</pre>
      </template>
    </CodeTemplate>
    <CustomAttrTable
      typeShow="插槽列表"
      type="slot"
      :tableData="slotList"
    ></CustomAttrTable>
  </div>
</template>

<script>
import { code1 } from "./code"
export default {
  name: "IconSelectDoc",
  data() {
    return {
      val1: undefined,
      val2: undefined,
      val3: undefined,
      val4: undefined,
      val5: undefined,
      code1: code1,
      iconList: ["icon-jiagongchang", "icon-nongyerongdan", "icon-guangfuban"],
      slotList: [
        {
          slotName: "prefix",
          des: "输入框头部内容",
          slotData: "-",
        },
        {
          slotName: "suffix",
          des: "输入框尾部内容",
          slotData: "-",
        },
        {
          slotName: "prepend",
          des: "输入框前置内容",
          slotData: "-",
        },
        {
          slotName: "append",
          des: "输入框后置内容",
          slotData: "-",
        },
      ],
    }
  },
}
</script>

<style lang="less" scoped>
@import url("https://at.alicdn.com/t/c/font_4340241_kiofyvb8zdd.css");
.el-col {
  font-size: 12px;
  margin-bottom: 10px;
}
</style>
