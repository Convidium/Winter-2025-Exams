// Refactor following solution
// Get month number

// Step 1:
// change variable namings
// change function naming
// Add `const`

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

const getMonthNumber = (s) => {
  monthsCount = months.length;
  for (let i = 0; i < monthsCount; i++) {
    if (s.toLowerCase().startsWith(months[i])) return i + 1;
  }
  return -1;
};

module.exports = getMonthNumber;