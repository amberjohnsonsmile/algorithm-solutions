export function reverseWords(charArr) {
  // Reverse all
  let i = 0
  let j = charArr.length - 1
  while (i < j) {
    const temp = charArr[i]
    charArr[i] = charArr[j]
    charArr[j] = temp
    i++
    j--
  }
  console.log('after reversing all: ', charArr)
  // Reverse one word at a time

  let placeholder = 0
  i = 0
  j = 0

  while (placeholder < charArr.length) {
    while (charArr[j] !== ' ' && j < charArr.length) {
      j++
    }

    placeholder = j + 2

    while (i < j) {
      const temp = charArr[i]
      charArr[i] = charArr[j]
      charArr[j] = temp
      i++
      j--
    }
  }
  return charArr
}
