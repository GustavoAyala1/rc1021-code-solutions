/* exported reverseWords */

const reverseWords = string => {
  const array = string.split('').reverse().join('').split(' ');
  const newArr = [];
  for (let i = array.length; i >= 0; i--) {
    newArr.push(array[i]);
  }

  return newArr.join(' ').slice(1);
};
