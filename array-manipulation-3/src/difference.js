/* exported difference */
const difference = (first, second) => {
  const difference = first
    .filter(x => !second.includes(x))
    .concat(second.filter(x => !first.includes(x)));
  return difference;
};
