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

console.log(f(a, 14)); // [3, 5]

