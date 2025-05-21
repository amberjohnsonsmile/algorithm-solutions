export function mergeArrays(arr1, arr2) {
  let mergedArr = []

  let i = 0
  let j = 0

  while (i <= arr1.length && j <= arr2.length) {
    if (arr1[i] < arr2[j]) {
      if (typeof arr1[i] !== 'undefined') {
        mergedArr.push(arr1[i])
      }
      i++
    } else {
      if (typeof arr2[j] !== 'undefined') {
        mergedArr.push(arr2[j])
      }
      j++
    }
  }

  return mergedArr
}

console.log(mergeArrays([3, 4, 6, 10, 11, 15], [1, 5, 8, 12, 14, 19]))
