// Refactor following solution
// Shuffle an array

// Step 2:
// No need to use `rest` in parameters. Better to create a `arr` as a copy `list` to avoid incoming data mutation
// remove useless curly braces

const shuffleList = (list) => {
  const arr = [...list];
  arr.sort(() => Math.random() - 0.5);
  return arr;
};

module.exports = shuffleList;
