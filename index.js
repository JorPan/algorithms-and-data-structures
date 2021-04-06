// THIS IS MY WORKSPACE FOR AN ALGORITHM AND DATA STRUCTURES COURSE ON UDEMY //

// BIG O
//relation of input to runtime

// Add Up to Num N
//LOOPING METHOD = O(n)
function addUpTo(n) {
  let answer = 0;
  for (let i = 1; i <= n; i++) {
    answer += i;
  }
  return answer;
}

//NO LOOP = O(1)
function addUpToNum(n) {
  return (n * (n + 1)) / 2;
}

console.log(addUpTo(6));
console.log(addUpToNum(6));
