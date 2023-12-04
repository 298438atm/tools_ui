/**
 * 函数名称
 * @param {Vm} currentVm - 当前vue组件实例
 * @param {string} refName - 当前组件名称
 */
export function dispatch(currentVm, refName) {
  let parentVm = currentVm.$parent
  const currentVmName = currentVm.$options.name
  let refList = checkRefs(parentVm, currentVmName)
  while (!refList && parentVm) {
    parentVm = parentVm.$parent
    if (!parentVm) {
      return
    }
    refList = checkRefs(parentVm, currentVmName)
  }
  if (!parentVm) return false
  refList.forEach((item) => {
    if (item._uid === currentVm._uid) {
      parentVm.$refs[item.resName] = currentVm.$refs[refName]
    }
  })
}

function checkRefs(parentVm, currentVmName) {
  if (Object.keys(parentVm.$refs).length === 0) {
    return false
  }
  let resList = []
  for (const resName in parentVm.$refs) {
    if (Object.hasOwnProperty.call(parentVm.$refs, resName)) {
      const element = parentVm.$refs[resName]
      if (!element) continue
      const _uid = element._uid
      if (element._isVue && element.$options.name === currentVmName) {
        resList.push({ resName, _uid })
      }
    }
  }
  return resList.length > 0 ? resList : false
}
