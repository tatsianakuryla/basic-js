const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  const addition = options.hasOwnProperty('addition') ? String(options.addition) : '';
  const additionSeparator = options.additionSeparator ? String(options.additionSeparator) : '|';
  const additionRepeatTimes = options.additionRepeatTimes ? options.additionRepeatTimes : 1;

  const separator = options.separator ? String(options.separator) : '+';
  const repeatTimes = options.repeatTimes ? options.repeatTimes : 1;

  const addStr = new Array(additionRepeatTimes).fill(addition).join(additionSeparator);
  const resultStr = new Array(repeatTimes).fill(String(str) + addStr).join(separator);

  return resultStr;
}

module.exports = {
  repeater
};
