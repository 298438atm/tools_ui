export default function install(Vue) {
  Vue.directive('clickoutside', {
    bind(el, { value: fun, arg }) {
      arg = arg || 'click'
      document.addEventListener(arg, handleFun.bind(null, el, fun))
    },
    unbind(el, { arg }) {
      document.removeEventListener(arg, handleFun)
    }
  })
}

function handleFun(el, fun, e) {
  let flag = el.contains(e.target)
  if (!flag) {
    fun(e.target)
  }
}
