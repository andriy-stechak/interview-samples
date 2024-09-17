const factorial = (() => {
  let res = 0;
  let rank = 0;
  return () => res === 0 ? res += ++rank : res *= ++rank;
})();

// Factorial definition:  n! = n * (n - 1) * (n - 2) * ... * 2 * 1

console.log(factorial()); // 1! = 1
console.log(factorial()); // 2! = 2
console.log(factorial()); // 3! = 6
console.log(factorial()); // 4! = 24
console.log(factorial()); // 5! = 120
console.log(factorial()); // 6! = 720

