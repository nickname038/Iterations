'use strict';

const fn = () => {
  const a = {
    name: 'object'
  };

  let b = {
    name: 'jo'
  };

  a.name = 'not';
  b.name = 'yes';

  b = {};
};

module.exports = { fn };
