const a = [6, 1, 10, 5, 7, 9, 3];

const f = (a, t) => {
 for(let i = 0; i < a.length -1; i++) {
   for(let j = i + 1; j < a.length; j++) {
     if(a[i] + a[j] === t) {
      return [i, j];
     }
   }
 }
}

const f2 = (a, t) => {
  const remindersMap = a.reduce((acc, num, index) => {
    acc.set(t - num, index);
    return acc;
  }, new Map());
  for (let i = 0; i < a.length; i++) {
    if(remindersMap.has(a[i])) {
      return [i, remindersMap.get(a[i])];
    }
  }
  return [];
};

console.log('f =>', f(a, 14));
console.log('f2 =>', f2(a, 14));

