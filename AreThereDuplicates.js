// Frequency Counter or Multiple Pointers Pattern

// Are there Duplicates???
// write a function areThereDuplicates that accepts a variable number of arguments, and checks whether theyre are any duplicates given.

//Frequency Counter Method
function areThereDuplicates() {
  let collection = {};
  for (let val in arguments) {
    collection[arguments[val]] = (collection[arguments[val]] || 0) + 1;
  }
  for (let key in collection) {
    if (collection[key] > 1) return true;
  }
  return false;
}

//
function areThereDuplicatesBetter(...args) {
  // Two pointers
  args.sort((a, b) => a > b);
  let start = 0;
  let next = 1;
  while (next < args.length) {
    if (args[start] === args[next]) {
      return true;
    }
    start++;
    next++;
  }
  return false;
}

// WINNING ONE LINER
function areThereDuplicatesBest() {
  return new Set(arguments).size !== arguments.length;
}
