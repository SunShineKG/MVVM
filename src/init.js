import { getType } from './utils'
import initData from './initData'
import Watcher from './watcher'

export const init = Vue => {

  Vue.prototype._init = function(options) {
 
    let data = getType(options.data) === 'function'
                ? (options.data)()
                : options.data || {},
        self = this
  
    self._data = data
    initData(self)
    // new Watcher()
  }
}