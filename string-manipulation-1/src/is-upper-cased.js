/* exported isUpperCased */
const isUpperCased = word => {
  if (word.toUpperCase() === word) {
    return true;
  } else {
    return false;
  }
};
