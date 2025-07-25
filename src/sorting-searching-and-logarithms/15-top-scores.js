/**
 * Write a function to sort a list of scores given a max score, in O(n) time.
 * @param {integer[]} scores - an unordered list of scores.
 * @param {integer} max - the max possible score.
 * @returns {array} Ordered list of scores, from highest to lowest.
 */
export function sortScores(scores, max) {
  // Use counting sort, create an array with a slot for every possible score
  const scoreCounts = new Array(max + 1).fill(0)

  // Populate the count for each score
  scores.forEach((score) => {
    scoreCounts[score]++
  })

  const sortedScores = []

  // Populate the sorted list based on count, starting with max
  for (let score = max; score >= 0; score--) {
    const count = scoreCounts[score]

    // Push however many times based on count
    for (let i = 0; i < count; i++) {
      sortedScores.push(score)
    }
  }

  return sortedScores
}
