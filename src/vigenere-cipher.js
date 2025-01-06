const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */

class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }

  encrypt(message, key) {
    if (!message || !key) throw new Error('Incorrect arguments!');
    
    const result = this.#process(message, key, 'encrypt');
    return this.isDirect ? result : result.split('').reverse().join('');
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) throw new Error('Incorrect arguments!');
    
    const result = this.#process(encryptedMessage, key, 'decrypt');
    return this.isDirect ? result : result.split('').reverse().join('');
  }

  #process(message, key, mode) {
    const A = 'A'.charCodeAt(0);
    const Z = 'Z'.charCodeAt(0);
    const keyUpper = key.toUpperCase();
    let result = '';
    let keyIndex = 0;

    for (let i = 0; i < message.length; i++) {
      const char = message[i];
      const upperChar = char.toUpperCase();
      
      if (upperChar >= 'A' && upperChar <= 'Z') {
        const messageCharCode = upperChar.charCodeAt(0);
        const keyCharCode = keyUpper[keyIndex % keyUpper.length].charCodeAt(0);

        let shift = keyCharCode - A;
        let encryptedCharCode;

        if (mode === 'encrypt') {
          encryptedCharCode = (messageCharCode - A + shift) % 26 + A;
        } else if (mode === 'decrypt') {
          encryptedCharCode = (messageCharCode - A - shift + 26) % 26 + A;
        }

        result += String.fromCharCode(encryptedCharCode);
        keyIndex++;
      } else {
        result += char;
      }
    }

    return result;
  }
}

module.exports = {
  VigenereCipheringMachine
};
