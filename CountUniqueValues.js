// MULTIPLE POINTERS PROBLEM
// Count Unique Values
// Implement a function countUniqueValues which accepts a SORTED array, and counts the unique values in the array.
// There can be negative numbers, but it will always be sorted.

// My own Naive looping solution... still O(N)
function countUniqueValues(array) {
  let newArray = [];

  array.forEach((num) => {
    if (!newArray.includes(num)) {
      newArray.push(num);
    }
  });

  return newArray.length;
}

console.log(countUniqueValues([1, 1, 1, 2, 3, 4, 4, 5]));
console.log(countUniqueValues([]));

// USING TWO POINTERS SOLUTION O(N)
function countUniqueValuesBetter(array) {
  if (array.length === 0) {
    return 0;
  }
  let i = 0;
  for (let j = 1; j < array.length; j++) {
    if (array[i] !== array[j]) {
      i++;
      array[i] = array[j];
    }
  }
  return i + 1;
}

console.log(countUniqueValuesBetter([1, 1, 1, 2, 3, 4, 4, 5]));
console.log(countUniqueValuesBetter([]));
