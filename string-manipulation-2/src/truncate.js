/* exported truncate */
const truncate = (length, string) => {
  const trunct = string.slice(0, length);
  return trunct + '...';
};

// create a function with the name truncate with 2 params of length and string
// use the slice method on the string object with 2 arguments of 0 and the length param
//  and save it into a new variable called trunct
// then return the trunct variable concatenated with the string '...'
