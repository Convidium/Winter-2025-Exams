// Refactor following solution
// Find an intersection of two dictionaries

// Step 1:
// change function name to `checkIntersection` (makes much more sense what it's intentions are)
// change function to labmbda function
// remove useless curly braces

checkIntersection = (object_1, object_2) => {
  first_keys = Object.keys(object_1);
  for (attribute_name of first_keys) {
    if (object_1[attribute_name] === object_2[attribute_name]) {
      object_2[attribute_name] = object_1[attribute_name];
    } else {
      delete object_1[attribute_name];
    }
  }
  return object_1;
};

module.exports = checkIntersection;