function mergeArrays(arr1, arr2) {
  let mergedArr = []

  let i = 0
  let j = 0

  // TODO need to also track progress in another var
  while (i <= arr1.length && j <= arr2.length) {
    if (arr1[i] < arr2[j]) {
      mergedArr.push(arr1[i])
      i++
    } else {
      mergedArr.push(arr2[j])
      j++
    }
  }

  return mergedArr
}

console.log(mergeArrays([3, 4, 6, 10, 11, 15], [1, 5, 8, 12, 14, 19]))
