'use strict';

const ages = persons => {
  for (const pers in persons) {
    const age = persons[pers]['died'] - persons[pers]['born'];
    persons[pers] = age;
  }
  return persons;
};

module.exports = { ages };
