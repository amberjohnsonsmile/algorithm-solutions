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

  it('should return true for two movies that add up to flight time with multiple options', () => {
    const flightLength = 200
    const movieLengths = [50, 95, 40, 105, 150]
    const result = isPossibleToFillFlightTime(flightLength, movieLengths)
    assert.equal(result, true)
  })

  it('should return false when no two movies add up, given a longer list', () => {
    const flightLength = 200
    const movieLengths = [50, 95, 40, 100, 140]
    const result = isPossibleToFillFlightTime(flightLength, movieLengths)
    assert.equal(result, false)
  })

  it('should return false when given only one movie', () => {
    const flightLength = 200
    const movieLengths = [200]
    const result = isPossibleToFillFlightTime(flightLength, movieLengths)
    assert.equal(result, false)
  })

  it('should return false when the list is empty', () => {
    const flightLength = 200
    const movieLengths = []
    const result = isPossibleToFillFlightTime(flightLength, movieLengths)
    assert.equal(result, false)
  })
})
