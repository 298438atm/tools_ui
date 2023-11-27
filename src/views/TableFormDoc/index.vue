<template>
  <div>
    <ClTableForm v-model="formData" :columList="columList"></ClTableForm>
  </div>
</template>

<script>
import ClTableForm from '@/components/TableForm/index.vue'

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
      formData: [
        {
          name: '付峻玲',
          age: 24,
          birthday: '1999-10-05',
          loves: '1',
          loves2: 100,
          switch: 1
        },
        {
          name: '付峻玲2',
          age: 24,
          birthday: '1999-10-05',
          loves: '1',
          loves2: 100
        }
      ],
      columList: [
        {
          prop: 'name',
          label: '姓名',
          width: '200px',
          formEle: {
            formType: 'input',
            rules: { required: true, message: '请输入姓名', trigger: 'change' }
          }
        },
        {
          width: '200px',
          prop: 'age',
          label: '年龄',
          formEle: {
            formType: 'inputNumber',
            rules: { required: true, message: '请输入年龄', trigger: 'change' }
          }
        },
        {
          width: '300px',
          prop: 'birthday',
          label: '出生日期',
          formEle: {
            formType: 'date',
            valueFormat: 'yyyy-MM-dd',
            format: 'yyyy-MM-dd'
          }
        },
        {
          width: '200px',
          prop: 'loves',
          label: '爱好',
          formEle: {
            formType: 'select',
            options: [{ label: '第一条数据', value: '1' }]
          }
        },
        {
          width: '200px',
          prop: 'loves2',
          label: '爱好2',
          formEle: {
            formType: 'muchSelect',
            options: this.getOptions()
          }
        },
        {
          width: '200px',
          prop: 'switch',
          label: 'switch',
          formEle: {
            formType: 'switch',
            activeText: '是',
            activeValue: 1,
            inactiveText: '否',
            inactiveValue: 0
          }
        }
      ]
    }
  },
  methods: {
    getOptions() {
      return Array.from({ length: 10000 }, (item, index) => {
        return { label: `第${index + 1}条数据`, value: index + 1 }
      })
    }
  }
}
</script>

<style lang="less" scoped></style>
