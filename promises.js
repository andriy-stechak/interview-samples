const { readFile } = require("fs");
readFile(__filename, () => {
  setTimeout(console.log, 0, 1);
  const p1 = Promise.resolve(2).then(console.log);
  setTimeout(console.log, 0, 3);
  const p2 = Promise.resolve(4).then(console.log);
  setImmediate(() => console.log(5));
  process.nextTick(() => console.log(6));
  Promise.all([p1, p2]);
  console.log(7);
});
