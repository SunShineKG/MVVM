import Vue from '../src/index'
let daa = { ss: 'ss' }
let vue = new Vue({
  el: 'app',
  data() {
    return {
      a: 1,
      b: {
        name: 'ck',
        age: 20
      },
      dd: {}
    }
  }
})

console.log(vue.b.age)
console.log(vue.a)

vue.b.age = 4

