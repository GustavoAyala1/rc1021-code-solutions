/* exported initial */
const initial = array => {
  const initialArr = [];
  const lastEl = array.length - 1;
  for (let i = 0; i < array.length; i++) {
    if (i !== lastEl) initialArr.push(array[i]);
  }
  return initialArr;
};
