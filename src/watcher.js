import Dep from './dep'

export default class Watcher {
  constructor() {
    Dep.target = this
  }
  update() {
    console.log("视图更新啦lala")
  }
}
Dep.target = null