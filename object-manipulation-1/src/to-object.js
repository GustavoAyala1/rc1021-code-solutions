/* exported toObject */
const toObject = keyValuePair => {
  const object = {};
  const first = keyValuePair[0];
  const second = keyValuePair[1];

  object[first] = second;
  return object;
};
