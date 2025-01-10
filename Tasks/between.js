// Refactor following solution
// Extract substring between prefix and suffix

// Step 3: Improve code readability, fix another naming

getValueBetween = (string, prefix, suffix) => {
  prefixIndex = string.indexOf(prefix);
  if (prefixIndex === -1) return "";

  startIndex = prefixIndex + prefix.length;
  let result = string.substring(startIndex);
  if (suffix) {
    suffixIndex = result.indexOf(suffix);
    if (suffixIndex === -1) return "";
    result = result.substring(0, suffixIndex);
  }
  return result;
};

module.exports = getValueBetween;
