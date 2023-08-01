// --- Exercise 6 ---
// Write a program that reads the natural number "n" and determines the
// sum s = 1**1 + 2**2 + ... + n**n
// Restrictions and clarifications: 0 < n <= 15

function calcExponentialSum(num) {
  try { 
    if (num <= 0 || num > 15) {
      throw Error('NUMBER_SMALLER_OR_HIGHER');
    }

    let sum = 0;

    for (let i = 1; i <= num; i++) {
      sum = sum + i**i;
    }

    return sum;
  } catch (e) {
    if (e) {
      console.log(`${e} - Enter a number between 1 and 15 !`);
    }
    return 0;
  }
};

console.log(calcExponentialSum(4));


// recursive method
function calcExponentialSumRecursive(num) {
  if (num <= 1) {
    return 1;
  }

  return calcExponentialSumRecursive(num - 1) + num ** num; 
};

console.log(calcExponentialSumRecursive(4));

// num = 4
// 4 <= 1 ? nu
//  return(3) + 4**4

// num = 3
// 3 <= 1 ? nu
//  return(2) + 3**3

// num = 2
// 2 <= 1 ? nu
//  return(1) + 2**2

// num = 1
// 1 <= 1? dhea! => 1

// return 1 + 2**2 + 3**3 + 4**4
