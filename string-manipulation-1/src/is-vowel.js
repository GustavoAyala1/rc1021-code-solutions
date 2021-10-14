/* exported isVowel */
const isVowel = char => {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let i;
  for (i in vowels) {
    if (vowels[i] === char.toLowerCase()) {
      return true;
    }
  }
  return false;
};
