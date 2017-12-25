var Calc = require('./calc');

Calc.add(1, 2)
  .multiply(5)
  .result(result => {
    console.log(result);
  });
