import * as assert from 'assert'
import { getWordCounts } from '../../src/hashing-and-hash-tables/08-word-cloud-map.js'

describe('getWordCounts', function () {
  it('should return word counts without spaces, punctuation, or capitalization', () => {
    const input = 'After beating the eggs, Dana read the next step:'
    const expected = {
      after: 1,
      beating: 1,
      the: 2,
      eggs: 1,
      dana: 1,
      read: 1,
      next: 1,
      step: 1
    }
    const result = getWordCounts(input)
    assert.deepEqual(result, expected)
  })
})
