/*
Index By
Given a list, and a property name, returns an object with an index of each item.
Example:
const stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}];
indexBy(stooges, 'age');
=> {
  "40": {name: 'moe', age: 40},
  "50": {name: 'larry', age: 50}
}
*/

// Your code here!
const indexBy = (arr, property) => {
  let result = {};
  arr.forEach((object) => {
      let index = object[property]
      result[index] = object
  })
  return result
}

// Check your solution by running these tests: mocha *this_filename*
const assert = require('assert');

describe('IndexBy', () => {
  it('can index by a property', () => {
    const stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}];
    const result = indexBy(stooges, 'age');
    assert.deepEqual(result, {
      "40": {name: 'moe', age: 40},
      "50": {name: 'larry', age: 50}
    });
  });
});
