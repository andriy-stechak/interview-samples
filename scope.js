a = 1;

f1();
console.log(a);
function f1() {
  this.a = 0;
}

const f2 = function () {
  this.a = 3;
};

const f3 = () => {
  this.a = 5;
};

f2();
f3();

console.log(a);
function letVar() {
  for (var i = 0; i < 10; i++) {
    setTimeout(() => {
      console.log(i);
    }, 10);
  }
}

letVar();
