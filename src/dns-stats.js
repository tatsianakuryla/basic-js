const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let resultObj = {};
  domains = domains.map((domain) => {
    domain = domain.split('.');
    for (let i = 0; i < domain.length; i++) {
      for (let j = i + 1; j < domain.length; j++) {
        domain[i] = `.${domain[j]}.${domain[i]}`.replaceAll('..', '.');
      }
    }
    domain[domain.length - 1] = `.${domain[domain.length - 1]}`;
    domain.reverse();
    return domain;
  });

  for (let i = 0; i < domains.length; i++) {
    for (let j = 0; j < domains[i].length; j++) {
      domains[i][j] in resultObj ? resultObj[domains[i][j]] += 1 : resultObj[domains[i][j]] = 1;
    }
  }

  return resultObj;

}

module.exports = {
  getDNSStats
};
