class Calc {
  constructor(start) {
    this.start = start;
  }

  add(x) {
    this.start = this.start + x;
    return this;
  }

  multiply(y) {
    this.start = this.start + y;
    return this;
  }

  result(cb) {
    cb(this.start);
    return this;
  }
}

module.exports = {
  add: function(x, y) {
    return new Calc(x).add(y || 0);
  },
  multiply: function(x, y) {
    return new Calc(x).multiply(y || 1);
  }
};
