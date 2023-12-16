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
    typeShow: {
      type: String,
      default: "属性列表",
    },
  },
  computed: {
    showColumns() {
      switch (this.type) {
        case "attr":
          return this.attrColumns
        case "method":
          return this.methodColumns
        case "slot":
          return this.slotColumns
        default:
          break
      }
      return this.columns.filter((item) => this.type === item.type)
    },
  },
  data() {
    return {
      attrColumns: [
        {
          prop: "params",
          label: "参数",
          type: "attr",
          width: "100px",
        },
        {
          prop: "des",
          label: "说明",
          type: "attr",
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
          width: "120",
        },
        {
          prop: "default",
          label: "默认值",
          type: "attr",
          width: "100",
        },
      ],
      methodColumns: [
        {
          prop: "eventName",
          label: "事件名称",
          width: "100",
        },
        {
          prop: "des",
          label: "说明",
          width: "200",
        },
        {
          prop: "cbParams",
          label: "参数",
          width: "200",
        },
      ],
      slotColumns: [
        {
          prop: "slotName",
          label: "插槽名称",
          width: "100",
        },
        {
          prop: "des",
          label: "说明",
          width: "200",
        },
        {
          prop: "slotData",
          label: "作用域插槽数据",
          width: "200",
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
