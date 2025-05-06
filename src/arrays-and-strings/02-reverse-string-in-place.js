// Write a function that takes an array of characters and reverses the letters in place.
export function reverseCharacters(characterArray) {
  // Moving from outside to inside, swap items
  let i = 0
  let j = characterArray.length - 1
  const middle = Math.floor(characterArray.length / 2)

  while (i < middle && j > middle) {
    const first = characterArray[i]
    characterArray[i] = characterArray[j]
    characterArray[j] = first
    i++
    j--
  }

  return characterArray
}
