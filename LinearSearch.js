function linearSearch(arr, val) {
  return arr.indexOf(val);
}

console.log(linearSearch([1, 2, 3, 4, 5, 6], 3));

function indexSearch(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) return i;
  }
  return -1;
}

console.log(indexSearch([1, 2, 3, 4, 5, 6], 4));
