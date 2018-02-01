
// 检测数据类型
export function getType(obj) {

  return typeof obj === 'object'
          ? toString.call(obj)
          : typeof obj
}

// 检测对象是否为空
export function isEmptyObject (obj) {
  for (let n in obj) {
    return false
  }

  return true
}