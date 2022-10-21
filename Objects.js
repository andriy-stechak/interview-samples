const o = Object.create({ a: 3 });

console.log(o.a); // ?
o.a = 4;
console.log(o.a); // ?
delete o.a;
console.log(o.a); // ?
Object.freeze(o);
o.a = 5;
console.log(o.a); // ?

const o2 = { a: { b: 3 } };
const o3 = Object.assign({ b: 2 }, o2);
console.log('o3.a.b', o3.a.b); // ?
o2.a.b = 4;
console.log('o3.a.b', o3.a.b); // ?


const o4 = { d: 2 };
o4.valueOf = function () { return this.d; }
o4.toString = function () { return String(this.d); }

console.log(2 + o4); // 4 ?
console.log('2' + o4); // 22 ?
