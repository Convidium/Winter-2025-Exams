// Refactor following solution
// Extract substring between prefix and suffix

// Step 1: Fix variable namings
// str to string
// p to prefix
// s to suffix

getvaluebetween = (string, prefix, suffix) => {
  prefixIndex = string.indexOf(prefix);
  if (prefixIndex === -1) return '';
  else {
    k = prefixIndex + prefix.length;
    string = string.substring(k);
    if (suffix) {
      prefixIndex = string.indexOf(suffix);
      if (prefixIndex === -1) {
        return '';
      } else {
        string = string.substring(0, prefixIndex);
      }
    }
  }
  return string;
};

module.exports = getvaluebetween;