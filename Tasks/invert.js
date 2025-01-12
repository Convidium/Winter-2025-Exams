// Refactor following solution
// Reverse an array, you can't use .reverse()

// Step 3:
// removed useless `foreach` parameter `7`
// change naming from `object` to `array`, becasue we're inverting arrays
// removed object mutation


invert = array => {
  const reversed = [];
  for (let i = array.length - 1; i >= 0; i--) {
    reversed.push(array[i]);
  }
  return reversed;
};

module.exports = invert;