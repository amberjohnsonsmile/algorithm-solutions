// Write a function reverseWords() that takes a message as an array of characters and reverses the order of the words in place.
export function reverseWords(charArr) {
  // Reverse all
  reverseCharacters(charArr, 0, charArr.length - 1)

  // Reverse one word at a time
  let wordStart = 0
  for (let i = 0; i <= charArr.length; i++) {
    if (i === charArr.length || charArr[i] === ' ') {
      reverseCharacters(charArr, wordStart, i - 1)
      wordStart = i + 1
    }
  }

  return charArr
}

function reverseCharacters(charArr, leftIndex, rightIndex) {
  while (leftIndex < rightIndex) {
    const temp = charArr[leftIndex]
    charArr[leftIndex] = charArr[rightIndex]
    charArr[rightIndex] = temp
    leftIndex++
    rightIndex--
  }
}
