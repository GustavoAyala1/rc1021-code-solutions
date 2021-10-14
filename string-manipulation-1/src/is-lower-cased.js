/* exported isLowerCased */
const isLowerCased = word => {
  if (word.toLowerCase() === word) {
    return true;
  } else {
    return false;
  }
};
