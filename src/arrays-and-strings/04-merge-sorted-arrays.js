// Merge two sorted arrays.
// This solution tracks total items added:
export function mergeArrays(arr1, arr2) {
  let mergedArr = []

  let i = 0
  let j = 0
  let totalAdded = 0

  while (totalAdded < arr1.length + arr2.length) {
    if (arr1[i] < arr2[j]) {
      mergedArr.push(arr1[i])
      i++
      totalAdded++
    } else {
      mergedArr.push(arr2[j])
      j++
      totalAdded++
    }
  }

  return mergedArr
}

// This solution tracks iterators and checks for undefined:
// export function mergeArrays(arr1, arr2) {
//   let mergedArr = []

//   let i = 0
//   let j = 0

//   while (i <= arr1.length && j <= arr2.length) {
//     if (arr1[i] < arr2[j]) {
//       if (typeof arr1[i] !== 'undefined') {
//         mergedArr.push(arr1[i])
//       }
//       i++
//     } else {
//       if (typeof arr2[j] !== 'undefined') {
//         mergedArr.push(arr2[j])
//       }
//       j++
//     }
//   }

//   return mergedArr
// }
