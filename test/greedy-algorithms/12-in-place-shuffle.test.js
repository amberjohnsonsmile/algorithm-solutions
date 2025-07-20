import * as assert from 'assert'
import { shuffleInPlace } from '../../src/greedy-algorithms/12-in-place-shuffle.js'

describe('shuffleInPlace', function () {
  it('should return the same elements and have the same length', () => {
    const input = ['a', 'b', 'c']
    let result = shuffleInPlace(input)
    assert.equal(result.length, 3)
    assert.deepEqual(result.sort(), input.sort())
  })

  it('should shuffle given a long array', () => {
    const input = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
    let result = shuffleInPlace(input)
    assert.equal(result.length, 7)
    assert.deepEqual(result.sort(), input.sort())
  })
})