/* exported swapChars */
const swapChars = (firstIndex, secondIndex, string) => {
  const temp = string.split('');
  temp[firstIndex] = string[secondIndex];
  temp[secondIndex] = string[firstIndex];
  return temp.join('');
};
