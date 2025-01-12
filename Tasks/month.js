// Refactor following solution
// Get month number

// Step 2:
// change incoming parameter name
// add anotehr `const`

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
  const monthsCount = months.length;
  for (let i = 0; i < monthsCount; i++) {
    if (month.toLowerCase().startsWith(months[i])) return i + 1;
  }
  return -1;
};

module.exports = getMonthNumber;