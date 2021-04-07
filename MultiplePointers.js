// MULTIPLE POINTERS
// Creating pointers or values that correspond to an index or position and move towards the beginning, end or middle, bassed on a certain condition
// Very efficient for solving problems with minimal space complexity as well

// SUM ZERO
// Write a function sumZero which accepts a SORTED array of integers.
// The function should find the first pair where the sum is zero.
// Return an array that includes both values that sum to zero, or undefined if a pair does not exist.

// NAIVE SOLUTION = nested loops = O(N^2)
function sumZero(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === 0) {
        return [array[i], array[j]];
      }
    }
  }
}

console.log(sumZero([-3, -1, 0, 2, 3]));

// BETTER SOLUTION = no nested loop = O(N)
function sumZeroBetter(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

console.log(sumZeroBetter([-3, -1, 0, 2, 3]));
console.log(sumZeroBetter([-3, -1, 0, 2, 5]));
