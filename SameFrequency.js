// FREQUENCY COUNTER PROBLEM - Same Frequency
// write a function sameFreq that takes two positive integers, and tests if they have the same frequency of digits.

function sameFrequency(num1, num2) {
  let strNum1 = num1.toString();
  let strNum2 = num2.toString();
  if (strNum1.length !== strNum2.length) return false;

  let counter1 = {};
  let counter2 = {};

  for (let num of strNum1) {
    counter1[num] = (counter1[num] || 0) + 1;
  }
  for (let num of strNum2) {
    counter2[num] = (counter2[num] || 0) + 1;
  }

  for (let key in counter1) {
    if (!key in counter2) {
      return false;
    }
    if (counter2[key] !== counter1[key]) {
      return false;
    }
  }
  return true;
}

console.log(sameFrequency(12, 21));
