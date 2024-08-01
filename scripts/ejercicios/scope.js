// function makeCounter(n) {
//   let count = n
//   return {
//     increase: function() {
//       count++
//     },
//     decrease: function() {
//       count--
//     },
//     getCount: function() {
//       return count
//     },
//   }
// }
// ! emscript 6
class makeCounter {
  #count
  constructor(n) {
    this.#count = n
  }
  get count() {
    return this.#count
  }
  decrease() {
    this.#count -= 1
  }
  increase() {
    this.#count += 1
  }
}
// let counter = makeCounter(7)
let counter = new makeCounter(7)
// console.log('The count is:' + counter.getCount());
console.log('The count is:' + counter.count);
counter.increase()
console.log('The count is:' + counter.count);
counter.decrease()
counter.decrease()
counter.decrease()
counter.decrease()
console.log('The count is:' + counter.count);
// counter.count = 0
// counter.#count = 0
console.log('The count is:' + counter.count);
