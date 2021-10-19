/* exported unique */
const unique = array => {
  const uniqueArr = [];
  const rejects = [];
  let i = 0;
  while (i < array.length) {
    if (uniqueArr.includes(array[i])) {
      rejects.push(array[i]);
    } else {
      uniqueArr.push(array[i]);
    }
    i++;
  }
  return uniqueArr;
};
