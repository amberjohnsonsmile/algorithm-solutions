/**
 * Product of all other numbers
 * Write a function that takes an array of integers and returns an array of
 * products of all numbers not including the current integer.
 * Do NOT use division.
 */ 
export function getProductsOfAllIntsExceptAtIndex(intArr) {
  let productOfAllIntsExceptAtIndex = []
  let productSoFar = 1
  
  for (let i = 0; i < intArr.length; i++) {
    // For each int, find the product of all ints BEFORE it
    productOfAllIntsExceptAtIndex[i] = productSoFar
    productSoFar *= intArr[i]
  }

  productSoFar = 1
  for (let j = intArr.length - 1; j >= 0; j--) {
    // For each int, find the product of all ints AFTER it and multiply by all ints before it
    productOfAllIntsExceptAtIndex[j] *= productSoFar
    productSoFar *= intArr[j]
  }

  return productOfAllIntsExceptAtIndex
}
