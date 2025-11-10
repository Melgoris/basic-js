const {NotImplementedError} = require('../lib')

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */

function getCommonCharacterCount(s1, s2) {
  let count = 0
  let second = s2
  for (let i = 0; i < s1.length; i++) {
    const ch = s1[i]
    const index = second.indexOf(ch)
    if (index !== -1) {
      count++
      second = second.slice(0, index) + second.slice(index + 1)
    }
  }

  return count
}

module.exports = {
  getCommonCharacterCount,
}
