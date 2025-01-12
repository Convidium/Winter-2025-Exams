// Refactor following solution
// Shuffle an array

// Step 1:
// change `let` to `const` in function declaration
// change function naming
// change variable naming

const shuffleList = (...list) => {
  const [arr] = list;
  arr.sort(() => Math.random() - 0.5);
  {
    return arr;
  }
};

module.exports = shuffleList;
