/* exported equal */
const equal = (first, second) => {
  if (first.length !== second.length) return false;
  for (let i = 0; i < first.length; i++) {
    if (first[i] !== second[i]) {
      return false;
    }
  }
  return true;
};

// defined a function with 2 params of first and second
// if statement that returns false if the arrays arent the same length
// for loop followed by an if statement that compares the arrays at the same index
// if they are not equal at any point then it returns false
// finally if they are all equal then it returns true
