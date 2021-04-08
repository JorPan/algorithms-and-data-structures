function naiveSearch(longString, shortString) {
  for (let i = 0; i < longString.length; i++) {
    for (let j = 0; j < shortString.length; j++) {
      console.log(longString[i], shortString[j]);
    }
  }
}

console.log(naiveSearch("lorie lolled", "lol"));
