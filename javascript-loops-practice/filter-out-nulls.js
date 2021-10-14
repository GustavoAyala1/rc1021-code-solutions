/* exported filterOutNulls */

const filterOutNulls = values => {
  const newValues = [];

  for (let i = 0; i < values.length; i++) {
    if (values[i] !== null) {
      newValues.push(values[i]);
    }
  }
  return newValues;
};
