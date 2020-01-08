'use strict';

const fn = n => n + 1;
const a = 5;
const b = fn(a);
const c = fn(b);
console.dir({ a, b, c });

module.exports = { fn };
