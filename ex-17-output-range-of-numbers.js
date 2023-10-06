// --- Exercise 17 ---
// Return an array of integers within a range, from smallest to biggest number

// method 1: recursive function + spread operator
function rangeOfNumbers(startingNum, endingNum) {
  return (startingNum === endingNum) 
    ? [startingNum] 
    : [startingNum, ...rangeOfNumbers(startingNum + 1, endingNum)];
};

console.log(rangeOfNumbers(2, 17));
console.log(rangeOfNumbers(-3, -1));
console.log(rangeOfNumbers(-4, 5));


// method 2: recursive function + concat() method:
function rangeOfNums(startNum, endNum) {
  return (startNum === endNum)
    ? [startNum]
    : [startNum].concat(rangeOfNums(startNum + 1, endNum));
};

console.log(rangeOfNums(2, 7));