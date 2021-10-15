/* exported tail */
const tail = array => {
  const tailArr = [];
  for (let i = 0; i < array.length; i++) {
    if (i !== 0) tailArr.push(array[i]);
  }
  return tailArr;
};
