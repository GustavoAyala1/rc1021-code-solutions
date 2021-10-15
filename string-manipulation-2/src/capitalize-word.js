/* exported capitalizeWord */
const capitalizeWord = word => {
  const lower = word.toLowerCase();
  const upper = word.slice(0, 1).toUpperCase();
  const leftover = lower.slice(1);
  const final = upper + leftover;
  if (final === 'Javascript') {
    const js = final.split('s');
    const capitalJs = js[0] + 'S' + js[1];
    return capitalJs;
  }
  return final;
};
