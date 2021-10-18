/* exported defaults */
const defaults = (target, source) => {
  for (const prop in target) {
    source[prop] = target[prop];
  }
  for (const key in source) {
    target[key] = source[key];
  }
  return target;
};

// define a new function with 2 params target and source
// for in loop that adds the target properties and keys into source
// another for in loop that then adds the source properties into target
// return target
