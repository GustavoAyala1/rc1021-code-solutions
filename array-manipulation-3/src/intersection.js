/* exported intersection */
const intersection = (first, second) => {
  const array = [...first, ...second];
  const uniqueArr = [];
  const rejects = [];

  let i = 0;
  while (i < array.length) {
    if (uniqueArr.includes(array[i])) {
      rejects.unshift(array[i]);
    } else {
      uniqueArr.push(array[i]);
    }
    i++;
  }
  return rejects;
};
