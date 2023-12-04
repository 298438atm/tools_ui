import { Message } from 'element-ui'

/**
 * 获取传入参数的数据类型
 * @param {any} data - 第一个数字
 * @returns {string} - 传入参数的数据类型
 */
export const getDataType = function (data) {
  return Object.prototype.toString.call(data).slice(8, -1)
}

/**
 * 校验数据类型
 * @param {any} data - 需要校验类型的数据
 * @param {string | Array<string>} type - 判断的数据类型
 * @param {boolean} isStrict - 是否使用严格模式判断，区分大小写
 * @returns {boolean} - 通过校验
 */
export const checkDataType = function (data, type, isStrict = false) {
  let dataType = getDataType(data)
  let possibleType = JSON.parse(JSON.stringify(type))
  if (!isStrict) {
    dataType = dataType.toLowerCase()
    possibleType =
      typeof type === 'string'
        ? type.toLowerCase()
        : type.map((item) => item.toLowerCase())
  }
  if (typeof type === 'string') {
    return dataType === possibleType
  } else {
    return possibleType.includes(dataType)
  }
}

// 判断数据类型是否为空
export const checkEmpty = function (value) {
  return value === null || value === undefined || value === ''
}

// 复制数据
export const copyData = async function (data) {
  if (navigator.clipboard) {
    // 如果 `navigator.clipboard` 存在，则使用新方法
    navigator.clipboard
      .writeText(data)
      .then(function () {
        Message.success('复制成功！')
      })
      .catch(function (error) {
        Message.success('复制失败！' + error.message)
      })
  } else {
    // 否则使用传统的方法
    var textArea = document.createElement('textarea')
    textArea.value = data
    textArea.style.top = '0'
    textArea.style.left = '0'
    textArea.style.position = 'fixed'
    document.body.appendChild(textArea)
    textArea.focus()
    textArea.select()
    try {
      var success = document.execCommand('copy')
      if (success) {
        Message.success('复制成功！')
      } else {
        Message.success('复制失败！')
      }
    } catch (error) {
      Message.success('复制失败！' + error.message)
    } finally {
      document.body.removeChild(textArea)
    }
  }
}
