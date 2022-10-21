const a = 1, b = 3, c = 0, d = 0;
const o = {a,b, ...(c && { c, d })};
console.log(o); // ?