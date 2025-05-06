import { reverseCharacters } from '../../src/arrays-and-strings/02-reverse-string-in-place.js'
import * as assert from 'assert'

describe('reverseCharacters', function () {
  it('should return a reversed array of characters', () => {
    const input = ['k', 'i', 't', 't', 'e', 'n']
    const expected = ['n', 'e', 't', 't', 'i', 'k']

    const result = reverseCharacters(input)
    assert.deepEqual(result, expected)
  })

  it('should handle a single item', () => {})

  it('should handle an odd number of items', () => {})

  it('should handle an empty array', () => {})
})
