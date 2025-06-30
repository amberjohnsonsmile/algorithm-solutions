// Write a function that takes an integer flightLength (in minutes) and an array of integers movieLengths (in minutes) and returns a boolean indicating whether there are two numbers in movieLengths whose sum equals flightLength.
export function isPossibleToFillFlightTime(flightLength, movieLengths) {
  let movieTracker = {}
  let isPossible = false

  // Add keys to map and check for difference
  movieLengths.forEach((movieLength) => {
    const difference = flightLength - movieLength
    if (movieTracker[difference]) {
      isPossible = true
    }

    movieTracker[movieLength] = true
  })

  return isPossible
}
