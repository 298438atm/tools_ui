const plugins = function (Vue) {
  const requireAll = require.context('../Custom', true, /\.vue$/)
  const modulList = requireAll.keys().map((item) => requireAll(item))
  modulList.forEach(({ default: vm }) => {
    if (!vm.noInstall) {
      Vue.component(vm.name, vm)
    }
  })
}
export default plugins
