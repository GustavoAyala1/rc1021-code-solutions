/* exported reverseWord */
const reverseWord = word => {
  let reverse = '';
  for (let i = word.length - 1; i >= 0; i--) {
    reverse += word[i];
  }
  return reverse;
};
