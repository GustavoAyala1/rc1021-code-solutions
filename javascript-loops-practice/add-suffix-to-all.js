/* exported addSuffixToAll */
const addSuffixToAll = (words, suffix) => {
  const suffixed = [];
  for (let i = 0; i < words.length; i++) {
    suffixed.push(`${words[i]}${suffix}`);
  }
  return suffixed;
};
