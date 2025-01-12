// Refactor following solution
// Shuffle an array

// Step 3:
// Put hardcoded value `0.5` into a variable
// the randomness of the shuffle could be improved, but I'm not sure if it's what I have to do?

const shuffleList = (list) => {
  const arr = [...list];
  const randomCoefficient = 0.7;
  arr.sort(() => Math.random() - randomCoefficient);
  return arr;
};

module.exports = shuffleList;
