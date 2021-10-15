/* exported chunk */
const chunk = (array, size) => {
  const chuncked = [];
  for (let i = 0; i < array.length; i += size) {
    const lilChunk = array.slice(i, i + size);
    chuncked.push(lilChunk);
  }
  return chuncked;
};
