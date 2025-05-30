import * as assert from 'assert'
import { isPossibleToFillFlightTime } from '../../src/hashing-and-hash-tables/06-inflight-entertainment.js'

describe('isPossibleToFillFlightTime', function () {
  it('should return true for two movies that add up to flight time', () => {
    const flightLength = 180
    const movieLengths = [85, 95]
    const result = isPossibleToFillFlightTime(flightLength, movieLengths)
    assert.equal(result, true)
  })

  it('should return false when no two movies add up to flight time', () => {
    const flightLength = 180
    const movieLengths = [90, 60]
    const result = isPossibleToFillFlightTime(flightLength, movieLengths)
    assert.equal(result, false)
  })
})
