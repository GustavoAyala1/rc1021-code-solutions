function ExampleConstructor() {}
console.log('Prototype property of ExampleConstructor', ExampleConstructor.prototype);
console.log('typeOf ExampleConstructor', typeof ExampleConstructor);
const newConstructor = new ExampleConstructor();
console.log(newConstructor);

const isInstance = newConstructor instanceof ExampleConstructor;
console.log('the instanceof newConstructor', isInstance);
