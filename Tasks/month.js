// Refactor following solution
// Get month number

// Step 3:
// remove `for` loop, instead use `.includes()`
// create intermediate variables

const months = [
  'jan',
  'feb',
  'mar',
  'apr',
  'may',
  'jun',
  'jul',
  'aug',
  'sep',
  'oct',
  'nov',
  'dec',
];

const getMonthNumber = (month) => {
  const monthFirstLetters = month.trim().toLowerCase().substring(0, 3);
  const isMonthIncluded = months.includes(monthFirstLetters);
  if (isMonthIncluded) {
    const monthIndex = months.indexOf(monthFirstLetters);
    return monthIndex + 1;
  }
  return -1;
};

module.exports = getMonthNumber;