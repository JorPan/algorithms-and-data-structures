//Frequency Counter Pattern - validAnagram :
// Given 2 strings, write a function to determine if the second string is an anagram of the first.
// An anagram is a word, phrase, or name, formed by rearranging the letters of another, such as cinema from iceman.

// BIG O = O(N)
function validAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (let char of str1) {
    frequencyCounter1[char] = (frequencyCounter1[char] || 0) + 1;
  }
  for (let char of str2) {
    frequencyCounter2[char] = (frequencyCounter2[char] || 0) + 1;
  }
  for (let key in frequencyCounter1) {
    if (!key in frequencyCounter2) {
      return false;
    }
    if (frequencyCounter2[key] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}

console.log(validAnagram("cinema", "iceman"));

// other similar solution, same O(N)
function isValidAnagram(first, second) {
  if (first.length !== second.length) {
    return false;
  }

  let lookup = {};

  for (let i = 0; i < first.length; i++) {
    let letter = first[i];

    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];

    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }
  return true;
}

console.log(isValidAnagram("cinema", "iceman"));
