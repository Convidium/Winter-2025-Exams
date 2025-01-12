// Refactor following solution
// Split string by the first occurrence of separator

// Step 1:
// fix function naming to camelCase
// change variable namings for better readability

Parseip = (ip) => {
  parsedIP = [];
  if (ip === '') return;
  else {
    arrayIP = ip.split('.');
    if (arrayIP.length != 4) return;
    i = 0;
    for (const num of arrayIP) {
      parsedIP[i] = parseInt(num);
      if (isNaN(parsedIP[i])) return;
      i++;
    }
  }
  return parsedIP;
};

module.exports = Parseip;
