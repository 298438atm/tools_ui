<template>
  <div class="tableFormDoc_box">
    <h3>ClTableForm</h3>
    <p>一个长得像表格的表单组件</p>
    <h4>基础原组件</h4>
    <el-link
      href="https://element.eleme.cn/#/zh-CN/component/table"
      type="primary"
      target="_blank"
      >el-table</el-link
    >

    <h4>基础用法</h4>
    <CodeTemplate>
      <div>
        <el-button @click="addRow('ClTableForm')">新增行</el-button>
        <ClTableForm
          v-model="formData1"
          :columList="columList1"
          :default-sort="{ order: 'ascending' }"
          ref="ClTableForm"
        >
        </ClTableForm>
      </div>
      <template #codeText>
        这是一个最基础配置的<code>ClTableForm</code>组件, 它内置了
        <el-link
          href="https://element.eleme.cn/#/zh-CN/component/input"
          type="primary"
          target="_blank"
          >input</el-link
        >，
        <el-link
          href="https://element.eleme.cn/#/zh-CN/component/input-number"
          type="primary"
          target="_blank"
          >inputNumber</el-link
        >，
        <el-link
          href="https://element.eleme.cn/#/zh-CN/component/select"
          type="primary"
          target="_blank"
          >select</el-link
        >，
        <el-link
          href="http://codelife_fjl.gitee.io/tools_ui_doc/#/Muchselect"
          type="primary"
          target="_blank"
          >ClMuchSelect</el-link
        >，

        <el-link
          href="http://codelife_fjl.gitee.io/tools_ui_doc/#/time-picker"
          type="primary"
          target="_blank"
          >timeSelect</el-link
        >，
        <el-link
          href="http://codelife_fjl.gitee.io/tools_ui_doc/#/time-picker"
          type="primary"
          target="_blank"
          >timePicker</el-link
        >，
        <el-link
          href="http://codelife_fjl.gitee.io/tools_ui_doc/#/date-picker"
          type="primary"
          target="_blank"
          >datePicker</el-link
        >，
        <el-link
          href="http://codelife_fjl.gitee.io/tools_ui_doc/#/switch"
          type="primary"
          target="_blank"
          >switch</el-link
        >，
        <el-link
          href="http://codelife_fjl.gitee.io/tools_ui_doc/#/cascader"
          type="primary"
          target="_blank"
          >cascader</el-link
        >九种表单元素。
      </template>
      <template #codeShow>
        {{ code1 }}
      </template>
    </CodeTemplate>
    <h4>自定义表单元素</h4>
    <CodeTemplate>
      <div>
        <el-button @click="addRow2('ClTableForm2')">新增行</el-button>
        <ClTableForm
          v-model="formData2"
          :columList="columList2"
          :btnCol="{ minWidth: 250 }"
          ref="ClTableForm2"
        >
          <template #form_is18="{ row }">
            <el-radio-group v-model="row.is18">
              <el-radio label="1">成年</el-radio>
              <el-radio label="2">未成年</el-radio>
            </el-radio-group>
          </template>
          <template #text_is18="{ row }">
            {{
              row.is18 === '1'
                ? '我已经成年啦'
                : row.is18 === '2'
                ? '我还是未成年'
                : '我到底成年没！'
            }}
          </template>
          <template #form_loves="{ row }">
            <el-checkbox-group v-model="row.loves">
              <el-checkbox label="吃饭"></el-checkbox>
              <el-checkbox label="睡觉"></el-checkbox>
              <el-checkbox label="打豆豆"></el-checkbox>
            </el-checkbox-group>
          </template>
          <template #text_loves="{ row }">
            {{ row.loves.join('，') }}
          </template>
          <template #btnList>
            <el-button @click="selfBtn" type="text">自定义按钮</el-button>
          </template>
        </ClTableForm>
      </div>
      <template #codeText>
        当然，我们也考虑到基础的九种表单并不能满足您的需求，所以我们为每列预留了表单插槽和文本展示插槽，
        您可以自定义自己的表单元素或者是保存后的显示文本，表单插槽为<code>slot_propName</code>，
        文本显示插槽为<code>text_propName</code>，<code>propName</code>为你列表的prop值。
      </template>
      <template #codeShow>
        <pre>{{ code2 }}</pre>
      </template>
    </CodeTemplate>
    <h4>表单元素的属性和方法</h4>
    <CodeTemplate>
      <div>
        <el-button @click="addRow('ClTableForm3')">新增行</el-button>
        <ClTableForm
          v-model="formData3"
          :columList="columList3"
          border
          ref="ClTableForm3"
        >
        </ClTableForm>
      </div>
      <template #codeText>
        <code>columList</code>是一个对象数组，为该组件提供渲染数据来源。
        在<code>columList</code>这个数组对象里，第一层的属性将会挂载到<code>el-table-column</code>组件上，
        而<code>formEle</code>对象则会单独被挂载到对应表单组件上。
        所有表单属性只要放在<code>formEle</code>里就会自动挂载到表单组件上，
        如果要使用表单组件的方法，在<code>ClTableForm</code>上绑定<code>propName_eventName</code>即可，
        <code>propName为表单<code>prop</code>值，eventName</code
        >为需要绑定的事件名称。
      </template>
      <template #codeShow>
        <pre>{{ code3 }}</pre>
      </template>
    </CodeTemplate>
    <h4>修改与保存的触发时机</h4>
    <CodeTemplate>
      <div>
        <el-button @click="addRow('ClTableForm4')">新增行</el-button>
        <ClTableForm
          v-model="formData4"
          :columList="columList4"
          ref="ClTableForm4"
          editOpprtunity="clickRow"
          saveOpportunity="leaveRow"
        >
        </ClTableForm>
      </div>
      <template #codeText>
        有时候我们并不想要以按钮的方式触发修改与保存，我们也提供了行点击的方式触发修改，离开行或离开表格的方式触发保存。
        editOpprtunity可以设置触发修改的时机，设置为rowClick则在点击行的时候触发修改，默认为none为按钮触发
        saveOpportunity可以设置触发保存的时机，设置为leaveRow则在除本行外点击触发保存，
        设置为leaveTable则在除本表单外点击页面触发修改，默认为none为按钮触发。
      </template>
      <template #codeShow>
        <pre>{{ code4 }}</pre>
      </template>
    </CodeTemplate>
    <CustomAttrTable type="attr" :tableData="attrList">
      <template #default="{ row, columItem }">
        <span v-if="columItem.prop === 'des' && row.params === 'columList'">
          一个对象数组，对象属性参看<a href="#columItem">columItem</a>
        </span>
        <span v-else>
          {{ row[columItem.prop] }}
        </span>
      </template>
    </CustomAttrTable>
    <CustomAttrTable
      :tableData="columItemList"
      id="columItem"
      type="attr"
      selfTypeText="columItem"
    >
    </CustomAttrTable>
    <CustomAttrTable type="method" :tableData="methodList"></CustomAttrTable>
    <CustomAttrTable
      type="refMethod"
      :tableData="refMethodList"
    ></CustomAttrTable>
    <CustomAttrTable type="slot" :tableData="slotList"></CustomAttrTable>
  </div>
</template>

<script>
import ClTableForm from '@/components/TableForm/index.vue'
import {
  columList1,
  columList2,
  columList3,
  columList4,
  code1,
  code2,
  code3,
  code4
} from './codeData'
export default {
  name: 'TableFormDoc',
  components: {
    ClTableForm
  },
  data() {
    return {
      // 首列的属性
      firstCol: {
        type: 'index',
        width: '60px',
        align: 'center'
      },
      code1: code1,
      code2: code2,
      code3: code3,
      code4: code4,
      formData1: [],
      formData2: [],
      formData3: [],
      formData4: [],
      columList1: columList1,
      columList2: columList2,
      columList3: columList3,
      columList4: columList4,
      attrList: [
        {
          params: 'v-model',
          des: '绑定的值',
          type: 'array',
          select: '—',
          default: '—'
        },
        {
          params: 'columList',
          des: '表格数据，为一个对象数组，对象里面的prop和label会自动挂载到el-table-column上。对象上的formEle为element-ui的表单组件属性。他也有几个特殊的属性，formType：表单类型，目前提供九种表单类型；showRequiredIcon：是否在表头显示必填 * 号；rules：表单校验规则，会绑定到el-form-item上。',
          type: 'array<object>',
          select: '—',
          default: '[]'
        },
        {
          params: 'firstCol',
          des: '用于设置第一列多选框或者序号，所有属性都会被绑定到el-table-column ',
          type: 'object',
          select: '',
          default: '{type: "index", width: 50, align: "center", label: "序号"}'
        },
        {
          params: 'editOpprtunity',
          des: '触发修改的时机，none按钮触发，clickRow点击行触发',
          type: 'string',
          select: 'none /clickRow',
          default: 'nnone'
        },
        {
          params: 'editOpprtunity',
          des: '触发修改的时机，none按钮触发，leaveRow离开行的时候触发，leaveTable离开表格的时候触发。',
          type: 'string',
          select: 'non / leaveRow /leaveTable',
          default: 'none'
        },
        {
          params: 'isBtn',
          des: '是否显示操作按钮列',
          type: 'boolean',
          select: 'true / false',
          default: 'true'
        },
        {
          params: 'btnCol',
          des: '操作按钮列的属性集合，所有属性会挂载到el-table-column上',
          type: 'object',
          select: '-',
          default: '{ label: "操作", fixed: "right", minWidth: "150px" }'
        },
        {
          params: 'isDelBtnTip',
          des: '删除是否需要提示语',
          type: 'boolean',
          select: 'true / false',
          default: 'true'
        },
        {
          params: 'delBtnTip',
          des: '删除按钮的提示语',
          type: 'string',
          select: '-',
          default: '确认删除该条数据吗？'
        },
        {
          params: 'height',
          des: 'Table 的高度，默认为自动高度。如果 height 为 number 类型，单位 px；如果 height 为 string 类型，则这个高度会设置为 Table 的 style.height 的值，Table 的高度会受控于外部样式。',
          type: 'string / number',
          select: '-',
          default: '-'
        },
        {
          params: 'max-height',
          des: 'Table 的最大高度。合法的值为数字或者单位为 px 的高度。',
          type: 'string / number',
          select: '-',
          default: '-'
        },
        {
          params: 'stripe',
          des: '是否为斑马纹 table',
          type: 'boolean',
          select: 'true / false',
          default: 'false'
        },
        {
          params: 'border',
          des: '是否带有纵向边框',
          type: 'boolean',
          select: 'true / false',
          default: 'false'
        },
        {
          params: 'size',
          des: '表格和表单元素的尺寸',
          type: 'string',
          select: 'medium / small / mini',
          default: 'medium'
        },
        {
          params: 'fit',
          des: '列的宽度是否自撑开',
          type: 'boolean',
          select: 'true / false',
          default: 'true'
        },
        {
          params: 'highlight-current-row',
          des: '是否要高亮当前行',
          type: 'boolean',
          select: 'true / false',
          default: 'false'
        },
        {
          params: 'row-class-name',
          des: '行的 className 的回调方法，也可以使用字符串为所有行设置一个固定的 className。',
          type: 'function({row, rowIndex}) / string',
          select: '-',
          default: '-'
        },
        {
          params: 'row-style',
          des: '行的 style 的回调方法，也可以使用一个固定的 Object 为所有行设置一样的 Style。',
          type: 'function({row, rowIndex}) / object',
          select: '-',
          default: '-'
        },
        {
          params: 'cell-class-name',
          des: '单元格的 className 的回调方法，也可以使用字符串为所有单元格设置一个固定的 className。',
          type: 'function({row, column, rowIndex, columnIndex}) / string',
          select: '-',
          default: '-'
        },
        {
          params: 'cell-style',
          des: '单元格的 style 的回调方法，也可以使用一个固定的 Object 为所有单元格设置一样的 Style。',
          type: 'function({row, column, rowIndex, columnIndex}) / object',
          select: '-',
          default: '-'
        },
        {
          params: 'header-row-class-name',
          des: '表头行的 className 的回调方法，也可以使用字符串为所有表头行设置一个固定的 className。',
          type: 'function({row, rowIndex}) / string',
          select: '-',
          default: '-'
        },
        {
          params: 'header-row-style',
          des: '表头行的 style 的回调方法，也可以使用一个固定的 Object 为所有表头行设置一样的 Style。',
          type: 'function({row, rowIndex}) / object',
          select: '-',
          default: '-'
        },
        {
          params: 'header-cell-class-name',
          des: '表头单元格的 className 的回调方法，也可以使用字符串为所有表头单元格设置一个固定的 className。',
          type: 'function({row, column, rowIndex, columnIndex}) / string',
          select: '-',
          default: '-'
        },
        {
          params: 'header-cell-style',
          des: '表头单元格的 style 的回调方法，也可以使用一个固定的 Object 为所有表头单元格设置一样的 Style。',
          type: 'function({row, column, rowIndex, columnIndex}) / object',
          select: '-',
          default: '-'
        },
        {
          params: 'empty-text',
          des: '空数据时显示的文本内容。',
          type: 'string',
          select: '-',
          default: '暂无数据'
        },
        {
          params: 'select-on-indeterminate',
          des: '在多选表格中，当仅有部分行被选中时，点击表头的多选框时的行为。若为 true，则选中所有行；若为 false，则取消选择所有行',
          type: 'boolean',
          select: 'true / false',
          default: 'true'
        }
      ],
      columItemList: [
        {
          params: 'prop',
          des: '列的关键字，el-form-item与el-table-colum组件上的prop都是绑定该值',
          type: 'string',
          select: '—',
          default: '—'
        },
        {
          params: 'label',
          des: '表头显示值',
          type: 'string',
          select: '—',
          default: '—'
        },
        {
          params: 'formItem',
          des: '表单组件对象，包含九大组件的所有属性，还有几个专属属性，formType：设置表单类型（input，inputNumber，muchSelect，select，datePicker，timeSelect，timePicker，switch，cascader），rules：表单校验规则',
          type: 'object',
          select: '—',
          default: '—'
        }
      ],
      methodList: [
        {
          eventName: 'validateForm',
          des: '触发表单校验',
          cbParams: 'state: 表单校验是否通过, failRules：未通过的表单对象'
        },
        {
          eventName: 'select',
          des: '当用户手动勾选数据行的 Checkbox 时触发的事件',
          cbParams: 'selection, row'
        },
        {
          eventName: 'select-all',
          des: '当用户手动勾选全选 Checkbox 时触发的事件',
          cbParams: 'selection'
        },
        {
          eventName: 'selection-change',
          des: '当选择项发生变化时会触发该事件',
          cbParams: 'selection'
        },
        {
          eventName: 'cell-mouse-enter',
          des: '当单元格 hover 进入时会触发该事件',
          cbParams: 'row, column, cell, event'
        },
        {
          eventName: 'cell-mouse-leave',
          des: '当单元格 hover 退出时会触发该事件',
          cbParams: 'row, column, cell, event'
        },
        {
          eventName: 'cell-click',
          des: '当某个单元格被点击时会触发该事件',
          cbParams: 'row, column, cell, event'
        },
        {
          eventName: 'cell-dblclick',
          des: '当某个单元格被双击击时会触发该事件',
          cbParams: 'row, column, cell, event'
        },
        {
          eventName: 'row-click',
          des: '当某一行被点击时会触发该事件',
          cbParams: 'row, column, event'
        },
        {
          eventName: 'row-contextmenu',
          des: '当某一行被鼠标右键点击时会触发该事件',
          cbParams: 'row, column, event'
        },
        {
          eventName: 'row-dblclick',
          des: '当某一行被双击时会触发该事件',
          cbParams: 'row, column, event'
        },
        {
          eventName: 'header-dragend',
          des: '当拖动表头改变了列的宽度的时候会触发该事件',
          cbParams: 'newWidth, oldWidth, column, event'
        }
      ],
      refMethodList: [
        {
          eventName: 'addRow',
          des: '新增行',
          cbParams: 'rowData：新增行的默认数据'
        },
        {
          eventName: 'editRow',
          des: '修改行',
          cbParams: 'index'
        },
        {
          eventName: 'delRow',
          des: '删除行',
          cbParams: 'index'
        },
        {
          eventName: 'saveRow',
          des: '保存行',
          cbParams: 'index'
        },
        {
          eventName: 'clearSelection',
          des: '用于多选表格，清空用户的选择',
          cbParams: '-'
        },
        {
          eventName: 'toggleRowSelection',
          des: '用于多选表格，切换某一行的选中状态，如果使用了第二个参数，则是设置这一行选中与否（selected 为 true 则选中）',
          cbParams: 'row, selected'
        },
        {
          eventName: 'toggleAllSelection',
          des: '用于多选表格，切换所有行的选中状态',
          cbParams: '-'
        },
        {
          eventName: 'toggleRowExpansion',
          des: '用于可展开表格与树形表格，切换某一行的展开状态，如果使用了第二个参数，则是设置这一行展开与否（expanded 为 true 则展开）',
          cbParams: 'row, expanded'
        },
        {
          eventName: 'setCurrentRow',
          des: '用于单选表格，设定某一行为选中行，如果调用时不加参数，则会取消目前高亮行的选中状态。',
          cbParams: 'row'
        }
      ],
      slotList: [
        {
          slotName: 'form_propName',
          des: '列的表单元素展示，propName为该列的prop值',
          slotData: 'columItem：从columList上获取的某列数据，row，index，column'
        },
        {
          slotName: 'text_propName',
          des: '列的文本形式展示，propName为该列的prop值',
          slotData: 'columItem：从columList上获取的某列数据，row，index，column'
        },
        {
          slotName: 'header_propName',
          des: '表头插槽',
          slotData: 'columItem：从columList上获取的某列数据，column，index'
        },
        {
          slotName: 'endColumn',
          des: '最后一列colum',
          slotData: 'row, $index，column'
        },
        {
          slotName: 'btnList',
          des: '用于原有按钮列后新按钮的插槽',
          slotData: 'row, $index，column'
        }
      ]
    }
  },
  methods: {
    addRow(refName) {
      this.$refs[refName].addRow({})
    },
    addRow2(refName) {
      this.$refs[refName].addRow({ loves: [] })
    },
    selfBtn() {
      this.$message('点击了自定义按钮！')
    }
  }
}
</script>

<style lang="less" scoped>
.tableFormDoc_box {
  padding-bottom: 50px;
}
</style>
