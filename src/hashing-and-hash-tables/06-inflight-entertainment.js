// Write a function that takes an integer flightLength (in minutes) and an array of integers movieLengths (in minutes) and returns a boolean indicating whether there are two numbers in movieLengths whose sum equals flightLength.
export function isPossibleToFillFlightTime(flightLength, movieLengths) {
  let isPossible = false
  let movieTracker = new Set()

  // Add keys to map and check for difference
  movieLengths.forEach((movieLength) => {
    const difference = flightLength - movieLength
    if (movieTracker.has(difference)) {
      isPossible = true
    }

    movieTracker.add(movieLength)
  })

  return isPossible
}
