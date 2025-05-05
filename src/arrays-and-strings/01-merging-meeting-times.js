// Write a function mergeRanges() that takes an array of multiple meeting time ranges and returns an array of condensed ranges
// Start time and end time don't have an upper bound
export function mergeRanges(ranges) {
  const sortedRanges = ranges.sort((a, b) => a.startTime - b.startTime)
  // const sortedRanges = mergeSort(ranges)
  let condensedRanges = [sortedRanges[0]]

  // Compare current to last in condensedRanges
  for (let i = 1; i < sortedRanges.length; i++) {
    const last = condensedRanges[condensedRanges.length - 1]
    const current = sortedRanges[i]

    // Check for overlap
    if (current.startTime <= last.endTime) {
      condensedRanges[condensedRanges.length - 1] = {
        startTime: last.startTime,
        endTime: Math.max(last.endTime, current.endTime)
      }
    } else {
      // If no overlap, add current
      condensedRanges.push(current)
    }
  }
  return condensedRanges
}

function mergeSort(ranges) {
  if (ranges.length <= 1) return ranges
  let middle = Math.floor(ranges.length / 2)

  // Recursively run mergeSort
  let left = mergeSort(ranges.slice(0, middle))
  let right = mergeSort(ranges.slice(middle))

  return mergeByStartTime(left, right)
}

function mergeByStartTime(left, right) {
  let sorted = []

  while (left.length && right.lenght) {
    if (left[0].startTime < right[0].startTime) {
      sorted.push(left.shift())
    } else {
      sorted.push(right.shift())
    }
  }

  return sorted
}
