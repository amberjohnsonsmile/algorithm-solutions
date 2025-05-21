import * as assert from 'assert'
import { mergeArrays } from '../../src/arrays-and-strings/04-merge-sorted-arrays.js'

describe('mergeArrays', function () {
  it('should merge two sorted arrays', () => {
    const input1 = []
    const input2 = []
    const expected = []
    const result = mergeArrays(input1, input2)
    assert.deepEqual(result, expected)
  })
})
