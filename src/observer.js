import { isEmptyObject, getType } from './utils'
import Dep from './dep'


export default function observe(obj) {

  if (isEmptyObject(obj)) {
    return
  }

  
  Object.keys(obj).forEach(key => {
    const dep = new Dep()
    let val = obj[key]
    Object.defineProperty(obj, key, {
      enumerable: true,
      configurable: true,
      get: function() {
        if (Dep.target) {
          dep.addSub(Dep.target);
        }
        return val
      },
      set: function(newVal) {
        if (val === newVal) {
          return;
        }
        // 通知数据变更
        dep.notify();
        val = newVal
      }
    })
    if (getType(val) === 'object') return observe(val)
  })

}