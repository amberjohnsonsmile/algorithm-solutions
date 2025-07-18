import * as assert from 'assert'
import { getHighestProductOf3 } from '../../src/greedy-algorithms/10-highest-product-of-three.js'

describe('highestProductOf3', function () {
  it('should get the highest product given all positive integers', () => {
    const input = [10, 7, 5, 8, 11, 9]
    const result = getHighestProductOf3(input)
    assert.equal(result, 990)
  })

  it('should get the highest product given all positive integers', () => {
    const input = [2, -4, 1, 3, -6]
    const result = getHighestProductOf3(input)
    assert.equal(result, 72)
  })

  it('should get the highest product given all positive integers', () => {
    const input = [1, 10, -5, 1, -100]
    const result = getHighestProductOf3(input)
    assert.equal(result, 5000)
  })
})
