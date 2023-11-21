<template>
  <div>
    <h4 class="title">{{ typeShow }}</h4>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column
        v-for="item in showColumns"
        :key="item.prop"
        :prop="item.prop"
        :label="item.label"
        :min-width="item.width"
      >
        <template #default="{ row }">
          <span :class="{ different: row.different }">{{
            row[item.prop]
          }}</span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "CustomAttrTable",
  props: {
    type: {
      type: String,
      default: "attr",
    },
    tableData: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    typeShow() {
      return this.type === "attr" ? "属性列表" : "事件列表"
    },
    showColumns() {
      return this.columns.filter((item) => this.type === item.type)
    },
  },
  data() {
    return {
      columns: [
        {
          prop: "params",
          label: "参数",
          type: "attr",
          width: "100px",
        },
        {
          prop: "eventName",
          label: "事件名称",
          type: "function",
          width: "100",
        },
        {
          prop: "des",
          label: "说明",
          type: "attr",
          width: "200",
        },
        {
          prop: "cbParams",
          label: "回调参数",
          type: "function",
          width: "200",
        },
        {
          prop: "type",
          label: "类型",
          type: "attr",
          width: "100",
        },
        {
          prop: "select",
          label: "可选值",
          type: "attr",
          width: "100",
        },
        {
          prop: "default",
          label: "默认值",
          type: "attr",
          width: "100",
        },
      ],
    }
  },
}
</script>

<style lang="less" scoped>
.el-table {
  font-size: 12px;
  font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB,
    Microsoft YaHei, SimSun, sans-serif;
}
.different {
  color: #ff4b4b;
}
</style>
