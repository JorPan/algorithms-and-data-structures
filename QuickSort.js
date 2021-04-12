// Quick Sort

// like merge sort it exploits the fact that arrays of 0 or 1 element are always sorted

// works by selecting one element, called the pivot point, and find the index where the pivot should end up in the sorted array
// once the pivot is positioned appropriately, quick sort can be applied on either side of the pivot

// PART 1 - Pivot Helper aka Partition
// creates the pivot point, all vues less than pivot moved to left, all values greater than pivot, go to right
// does this in place - not a new array.
// swap the pivot with the pivot index
// Puts the Pivot in it's CORRECT position
// RETURNS THE INDEX OF THE CORRECTLY PLACED PIVOT.

function pivotHelper(arr, start = 0, end = arr.length + 1) {
  //   function swap(array, i, j) {
  //     let temp = array[i];
  //     array[i] = array[j];
  //     array[j] = temp;
  //   }

  function swap(array, index1, index2) {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
  }

  let pivot = arr[start];
  let swapIndex = start;

  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIndex++;
      swap(arr, swapIndex, i);
    }
  }
  swap(arr, start, swapIndex);
  return swapIndex;
}

// console.log(pivotHelper([4, 1, 7, 2, 6, 8, 5, 3]));
// returns the swap index.. in this case 3 because 4 should be at index 3.

// PART 2 - implimenting QUICK SORT part of this..
// call the pivot helper and find the index of the pivot point.
// recursively call it again on both left and right side of that pivot point.

function quickSort(array, left = 0, right = array.length - 1) {
  if (left < right) {
    let pivotIndex = pivotHelper(array, left, right);
    // left
    quickSort(array, left, pivotIndex - 1);
    // right
    quickSort(array, pivotIndex + 1, right);
  }
  return array;
}

console.log(quickSort([4, 1, 7, 2, 6, 8, 5, 3]));
