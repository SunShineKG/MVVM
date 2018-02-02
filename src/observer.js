import { isEmptyObject } from './utils'
import Dep from './dep'


const observer = (obj) => {

  if (isEmptyObject(obj)) {
    return
  }

  Object.keys(obj).forEach(key => {
    let val = obj[key]
    const dep = new Dep()    

    Object.defineProperty(obj, key, {
      enumerable: true,
      configurable: true,
      get: function() {
        if (Dep.target) {
          dep.depend();
        }

        return val;
      },
      set: function(newVal) {
        if (val === newVal || (newVal !== newVal && val !== val)) {
          return;
        }
        val = newVal;
        // 监听子属性
        childOb = observe(newVal);
        // 通知数据变更
        dep.notify();
      }
    })
  })

}



export default observer