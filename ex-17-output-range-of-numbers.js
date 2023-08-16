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


// pseudocode for range(2, 6):
// rangeOfNumbers(2, 6)
// 2 === 6 ? no
//  return [2, ...rangeOfNumbers(2 + 1, 6)]; after base case reached => [2, ...[3, 4, 5, 6]] => [2, 3, 4, 5, 6]

// rangeOfNumbers(3, 6)
// 3 === 6 ? no
//  return [3, ...rangeOfNumbers(3 + 1, 6)]; after base case reached => [3, ...[4, 5, 6]] => [3, 4, 5, 6]

// rangeOfNumbers(4, 6)
// 4 === 6 ? no
//  return [4, ...rangeOfNumbers(4 + 1, 6)]; after base case reached => [4, ...[5, 6]] => [4, 5, 6]

// rangeOfNumbers(5, 6)
// 5 === 6 ? no
//  return [5, ...rangeOfNumbers(5 + 1, 6)]; after base case reached => [5, ...[6]] => [5, 6]

// rangeOfNumbers(6, 6)
// 6 === 6 ? Yes
//  return [6];


// method 2: recursive function + concat() method:
function rangeOfNums(startNum, endNum) {
  return (startNum === endNum)
    ? [startNum]
    : [startNum].concat(rangeOfNums(startNum + 1, endNum));
};

console.log(rangeOfNums(2, 7));

// pseudocode for range(2, 4);
// rangeOfNums(2, 4)
// 2 === 4 ? no
//  return [2].concat(rangeOfNums(2 + 1, 4)); => [2].concat([3, 4]) => [2, 3, 4]

// rangeOfNums(3, 4)
// 3 === 4 ? no
//  return [3].concat(rangeOfNums(3 + 1, 4)); => [3].concat([4]) => [3, 4]

// rangeOfNums(4, 4)
// 4 === 4 ? Yes
//  return [4];