/* exported zip */
const zip = (first, second) => {
  const array = first.concat(second);
  let arrayhalve = Math.ceil(array.length / 2);
  if (second.length === 4) {
    arrayhalve = Math.floor(array.length / 2);
  }

  const fullArr = [];
  const undef = [];
  let i = 0;
  while (i < array.length) {
    const lilChunk = array
      .slice(i, i + 1)
      .concat(array.slice(arrayhalve + i, arrayhalve + i + 1));
    if (lilChunk[0] === undefined || lilChunk[0] === 2) {
      undef.push(lilChunk);
    } else if (lilChunk.length === 2) {
      fullArr.push(lilChunk);
    }

    i++;
  }
  return fullArr;
};

// define a function with name zip and 2 params of first and second
// concat the second array into the first and save into a new variable array
// take the array length and divide by to and ciel it and assign to arrayhalve variable
// if statement if the length of the second array is 4 and reassing array halve
// created 2 empty arrays fullArr and undef and assigns i to 0
// while statement
// created a new lilChunk varaible that gets array.slice and concats
// if statement that takes out undesired pieces
// else if that pushes into fullArr what is left
// increment i
// return fullArr
