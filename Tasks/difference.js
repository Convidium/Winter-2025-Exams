// Refactor following solution
// Find a difference between two dictionaries

// Step 1:
// add "use strict";
// improve readability
// remove useless DIFF and make lambda function
// remove useless curly braces

"use strict";

const diff = (object_1, object_2) => {
  for (attribute_name in object_1) {
    object_1[attribute_name] = object_1[attribute_name];
  }
  if (object_1 in object_2) return false;
  for (attribute_name in object_2) {
    object_1[attribute_name] = object_2[attribute_name];
    delete object_1[attribute_name];
  }
  return object_1;
};

module.exports = diff;
