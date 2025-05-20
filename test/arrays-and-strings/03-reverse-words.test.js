import {
  reverseCharacters,
  reverseWords
} from '../../src/arrays-and-strings/03-reverse-words.js'
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

  it('should return an even number of words in reversed order', () => {
    const input = [
      'c',
      'a',
      'k',
      'e',
      ' ',
      'e',
      'a',
      't',
      ' ',
      't',
      'h',
      'e',
      'm',
      ' ',
      'l',
      'e',
      't'
    ]
    const expected = [
      'l',
      'e',
      't',
      ' ',
      't',
      'h',
      'e',
      'm',
      ' ',
      'e',
      'a',
      't',
      ' ',
      'c',
      'a',
      'k',
      'e'
    ]
    const result = reverseWords(input)
    assert.deepEqual(result, expected)
  })

  it('should leave a single word as is when there are no spaces', () => {
    const input = ['h', 'e', 'l', 'l', 'o']
    const expected = ['h', 'e', 'l', 'l', 'o']
    const result = reverseWords(input)
    assert.deepEqual(result, expected)
  })
})

describe('reverseCharacters', function () {
  it('should reverse all characters', () => {
    const input = ['a', 'b', 'c', 'd', 'e', 'f']
    const expected = ['f', 'e', 'd', 'c', 'b', 'a']
    reverseCharacters(input, 0, input.length - 1)
    assert.deepEqual(input, expected)
  })

  it('should return a single letter', () => {
    const input = ['a']
    const expected = ['a']
    reverseCharacters(input, 0, input.length - 1)
    assert.deepEqual(input, expected)
  })

  it('should reverse a subset', () => {
    const input = ['a', 'b', 'c', 'd', 'e', 'f']
    const expected = ['a', 'e', 'd', 'c', 'b', 'f']
    reverseCharacters(input, 1, input.length - 2)
    assert.deepEqual(input, expected)
  })
})
