/* exported omit */
const omit = (source, keys) => {
  // const newObj = {};
  const rejected = {};

  for (const key in source) {
    for (let i = 0; i < key.length; i++) {
      if (key !== keys[i] || keys[i] === undefined) {
        rejected[key] = source[key];
        // console.log(key, keys[i]);
      }
    }
  }

  return rejected;
};
