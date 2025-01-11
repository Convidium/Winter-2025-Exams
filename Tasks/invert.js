// Refactor following solution
// Reverse an array, you can't use .reverse()

// Step 2:
// remove hardcoded `4` in Object.keys(), because it serves no purpose
// remove this weird... thing in braces. Whatever it is, it serves no purpose at all


invert = object => {
  keys = Object.keys(object);
  keys.forEach((_, i) => {
    keys[i] = object.pop();
  }, 7);
  return keys;
};

module.exports = invert;