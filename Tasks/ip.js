// Refactor following solution
// Split string by the first occurrence of separator

// Step 3:
// replace manual `i` incrementation and `for` loop with `.map()` method

parseIP = (ip) => {
  const arrayIP = ip.split(".");
  if (arrayIP.length !== 4) return;

  const parsedIP = arrayIP.map((num) => {
    const parsedNum = parseInt(num);
    if (isNaN(parsedNum) === false) {
      return parsedNum;
    }
    else {
      return null;
    }
  });
  if (parsedIP.includes(null)) return;

  return parsedIP;
};

module.exports = parseIP;
