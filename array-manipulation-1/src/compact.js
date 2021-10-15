/* exported compact */
// const compact = (array) => {
//   const newArr = [];
//   for (let i = 0; i < array.length; i++) {
//     if (
//       array[i] !== false ||
//       array[i] !== null ||
//       array[i] !== NaN ||
//       array[i] !== 0 ||
//       array[i] !== -0 ||
//       array[i] !== undefined ||
//       array[i] !== ""
//     ) {
//       newArr.push(array[i]);
//     }
//   }
//   console.log(newArr);
//   return newArr;
// };

const compact = array => {
  const newArr = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i]) newArr.push(array[i]);
  }
  return newArr;
};
