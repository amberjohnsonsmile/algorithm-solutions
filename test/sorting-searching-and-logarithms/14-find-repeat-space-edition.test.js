import * as assert from 'assert'
import { findRepeat } from '../../src/sorting-searching-and-logarithms/14-find-repeat-space-edition.js'

describe('findRepeat', function () {
  it('should find the repeated integer', () => {
    const input = [5, 1, 2, 4, 3, 2]
    let result = findRepeat(input)
    assert.equal(result, 2)
  })

  it('should find the repeated integer in a shorter list', () => {
    const input = [1, 3, 1, 2]
    let result = findRepeat(input)
    assert.equal(result, 1)
  })

  it('should find the repeated integer in another short list', () => {
    const input = [1, 2, 3, 2]
    let result = findRepeat(input)
    assert.equal(result, 2)
  })

  it('should find the repeated integer given all the same number', () => {
    const input = [1, 1]
    let result = findRepeat(input)
    assert.equal(result, 1)
  })

  it('should find the repeated integer in a medium sized list', () => {
    const input = [1, 2, 5, 5, 5, 5]
    let result = findRepeat(input)
    assert.equal(result, 5)
  })

  it('should find the repeated integer in a long list', () => {
    const input = [4, 1, 4, 8, 3, 2, 7, 6, 5]
    let result = findRepeat(input)
    assert.equal(result, 4)
  })
})
