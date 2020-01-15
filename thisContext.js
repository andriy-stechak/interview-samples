const o = {
  a: 5,
  b: function() { return this.a; },
  c: () => this.a
};

console.log(o.b());
console.log(o.c());
