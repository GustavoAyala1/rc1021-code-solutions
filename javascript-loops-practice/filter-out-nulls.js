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

// define a function with the name filterOutNulls and a values parameter
// inside the code block create a empty array literal and assign it into a newValues variable
// start a for loop with the initiazion 'let i=0'
// condition statement of 'i < values.length' / it ending when it reaches the length of the values
// ending statement incrementing the index after each iteration
// if statement with condition as long as values at index i is not null
// push that values at that index into the newValues variable
// at the end just return the newValues variable
