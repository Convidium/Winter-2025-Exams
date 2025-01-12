// Refactor following solution
// Split string by the first occurrence of separator

// Step 2:
// improve `if else` logic
// add `const` and `let`
// add spacing between blocks of code

parseIP = (ip) => {
  const parsedIP = [];
  const arrayIP = ip.split(".");
  if (arrayIP.length !== 4) return;

  let i = 0;
  for (const num of arrayIP) {
    parsedIP[i] = parseInt(num);
    if (isNaN(parsedIP[i])) return;
    i++;
  }
  return parsedIP;
};

module.exports = parseIP;
