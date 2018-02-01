import { isEmptyObject } from './utils'

const observer = (obj, callback) => {

  if (isEmptyObject(obj)) {
    return
  }
  Object.keys(obj).forEach(key => {
    Object.defineProperty(obj, key, {
      enumerable: true,
      configurable: true,
      get: () => {

      },
      set: newVal => {
        callback(newVal);/*订阅者收到消息的回调*/
      }
    })
  })
}

const proxy = () => {
  
}

export default observer