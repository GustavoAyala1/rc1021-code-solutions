/* exported flatten */
const flatten = array => {
  const newArr = [].concat.apply([], array);

  return newArr;
};
