/* exported flatten */
const flatten = array => {
  const subArr = [];
  const newArr = [];

  for (let i = 0; i < array.length; i++) {
    subArr.push(array[i]);
    for (let j = 0; j < subArr.length; j++) {
      newArr.push(subArr[j]);
      // console.log(newArr, newArr.length);
    }
  }
};

// console.log(flatten([[1], [2], 3, 4, [5]]));
