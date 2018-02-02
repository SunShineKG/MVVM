import { init } from './init'
import Compile from './compiler'

export default class Vue {
  
  constructor(options) {
    this._init(options);
  }

}

init(Vue)