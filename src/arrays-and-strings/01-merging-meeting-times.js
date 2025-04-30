// Write a function mergeRanges() that takes an array of multiple meeting time ranges and returns an array of condensed ranges
// Start time and end time don't have an upper bound
export function mergeRanges(ranges) {
  let condensedRanges = []
  // TODO implement custom method for sorting
  const sortedRanges = ranges.sort((a, b) => a.startTime - b.startTime)
  console.log('sorted: ', sortedRanges)

  // Two at a time, see if there's overlap
    // If there's overlap, combine the two then add it to solution []
    // If not add both
  return condensedRanges
}

// Input:
// [
//   { startTime: 0,  endTime: 1 },
//   { startTime: 3,  endTime: 5 },
//   { startTime: 4,  endTime: 8 },
//   { startTime: 10, endTime: 12 },
//   { startTime: 9,  endTime: 10 },
// ]

// Output:
// [
//   { startTime: 0, endTime: 1 },
//   { startTime: 3, endTime: 8 },
//   { startTime: 9, endTime: 12 },
// ]
