/* exported invert */

const invert = source => {
  const newObj = {};

  for (const [prop, value] of Object.entries(source).reverse()) {
    newObj[value] = prop;
  }
  return newObj;
};
