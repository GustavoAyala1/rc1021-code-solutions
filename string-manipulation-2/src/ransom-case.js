/* exported ransomCase */
const ransomCase = string => {
  const lower = string.toLowerCase();
  let ransom = '';
  for (let i = 0; i < lower.length; i++) {
    if (i % 2 !== 0) {
      ransom += lower[i].toUpperCase();
    } else {
      ransom += lower[i];
    }
  }
  return ransom;
};

// define a function with the name ransomcase and 1 param of string
// use the toLowerCase method on the string param and assign it to the lower variable
// assign an empty string to the ransom variable
// create a for loop
// if statement with the condition ending up only affecting even numbered indexes
// the lower variable at an even index we use the toUpperCase method and concat it to the ransom variable
// else block that adds the lower at odd index to the ransom variable
// return the ransom variable
