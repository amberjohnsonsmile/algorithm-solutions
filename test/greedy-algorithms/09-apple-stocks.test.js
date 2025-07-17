import * as assert from 'assert'
import { getLargestProfit } from '../../src/greedy-algorithms/09-apple-stocks.js'

describe('getLargestProfit', function () {
  it('should calculate largest profit possible given a list of prices', () => {
    const input = [10, 7, 5, 8, 11, 9]
    const result = getLargestProfit(input)
    assert.equal(result, 6)
  })

  it('should calculate largest profit possible when largest is the second item', () => {
    const input = [10, 13, 5, 8, 11, 9]
    const result = getLargestProfit(input)
    assert.equal(result, 6)
  })

  it('should calculate largest profit possible even when it is negative', () => {
    const input = [10, 9, 7, 2, 1]
    const result = getLargestProfit(input)
    assert.equal(result, -1)
  })
})
