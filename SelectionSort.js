// SELECTION SORT

// much like bubble sort, but moves smaller values to the front rather than larger to the end.

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (i !== min) {
      let temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }
  return arr;
}

console.log(selectionSort([2, 3, 1, 5, 4, 6, 5, 99, 0, 5, -2]));
