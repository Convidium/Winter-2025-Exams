// Refactor following solution
// Find an intersection of two dictionaries

// Step 3:
// Remove object mutation

checkIntersection = (object1, object2) => {
  firstKeys = Object.keys(object1);
  const result = {};
  for (attributName of firstKeys) {
    if (object1[attributName] === object2[attributName]) {
      result[attributName] = object1[attributName];
    }
  }
  return result;
};

module.exports = checkIntersection;