const takeAChance = require('./take-a-chance');
const promise1 = takeAChance('Gustavo');

promise1.then(resolve => console.log(resolve))
  .catch(error => console.log(error.message));
