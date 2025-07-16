// Given a string, return a map of word counts
// This implementation loops through, looking at each character once.
export function getWordCounts(str) {
  let wordMap = {};
  const punctuationSet = new Set([",", ":", ".", ";", ":", "!"]);
  let word = ""

  for (let i = 0; i <= str.length; i++) {
    const current = str[i];

    if (current === " " || i === str.length) {
      if (wordMap[word]) {
        wordMap[word] = wordMap[word] + 1
        word = ""
      } else {
        wordMap[word] = 1
        word = ""
      }
    } else {
      if (!punctuationSet.has(current)) {
        word = word + current.toLowerCase()
      }
    }
  }

  return wordMap;
}

// Another implementation, sanitizing first then using leftIndex / rightIndex to slice
// export function getWordCounts(str) {
//   let wordMap = {};
//   const punctuationSet = new Set([",", ":", ".", ";", ":", "!"]);

//   const lowerArr = str.toLowerCase().split("");
//   const sanitizedArr = lowerArr.filter((char) => !punctuationSet.has(char));

//   let leftIndex = 0;
//   let rightIndex = 0;

//   for (let i = 0; i <= sanitizedArr.length; i++) {
//     const current = sanitizedArr[i];

//     if (current === " " || i === sanitizedArr.length) {
//       rightIndex = i;
//       const word = sanitizedArr.slice(leftIndex, rightIndex).join("");
//       if (wordMap[word]) {
//         wordMap[word] = wordMap[word] + 1;
//       } else {
//         wordMap[word] = 1;
//       }

//       leftIndex = i + 1;
//     }
//   }

//   return wordMap;
// }