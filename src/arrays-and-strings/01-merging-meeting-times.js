// Write a function mergeRanges() that takes an array of multiple meeting time ranges and returns an array of condensed ranges
// Start time and end time don't have an upper bound
export function mergeRanges(ranges) {
  // TODO implement custom method for sorting
  const sortedRanges = ranges.sort((a, b) => a.startTime - b.startTime)
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
