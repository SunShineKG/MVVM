import Vue from '../src/index'

let daa = {ss: 'ss'}
let vue = new Vue({
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

console.log(vue.dd)

vue.dd = daa
console.log(vue.dd)
// vue.data.b.name = 'new name'

