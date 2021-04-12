// RADIX SORT
// very different in the sense that it DOES NOT make direct comparisons
// only works on numbers.

// exploits the fact that information about the size of a number is encoded in the number of digits
// MORE digits = a HIGHER NUMBER.

// HELPER FUNCTIONS

//get the digit in a place (place of 0 = the ones place, place of 1 = the tens, place of 2 = the hundreds , etc...)
function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

// get the number of digits in a number
function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

// take an array and return how many digits the max number has.
function mostDigits(nums) {
  let maxDigits = 0;

  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

// IMPLIMENTING RADIX SORT!!!
// definite a function that takes a list of numbers
// figure out how many digits the largest number has
//  loop from k = 0 up to this largest number of digits
//   create buckets for each digit (0-9)
//    place each number in the corresponding bucket based on it's kth digit
//      replace ouru existing array with the values in our buckets, starting with 0, going up to 9
// RETURN LIST AT THE END.

function radixSort(nums) {
  let maxDigitCount = mostDigits(nums);

  for (let k = 0; k < maxDigitCount; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < nums.length; i++) {
      //   digitBuckets[getDigit(nums[i], k)].push(nums[i]);
      let digit = getDigit(nums[i], k);
      digitBuckets[digit].push(nums[i]);
    }
    nums = [].concat(...digitBuckets);
  }
  return nums;
}

console.log(radixSort([1, 3, 2, 10, 40000, 20, 69, 7]));
