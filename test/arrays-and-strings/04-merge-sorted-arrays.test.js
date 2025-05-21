import * as assert from 'assert'
import { mergeArrays } from '../../src/arrays-and-strings/04-merge-sorted-arrays.js'

describe('mergeArrays', function () {
  it('should merge two sorted arrays of the same size', () => {
    const input1 = [3, 4, 6, 10, 11, 15]
    const input2 = [1, 5, 8, 12, 14, 19]
    const expected = [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19]
    const result = mergeArrays(input1, input2)
    assert.deepEqual(result, expected)
  })
})
