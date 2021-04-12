// MERGE SORT

// BIG O OF O(N log N)

// STEP ONE
// MERGE two SORTED arrays so that they return one SORTED array.

function merge(arr1, arr2) {
  let results = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }

  return results;
}

console.log(merge([1, 10, 50], [2, 14, 99, 100]));

// STEP TWO - USES RECURSION
// Break up arrays into halves until you ave arrays that are empty or have ONE element
// Once you have smaller sorted arrays, merge those with other sorted arrays, and return the one SORTED array as results

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let midpoint = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, midpoint));
  let right = mergeSort(arr.slice(midpoint));
  return merge(left, right);
}

console.log(mergeSort([1, 7, 16, 2, 6, 99, 3]));
