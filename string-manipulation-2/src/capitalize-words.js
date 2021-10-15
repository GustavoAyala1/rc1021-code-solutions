/* exported capitalizeWords */
const capitalizeWords = string => {
  const split = string.toLowerCase().split(' ');
  let final = '';
  for (let i = 0; i < split.length; i++) {
    const firstCap = split[i][0].toUpperCase() + split[i].slice(1);
    if (i !== split.length - 1) {
      final += firstCap + ' ';
    } else {
      final += firstCap;
    }
  }
  return final;
};
