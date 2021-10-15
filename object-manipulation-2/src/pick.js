/* exported pick */
const pick = (source, keys) => {
  const newObj = {};
  const rejected = {};

  for (const key in source) {
    for (let i = 0; i < keys.length; i++) {
      if (key === keys[i]) {
        if (source[key] === undefined) {
          rejected[keys[i]] = source[key];
        } else {
          newObj[keys[i]] = source[key];
        }
      } else {
        rejected[keys[i]] = source[key];
      }
    }
  }

  return newObj;
};

// define the function with name pick and 2 params source and key
// create 2 new objects 1 for a newObj and anther for what will get rejected
// for... in loop followed with a for loop
// if statement with condition if the key in the source param is the same as the
// keys at an index the continue
// then another if statement if the source at index key  is undefined send it to rejected object
// else key(value) of the source object assign it to the new object with the name of
//  the keys at the index
// the just return the newObj
