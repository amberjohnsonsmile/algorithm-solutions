// Given three arrays, write a function to check that my service is first-come, first-served. All food should come out in the same order customers requested it.
// Order numbers are arbitrary and won't necessarily be in order.
export function checkOrders(takeOutOrders, dineInOrders, servedOrders) {
  // Iterate through servedOrders, checking they are correct against both lists
  let takeOutOrdersIndex = 0
  let dineInOrdersIndex = 0
  let servedOrdersIndex = 0

  while (servedOrdersIndex < servedOrders.length) {
    const current = servedOrders[servedOrdersIndex]

    if (current === takeOutOrders[takeOutOrdersIndex]) {
      takeOutOrdersIndex++
    } else if (current === dineInOrders[dineInOrdersIndex]) {
      dineInOrdersIndex++
    } else {
      return false
    }
    servedOrdersIndex++
  }

  return true
}
