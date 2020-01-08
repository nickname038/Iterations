'use strict';

const createUser = (n, c) => {
  const object = {
    name: n,
    city: c
  };
  return (object);
};

module.exports = { createUser };
