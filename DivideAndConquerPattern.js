// DIVIDE AND CONQUER
// Dividing a data set into smaller chunks and then repeating a process with a subset of data
//This pattern can TREMENDOUSLY decrease time complexity

// naive approach - linear search - O(N)

function search(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return i;
    }
  }
  return -1;
}

// better approach - binary search - O(log N)

function binarySearch(array, value) {
  let min = 0;
  let max = array.length - 1;

  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    let currentElement = array[middle];

    if (array[middle] < value) {
      min = middle + 1;
    } else if (array[middle] > value) {
      max = middle - 1;
    } else {
      return middle;
    }
  }
  return -1;
}
