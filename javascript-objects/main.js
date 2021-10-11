const student = {
  firstName: 'Gustavo',
  lastName: 'Ayala',
  age: 28
};

const fullName = `${student.firstName} ${student.lastName}`;
console.log(fullName);

student.livesInIrvine = false;
student.previousOccupation = 'Accountant';

console.log('value of livesInIrvine:', student.livesInIrvine);

console.log('value of previousOccupation:', student.previousOccupation);

const vehicle = {
  make: 'Pontiac',
  model: 'Trans Am',
  year: 1980
};

vehicle['color'] = 'black';
vehicle['isConvertible'] = true;

console.log('value of color:', vehicle['color']);
console.log('value of isConvertable:', vehicle['isConvertible']);

console.log('the vehicle object:', vehicle);

const pet = {
  name: 'Rex',
  type: 'Dog'
};

delete pet.name;
delete pet.type;

console.log('the pet object:', pet);
