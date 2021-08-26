// 90, 60, 30

function movieLengths(array, flightTime) {
  let count = {};

  for (let i = 0; i < array.length; i++) {
    let diff = flightTime - array[i];

    if (count[diff]) {
      return true;
    }

    count[array[i]]
      ? (count[array[i]] = count[array[i]] + 1)
      : (count[array[i]] = 1);
  }

  return false;
}

console.log(movieLengths([90, 60, 30], 120));
