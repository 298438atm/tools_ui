<template>
  <el-form
    :model="{ formData: modelValueCom }"
    ref="formRef"
    :size="$attrs.size || 'medium'"
  >
    <el-table
      ref="elTable"
      :data="modelValueCom"
      :cell-style="setCellStyle"
      v-bind="$attrs"
      v-on="$listeners"
      @row-click="rowClick"
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
        <template #default="{ row, $index, column }">
          <el-form-item
            v-if="row.isEdit"
            :prop="'formData.' + $index + '.' + columItem.prop"
            :rules="columItem.formEle?.rules"
          >
            <slot
              :name="'form_' + columItem.prop"
              :columItem="columItem"
              :row="row"
              :column="column"
              :index="$index"
            >
              <ClFormEle
                v-model="row[columItem.prop]"
                v-bind="columItem.formEle"
                v-on="eventMap[columItem.prop]"
                :label="columItem.label"
              ></ClFormEle>
            </slot>
          </el-form-item>
          <slot
            v-else
            :name="'text_' + columItem.prop"
            :columItem="columItem"
            :row="row"
            :index="$index"
          >
            <span>{{
              getLabel(
                getFormType(columItem),
                columItem,
                row[columItem.prop],
                $index
              )
            }}</span>
          </slot>
        </template>
        <template #header="{ $index, column }">
          <slot
            :name="'header_' + columItem.prop"
            :index="$index"
            :column="column"
          >
            <span
              v-if="columItem.formEle?.showRequiredIcon"
              class="required_icon"
              >*</span
            >
            {{ columItem.label }}
          </slot>
        </template>
      </el-table-column>
      <el-table-column v-if="isBtn" v-bind="btnColCpd">
        <template #default="{ row, $index: index, column }">
          <slot name="endColumn" :data="{ row, index, column }">
            <el-button
              v-if="!row.isEdit"
              type="text"
              icon="el-icon-edit"
              @click.native.stop="rowEdit(index)"
              >修改</el-button
            >
            <el-button
              v-else
              type="text"
              icon="el-icon-check"
              @click.native.stop="saveRow(index)"
              >保存</el-button
            >
            <el-popconfirm
              v-if="isDelBtnTip"
              :title="delBtnTip"
              @confirm="delRow(index)"
            >
              <el-button
                type="text"
                icon="el-icon-delete"
                class="del_btn_text"
                slot="reference"
                >删除</el-button
              >
            </el-popconfirm>
            <el-button
              v-else
              type="text"
              icon="el-icon-delete"
              class="del_btn_text"
              slot="reference"
              @click.native.stop="delRow(index)"
              >删除</el-button
            >
            <slot name="btnList" :data="{ row, index, column }"></slot>
          </slot>
        </template>
      </el-table-column>
    </el-table>
  </el-form>
</template>

<script>
import { checkDataType, checkEmpty } from '@/utils/commonFun'
import ClFormEle from '../Custom/FormEle.vue'
import { dispatch } from '../../utils/dispatch'

// 需要传递给底层的事件
const eventList = ['addRow', 'delRow', 'rowEdit', 'saveRow']
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
      default: () => ({
        type: 'selection',
        width: 50,
        align: 'center',
        label: '序号'
      })
    },
    // 修改时机
    // clickRow
    // none
    editOpprtunity: {
      type: String,
      default: 'none'
    },
    // 保存时机
    // leaveRow   离开行
    // leaveTable 离开表格
    // none       自己决定，一般用于按钮
    saveOpportunity: {
      type: String,
      default: 'none'
    },
    // 单元格样式
    cellStyle: [Function, Object],
    // 是否显示操作按钮
    isBtn: {
      type: Boolean,
      default: true
    },
    // 按钮栏的属性
    btnCol: {
      type: Object,
      default: () => ({ label: '操作', fixed: 'right', minWidth: '150px' })
    },
    isDelBtnTip: {
      type: Boolean,
      default: true
    },
    delBtnTip: {
      type: String,
      default: '确认删除该条数据吗？'
    }
  },
  model: {
    prop: 'modelValue',
    event: 'updateModelValue'
  },
  computed: {
    modelValueCom: {
      get() {
        return this.modelValue
      },
      set(newV) {
        this.$emit('updateModelValue', newV)
      }
    },
    btnColCpd() {
      const defaultObj = { label: '操作', fixed: 'right', minWidth: '150px' }
      if (checkDataType(this.btnCol, 'object')) {
        return Object.assign(defaultObj, this.btnCol)
      } else {
        return defaultObj
      }
    }
  },
  data() {
    return {
      eventMap: {}
    }
  },
  mounted() {
    dispatch(this, 'elTable')
    eventList.forEach((eventName) => {
      this.$refs.elTable[eventName] = this[eventName]
    })
    if (this.saveOpportunity) {
      window.addEventListener('click', this.clickoutsideHandl)
    }
  },
  destroyed() {
    if (this.saveOpportunity) {
      window.removeEventListener('click', this.clickoutsideHandl)
    }
  },
  methods: {
    // 新增行
    addRow(defaultVal = {}) {
      let addObj = { isEdit: true }
      if (checkDataType(defaultVal, 'object')) {
        addObj = Object.assign(addObj, defaultVal)
      }
      const timer = setTimeout(() => {
        this.modelValueCom.push(addObj)
        clearTimeout(timer)
      })
    },
    // 删除行
    delRow(index) {
      this.modelValueCom.splice(index, 1)
    },
    // 行修改
    rowEdit(index) {
      this.$set(this.modelValueCom[index], 'isEdit', true)
    },
    // 保存
    async saveRow(index) {
      const { state } = await this.validateForm('row', index)
      if (state) {
        this.$set(this.modelValueCom[index], 'isEdit', false)
      }
    },
    // 行点击
    rowClick(row) {
      if (this.editOpprtunity === 'clickRow') {
        this.$set(row, 'isEdit', true)
      }
    },
    // 点击表格区域外的触发事件
    async clickoutsideHandl(e) {
      const tableEle = this.$refs.elTable.$el
      const targetEle = e.target
      if (
        this.saveOpportunity === 'leaveTable' &&
        !tableEle.contains(targetEle)
      ) {
        const { state, failRules } = await this.validateForm()
        if (state) {
          this.modelValueCom = this.modelValueCom.map((item) => {
            item.isEdit = false
            return item
          })
        } else {
          const indexs = Array.from(
            new Set(
              Object.keys(failRules || []).map((item) =>
                Number(item.split('.')[1])
              )
            )
          )
          this.modelValueCom = this.modelValueCom.map((item, index) => {
            if (indexs.includes(index)) {
              item.isEdit = true
            } else {
              item.isEdit = false
            }
            return item
          })
        }
      } else if (this.saveOpportunity === 'leaveRow') {
        this.$refs.elTable.$children
          .find((item) => {
            return item.$options.name === 'ElTableBody'
          })
          .$children.filter((item) => {
            return item.$options.name === 'ElTableRow'
          })
          .map((item) => item.$el)
          .filter((item) => {
            return !item.contains(targetEle)
          })
          .map((item) => item.__vue__.index)
          .forEach(async (item) => {
            const { state } = await this.validateForm('row', item)
            if (state) {
              this.modelValueCom = this.modelValueCom.map((itm, idx) => {
                if (idx === item) {
                  itm.isEdit = false
                }
                return itm
              })
            }
          })
      }
    },
    // 表单校验
    validateForm(type = 'form', index) {
      return new Promise((resolve) => {
        if (type === 'form') {
          this.$refs.formRef.validate((flag, rules) => {
            const res = { state: flag, failRules: rules }
            this.$emit('validateForm', { state: flag, failRules: rules })
            if (flag) {
              resolve(res)
            } else {
              resolve(res)
            }
          })
        } else if (type === 'row') {
          let failRules = {}
          let state = true
          this.$refs.formRef.validateField(
            this.getValidateField(index),
            (errMsg, rules) => {
              if (errMsg) {
                Object.assign(failRules, rules)
              }
            }
          )
          if (Object.keys(failRules).length === 0) {
            resolve({ state, failRules })
          } else {
            state = false
            resolve({ state, failRules })
          }
          this.$emit('validateRow', { state, failRules })
        }
      })
    },
    // 获取需要校验的prop集合
    getValidateField(index) {
      return this.columList
        .filter((item) => item.formEle?.rules)
        .map((item) => `formData.${index}.${item.prop}`)
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
    // 表单数据回显
    getLabel(type, columItem, val) {
      if (type === 'select' || type === 'muchSelect') {
        return this.getSelectLabel(columItem.formEle.options, val)
      } else if (type === 'switch') {
        return this.getSwitchLabel(columItem.formEle, val)
      } else if (type === 'cascader') {
        const copyVal = JSON.parse(JSON.stringify(val || []))
        let { props, options, showAllLevels, separator } = columItem.formEle
        if (!props) {
          props = {}
        }
        const { multiple } = props
        if (multiple) {
          return this.getCascaderLabelMultiple(
            options,
            copyVal,
            showAllLevels,
            separator
          )
        } else {
          return this.getCascaderLabelRadio(
            options,
            copyVal,
            [],
            showAllLevels,
            separator
          )
        }
      } else if (type === 'datePicker' || type === 'timePicker') {
        return this.getDateTimeLabel(columItem, val)
      } else {
        return val
      }
    },
    // 下拉数据回显
    getSelectLabel(options = [], values) {
      if (checkEmpty(values)) {
        return
      }
      let filterOption = []
      if (Array.isArray(values)) {
        for (const value of values) {
          let idx = options.findIndex((item) => item.value === value)
          if (idx > -1) {
            filterOption.push(options[idx]['label'])
          } else {
            filterOption.push(value)
          }
        }
      } else {
        let idx = options.findIndex((item) => item.value === values)
        if (idx > -1) {
          filterOption.push(options[idx]['label'])
        } else {
          filterOption.push(values)
        }
      }
      return filterOption.join(',')
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
    /**
     * cascader回显（只针对二维数组，也就是多选情况）
     * @param {array} options - 级联数据列表
     * @param {array} vals - 级联组件选中的值，一个二维数组
     * @param {boolear} onlyShowLastLabel - 是否只显示最后一层
     * @returns {string} - label拼接集合
     */
    getCascaderLabelMultiple(
      options = [],
      vals = [],
      onlyShowLastLabel,
      separator
    ) {
      let msgList = []
      for (const val of vals) {
        let res = this.getCascaderLabelRadio(
          options,
          val,
          [],
          onlyShowLastLabel,
          separator
        )
        msgList.push(res)
      }
      return msgList.join('，')
    },
    /**
     * cascader回显（只针对一维数组，也就是单选情况）
     * @param {array} options - 级联数据列表
     * @param {array} vals - 级联组件选中的值
     * @param {array} msgList - 每个值对应的label回显
     * @param {boolear} onlyShowLastLabel - 是否只显示最后一层
     * @returns {string} - label拼接集合
     */
    getCascaderLabelRadio(
      options = [],
      vals,
      msgList = [],
      onlyShowLastLabel,
      separator
    ) {
      let copyVal = JSON.parse(JSON.stringify(vals))
      let copyMsgList = JSON.parse(JSON.stringify(msgList))
      if (!copyVal || (Array.isArray(copyVal) && copyVal.length === 0)) {
        if (onlyShowLastLabel) {
          return copyMsgList.pop()
        } else {
          return copyMsgList.join(separator || ' / ')
        }
      }
      for (const item of options) {
        if (item.value === copyVal[0]) {
          copyVal.shift()
          copyMsgList.push(item.label)
          return this.getCascaderLabelRadio(
            item.children,
            copyVal,
            copyMsgList,
            onlyShowLastLabel,
            separator
          )
        }
      }
    },
    // 日期时间区间数据回显
    getDateTimeLabel(columItem, val) {
      const type = columItem.formEle?.type
      const isRange = columItem.formEle?.isRange
      if (
        (type === 'datetimerange' ||
          type === 'daterange' ||
          type === 'monthrange' ||
          isRange) &&
        Array.isArray(val)
      ) {
        return val.join(' ~ ')
      } else {
        return val
      }
    },
    // 获取类型
    getFormType(columItem) {
      return columItem.formEle?.formType
    },
    // 分配事件
    getListeners(columList) {
      this.eventMap = {}
      let props = columList.map((item) => {
        this.eventMap[item.prop] = {}
        return item.prop
      })
      if (!this.$listeners) {
        return {}
      }
      for (const key in this.$listeners) {
        if (Object.hasOwnProperty.call(this.$listeners, key)) {
          const element = this.$listeners[key]
          const [eventName, propName] = key.split('_')
          if (props.includes(propName)) {
            this.eventMap[propName][eventName] = element
          }
        }
      }
    },

    // 设置表格样式
    setCellStyle({ row, column, rowIndex, columnIndex }) {
      let styleObj = {}
      if (checkDataType(this.cellStyle, 'object')) {
        Object.assign(styleObj, this.cellStyle)
      } else if (checkDataType(this.cellStyle, 'function')) {
        Object.assign(
          styleObj,
          this.cellStyle({ row, column, rowIndex, columnIndex })
        )
      }
      if (row.isEdit) {
        Object.assign(styleObj, { padding: 0 })
      }
      return styleObj
    }
  },
  watch: {
    columList: {
      deep: true,
      immediate: true,
      handler(newV) {
        this.getListeners(newV)
      }
    }
  }
}
</script>

<style lang="less" scoped>
.el-form-item {
  margin: 20px 0;
}
// 解决当列过多时“暂无数据会被拖到滚动条后面”
/deep/ .el-table__empty-block {
  width: 100% !important;
}
.el-button {
  margin-right: 10px;
}

.required_icon {
  color: #f56c6c;
  font-size: 14px;
}
</style>
