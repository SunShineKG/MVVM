import { getType } from './utils'
import initData from './initData'

export const init = Vue => {

  Vue.prototype._init = function(options) {
 
    let data = getType(options.data) === 'function'
                ? (options.data)()
                : options.data || {},
        self = this
  
    self._data = data
    initData(self)
  }
}