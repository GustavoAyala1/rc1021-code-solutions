/* exported flatten */
const flatten = array => {
  const newArr = [];

  let i = 0;
  let j = 0;

  while (i < array.length) {
    while (j < array[i].length) {
      if (j < 1) {
        newArr.push(array[i]);
      } else {
        newArr.push(array[i][j]);
      }
      j++;
    }
    i++;
  }
};

// console.log(flatten([[1], [2], 3, 4, [5]]));
