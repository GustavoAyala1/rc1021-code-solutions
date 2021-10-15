/* exported numVowels */
const numVowels = string => {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const lower = string.toLowerCase();
  let counter = 0;
  for (let i = 0; i < lower.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
      if (lower[i] === vowels[j]) {
        counter++;
      }
    }
  }
  return counter;
};
