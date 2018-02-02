import Dep from './dep'

class Watcher {
  constructor (vm, expOrFn, cb, options) {
      this.cb = cb;
      this.vm = vm;

      /*在这里将观察者本身赋值给全局的target，只有被target标记过的才会进行依赖收集*/
      Dep.target = this;

      /*触发渲染操作进行依赖收集*/
      this.cb.call(this.vm);
  }

  update () {
      this.cb.call(this.vm);
  }
}