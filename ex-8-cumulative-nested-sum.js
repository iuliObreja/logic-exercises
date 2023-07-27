// --- Exercise 8 ---
// Given n natural numbers. For each number x, calculate:
//    1+(1+2)+(1+2+3)+(1+2+3+4)+...+(1+2+3+...x).
// Restrictions and clarifications: 1 <= n <= 200

function cumulativeNestedSum(num) {
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

console.log(cumulativeNestedSum(201));
console.log(cumulativeNestedSum(2));
