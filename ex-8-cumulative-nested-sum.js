// --- Exercise 8 ---
// Given n natural numbers. For each number x, calculate:
//    1+(1+2)+(1+2+3)+(1+2+3+4)+...+(1+2+3+...x).
// Restrictions and clarifications: 1 <= n <= 200

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


// recursive method
// for num = 4 -->  1 + (1 + 2) + (1 + 2 + 3) + (1 + 2 + 3 + 4)

// recursive o sa inceapa de sus, de la ultimul rand, unde num = 4
// deci o sa avem recursiva + num
  // num = 4 => return(3) + 4
  // num = 3 => return(2) + 3
  // num = 2 => return(1) + 2
  // num = 1 => return 1 
// 

function calcCumulativeNestedSumRecursive(num) {
  if (num <= 1) {
    return 1;
  }


};

// inspira-te din ex 1 (fa-l si pe 1 recursiv)