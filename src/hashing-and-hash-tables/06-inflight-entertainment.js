// Write a function that takes an integer flightLength (in minutes) and an array of integers movieLengths (in minutes) and returns a boolean indicating whether there are two numbers in movieLengths whose sum equals flightLength.
export function isPossibleToFillFlightTime(flightLength, movieLengths) {
  let movieTracker = {}

  // First, add as object keys
  movieLengths.forEach((movieLength) => {
    movieTracker[movieLength] = true
  })

  // Next, compare time difference against existing keys
  for (let i = 0; i < movieLengths.length; i++) {
    const difference = flightLength - movieLengths[i]
    if (movieTracker[difference] && difference !== movieLengths[i]) {
      return true
    }
  }

  // If nothing returns true, we know it can't be done
  return false
}
