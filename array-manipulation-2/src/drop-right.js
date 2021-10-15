/* exported dropRight */
const dropRight = (array, count) => {
  const taken = array.slice(0, -count);
  return taken;
};
