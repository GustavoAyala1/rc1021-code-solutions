const { add } = require('./add');
const { subtract } = require('./subtract');
const { multiply } = require('./multiply');
const { divide } = require('./divide');

const num1 = +process.argv[2];
const op = process.argv[3];
const num2 = +process.argv[4];

switch (op) {
  case '+':
    console.log(add(num1, num2));
    break;
  case '-':
    console.log(subtract(num1, num2));
    break;
  case 'x':
    console.log(multiply(num1, num2));
    break;
  case '/':
    console.log(divide(num1, num2));
}
