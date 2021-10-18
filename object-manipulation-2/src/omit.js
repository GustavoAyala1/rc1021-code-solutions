/* exported omit */
// const omit = (source, keys) => {
//   const newObj = {};
//   const rejected = {};

//   for (let i = 0; i < keys.length; i++) {
//     for (const property in source) {
//       if (property === keys[i]) {
//         newObj[property] = source[property];
//       } else {
//         rejected[property] = source[property];
//       }
//     }
//   }
//   console.log(rejected, newObj);
//   return rejected;
// };

const omit = (source, keys) => {
  const newObj = {};
  const rejected = {};
  let counter = 0;

  for (const [prop, value] of Object.entries(source)) {
    if (prop === keys[counter]) {
      newObj[prop] = value;
      counter++;
    } else if (prop !== keys[counter]) {
      rejected[prop] = value;
    }
  }

  return rejected;
};
