import * as assert from 'assert'
import { sortScores } from '../../src/sorting-searching-and-logarithms/15-top-scores.js'

describe('sortScores', function () {
  it('returns an empty array', () => {
    const input = []
    const result = sortScores(input, 100)
    const expected = []
    assert.deepEqual(result, expected)
  })

  it('returns an array with a single item', () => {
    const input = [55]
    const result = sortScores(input, 100)
    const expected = [55]
    assert.deepEqual(result, expected)
  })

  it('sorts an array with two items', () => {
    const input = [30, 60]
    const result = sortScores(input, 100)
    const expected = [60, 30]
    assert.deepEqual(result, expected)
  })

  it('sorts a longer array', () => {
    const input = [37, 89, 41, 65, 91, 53]
    const result = sortScores(input, 100)
    const expected = [91, 89, 65, 53, 41, 37]
    assert.deepEqual(result, expected)
  })

  it('sorts a an array with repeats', () => {
    const input = [20, 10, 30, 30, 10, 20]
    const result = sortScores(input, 100)
    const expected = [30, 30, 20, 20, 10, 10]
    assert.deepEqual(result, expected)
  })
})
