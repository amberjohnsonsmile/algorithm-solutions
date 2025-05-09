import { reverseWords } from '../../src/arrays-and-strings/03-reverse-words.js'
import * as assert from 'assert'

describe('reverseWords', function () {
  it('should return words in reversed order', () => {
    const input = [
      'c',
      'a',
      'k',
      'e',
      ' ',
      'p',
      'o',
      'u',
      'n',
      'd',
      ' ',
      's',
      't',
      'e',
      'a',
      'l'
    ]
    const expected = [
      's',
      't',
      'e',
      'a',
      'l',
      ' ',
      'p',
      'o',
      'u',
      'n',
      'd',
      ' ',
      'c',
      'a',
      'k',
      'e'
    ]
    const result = reverseWords(input)
    assert.deepEqual(result, expected)
  })
})
