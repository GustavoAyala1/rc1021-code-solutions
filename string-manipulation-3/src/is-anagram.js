/* exported isAnagram */
const isAnagram = (firstString, secondString) => {
  const first = firstString.split(' ').join('').split('').sort();
  const second = secondString.split(' ').join('').split('').sort();

  for (let i = 0; i < first.length; i++) {
    if (first[i] !== second[i]) {
      return false;
    }
  }
  return true;
};

// defined the function with the name isAnagram and 2 params firstString and secondString
// used the split method to remove the spaces then rejoined them then split again to create and
//    array and finally sorted them to create 2 new variables second and first
// for loop inside another foor loop that if at any point it is false it ends the function
// and returns false
// if at no point is it false then the final line is to return true
