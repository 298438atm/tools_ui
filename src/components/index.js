let components = []
const requireAll = require.context("@/components", true, /index\.vue$/)
const modulList = requireAll.keys().map((item) => requireAll(item))
modulList.forEach(({ default: vm }) => {
  vm.npmUp ? components.push(vm) : null
})

// 全局引入
const install = function (Vue) {
  // 遍历组件列表并注册全局组件
  components.forEach((component) => {
    //component.name 此处使用到组件vue文件中的 name 属性
    Vue.component("Cl" + component.name, component)
  })
}

let exportData = {
  install,
}

// 适配单个引入
components.forEach((component) => {
  component.install = function (Vue) {
    Vue.component("Cl" + component.name, component)
  }
  exportData[component.name] = component
})

export default exportData
