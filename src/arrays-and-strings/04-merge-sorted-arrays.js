// Merge two sorted arrays.
export function mergeArrays(arr1, arr2) {
  let mergedArr = []

  let i = 0
  let j = 0
  let totalAdded = 0

  while (totalAdded < arr1.length + arr2.length) {
    const arr1StillHasItems = i < arr1.length
    const arr2StillHasItems = j < arr2.length

    if (arr1StillHasItems && (!arr2StillHasItems || arr1[i] < arr2[j])) {
      mergedArr.push(arr1[i])
      i++
    } else {
      mergedArr.push(arr2[j])
      j++
    }
    totalAdded++
  }

  return mergedArr
}
