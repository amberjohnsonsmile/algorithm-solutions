import * as assert from 'assert'
import { isPalindrome } from '../../src/hashing-and-hash-tables/07-permutation-palindrome.js'

describe('isPalindrome', function () {
  it('should return true for a string that is already a valid palindrome', () => {
    const input = 'civic'
    const result = isPalindrome(input)
    assert.equal(result, true)
  })

  it('should return true for a longer string that is already a valid palindrome', () => {
    const input = 'ciiviic'
    const result = isPalindrome(input)
    assert.equal(result, true)
  })

  it('should return true for a string that is a permutation of a palindrome', () => {
    const input = 'ivicc'
    const result = isPalindrome(input)
    assert.equal(result, true)
  })

  it('should return false for a string that is not a palindrome', () => {
    const input = 'civil'
    const result = isPalindrome(input)
    assert.equal(result, false)
  })

  it('should return false for a variation of a string that is not a palindrome', () => {
    const input = 'livci'
    const result = isPalindrome(input)
    assert.equal(result, false)
  })
})
