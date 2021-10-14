/* exported capitalize */
const capitalize = word => {
  let final = '';
  for (let i = 0; i < word.length; i++) {
    if (i === 0) {
      final += word[0].toUpperCase();
    } else {
      final += word[i].toLowerCase();
    }
  }

  return final;
};
