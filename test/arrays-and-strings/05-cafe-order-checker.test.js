import * as assert from 'assert'
import { checkOrders } from '../../src/arrays-and-strings/05-cafe-order-checker.js'

describe('checkOrders', function () {
  it('should identify an incorrect order', () => {
    const takeOutOrders = [1, 3, 5]
    const dineInOrders = [2, 4, 6]
    const servedOrders = [1, 2, 4, 6, 5, 3]
    const result = checkOrders(takeOutOrders, dineInOrders, servedOrders)
    assert.equal(result, false)
  })

  it('should validate a correct order', () => {
    const takeOutOrders = [1, 3, 5]
    const dineInOrders = [2, 4, 6]
    const servedOrders = [1, 2, 4, 3, 5, 6]
    const result = checkOrders(takeOutOrders, dineInOrders, servedOrders)
    assert.equal(result, true)
  })

  it('should handle an empty array of dine in orders', () => {
    const takeOutOrders = [1, 3, 5]
    const dineInOrders = []
    const servedOrders = [1, 3, 5]
    const result = checkOrders(takeOutOrders, dineInOrders, servedOrders)
    assert.equal(result, true)
  })

  it('should handle an empty array of take out orders', () => {
    const takeOutOrders = []
    const dineInOrders = [2, 4, 6]
    const servedOrders = [2, 4, 6]
    const result = checkOrders(takeOutOrders, dineInOrders, servedOrders)
    assert.equal(result, true)
  })

  it('should validate when order numbers that are not in order', () => {
    const takeOutOrders = [8, 2, 5]
    const dineInOrders = [3, 4, 1]
    const servedOrders = [8, 3, 4, 2, 5, 1]
    const result = checkOrders(takeOutOrders, dineInOrders, servedOrders)
    assert.equal(result, true)
  })

  it('should identify incorrect order with numbers that are not in order', () => {
    const takeOutOrders = [8, 2, 5]
    const dineInOrders = [3, 4, 1]
    const servedOrders = [8, 5, 4, 2, 3, 1]
    const result = checkOrders(takeOutOrders, dineInOrders, servedOrders)
    assert.equal(result, false)
  })

  it('should identify incorrect order with arrays of different sizes', () => {
    const takeOutOrders = [1, 3, 5, 7]
    const dineInOrders = [2, 4, 6]
    const servedOrders = [1, 2, 4, 6, 5, 3, 7]
    const result = checkOrders(takeOutOrders, dineInOrders, servedOrders)
    assert.equal(result, false)
  })

  it('should validate correct order with arrays of different sizes', () => {
    const takeOutOrders = [1, 3, 5, 7]
    const dineInOrders = [2, 4, 6]
    const servedOrders = [1, 2, 4, 6, 3, 5, 7]
    const result = checkOrders(takeOutOrders, dineInOrders, servedOrders)
    assert.equal(result, true)
  })

  it('should identify an incorrect order when not everything is in servedOrders', () => {
    const takeOutOrders = [1, 3, 5]
    const dineInOrders = [2, 4, 6]
    const servedOrders = [1, 2, 4, 6, 5]
    const result = checkOrders(takeOutOrders, dineInOrders, servedOrders)
    assert.equal(result, false)
  })
})
