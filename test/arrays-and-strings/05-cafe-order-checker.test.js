import * as assert from 'assert'
import { checkOrders } from '../../src/arrays-and-strings/05-cafe-order-checker.js'

describe('checkOrders', function () {
  it('should identify an incorrect order', () => {
    const takeOutOrders = [1, 3, 5]
    const dineInOrders = [2, 4, 6]
    const servedOrders = [1, 2, 4, 6, 5, 3]
    const result = checkOrders(takeOutOrders, dineInOrders, servedOrders)
    assert.deepEqual(result, false)
  })
})
