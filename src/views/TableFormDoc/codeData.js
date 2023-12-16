export const columList1 = [
  {
    prop: 'name',
    label: '姓名',
    minWidth: '200px',
    formEle: {
      formType: 'input'
    }
  },
  {
    minWidth: '220px',
    prop: 'age',
    label: '年龄',
    formEle: {
      formType: 'inputNumber'
    }
  },
  {
    minWidth: '200px',
    prop: 'loves',
    label: '爱好',
    formEle: {
      formType: 'select',
      options: [
        { label: '吃饭', value: 'eat' },
        { label: '睡觉觉', value: 'sleep' },
        { label: '打豆豆', value: 'ddd' }
      ]
    }
  },
  {
    minWidth: '200px',
    prop: 'loveNumber',
    label: '喜欢的数字',
    formEle: {
      formType: 'muchSelect',
      options: getOptions()
    }
  },
  {
    minWidth: '300px',
    prop: 'birthday',
    label: '出生日期',
    formEle: {
      formType: 'datePicker',
      valueFormat: 'yyyy-MM-dd',
      format: 'yyyy-MM-dd'
    }
  },
  {
    minWidth: '300px',
    prop: 'birthdayTime',
    label: '出生时间',
    formEle: {
      formType: 'timeSelect'
    }
  },
  {
    minWidth: '300px',
    prop: 'codeDate',
    label: '证件有效期',
    formEle: {
      formType: 'datePicker',
      type: 'datetimerange',
      valueFormat: 'yyyy-MM-dd',
      format: 'yyyy-MM-dd'
    }
  },
  {
    minWidth: '300px',
    prop: 'leaveTime',
    label: '离院时间',
    formEle: {
      formType: 'timePicker',
      isRange: true,
      valueFormat: 'HH:mm:ss'
    }
  },
  {
    minWidth: '200px',
    prop: 'is18',
    label: '是否成年',
    formEle: {
      formType: 'switch'
    }
  },
  {
    minWidth: '200px',
    prop: 'address',
    label: '地址',
    formEle: {
      formType: 'cascader',
      options: [
        {
          value: '110000',
          label: '北京市',
          children: [
            {
              value: '110100',
              label: '北京市',
              children: [
                {
                  value: '110101',
                  label: '东城区'
                },
                {
                  value: '110102',
                  label: '西城区'
                },
                {
                  value: '110105',
                  label: '朝阳区'
                }
              ]
            }
          ]
        },
        {
          value: '310000',
          label: '上海市',
          children: [
            {
              value: '310100',
              label: '上海市',
              children: [
                {
                  value: '310101',
                  label: '黄浦区'
                },
                {
                  value: '310104',
                  label: '徐汇区'
                },
                {
                  value: '310105',
                  label: '长宁区'
                }
              ]
            }
          ]
        },
        {
          value: '500000',
          label: '重庆市',
          children: [
            {
              value: '500100',
              label: '重庆市',
              children: [
                {
                  value: '500101',
                  label: '万州区'
                },
                {
                  value: '500102',
                  label: '涪陵区'
                },
                {
                  value: '500103',
                  label: '渝中区'
                }
              ]
            }
          ]
        },
        {
          value: '510000',
          label: '四川省',
          children: [
            {
              value: '510100',
              label: '成都市',
              children: [
                {
                  value: '510104',
                  label: '锦江区'
                },
                {
                  value: '510105',
                  label: '青羊区'
                },
                {
                  value: '510106',
                  label: '金牛区'
                }
              ]
            },
            {
              value: '510300',
              label: '自贡市',
              children: [
                {
                  value: '510302',
                  label: '自流井区'
                },
                {
                  value: '510303',
                  label: '贡井区'
                },
                {
                  value: '510304',
                  label: '大安区'
                }
              ]
            }
          ]
        }
      ]
    }
  }
]

export const columList2 = [
  {
    minWidth: '200px',
    prop: 'is18',
    label: '是否成年',
    formEle: {
      formType: 'switch'
    }
  },
  {
    minWidth: '250px',
    prop: 'loves',
    label: '爱好'
  }
]

export const columList3 = [
  {
    prop: 'name',
    label: '姓名',
    minWidth: '200px',
    formEle: {
      formType: 'input',
      maxlength: 10,
      showWordLimit: true,
      placeholder: '名字不要太长！',
      showRequiredIcon: true,
      rules: [
        {
          required: true,
          message: '请输入姓名',
          trigger: 'blur'
        },
        {
          pattern: /^[\u4E00-\u9FA5]{1,10}$/,
          message: '姓名只能为中文',
          trigger: 'change'
        }
      ]
    }
  },
  {
    minWidth: '220px',
    prop: 'age',
    label: '年龄',
    formEle: {
      formType: 'inputNumber',
      placeholder: '0~120',
      showRequiredIcon: true,
      min: 0,
      max: 120,
      rules: {
        required: true,
        message: '请输入年龄',
        trigger: 'blur'
      }
    }
  },
  {
    minWidth: '200px',
    prop: 'loves',
    label: '爱好',
    formEle: {
      formType: 'select',
      filterable: true,
      allowCreate: true,
      options: [
        { label: '吃饭', value: 'eat' },
        { label: '睡觉觉', value: 'sleep' },
        { label: '打豆豆', value: 'ddd' }
      ]
    }
  },
  {
    minWidth: '200px',
    prop: 'loveNumber',
    label: '喜欢的数字',
    formEle: {
      formType: 'muchSelect',
      options: getOptions(),
      multiple: true,
      allowCreate: true,
      showListNum: 10,
      loadListNum: 50
    }
  },
  {
    minWidth: '300px',
    prop: 'birthday',
    label: '出生日期',
    formEle: {
      formType: 'datePicker',
      type: 'date',
      valueFormat: 'yyyy-MM-dd',
      format: 'yyyy-MM-dd',
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now()
        },
        shortcuts: [
          {
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date())
            }
          },
          {
            text: '昨天',
            onClick(picker) {
              const date = new Date()
              date.setTime(date.getTime() - 3600 * 1000 * 24)
              picker.$emit('pick', date)
            }
          },
          {
            text: '一周前',
            onClick(picker) {
              const date = new Date()
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
              picker.$emit('pick', date)
            }
          }
        ]
      }
    }
  },
  {
    minWidth: '300px',
    prop: 'birthdayTime',
    label: '出生时间',
    formEle: {
      formType: 'timeSelect',
      editable: false,
      pickerOptions: {
        start: '00:00',
        step: '01:00',
        end: '24:00'
      }
    }
  },
  {
    minWidth: '300px',
    prop: 'codeDate',
    label: '证件有效期',
    formEle: {
      formType: 'datePicker',
      type: 'datetimerange',
      valueFormat: 'yyyy-MM-dd',
      format: 'yyyy-MM-dd',
      rangeSeparator: '/',
      pickerOptions: {
        shortcuts: [
          {
            text: '最近一周',
            onClick(picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
              picker.$emit('pick', [start, end])
            }
          },
          {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
              picker.$emit('pick', [start, end])
            }
          },
          {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
              picker.$emit('pick', [start, end])
            }
          }
        ]
      }
    }
  },
  {
    minWidth: '400px',
    prop: 'leaveTime',
    label: '离院时间',
    formEle: {
      rules: { required: true, message: '请选择离院时间', trigger: 'change' },
      formType: 'datePicker',
      type: 'datetimerange',
      valueFormat: 'yyyy-MM-dd HH:mm:ss',
      pickerOptions: {
        shortcuts: [
          {
            text: '最近一周',
            onClick(picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
              picker.$emit('pick', [start, end])
            }
          },
          {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
              picker.$emit('pick', [start, end])
            }
          },
          {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
              picker.$emit('pick', [start, end])
            }
          }
        ]
      }
    }
  },
  {
    minWidth: '200px',
    prop: 'is18',
    label: '是否成年',
    formEle: {
      formType: 'switch',
      activeText: '已成年',
      inactiveText: '未成年',
      activeValue: '0',
      inactiveValue: '1',
      rules: { required: true, message: '请选择是否成年', trigger: 'change' }
    }
  },
  {
    minWidth: '200px',
    prop: 'address',
    label: '地址',
    formEle: {
      formType: 'cascader',
      props: {
        checkStrictly: true,
        multiple: true
      },
      rules: { required: true, message: '请输入地址', trigger: 'change' },
      separator: ' - ',
      options: [
        {
          value: '110000',
          label: '北京市',
          children: [
            {
              value: '110100',
              label: '北京市',
              disabled: true,
              children: [
                {
                  value: '110101',
                  label: '东城区'
                },
                {
                  value: '110102',
                  label: '西城区'
                },
                {
                  value: '110105',
                  label: '朝阳区'
                }
              ]
            }
          ]
        },
        {
          value: '310000',
          label: '上海市',
          children: [
            {
              value: '310100',
              label: '上海市',
              children: [
                {
                  value: '310101',
                  label: '黄浦区'
                },
                {
                  value: '310104',
                  label: '徐汇区'
                },
                {
                  value: '310105',
                  label: '长宁区'
                }
              ]
            }
          ]
        },
        {
          value: '500000',
          label: '重庆市',
          children: [
            {
              value: '500100',
              label: '重庆市',
              children: [
                {
                  value: '500101',
                  label: '万州区'
                },
                {
                  value: '500102',
                  label: '涪陵区'
                },
                {
                  value: '500103',
                  label: '渝中区'
                }
              ]
            }
          ]
        },
        {
          value: '510000',
          label: '四川省',
          children: [
            {
              value: '510100',
              label: '成都市',
              children: [
                {
                  value: '510104',
                  label: '锦江区'
                },
                {
                  value: '510105',
                  label: '青羊区'
                },
                {
                  value: '510106',
                  label: '金牛区'
                }
              ]
            },
            {
              value: '510300',
              label: '自贡市',
              children: [
                {
                  value: '510302',
                  label: '自流井区'
                },
                {
                  value: '510303',
                  label: '贡井区'
                },
                {
                  value: '510304',
                  label: '大安区'
                }
              ]
            }
          ]
        }
      ]
    }
  }
]

export const columList4 = [
  {
    prop: 'name',
    label: '姓名',
    minWidth: '200px',
    formEle: {
      formType: 'input',
      rules: [{ required: true, message: '请输入姓名', trigger: 'change' }]
    }
  },
  {
    minWidth: '220px',
    prop: 'age',
    label: '年龄',
    formEle: {
      formType: 'inputNumber',
      rules: { required: true, message: '请输入年龄', trigger: 'change' }
    }
  }
]

function getOptions() {
  return Array.from({ length: 10000 }, (item, index) => {
    return { label: index, value: index }
  })
}

export const code1 = `
<template>
  <ClTableForm
  v-model="formData"
  :columList="columList"
  ref="ClTableForm"
  >
  </ClTableForm>
</template>
<script>
  export default {
    data() {
      return: {
        formData: [],
        columList: [
          {
            prop: 'name',
            label: '姓名',
            minWidth: '200px',
            formEle: {
              formType: 'input',
              rules: [{ required: true, message: '请输入姓名', trigger: 'change' }]
            }
          },
          {
            minWidth: '200px',
            prop: 'age',
            label: '年龄',
            formEle: {
              formType: 'inputNumber',
              rules: { required: true, message: '请输入年龄', trigger: 'change' }
            }
          },
          {
            minWidth: '300px',
            prop: 'birthday',
            label: '出生日期',
            formEle: {
              formType: 'datePicker',
              valueFormat: 'yyyy-MM-dd',
              format: 'yyyy-MM-dd'
            }
          },
          {
            minWidth: '200px',
            prop: 'loves',
            label: '爱好',
            formEle: {
              formType: 'select',
              options: [
                { label: '吃饭', value: 'eat' },
                { label: '睡觉觉', value: 'sleep' },
                { label: '打豆豆', value: 'ddd' }
              ]
            }
          },
          {
            minWidth: '200px',
            prop: 'loveNumber',
            label: '喜欢的数字',
            formEle: {
              formType: 'muchSelect',
              options: this.getOptions()
            }
          },
          {
            minWidth: '200px',
            prop: 'is18',
            label: '是否成年',
            formEle: {
              formType: 'switch',
              rules: {
                required: true,
                message: '请选择是否成年',
                trigger: 'change'
              }
            }
          },
          {
            minWidth: '200px',
            prop: 'address',
            label: '地址',
            formEle: {
              formType: 'cascader',
              options: [
                {
                  value: '110000',
                  label: '北京市',
                  children: [
                    {
                      value: '110100',
                      label: '北京市',
                      children: [
                        {
                          value: '110101',
                          label: '东城区'
                        },
                        {
                          value: '110102',
                          label: '西城区'
                        },
                        {
                          value: '110105',
                          label: '朝阳区'
                        }
                      ]
                    }
                  ]
                },
                {
                  value: '310000',
                  label: '上海市',
                  children: [
                    {
                      value: '310100',
                      label: '上海市',
                      children: [
                        {
                          value: '310101',
                          label: '黄浦区'
                        },
                        {
                          value: '310104',
                          label: '徐汇区'
                        },
                        {
                          value: '310105',
                          label: '长宁区'
                        }
                      ]
                    }
                  ]
                },
                {
                  value: '500000',
                  label: '重庆市',
                  children: [
                    {
                      value: '500100',
                      label: '重庆市',
                      children: [
                        {
                          value: '500101',
                          label: '万州区'
                        },
                        {
                          value: '500102',
                          label: '涪陵区'
                        },
                        {
                          value: '500103',
                          label: '渝中区'
                        }
                      ]
                    }
                  ]
                },
                {
                  value: '510000',
                  label: '四川省',
                  children: [
                    {
                      value: '510100',
                      label: '成都市',
                      children: [
                        {
                          value: '510104',
                          label: '锦江区'
                        },
                        {
                          value: '510105',
                          label: '青羊区'
                        },
                        {
                          value: '510106',
                          label: '金牛区'
                        }
                      ]
                    },
                    {
                      value: '510300',
                      label: '自贡市',
                      children: [
                        {
                          value: '510302',
                          label: '自流井区'
                        },
                        {
                          value: '510303',
                          label: '贡井区'
                        },
                        {
                          value: '510304',
                          label: '大安区'
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          }
        ]
      }
    },
    methods: {
      addRow(refName) {
        this.$refs[refName].addRow()
      },
      getOptions() {
        return Array.from({ length: 10000 }, (item, index) => {
          return { label: index, value: index }
        })
      }
    }
  }
</script>
`
export const code2 = `
<template>
  <ClTableForm
  v-model="formData"
  :columList="columList"
  :btnCol="{ minWidth: 250 }"
  ref="ClTableForm"
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
</template>
<script>
  export default {
    data() {
      return: {
        formData: [],
        columList: [
          {
            minWidth: '200px',
            prop: 'is18',
            label: '是否成年',
            formEle: {
              formType: 'switch'
            }
          },
          {
            minWidth: '250px',
            prop: 'loves',
            label: '是否成年'
          }
        ]
      }
    },
    methods: {
      methods: {
        addRow(refName) {
          this.$refs[refName].addRow({ loves: [] })
        },
      },
      selfBtn() {
        this.$message('点击了自定义按钮！')
      }
    }
  }
</script>
`
export const code3 = `
<template>
  <ClTableForm
  v-model="formData"
  :columList="columList"
  ref="ClTableForm"
  >
  </ClTableForm>
</template>
<script>
  export default {
    data() {
      return: {
        formData: [],
        columList: [
          {
            prop: 'name',
            label: '姓名',
            minWidth: '200px',
            formEle: {
              formType: 'input',
              maxlength: 10,
              showWordLimit: true,
              placeholder: '名字不要太长！',
              rules: [
                {
                  required: true,
                  message: '请输入姓名',
                  trigger: 'blur'
                },
                {
                  pattern: /^[\u4E00-\u9FA5]{1,10}$/,
                  message: '姓名只能为中文',
                  trigger: 'change'
                }
              ]
            }
          },
          {
            minWidth: '220px',
            prop: 'age',
            label: '年龄',
            formEle: {
              formType: 'inputNumber',
              showWordLimit: true,
              placeholder: '0~120',
              min: 0,
              max: 120,
              rules: {
                required: true,
                message: '请输入年龄',
                trigger: 'blur'
              }
            }
          },
          {
            minWidth: '200px',
            prop: 'loves',
            label: '爱好',
            formEle: {
              formType: 'select',
              filterable: true,
              allowCreate: true,
              options: [
                { label: '吃饭', value: 'eat' },
                { label: '睡觉觉', value: 'sleep' },
                { label: '打豆豆', value: 'ddd' }
              ]
            }
          },
          {
            minWidth: '200px',
            prop: 'loveNumber',
            label: '喜欢的数字',
            formEle: {
              formType: 'muchSelect',
              options: this.getOptions(),
              multiple: true,
              allowCreate: true,
              showListNum: 10,
              loadListNum: 50
            }
          },
          {
            minWidth: '300px',
            prop: 'birthday',
            label: '出生日期',
            formEle: {
              formType: 'datePicker',
              type: 'date',
              valueFormat: 'yyyy-MM-dd',
              format: 'yyyy-MM-dd',
              pickerOptions: {
                disabledDate(time) {
                  return time.getTime() > Date.now()
                },
                shortcuts: [
                  {
                    text: '今天',
                    onClick(picker) {
                      picker.$emit('pick', new Date())
                    }
                  },
                  {
                    text: '昨天',
                    onClick(picker) {
                      const date = new Date()
                      date.setTime(date.getTime() - 3600 * 1000 * 24)
                      picker.$emit('pick', date)
                    }
                  },
                  {
                    text: '一周前',
                    onClick(picker) {
                      const date = new Date()
                      date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
                      picker.$emit('pick', date)
                    }
                  }
                ]
              }
            }
          },
          {
            minWidth: '300px',
            prop: 'birthdayTime',
            label: '出生时间',
            formEle: {
              formType: 'timeSelect',
              editable: false,
              pickerOptions: {
                start: '00:00',
                step: '01:00',
                end: '24:00'
              }
            }
          },
          {
            minWidth: '300px',
            prop: 'codeDate',
            label: '证件有效期',
            formEle: {
              formType: 'datePicker',
              type: 'datetimerange',
              valueFormat: 'yyyy-MM-dd',
              format: 'yyyy-MM-dd',
              rangeSeparator: '/',
              pickerOptions: {
                shortcuts: [
                  {
                    text: '最近一周',
                    onClick(picker) {
                      const end = new Date()
                      const start = new Date()
                      start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
                      picker.$emit('pick', [start, end])
                    }
                  },
                  {
                    text: '最近一个月',
                    onClick(picker) {
                      const end = new Date()
                      const start = new Date()
                      start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
                      picker.$emit('pick', [start, end])
                    }
                  },
                  {
                    text: '最近三个月',
                    onClick(picker) {
                      const end = new Date()
                      const start = new Date()
                      start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
                      picker.$emit('pick', [start, end])
                    }
                  }
                ]
              }
            }
          },
          {
            minWidth: '400px',
            prop: 'leaveTime',
            label: '离院时间',
            formEle: {
              formType: 'datePicker',
              type: 'datetimerange',
              valueFormat: 'yyyy-MM-dd HH:mm:ss',
              pickerOptions: {
                shortcuts: [
                  {
                    text: '最近一周',
                    onClick(picker) {
                      const end = new Date()
                      const start = new Date()
                      start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
                      picker.$emit('pick', [start, end])
                    }
                  },
                  {
                    text: '最近一个月',
                    onClick(picker) {
                      const end = new Date()
                      const start = new Date()
                      start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
                      picker.$emit('pick', [start, end])
                    }
                  },
                  {
                    text: '最近三个月',
                    onClick(picker) {
                      const end = new Date()
                      const start = new Date()
                      start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
                      picker.$emit('pick', [start, end])
                    }
                  }
                ]
              }
            }
          },
          {
            minWidth: '200px',
            prop: 'is18',
            label: '是否成年',
            formEle: {
              formType: 'switch',
              activeText: '已成年',
              inactiveText: '未成年',
              activeValue: '0',
              inactiveValue: '1'
            }
          },
          {
            minWidth: '200px',
            prop: 'address',
            label: '地址',
            formEle: {
              formType: 'cascader',
              props: {
                checkStrictly: true,
                multiple: true
              },
              separator: ' - ',
              options: [
                {
                  value: '110000',
                  label: '北京市',
                  children: [
                    {
                      value: '110100',
                      label: '北京市',
                      disabled: true,
                      children: [
                        {
                          value: '110101',
                          label: '东城区'
                        },
                        {
                          value: '110102',
                          label: '西城区'
                        },
                        {
                          value: '110105',
                          label: '朝阳区'
                        }
                      ]
                    }
                  ]
                },
                {
                  value: '310000',
                  label: '上海市',
                  children: [
                    {
                      value: '310100',
                      label: '上海市',
                      children: [
                        {
                          value: '310101',
                          label: '黄浦区'
                        },
                        {
                          value: '310104',
                          label: '徐汇区'
                        },
                        {
                          value: '310105',
                          label: '长宁区'
                        }
                      ]
                    }
                  ]
                },
                {
                  value: '500000',
                  label: '重庆市',
                  children: [
                    {
                      value: '500100',
                      label: '重庆市',
                      children: [
                        {
                          value: '500101',
                          label: '万州区'
                        },
                        {
                          value: '500102',
                          label: '涪陵区'
                        },
                        {
                          value: '500103',
                          label: '渝中区'
                        }
                      ]
                    }
                  ]
                },
                {
                  value: '510000',
                  label: '四川省',
                  children: [
                    {
                      value: '510100',
                      label: '成都市',
                      children: [
                        {
                          value: '510104',
                          label: '锦江区'
                        },
                        {
                          value: '510105',
                          label: '青羊区'
                        },
                        {
                          value: '510106',
                          label: '金牛区'
                        }
                      ]
                    },
                    {
                      value: '510300',
                      label: '自贡市',
                      children: [
                        {
                          value: '510302',
                          label: '自流井区'
                        },
                        {
                          value: '510303',
                          label: '贡井区'
                        },
                        {
                          value: '510304',
                          label: '大安区'
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          }
        ]
      }
    },
    methods: {
      addRow(refName) {
        this.$refs[refName].addRow()
      },
      getOptions() {
        return Array.from({ length: 10000 }, (item, index) => {
          return { label: index, value: index }
        })
      }
    }
  }
</script>
`
export const code4 = `
<template>
  <ClTableForm
    v-model="formData"
    :columList="columList"
    editOpprtunity="clickRow"
    saveOpportunity="leaveRow"
    :isBtn="false"
    >
  </ClTableForm>
</template>
<script>
  export default {
    data() {
      return: {
        formData: [],
        columList: [
          {
            prop: 'name',
            label: '姓名',
            minWidth: '200px',
            formEle: {
              formType: 'input',
              rules: [{ required: true, message: '请输入姓名', trigger: 'change' }]
            }
          },
          {
            minWidth: '220px',
            prop: 'age',
            label: '年龄',
            formEle: {
              formType: 'inputNumber',
              rules: { required: true, message: '请输入年龄', trigger: 'change' }
            }
          }
        ]
      }
    },
    methods: {
      addRow(refName) {
        this.$refs[refName].addRow()
      },
    }
  }
</script>
`
