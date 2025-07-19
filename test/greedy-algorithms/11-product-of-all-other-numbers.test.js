import * as assert from 'assert'
import { getProductsOfAllIntsExceptAtIndex } from '../../src/greedy-algorithms/11-product-of-all-other-numbers.js'

describe('getProductsOfAllIntsExceptAtIndex', function () {
  it('should return the product of all other numbers at a given index', () => {
    const input = [1, 7, 3, 4]
    const result = getProductsOfAllIntsExceptAtIndex(input)
    const expected = [84, 12, 28, 21]
    assert.deepEqual(result, expected)
  })

  it('should return the product of all other numbers given a short list', () => {
    const input = [2, 4, 10]
    const result = getProductsOfAllIntsExceptAtIndex(input)
    const expected = [40, 20, 8]
    assert.deepEqual(result, expected)
  })

  it('should return the product of all other numbers given a long list', () => {
    const input = [1, 2, 6, 5, 9]
    const result = getProductsOfAllIntsExceptAtIndex(input)
    const expected = [540, 270, 90, 108, 60]
    assert.deepEqual(result, expected)
  })

  it('should return the product of all other numbers given an even longer list', () => {
    const input = [3, 1, 2, 5, 6, 4]
    const result = getProductsOfAllIntsExceptAtIndex(input)
    const expected = [240, 720, 360, 144, 120, 180]
    assert.deepEqual(result, expected)
  })

  it('should return the product of all other numbers when zeros are present', () => {
    const input = [1, 0, 3, 2]
    const result = getProductsOfAllIntsExceptAtIndex(input)
    const expected = [0, 6, 0, 0]
    assert.deepEqual(result, expected)
  })

  it('should return the product of all other numbers when negative numbers are present', () => {
    const input = [3, -2, 4]
    const result = getProductsOfAllIntsExceptAtIndex(input)
    const expected = [-8, 12, -6]
    assert.deepEqual(result, expected)
  })
})
