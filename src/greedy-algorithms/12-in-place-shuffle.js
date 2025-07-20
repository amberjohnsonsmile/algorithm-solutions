/**
 * Write a function for doing an in place shuffle of an array.
 * Each item must have the same probability of ending up in each spot.
 */
export function shuffleInPlace(arr) {
  // One index at a time, choose random item to move there
  for (let i = 0; i < arr.length; i++) {
    // Choose random index AFTER current to swap with
    const randomIndex = getRandom(i, arr.length - 1)

    // Swap current with random
    if (i !== randomIndex) {
      const temp = arr[i]
      arr[i] = arr[randomIndex]
      arr[randomIndex] = temp
    }
  }

  return arr
}

// Return a random number that is >= floor and <= ceiling
function getRandom(floor, ceiling) {
  return Math.floor(Math.random() * (ceiling - floor + 1)) + floor
}
