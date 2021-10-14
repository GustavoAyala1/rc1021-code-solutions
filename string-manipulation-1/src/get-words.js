/* exported getWords */
const getWords = string => {
  if (string === '') return [];
  const array = string.split(' ');
  return array;
};
