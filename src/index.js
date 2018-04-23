import { init } from './init'
import Watcher from './watcher'
// import Compile from './compiler'

export default class Vue {
  constructor(options) {
    this._init(options)
    new Watcher()
  }
}

init(Vue)