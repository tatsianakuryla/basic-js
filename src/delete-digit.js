const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arrayN = String(n).split('');
  let max = 0;

  for (let i = 0; i < arrayN.length; i++) {
    let newMax = +[...arrayN.slice(0, i), ...arrayN.slice(i + 1)].join('');
    max = newMax > max ? newMax : max;
  }

  return max;
}

module.exports = {
  deleteDigit
};
