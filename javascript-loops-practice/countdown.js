/* exported countdown */
const countdown = number => {
  const array = [];
  for (let i = number; i >= 0; i--) {
    array.push(i);
  }
  return array;
};
