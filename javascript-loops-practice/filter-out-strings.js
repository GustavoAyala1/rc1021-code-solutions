/* exported filterOutStrings */

const filterOutStrings = values => {
  const newValues = [];

  for (let i = 0; i < values.length; i++) {
    if (typeof values[i] !== 'string') {
      newValues.push(values[i]);
    }
  }
  return newValues;
};
