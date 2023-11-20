<!-- 
    该组件用于处理大量下拉数据（几千上万条）导致页面卡顿的情况
    数据不多时不推荐使用，因为多了一些处理逻辑理论上来说会比el-select慢
 -->
<template>
  <el-select
    :value="value"
    :filter-method="selfFilter"
    filterable
    v-bind="$attrs"
    v-on="$listeners"
    ref="elSelectRef"
    @remove-tag="removeTag"
    @change="selectChange"
  >
    <el-option
      v-for="item in showOptions"
      :key="item[selectValue]"
      :value="item[selectValue]"
      :label="item[selectLabel]"
    ></el-option>
    <span ref="endOption"></span>
  </el-select>
</template>

<script>
export default {
  name: "MuchSelect",
  props: {
    value: null,
    // 接口拿到的所有数据
    options: {
      type: Array,
      default: () => [],
    },
    // 下拉label
    selectLabel: {
      type: String,
      default: "label",
    },
    // 用例进行存储的字段
    selectValue: {
      type: String,
      default: "value",
    },
    // 第一次展示的条数
    showListNum: {
      type: Number,
      default: 20,
    },
    // 一次加载的条数
    loadListNum: {
      type: Number,
      default: 20,
    },
  },
  data() {
    return {
      // 拷贝出的原生所有数据
      copyOriginalList: [],
      // 下拉渲染的数据
      showOptions: [],
      // 查询出的所有数据
      filterOption: [],
      // 触底元素
      endEle: null,
      // 用来判断是否为初始化观察者，此时不应该执行列表加载方法
      initObserver: true,
      // 观察者
      observer: null,
      // 是否处于查询
      isFilter: false,
    }
  },
  mounted() {
    this.$nextTick(() => {
      // console.log(this.$refs.elSelectRef)
      this.endEle = this.$refs.endOption
      this.createObserver()
    })
  },
  beforeDestroy() {
    this.delObserver()
  },
  computed: {
    curLength() {
      return this.showOptions.length
    },
  },
  methods: {
    // 初始化下拉列表
    initList() {
      this.isFilter = false
      this.filterOption = []
      if (this.value) {
        if (Array.isArray(this.value) && this.value.length > 0) {
          let ids = []
          let optionLength = this.copyOriginalList.length
          for (let index = 0; index < optionLength; index++) {
            const item = this.copyOriginalList[index]
            if (this.value.includes(item[this.selectValue])) {
              ids.push(index)
            }
            if (ids.length === optionLength) {
              break
            }
          }
          ids.forEach((i) => {
            this.copyOriginalList.splice(
              0,
              0,
              this.copyOriginalList.splice(i, 1)[0]
            )
          })
        } else if (["string", "number"].includes(typeof this.val)) {
          let index = this.copyOriginalList.findIndex(
            (item) => item[this.selectValue] === this.value
          )
          if (index >= 0) {
            this.copyOriginalList.splice(
              0,
              0,
              this.copyOriginalList.splice(index, 1)[0]
            )
          }
        }
      }
      this.showOptions = this.copyOriginalList.slice(0, this.showListNum)
    },
    // 创建观察器
    createObserver() {
      this.observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.addOption()
          }
        })
      })
      this.observer.observe(this.endEle)
    },
    // 销毁观察者
    delObserver() {
      if (this.observer) {
        this.observer.unobserve(this.endEle)
      }
    },
    selectChange(val) {
      this.$emit("input", val)
    },
    // 重写过滤方法
    selfFilter(val) {
      if (val) {
        this.isFilter = true
      } else {
        this.isFilter = false
        this.showOptions = []
        this.filterOption = []
      }
      // 如果需要使用filterMethod属性自定义搜索，需要返回一个值作为搜索后的结果接收。
      if (typeof this.$attrs.filterMethod === "function") {
        this.filterOption = this.$attrs.filterMethod(val)
      } else {
        // 默认按照输入的文本进行过滤
        this.filterOption = this.copyOriginalList.filter((item) =>
          item[this.selectLabel].includes(val)
        )
      }
      this.showOptions = this.filterOption.slice(0, this.showListNum)
    },
    // 到底部新加数据
    addOption() {
      let listArr = []
      if (this.isFilter) {
        listArr = this.filterOption
      } else {
        listArr = this.copyOriginalList
      }
      if (this.showOptions.length < listArr.length) {
        this.showOptions = this.showOptions.concat(
          listArr.slice(this.curLength, this.curLength + this.loadListNum)
        )
      }
    },
    // 多选模式下的移除操作
    removeTag(val) {
      let oldIndex = this.options.findIndex(
        (item) => item[this.selectValue] === val
      )
      let newIndex = this.copyOriginalList.findIndex(
        (item) => item[this.selectValue] === val
      )
      this.copyOriginalList.splice(
        oldIndex,
        0,
        this.copyOriginalList.splice(newIndex, 1)[0]
      )

      // 注意此刻下拉值并没有被完全删除，打印发现值还是未删除之前的值，删除操作应该是在调用该方法之后执行的
      // 所有使用nextTick将初始化操作放到下个队列里
      this.$nextTick(() => {
        this.initList()
      })
    },
  },
  watch: {
    options: {
      deep: true,
      immediate: true,
      handler(value) {
        // 将原生数据拷贝到本地
        this.copyOriginalList = JSON.parse(JSON.stringify(value))
        this.initList()
      },
    },
  },
}
</script>
