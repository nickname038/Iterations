'use strict';

function inc(a) {
  a.n++;
}
const obj = { n: 5 };
inc(obj);
console.dir(obj);


module.exports = { inc };
