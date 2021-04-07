// MULTIPLE POINTERS PROBLEM

// AVERAGE PAIR

// write a function averagePauir that takes a sorted array of integers, and a target value, and determines if there is a pair of values in the array where the average of the pair equals the target.

function averagePair(arr, num) {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    let avg = (arr[start] + arr[end]) / 2;
    if (avg === num) return true;
    else if (avg < num) start++;
    else end--;
  }
  return false;
}

console.log(averagePair([1, 2, 4], 2));
console.log(averagePair([1, 2, 4], 2.5));
