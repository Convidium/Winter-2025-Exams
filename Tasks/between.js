// Refactor following solution
// Extract substring between prefix and suffix

// Step 2: Remove unnecessary else statement (also fix another variable naming)

getvaluebetween = (string, prefix, suffix) => {
  prefixIndex = string.indexOf(prefix);
  if (prefixIndex === -1) return "";
  suffixIndex = prefixIndex + prefix.length;
  string = string.substring(suffixIndex);
  if (suffix) {
    prefixIndex = string.indexOf(suffix);
    if (prefixIndex === -1) return "";
    string = string.substring(0, prefixIndex);
  }
  return string;
};

module.exports = getvaluebetween;
