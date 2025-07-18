// Given an array of integers, find the highest product you can get from three of the integers
export function getMaxProductOf3(arrayOfInts) {
  // Populate min, max, and products of 2 based of first 2 items
  let max = Math.max(arrayOfInts[0], arrayOfInts[1])
  let min = Math.min(arrayOfInts[0], arrayOfInts[1])

  let maxProductOf2 = arrayOfInts[0] * arrayOfInts[1]
  let minProductOf2 = arrayOfInts[0] * arrayOfInts[1]

  // Populate highestProductOf3 based on first 3 items
  let maxProductOf3 = arrayOfInts[0] * arrayOfInts[1] * arrayOfInts[2]

  // Start at the third item since we've already added the first two
  for (let i = 2; i < arrayOfInts.length; i++) {
    const current = arrayOfInts[i]

    maxProductOf3 = Math.max(
      maxProductOf3,
      current * maxProductOf2,
      current * minProductOf2
    )

    maxProductOf2 = Math.max(maxProductOf2, current * max, current * min)
    minProductOf2 = Math.min(minProductOf2, current * max, current * min)

    // Do this at the end to avoid multiplying a number by itself
    max = Math.max(max, current)
    min = Math.min(min, current)
  }

  return maxProductOf3
}
