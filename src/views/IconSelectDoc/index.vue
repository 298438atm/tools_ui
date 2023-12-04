<template>
  <div>
    <h3>IconSelect</h3>
    <p>用于图标的的选择操作</p>
    <h4>基础原组件</h4>
    <el-link
      href="https://element.eleme.cn/#/zh-CN/component/dropdown"
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
          >
          </ClIconSelect>
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
          >
          </ClIconSelect>
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
      当然，我们想到了您可能不满足于elemet-ui的所有图标，所以我们也支持您从
      <el-link href="https://www.iconfont.cn/" type="primary" target="_blank"
        >iconfont</el-link
      >
      里面使用<code>Font class</code>的方式去进行图标导入
    </p>
    <ul>
      <li>首先进入<code>iconfont</code>选好自己的图标加进自己的项目</li>
      <li>
        然后使用<code>Font class</code>的方式生成线上地址
        （这里我更推荐将线上地址的css文件存储在本地，毕竟iconfont平台是不承诺服务的稳定性的，所有我们最好自己直接引入本地文件。）
      </li>
      <li>
        然接着将在线地址或者本地路径进行引入，这里引入可参考
        <el-link
          href="https://blog.csdn.net/qq_44473483/article/details/134596494"
          type="primary"
          taget="_blank"
          >@import使用</el-link
        >
      </li>
      <li>然后将所有icon的类复制到数组传给<code>iconList</code>属性即可</li>
      <li>
        组件内部会根据类型判断是<code>element-ui</code>的图标还是<code>iconfont</code>的图标进行展示
      </li>
    </ul>
    <CodeTemplate>
      <ClIconSelect
        v-model="val5"
        :iconList="iconList"
        style="width: 300px"
      ></ClIconSelect>
      <template #codeText
        >使用<code>iconList</code>属性即可自定义图标内容。
      </template>
      <template #codeShow>
        <pre>{{ code2 }}</pre>
      </template>
    </CodeTemplate>
    <CustomAttrTable type="attr" :tableData="attrList"></CustomAttrTable>
    <CustomAttrTable type="method" :tableData="methodList"></CustomAttrTable>
    <CustomAttrTable
      typeShow="插槽列表"
      type="slot"
      :tableData="slotList"
    ></CustomAttrTable>
  </div>
</template>

<script>
import { code1, code2 } from './code'
export default {
  name: 'IconSelectDoc',
  data() {
    return {
      val1: 'el-icon-user-solid',
      val2: undefined,
      val3: undefined,
      val4: undefined,
      val5: undefined,
      code1: code1,
      code2: code2,
      iconList: ['icon-jiagongchang', 'icon-nongyerongdan', 'icon-guangfuban'],
      attrList: [
        {
          params: 'v-model',
          des: '绑定的值',
          type: 'string',
          select: '—',
          default: '—'
        },
        {
          params: 'iconList',
          des: '自定义的图标列表',
          type: 'array',
          select: '—',
          default: '[]'
        },
        {
          params: 'showSlot',
          des: '是否展示选中图标，设置false则不展示图标，prefix，suffix，prepend，append会在input对应的插槽位置展示，设该值后就不能在设置相同名称的插槽',
          type: 'string / boolean',
          select: 'false / prefix / suffix / prepend / append',
          default: 'prepend'
        },
        {
          params: 'maxWidth',
          des: '图标列表最大宽度',
          type: 'string',
          select: '—',
          default: '500px'
        },
        {
          params: 'maxHeight',
          des: '图标列表最大高度',
          type: 'string',
          select: '—',
          default: '300px'
        },
        {
          params: 'placeholder',
          des: '输入框占位文本',
          type: 'string',
          select: '—',
          default: '请选择图标'
        },
        {
          params: 'clearable',
          des: '是否可清空',
          type: 'boolean',
          select: '—',
          default: 'false'
        },
        {
          params: 'disabled',
          des: '禁用',
          type: 'boolean',
          select: 'true / false',
          default: 'false'
        },
        {
          params: 'selectonly',
          des: '是否只能选择，为false时可以手动输入，可以配合filterable为true进行查询操作，但是选中后列表就保留选中的图标',
          type: 'boolean',
          select: 'true / false',
          default: 'true'
        },
        {
          params: 'filterable',
          des: '是否可搜索，需要关闭只读操作，选中后列表只会有',
          type: 'boolean',
          select: 'true / false',
          default: 'false'
        },
        {
          params: 'size',
          des: '组件尺寸',
          type: 'string',
          select: 'medium / small / mini',
          default: 'medium'
        },
        {
          params: 'placement',
          des: '图标弹出位置',
          type: 'string',
          select:
            'top / top-start / top-end / bottom / bottom-start / bottom-end',
          default: 'bottom-end'
        },
        {
          params: 'hide-on-click',
          des: '是否在点击菜单项后隐藏菜单',
          type: 'boolean',
          select: 'true / false',
          default: 'true'
        },
        {
          params: 'color',
          des: '图标显示颜色',
          type: 'boolean',
          select: '-',
          default: '#000'
        },
        {
          params: 'hoverColor',
          des: '鼠标移入时的图标颜色',
          type: 'boolean',
          select: '-',
          default: '##409eff'
        },
        {
          params: 'activeColor',
          des: '选中图标的颜色',
          type: 'boolean',
          select: '-',
          default: '#fff'
        },
        {
          params: 'hoverBgkColor',
          des: '鼠标移入时的图标背景色',
          type: 'boolean',
          select: '-',
          default: '##fff'
        },
        {
          params: 'activeBgkColor',
          des: '选中图标的背景色',
          type: 'boolean',
          select: '-',
          default: '##409eff'
        }
      ],
      methodList: [
        {
          eventName: 'iconSelected',
          des: '选中图标时触发',
          cbParams: '选中的图标'
        },
        {
          eventName: 'iconChange',
          des: '图标变化时触发',
          cbParams: '变化的图标'
        },
        {
          eventName: 'blur',
          des: '在 Input 失去焦点时触发',
          cbParams: 'event'
        },
        {
          eventName: 'focus',
          des: '在 Input 获得焦点时触发',
          cbParams: 'event'
        },
        {
          eventName: 'change',
          des: '仅在输入框失去焦点或用户按下回车时触发',
          cbParams: '(value: string | number)'
        },
        {
          eventName: 'input',
          des: '在 Input 值改变时触发',
          cbParams: '(value: string | number)'
        },
        {
          eventName: 'clear',
          des: '在点击由 clearable 属性生成的清空按钮时触发',
          cbParams: '-'
        }
      ],
      slotList: [
        {
          slotName: 'prefix',
          des: '输入框头部内容',
          slotData: '-'
        },
        {
          slotName: 'suffix',
          des: '输入框尾部内容',
          slotData: '-'
        },
        {
          slotName: 'prepend',
          des: '输入框前置内容',
          slotData: '-'
        },
        {
          slotName: 'append',
          des: '输入框后置内容',
          slotData: '-'
        }
      ]
    }
  },
  methods: {}
}
</script>

<style lang="less" scoped>
@import 'http://at.alicdn.com/t/c/font_4340241_kiofyvb8zdd.css';

.el-col {
  margin-bottom: 10px;
}
li {
  font-size: 12px;
  margin-bottom: 10px;
}
</style>
