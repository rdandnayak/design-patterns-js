// let Calc = function(start) {
//   let that = this;
//   this.add = function(x) {
//     start = start + x;
//     return that;
//   };

//   this.multiply = function(y) {
//     start = start * y;
//     return that;
//   };

//   this.result = function(cb) {
//     cb(start);
//     return that;
//   };
// };

class Calc {
  constructor(start) {
    this.start = start;
  }

  add = x => {
    this.start = this.start + x;
    return this;
  };

  add = y => {
    this.start = this.start + y;
    return this;
  };

  result = cb => {
    cb(this.start);
    return this;
  };
}

new Calc(0)
  .add(1)
  .add(2)
  .multiply(5)
  .result(result => {
    console.log(result);
  });
