/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            getKeys,
            getValues
 */

const getNumbersToTen = () => {
  const numbers = [];
  const currentNumber = 1;
  for (let i = currentNumber; i < 11; i++) {
    numbers.push(i);
  }
  return numbers;
};

console.log('the array to get numbers to 10:', getNumbersToTen());

const getEvenNumbersToTwenty = () => {
  const evenNumbers = [];
  const currentNumber = 2;
  for (let i = currentNumber; i < 21; i += 2) {
    evenNumbers.push(i);
  }
  return evenNumbers;
};

console.log('the array to get even numbers to 20:', getEvenNumbersToTwenty());

const repeatWord = (word, times) => {
  let count = 1;
  let repeated = '';
  for (let i = count; i <= times; i++) {
    repeated += word;
    count++;
  }
  return repeated;
};

console.log('the repeated variable has:', repeatWord('cake', 5));

const logEachCharacter = string => {
  for (let i = 0; i < string.length; i++) {
    console.log(string[i]);
  }
};

console.log(logEachCharacter('Gustavo Ayala'));

const doubleAll = numbers => {
  const doubled = [];
  for (let i = 0; i < numbers.length; i++) {
    doubled.push(numbers[i] * 2);
  }
  return doubled;
};

console.log('double array:', doubleAll([2, 4, 3, 5, 1, 6, 10]));

const getKeys = object => {
  const keys = [];
  let key;
  for (key in object) {
    keys.push(key);
  }
  return keys;
};

console.log(
  'keys value:',
  getKeys({
    author: 'Stephen King',
    title: 'Misery',
    published: 'June 8, 1987'
  })
);

function getValues(object) {
  const values = [];
  let key;
  for (key in object) {
    values.push(object[key]);
  }
  return values;
}

console.log(
  getValues({
    author: 'Stephen King',
    title: 'Misery',
    published: 'June 8, 1987'
  })
);
