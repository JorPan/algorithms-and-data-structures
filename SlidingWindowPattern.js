// SLIDING WINDOW PATTERN

// Creating a window which can either be an array or a number from one position to another.
// Depending on a certain condition, the window either increases or closes ( and a new window is created).
// Very useful for keeping track of a subset of data in an array or string.

// NAIVE APPROACH = nested loops = O(N^2)
function maxSubArraySum(array, num) {
  if (num > array.lenth) {
    return null;
  }

  let max = -Infinity;

  for (let i = 0; i < array.length - num + 1; i++) {
    temp = 0;
    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;
}

//SLIDING WINDOW APPROACH = no nested loops = O(N)

function maxSubArraySumBetter(array, num) {
  let maxSum = 0;
  let tempSum = 0;

  if (array.length < num) return null;

  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }

  tempSum = maxSum;

  for (let i = 0; i < num; i++) {
    tempSum = tempSum - array[i - num] + array[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}
