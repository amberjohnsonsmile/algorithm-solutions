/**
 * Find Rotation Point
 * Write a function for finding the index of the "rotation point,"
 * the point at which a word appear earlier in the dictionary than the last.
 * This implementation use binary search to get O(logn) time complexity.
 */
export function findRotationPoint(words) {
  const firstWord = words[0]

  let floorIndex = 0
  let ceilingIndex = words.length - 1

  // Binary search
  while (floorIndex < ceilingIndex) {
    // Guess a point halfway between
    const guessIndex = Math.floor(floorIndex + (ceilingIndex - floorIndex) / 2)
    const currentWord = words[guessIndex]

    // If guess comes after first word or is the first word
    if (currentWord >= firstWord) {
      // Go right
      floorIndex = guessIndex
    } else {
      // Go left
      ceilingIndex = guessIndex
    }

    // If floor and ceiling have converged
    if (floorIndex + 1 === ceilingIndex) {
      // Between floor and ceiling is the rotation point
      break
    }
  }

  return ceilingIndex
}
