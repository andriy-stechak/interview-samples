const { strict: assert } = require('assert');

const a = [6, 1, 10, 5, 7, 9, 3];

const f = (a, t) => {
 for(let i = 0; i < a.length - 1; i++) {
   for(let j = i + 1; j < a.length; j++) {
     if(a[i] + a[j] === t) {
      return [i, j];
     }
   }
 }
}

const whichElementsSum = (a, t) => {
  const remindersMap = a.reduce((acc, num, index) => {
    acc.set(t - num, index);
    return acc;
  }, new Map());
  for (let i = 0; i < a.length; i++) {
    if (remindersMap.has(a[i])) {
      return [i, remindersMap.get(a[i])];
    }
  }
  return [];
};

var num1Index, num2Index, currentIndex;
const whichElementsSum2 = (a, number) => {
  do {
    num1Index = a.findIndex((element, index) => {
      if ((typeof currentIndex === 'undefined' || index > currentIndex) && element < number) {
        currentIndex = index;
        return true
      }
    });
    num2Index = a.findIndex((element) => element === (number - a[num1Index]));
  } while(num2Index === -1 && num1Index !== -1);
  return [num1Index, num2Index];
};

console.log('whichElementsSum =>', whichElementsSum(a, 14));
console.log('whichElementsSum2 =>', whichElementsSum2(a, 14));
console.log('whichElementsSum =>', whichElementsSum([3,4,1,6,7], 5));
console.log('f =>', f(a, 14));
