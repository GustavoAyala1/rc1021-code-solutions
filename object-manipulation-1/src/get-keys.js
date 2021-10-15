/* exported getKeys */
const getKeys = object => {
  const keys = [];
  let key;
  for (key in object) {
    keys.push(key);
  }
  return keys;
};
