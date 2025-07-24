/**
 * Find Repeat, Space Edition
 * Write a function to find a duplicate in an array.
 * Return the first duplicate found.
 * Don't modify the input, and optimize for saving space.
 */
export function findRepeat(numbers) {
  // Floor and ceiling represent the numbers themselves, that could repeat
  let floor = 1
  let ceiling = numbers.length - 1

  // Loop through possible integers that could repeat until floor and ceiling converge
  while (floor < ceiling) {
    const midpoint = Math.floor(floor + (ceiling - floor) / 2)

    const lowerRangeFloor = floor
    const lowerRangeCeiling = midpoint

    // No overlap
    const upperRangeFloor = midpoint + 1
    const upperRangeCeiling = ceiling

    const distinctPossibleIntegersInLowerRange =
      lowerRangeCeiling - lowerRangeFloor + 1

    let distinctIntsInLowerRange = 0
    numbers.forEach((item) => {
      // Is it in the lower range?
      if (item >= lowerRangeFloor && item <= lowerRangeCeiling) {
        distinctIntsInLowerRange += 1
      }
    })

    if (distinctIntsInLowerRange > distinctPossibleIntegersInLowerRange) {
      // There must be a duplicate in the lower range
      floor = lowerRangeFloor
      ceiling = lowerRangeCeiling
    } else {
      // There must be a duplicate in the upper range
      floor = upperRangeFloor
      ceiling = upperRangeCeiling
    }
  }

  return floor
}
