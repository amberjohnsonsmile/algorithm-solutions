// Write a function mergeRanges() that takes an array of multiple meeting time ranges and returns an array of condensed ranges
// Start time and end time don't have an upper bound
export function mergeRanges(ranges) {
  let condensedRanges = ranges[0]

  // TODO implement custom method for sorting
  const sortedRanges = ranges.sort((a, b) => a.startTime - b.startTime)
  console.log('sorted: ', sortedRanges)

  // Two at a time, see if there's overlap
  // Compare current item to last item in solution
  for (let i = 1; i < ranges.length; i++) {
    const last = sortedRanges[sortedRanges.length - 1]
    const current = ranges[i]

    // Instead of comparing current and next, add first to solution then compare current to last added to solution
    // If there's overlap
    if (last.endTime < current.startTime) {
      condensedRanges.push({
        startTime: current.startTime,
        // Do I need this max?
        endTime: Math.max(current.endTime, next.endTime)
      })
    } else {
      // If not add both
      condensedRanges.push(current)
    }
    // What if three in a row overlap?
    // What if one is completely within the other?
  }
  console.log('condensed ranges are: ', condensedRanges)
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

// Sorted:
// [
//   { startTime: 0,  endTime: 1 },
//   { startTime: 3,  endTime: 5 },
//   { startTime: 4,  endTime: 8 },
//   { startTime: 9,  endTime: 10 },
//   { startTime: 10, endTime: 12 },
// ]

// Output:
// [
//   { startTime: 0, endTime: 1 },
//   { startTime: 3, endTime: 8 },
//   { startTime: 9, endTime: 12 },
// ]
