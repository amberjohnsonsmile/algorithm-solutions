// Write an efficient function that checks whether any permutation of an input string is a palindrome.
export function isPalindrome(str) {
  const pairSet = new Set()

  // Check that letters are paired up
  for (let char of str) {
    if (pairSet.has(char)) {
      pairSet.delete(char)
    } else {
      pairSet.add(char)
    }
  }

  // If there's more than one letter without a pair, we know it's not a palindrome
  return pairSet.size <= 1
}
