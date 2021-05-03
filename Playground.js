function movieLengths(array, flightTime) {
  let count = {};

  for (let i = 0; i < array.length; i++) {
    let diff = flightTime - array[i];

    if (count[diff]) {
      return true;
    }

    count[array[i]] = i;
  }

  return false;
}

console.log(movieLengths([90, 60, 30], 120));
