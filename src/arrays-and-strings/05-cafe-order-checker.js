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

// Take Out Orders: [1, 3, 5]
// Dine In Orders: [2, 4, 6]
// Served Orders: [1, 2, 4, 6, 5, 3]
// console.log(checkOrders([1, 3, 5], [2, 4, 6], [1, 2, 4, 6, 5, 3]));
// false

// Take Out Orders: [17, 8, 24]
// Dine In Orders: [12, 19, 2]
// Served Orders: [17, 8, 12, 19, 24, 2]
// console.log(checkOrders([17, 8, 24], [12, 19, 2], [17, 8, 12, 19, 24, 2]));
// true

// [5, 2]
// [7, 3]
// true [5, 7, 2, 3]
// false [2, 5, 7, 3]

// console.log(checkOrders([5, 2], [7, 3], [2, 5, 7, 3]))
// false

// console.log(checkOrders([5, 2], [7, 3], [5, 7, 2, 3]))
// true

// [2]
// [1, 4]
// console.log(checkOrders([2], [1, 4], [1, 2, 4]))
// true

console.log(checkOrders([2], [1, 4], [4, 2, 1]))
// false
