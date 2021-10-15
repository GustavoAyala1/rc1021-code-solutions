/* exported getValues */
const getValues = object => {
  const values = [];
  let key;
  for (key in object) {
    values.push(object[key]);
  }
  return values;
};
