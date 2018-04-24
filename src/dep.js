class Dep {
  constructor() {
    this.subs = []
  }

  addSub (sub) {
    if (this.subs.includes(sub)) return
    this.subs.push(sub)
  }

  // removeSub (sub) {
  //   let index = this.subs.indexOf(sub);
  //   if (index > -1) {
  //     this.subs.splice(index, 1)
  //   }
  // }

  notify () {
    this.subs.forEach(sub => {
      sub.update()
    })
  }
}

export default Dep;