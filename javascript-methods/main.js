const two = 2;
const five = 5;
const negTen = -10;

const maximumValue = Math.max(two, five, negTen);

console.log(maximumValue);

const heros = ['Batman', 'Wolverine', 'Spider-man', 'DeadPool'];

const randomNumber = Math.random() * heros.length;
const randomIndex = Math.floor(randomNumber);

console.log(randomIndex);

const randomHero = heros[randomIndex];
console.log(randomHero);

const library = [
  { title: 'Misery', author: 'Stephen King' },
  { title: 'Carrie', author: 'Stephen King' },
  { title: 'Moby Dick', author: 'Herman Melville' }
];

const lastBook = library.pop();
console.log(lastBook);

const firstBook = library.shift();

console.log(firstBook);

const js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
const css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);

library.splice(1, 1);

console.log(library);

const fullName = 'Gustavo Ayala';
const firstAndLastName = fullName.split(' ');
console.log(firstAndLastName);

const firstName = firstAndLastName[0];
const sayMyName = firstName.toUpperCase();
console.log(sayMyName);
