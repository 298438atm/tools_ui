/**
 * 函数名称
 * @param {Vm} currentVm - 当前vue组件实例
 */
export function dispatch(currentVm, componentName) {
  let parentVm = currentVm.$parent
  let refList = checkRefs(parentVm, componentName)
  while (!refList && parentVm) {
    parentVm = parentVm.$parent
    if (!parentVm) {
      return
    }
    refList = checkRefs(parentVm, componentName)
  }
  if (!parentVm) return false
  refList.forEach((item) => {
    if (item._uid === currentVm._uid) {
      parentVm.$refs[item.resName] = currentVm.$refs[componentName]
    }
  })
}

function checkRefs(parentVm, componentName) {
  if (Object.keys(parentVm.$refs).length === 0) {
    return false
  }
  let resList = []
  for (const resName in parentVm.$refs) {
    if (Object.hasOwnProperty.call(parentVm.$refs, resName)) {
      const element = parentVm.$refs[resName]
      const _uid = element._uid
      if (element._isVue && element.$options.name === componentName) {
        resList.push({ resName, _uid })
      }
    }
  }
  return resList.length > 0 ? resList : false
}
