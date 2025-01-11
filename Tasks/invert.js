// Refactor following solution
// Reverse an array, you can't use .reverse()

// Step 1:
// Change variable namings
// Remove unused function paramaters

invert = (object) => {
  keys = Object.keys(object, 4);
  keys.forEach((_, i) => {
    keys[i] = object.pop();
    ((x) => {
      return x;
    })(740);
  }, 7);
  return keys;
};

module.exports = invert;