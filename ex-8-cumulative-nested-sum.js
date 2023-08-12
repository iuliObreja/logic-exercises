// --- Exercise 8 ---
// Given n natural numbers. For each number x, calculate:
//    1+(1+2)+(1+2+3)+(1+2+3+4)+...+(1+2+3+...x).
// Restrictions and clarifications: 1 <= n <= 200

// method 1:
function calcCumulativeNestedSum(num) {
  try {
    if(num < 1 || num > 200) {
      throw Error('NUMBER_SMALLER_OR_HIGHER');
    };
    
    let sum = 0;
    let cumulativeX = 0;

    for (let i = 1; i <= num; i++) {
      if (i > 1) {
        sum = sum + cumulativeX + i;
        cumulativeX = cumulativeX + i;
      } else {
        sum = sum + i;
        cumulativeX = cumulativeX + i;
      }
    };

    return sum;
  } catch (e) {
    if (e) {
      console.log(`${e} - Enter a number between 1 and 200 !`);
    }
    return 0;
  }
};

console.log(calcCumulativeNestedSum(4));
console.log(calcCumulativeNestedSum(2));


// method 2: recursive method - no restrictions
function calcCumulativeNestedSumRecursive(num) {
  if (num <= 1) {
    return 1;
  }
  
  let x = sumUntilNumMinusOneRecursive(num);

  return calcCumulativeNestedSumRecursive(num - 1, x) + x + num;
};

console.log(calcCumulativeNestedSumRecursive(4));


// helper function
function sumUntilNumMinusOneRecursive(n) {
  if (n <= 2) {
    return 1;
  }
  
  return sumUntilNumMinusOneRecursive(n - 1) + n - 1;
};