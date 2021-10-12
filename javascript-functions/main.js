const convertMinutesToSeconds = minutes => {
  const seconds = minutes * 60;
  return seconds;
};

console.log(convertMinutesToSeconds(5) + ' seconds');

const greet = name => {
  const greeting = 'Hey';
  return greeting + ' ' + name;
};

console.log(greet('Gustavo'));

const getArea = (width, height) => {
  const area = width * height;
  return area;
};

console.log('The area is ' + getArea(17, 42));

const getFirstName = person => {
  const firstName = person.firstName;
  return firstName;
};

console.log(
  'The first name is ' +
    getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' })
);

const getLastElement = array => {
  const lastElement = array.length - 1;
  return array[lastElement];

};

console.log(
  'The last element is ' +
    getLastElement(['propane', 'and', 'propane', 'accessories'])
);
