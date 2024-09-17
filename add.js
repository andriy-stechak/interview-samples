const add = (function() {
  let res = 0;
  return function (num) { return res += num; }
})();

const add2 = (...operands) => operands.reduce((acc, operand) => acc + operand, 0);

const o = {
  res: 0,
  add (operand) {
    this.res += operand;
    return this;
  },
  fold () {
    return this.res;
  }
};

const add3 = o.add.bind(o);

console.log(add(2)); // 2
console.log(add(3)); // 5

console.log(add2(34, 5, 6)); // 45
console.log(add2(34, 5, 6, 5)); // 50

console.log(add3(2).add3(1).add3(3).fold()); // 6
