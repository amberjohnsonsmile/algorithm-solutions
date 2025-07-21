import * as assert from 'assert'
import { findRotationPoint } from '../../src/sorting-searching-and-logarithms/13-find-rotation-point.js'

describe('findRotationPoint', function () {
  it('should find the rotation point when it is in the middle', () => {
    const input = [
      'ptolemaic',
      'retrograde',
      'supplant',
      'undulate',
      'xenoepist',
      'asymptote',
      'babka',
      'banoffee',
      'engender',
      'karpatka',
      'othellolagkage'
    ]
    let result = findRotationPoint(input)
    assert.equal(result, 5)
  })

  it('should find the rotation point when it is in the right half', () => {
    const input = [
      'engender',
      'karpatka',
      'othellolagkage',
      'ptolemaic',
      'retrograde',
      'supplant',
      'undulate',
      'xenoepist',
      'asymptote',
      'babka',
      'banoffee'
    ]
    let result = findRotationPoint(input)
    assert.equal(result, 8)
  })

  it('should find the rotation point when it is in the left half', () => {
    const input = [
      'xenoepist',
      'asymptote',
      'babka',
      'banoffee',
      'engender',
      'karpatka',
      'othellolagkage',
      'ptolemaic',
      'retrograde',
      'supplant',
      'undulate'
    ]
    let result = findRotationPoint(input)
    assert.equal(result, 1)
  })

  it('should find the rotation point when given an array of letters', () => {
    const input = ['k', 'v', 'a', 'b', 'c', 'd', 'e', 'g', 'i']
    let result = findRotationPoint(input)
    assert.equal(result, 2)
  })
})
