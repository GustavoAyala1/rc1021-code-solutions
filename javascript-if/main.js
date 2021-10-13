/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro
 */

// var homer = {
//   name: "Homer Jay Simpson",
//   age: 39,
// };

// var bart = {
//   name: "Bartholomew JoJo Simpson",
//   age: 10,
// };

const isUnderFive = number => {
  if (number < 5) {
    return true;
  } else {
    return false;
  }
};

// console.log("the value is under 5:", isUnderFive(4));
// console.log("the value is under 5:", isUnderFive(10));
// console.log("the value is under 5:", isUnderFive(5));

const isEven = number => {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
};

// console.log("the value is even:", isEven(4));
// console.log("the value is even:", isEven(10));
// console.log("the value is even:", isEven(5));

const startsWithJ = string => {
  if (string[0] === 'J') {
    return true;
  } else {
    return false;
  }
};

// console.log("the value starts with J:", startsWithJ("JavaScript"));
// console.log("the value starts with J:", startsWithJ("PHP"));
// console.log("the value starts with J:", startsWithJ("HTML"));
// console.log("the value starts with J:", startsWithJ("Java"));
// console.log("the value starts with J:", startsWithJ("Kotlin"));
// console.log("the value starts with J:", startsWithJ("C#"));

const isOldEnoughToDrink = person => {
  if (person.age >= 21) {
    return true;
  } else {
    return false;
  }
};

// console.log("the person is old enough to drink:", isOldEnoughToDrink(bart));

const isOldEnoughToDrive = person => {
  if (person.age >= 16) {
    return true;
  } else {
    return false;
  }
};

// console.log("the person is old enough to drive:", isOldEnoughToDrive(homer));

const isOldEnoughToDrinkAndDrive = person => {
  if (person) {
    return false;
  }
};

// console.log(
//   "the person is old enough to drink and drive:",
//   isOldEnoughToDrinkAndDrive(bart)
// );

const categorizeAcidity = pH => {
  if (pH === 7) {
    return 'neutral';
  } else if (pH >= 0 && pH < 7) {
    return 'acid';
  } else if (pH <= 14 && pH > 7) {
    return 'base';
  } else {
    return 'invalid pH level';
  }
};

// console.log("the pH level is:", categorizeAcidity(-1));
// console.log("the pH level is:", categorizeAcidity(14.0000001));
// console.log("the pH level is:", categorizeAcidity(7));
// console.log("the pH level is:", categorizeAcidity(2));
// console.log("the pH level is:", categorizeAcidity(9));

const introduceWarnerBro = name => {
  if (name === 'yakko' || name === 'wakko') {
    return "We're the warner brothers!";
  } else if (name === 'dot') {
    return "I'm cute ~";
  } else {
    return 'Goodnight everybody!';
  }
};

// console.log(introduceWarnerBro("yakko"));
// console.log(introduceWarnerBro("wakko"));
// console.log(introduceWarnerBro("dot"));
// console.log(introduceWarnerBro("cody"));
// console.log(introduceWarnerBro("minerva"));
