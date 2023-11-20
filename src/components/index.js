const components = []
// const requireAll = require.context("@/components", true, /\.vue$/)
// const modulList = requireAll.keys().map((item) => requireAll(item))
// modulList.forEach(({ default: vm }) => {
//   components.push(vm)
// })
import MuchSelect from "./MuchSelect/index.vue"
components.push(MuchSelect)
const install = function (Vue) {
  // 遍历组件列表并注册全局组件
  components.forEach((component) => {
    Vue.component("Cl" + component.name, component) //component.name 此处使用到组件vue文件中的 name 属性
  })
}

if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue)
}
export default { install, ...components }
