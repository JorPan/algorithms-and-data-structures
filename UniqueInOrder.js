// Return the iterable with no immediate duplicates, that is duplicates that immediately follow itself.

function uniqueInOrder(iterable) {
  return [...iterable].filter((a, i) => a !== iterable[i - 1]);
}

console.log(uniqueInOrder("AABBBCcDcDcDDD"));
