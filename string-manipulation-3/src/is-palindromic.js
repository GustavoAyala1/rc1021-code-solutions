/* exported isPalindromic */
const isPalindromic = string => {
  const newString = string.split(' ').join('');
  const backwards = newString.split('').reverse().join('');
  if (backwards === newString) {
    return true;
  } else {
    return false;
  }
};

// define a function with the name isPalindromic and one param of string
// use the split method and then join method on the string param and assign it into a new variable
// then split method again then reverse method finally join method on the newString variable
// and assign it into a new variable backwards
// if statement to compare the backwards string and the regular string
//   then either return true or false
