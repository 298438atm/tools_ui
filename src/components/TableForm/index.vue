<template>
  <el-form :model="modelValueCom" ref="formRef">
    <el-table
      :data="modelValueCom.formData"
      v-bind="$attrs"
      v-on="$listeners"
      @cell-click="cellClick"
    >
      <el-table-column
        v-if="Object.keys(firstCol).length > 0"
        v-bind="firstCol"
      ></el-table-column>
      <el-table-column
        v-for="columItem in columList"
        :key="columItem.prop"
        v-bind="getColumnAttr(columItem)"
      >
        <template #default="{ row, $index }">
          <slot name="edit" v-if="row.edit">
            <el-form-item
              :prop="'formData.' + $index + '.' + columItem.prop"
              :rules="columItem.formEle.rules"
            >
              <ClFormEle
                v-model="row[columItem.prop]"
                v-bind="columItem.formEle"
              ></ClFormEle>
            </el-form-item>
          </slot>
          <slot v-else>
            <span
              v-if="
                getFormType(columItem) === 'select' ||
                getFormType(columItem) === 'muchSelect'
              "
            >
              {{
                getSelectLabel(columItem.formEle?.options, row[columItem.prop])
              }}
            </span>
            <span v-if="getFormType(columItem) === 'switch'">
              {{ getSwitchLabel(columItem.formEle, row[columItem.prop]) }}
            </span>
            <span v-else>{{ row[columItem.prop] }}</span>
          </slot>
        </template>
      </el-table-column>
      <el-table-column fixed="right" width="200px">
        <template #default="{ row, $index }">
          <slot name="endColumn">
            <el-button
              v-if="!row.edit"
              type="text"
              icon="el-icon-edit"
              @click="rowEdit(row)"
              >修改</el-button
            >
            <el-button
              v-else
              type="text"
              icon="el-icon-check"
              @click="saveRow(row, $index)"
              >保存</el-button
            >
            <el-button type="text" icon="el-icon-delete" class="del_btn_text"
              >删除</el-button
            >
          </slot>
        </template>
      </el-table-column>
    </el-table>
  </el-form>
</template>

<script>
import ClFormEle from '../Custom/FormEle.vue'
export default {
  name: 'ClTableForm',
  npmUp: true,
  components: { ClFormEle },
  props: {
    // 表单绑定数据
    modelValue: {
      type: Array,
      default: () => []
    },
    // 表单列
    columList: {
      type: Array,
      default: () => []
    },
    // 第一列
    firstCol: {
      type: Object,
      default: () => ({})
    },
    // 是否点击块直接编辑
    clickEdit: {
      type: Boolean,
      default: false
    }
  },
  model: {
    prop: 'modelValue',
    event: 'updateModelValue'
  },
  computed: {
    modelValueCom: {
      get() {
        return {
          formData: this.modelValue
        }
      },
      set(newV) {
        this.$emit('updateModelValue', newV)
      }
    }
  },
  data() {
    return {}
  },
  methods: {
    // 单元格点击
    cellClick() {},
    // 行修改
    rowEdit(row) {
      this.$set(row, 'edit', true)
    },
    // 保存
    saveRow(row, index) {
      let errList = []
      this.$refs.formRef.validateField(this.getValidateField(index), (err) => {
        if (err) {
          errList.push(err)
        }
      })
      if (errList.length === 0) {
        this.$set(row, 'edit', false)
      } else {
        this.$message.error(errList.join(','))
      }
    },
    // 返回除了表单元素以外的属性
    getColumnAttr(obj) {
      let newObj = {}
      for (const key in obj) {
        if (Object.hasOwnProperty.call(obj, key)) {
          if (key !== 'formEle') {
            const element = obj[key]
            newObj[key] = element
          }
        }
      }
      return newObj
    },
    // 下拉数据回显
    getSelectLabel(options = [], values) {
      let filterOption = []
      if (Array.isArray(values)) {
        filterOption = options.filter((item) => values.includes(item.value))
      } else {
        filterOption = options.filter((item) => item.value === values)
      }
      return filterOption.map((item) => item.label).join(',')
    },
    // switch数据回显
    getSwitchLabel(switchData, val) {
      let labelMap = new Map()
      labelMap.set(true, switchData.activeValue || '是')
      labelMap.set(false, switchData.inactiveValue || '否')
      labelMap.set(switchData.activeValue, switchData.activeText || '是')
      labelMap.set(switchData.inactiveValue, switchData.inactiveText || '否')
      return labelMap.get(val)
    },
    getFormType(columItem) {
      return columItem.formEle?.formType
    },
    getValidateField(index) {
      return this.columList
        .filter((item) => item.formEle?.rules)
        .map((item) => `formData.${index}.${item.prop}`)
    }
  }
}
</script>

<style lang="less" scoped>
.el-form-item {
  margin-bottom: 2px;
}
/deep/ .el-form-item__error {
  display: none;
}
</style>
