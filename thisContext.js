const user = {
  get age() {
    return this._age || 25;
  },
  set age(v) {
    this._age = (/\\d/g.test(String(v)) && v) || this._age;
  },
  getAge: function () { return this.age; },
  incrementAge: () => this.age++
};

console.log(user.getAge());
user.incrementAge();
console.log(user.getAge());
user.incrementAge.call(user);
console.log(user.getAge());
user.age = 'c';
console.log(user.getAge());
