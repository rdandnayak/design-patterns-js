// function addition(a, b, c) {
//   return a + b + c;
// }

function addition() {
  let start = 0;
  for (let i = 0; i < arguments.length; i++) {
    start = start + arguments[i];
  }
  console.log(start);
  return start;
}

addition(1, 2, 3, 6);
addition(1, 2, 3);
addition(1, 2);
addition(1);
