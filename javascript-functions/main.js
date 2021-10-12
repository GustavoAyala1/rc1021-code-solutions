const convertMinutesToSeconds = minutes => {
  const seconds = minutes * 60;
  console.log(`${minutes} minutes is ${seconds} seconds`);
};

convertMinutesToSeconds(5);

const greet = name => {
  console.log(`Hey, ${name}`);
};

greet('Gustavo');

const getArea = (width, height) => {
  const area = width * height;
  console.log(`The area is ${area}`);
};

getArea(17, 42);

const getFirstName = person => {
  const firstName = person.firstName;
  console.log(`The first name is ${firstName}`);
};

getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' });

const getLastElement = array => {
  const lastElement = array.length - 1;
  console.log(`The last element is ${array[lastElement]}`);
};

getLastElement(['propane', 'and', 'propane', 'accessories']);
