// Refactor following solution
// Find an intersection of two dictionaries

// Step 2:
// change naming to camelCase standart
// change `if else` logic (the original one had unnecessary operation)

checkIntersection = (object1, object2) => {
  firstKeys = Object.keys(object1);
  for (attributName of firstKeys) {
    if (object1[attributName] !== object2[attributName]) {
      delete object1[attributName];
    }
  }
  return object1;
};

module.exports = checkIntersection;