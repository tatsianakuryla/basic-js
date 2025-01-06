const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let arrayFromStr = [];
  let count = 1;
  strArray = str.split('');
  for (let i = 0; i < strArray.length; i++) {
    if(str[i] === str[i + 1]) {
      count++;
    }
    else {
      if(count === 1) {
        arrayFromStr.push(`${str[i]}`)
      }
      else {
        arrayFromStr.push(`${count}${str[i]}`)
      };
      count = 1;
    }
  }

  return arrayFromStr.join('');
}
module.exports = {
  encodeLine
};
