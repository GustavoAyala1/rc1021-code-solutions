/* exported calculator */

const calculator = {
  add: (x, y) => { return x + y; },
  subtract: (x, y) => { return x - y; },
  multiply: (x, y) => { return x * y; },
  divide: (x, y) => { return x / y; },
  square: x => { return x * x; },
  sumAll: numbers => {
    let num = 0;
    for (let i = 0; i < numbers.length; i++) {
      num += numbers[i];
    } return num;
  },
  getAverage: numbers => {
    let num = 0;
    for (let i = 0; i < numbers.length; i++) {
      num += numbers[i];
    }
    num /= numbers.length;
    return num;
  }
};
