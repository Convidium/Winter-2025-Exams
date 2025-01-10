// Refactor following solution
// Find a difference between two dictionaries

// Step 2: 
// Added `const`
// changed namings to camelCase standart

"use strict";

const diff = (object1, object2) => {
  if (object1 in object2) return false;
  for (const attributeName in object2) {
    object1[attributeName] = object2[attributeName];
    delete object1[attributeName];
  }
  return object1;
};

module.exports = diff;
