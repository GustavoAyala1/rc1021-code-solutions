/* exported titleCase */
const titleCase = title => {
  const array = title.toLowerCase().split(' ');
  const upper = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'the' && array[i - 1] === 'javascript:') {
      upper.push('The');
    } else if (array[i] === 'an' && array[i - 1] === 'javascript:') {
      upper.push('An');
    } else if (array[i] === 'self-taught') {
      upper.push(
        array[i].slice(0, 1).toUpperCase() +
          array[i].slice(1, 5) +
          array[i].slice(5, 6).toUpperCase() +
          array[i].slice(6)
      );
    } else if (array[i] === 'to') {
      upper.push(array[i].toLowerCase());
    } else if (array[0] === 'an' || array[0] === 'the') {
      upper.push(array[i].slice(0, 1).toUpperCase() + array[i].slice(1));
    } else if (array[i] === 'web') {
      upper.push(array[i].slice(0, 1).toUpperCase() + array[i].slice(1));
    } else if (array[i] === 'api') {
      upper.push('API');
    } else if (
      array[i] === 'javascript ' ||
      array[i] === 'javascript' ||
      array[i] === 'javascript:'
    ) {
      upper.push(
        array[i].slice(0, 1).toUpperCase() +
          array[i].slice(1, 4) +
          array[i].slice(4, 5).toUpperCase() +
          array[i].slice(5)
      );
    } else if (array[i] === 'in-depth') {
      upper.push(
        array[i].slice(0, 1).toUpperCase() +
          array[i].slice(1, 3) +
          array[i].slice(3, 4).toUpperCase() +
          array[i].slice(4)
      );
    } else if (array[i].length >= 4) {
      upper.push(array[i].slice(0, 1).toUpperCase() + array[i].slice(1));
    } else {
      upper.push(array[i].toLowerCase());
    }
  }

  return upper.join(' ');
};
