// Refactor following solution
// Find a difference between two dictionaries

// Step 3: 
// changed `attribut_name` to just `name` (no need for such specific naming)
// removed unnecessary `if` statement
// removed mutation of incoming objects

"use strict";

const diff = (object1, object2) => {
  const result = {};
  const objectKeys = Object.keys(object1);
  for (const name in objectKeys) {
    if (object1[name] !== object2[name]) {
      result[name] = object1[name];
    }
  }
  return result;
};

module.exports = diff;