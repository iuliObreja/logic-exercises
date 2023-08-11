// --- Exercise 7 ---
// Given N, a nonzero natural number, calculate the sum S = 1**2 + 2**2 + 3**2 + ... + n**2
// Restrictions and clarifications: 1 <= N <= 30

function calcSumOfSquareNumbers(num) {
  try {
    if (num < 1 || num > 30) {
      throw Error('NUMBER_SMALLER_OR_HIGHER');
    }

    let sumOfSquareNumbers = 0;

    for (let i = 1; i <= num; i++) {
      sumOfSquareNumbers = sumOfSquareNumbers + i**2;
    }

    return sumOfSquareNumbers;
  } catch (e) {
    if (e) {
      console.log(`${e} - Enter a number between 1 and 30 !`);
    }
    return 0;
  }
};

console.log(calcSumOfSquareNumbers(2));


// recursive method
function calcSumOfSquareNumbersRecursive(min, max) {
  try {
    if (min > max) {
      throw "MIN_GREATER_THAN_MAX";
    }
    
    if (min === max) {
      return 1;
    }

    return calcSumOfSquareNumbersRecursive(min, max - 1) + max ** 2;
  } catch (e) {
    if (e === "MIN_GREATER_THAN_MAX") {
      console.log("Minimum number should be lower that max.");
    }  
  }
};

for (let i = 1; i < 5; i++) {
  console.log(calcSumOfSquareNumbersRecursive(1, i)); 
};

//     For Single parameter
// num = 3
// 3 <= 1? nu
//  return(num - 1 => 2) + 3 ** 2

// num = 2
// 2 <= 1? nu
//  return(num - 1 => 1) + 2 ** 2

// num = 1
// 1 <= 1 ? da => return 1

// return 1 + 2 ** 2 + 3 ** 2 = 14

//      For Two parameters
// min = 1, max = 4
// 1 === 4 ? nu
//  return(3) + 4 ** 2

// min = 1, max = 3
// 1 === 3 ? nu
//  return(2) + 3 ** 2

// min = 1, max = 2
// 1 === 2 ? nu
//  return(1) + 2 ** 2

// min = 1, max = 1
// 1 === 1 ? da => return 1

// 1 + 2**2 + 3**2 + 4**2


